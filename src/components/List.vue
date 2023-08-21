<template>
  <div class="todo__list-wrap">
    <Search v-if="todoList.length > 0" />
    <div class="todo__list" id="todoList">
      <div
        class="todo__list-notfound todo__notfound"
        v-if="searchFilterValue !== '' && getTodoList.length == 0"
      >
        Nothing found
      </div>
      <div
        class="todo__list-item-wrap"
        v-for="item in getTodoList"
        :key="item.id"
        @click="updateEditStatus(item.id)"
      >
        <Item :item="item" :editMode="editStatus == item.id ? true : false" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item";
import Search from "./Search";
import { eventBus } from "../main";

export default {
  props: ["tasks"],
  name: "List",
  emits: ["push-local-list"],
  data() {
    return {
      todoList: [],
      searchFilterValue: "",
      editStatus: null,
    };
  },
  components: { Search, Item },
  computed: {
    getTodoList() {
      if (this.searchFilterValue === "") {
        return this.todoList;
      } else {
        return this.todoList.filter((element) =>
          element.title.includes(this.searchFilterValue)
        );
      }
    },
  },
  methods: {
    updateEditStatus(id) {
      this.editStatus = id;
    },
    deleteTodo(deletedTodo) {
      const index = this.todoList.findIndex((n) => n.id === deletedTodo.id);
      if (index === -1) {
        return;
      }

      this.todoList.splice(index, 1);
      this.pushTodoListForUpdateStorage();
    },
    setTodoList(listArg) {
      this.todoList = listArg;
    },
    setSearchFilterValue(searchVal) {
      this.searchFilterValue = searchVal;
    },
    addTodo(createdTodo) {
      if (createdTodo == "") {
        return;
      }

      this.todoList.push({
        title: createdTodo,
        id: Date.now(),
        borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      });

      this.pushTodoListForUpdateStorage();
    },
    saveTodo() {
      this.editStatus = null;

      this.pushTodoListForUpdateStorage();
    },
    pushTodoListForUpdateStorage() {
      eventBus.$emit("push-local-list", this.todoList);
    },
  },
  mounted() {
    eventBus.$on("init-stored-list", this.setTodoList);
    eventBus.$on("init-search", this.setSearchFilterValue);
    eventBus.$on("create-todo", this.addTodo);
    eventBus.$on("delete-todo", this.deleteTodo);
    eventBus.$on("save-todo", this.saveTodo);
  },
};
</script>

