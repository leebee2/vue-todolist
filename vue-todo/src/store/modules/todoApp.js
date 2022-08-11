import getDate from '../../components/common/getDate';

const storage = {
    fetch() {
        let arr = [];
        let sortArr = [];

        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) != "loglevel:webpack-dev-server" && localStorage.key(i) != '') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }

            sortArr = arr.sort((a, b) => a.time - b.time);
        }

        return sortArr;
    }
};

const state = {
    todoItems: storage.fetch(),
}

const getters = {
    storageTodoItems(state) {
        return state.todoItems;
    },
    itemCount(state) {
        let successCount = state.todoItems.filter(item => item.completed === true).length;
        let totalCount = state.todoItems.length;

        return { totalCount, successCount }
    }
}

const mutations = {
    addOneItem(state, todoItem) {
        const obj = {
            completed: false,
            item: todoItem,
            time: getDate().time,
            date: `${getDate().month}.${getDate().date} ${getDate().day}`
        };

        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    toggleOnItem(state, payload) {
        const { todoItem, index } = payload;

        state.todoItems[index].completed = !state.todoItems[index].completed
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(state) {
        localStorage.clear();
        state.todoItems = [];
    }
}

export default {
    state,
    getters,
    mutations
}