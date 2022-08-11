const storage = {
    fetch() {
        const arr = [];

        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) != "loglevel:webpack-dev-server" && localStorage.key(i) != '') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }

        return arr;
    }
};

const state = {
    todoItems : storage.fetch(),
}

const getters = {
    storageTodoItems(state) {
        return state.todoItems;
  }   
}

const mutations = {
    addOneItem (state, todoItem) {
        const obj = { completed: false, item: todoItem };

        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem (state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    toggleOnItem(state, payload) {
        const { todoItem, index } = payload;

        state.todoItems[index].completed = !state.todoItems[index].completed
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems (state) {
        localStorage.clear();
        state.todoItems = [];
    }
}

export default {
    state,
    getters,
    mutations
}