<template>
  <div class="todo__form" v-on:submit.prevent="emitCreateTodo()">
    <form method="post" class="todo-form" id="todoForm">
      <div class="todo-form__group">
        <input
          ref="formInput"
          type="text"
          class="todo-form__input"
          id="todoInput"
          placeholder="What to do..."
        />
        <button type="submit" class="todo-form__btn">Add Task</button>
      </div>
    </form>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "Form",
  emits: ["create-todo"],
  computed: {},
  methods: {
    emitCreateTodo() {
      eventBus.$emit("create-todo", this.$refs.formInput.value);
      this.$refs.formInput.value = "";
    },
  },
};
</script>
