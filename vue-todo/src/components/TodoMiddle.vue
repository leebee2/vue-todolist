<template>
    <div>
        <div class="middle">
            <span v-bind:class="[this.getchecked ? 'checkBtnCompleted' : 'checkBtn']" v-on:click="checkAllItem">
                <font-awesome-icon icon="fa-solid fa-check" />
            </span>
            <label for="checkbox"> {{ this.getchecked ? "전체해제" : "전체선택" }}</label>
            <button class="claerAllBtn" v-on:click="clearTodo">전체삭제</button>
        </div>
        <div class="middle">
            <select id="selected" name="selected" v-model="this.getSelected" @change="sortTodo">
                <option value="asc">오름차순</option>
                <option value="desc">내림차순</option>
            </select>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations({
            clearTodo: 'clearAllItems',
            checkAllItem: 'checkAllItem',
            sortTodo: 'sortTodo'
        }),
    },
    computed: {
        ...mapGetters(['getchecked','getSelected']),
    },
}
</script>

<style scoped>
.middle {
    max-width: 720px;
    margin: 0 auto;
    text-align: left;
    color: #73556a;
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
}

label {
    flex-basis: 100%;
    margin-left: 5px;
    font-size: 15px;
    margin-top: 1px;
}


.checkBtn {
    color: #b3adad;
    margin-left: 10px;
    cursor: pointer;
}

.checkBtnCompleted {
    color: #62acde;
    margin-left: 10px;
    cursor: pointer;
}

button {
    color: #73556a;
    min-width: 71px;
    height: 1.7rem;
    cursor: pointer;
    text-align: center;

    border-radius: 5px;
    border: 1px solid #73556a;
    background-color: rgba(0, 0, 0, 0);
}

button:hover {
    color: white;
    background-color: #73556a;
}
</style>