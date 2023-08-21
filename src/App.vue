<template>
  <div class="wrapper">
    <section class="todo">
      <div class="todo__container">
        <div class="todo__content">
          <Head />
          <Form />
          <List />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Head from "./components/Head";
import Form from "./components/Form";
import List from "./components/List";
import { eventBus } from "./main";

export default {
  name: "Todo",
  components: { Head, Form, List },
  data() {
    return {
      APP_KEY: "app_todo",
      emits: ["init-stored-list"],
    };
  },
  methods: {
    initStorage() {
      let parsedList = JSON.parse(localStorage.getItem(this.APP_KEY)) || [];

      eventBus.$emit("init-stored-list", parsedList);
    },
    updateStorage(listArg) {
      localStorage.setItem(this.APP_KEY, JSON.stringify(listArg));
    },
  },
  mounted() {
    this.initStorage();

    eventBus.$on("push-local-list", this.updateStorage);
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
}

.wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #1F232A;
}

.todo {
  width: 100%;
  height: 100%;
}

.todo__container {
  max-width: 982px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.todo__content {
  min-width: 30rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.todo__head {
  text-align: center;
}

.todo__title {
  color: white;
  font-weight: 400;
  margin-bottom: 3.5rem;
  font-size: 1.5rem;
}

.todo-form__group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.todo-form__input {
  flex: 1;
  padding-left: 1rem;
}

.todo-form__btn {
  outline: none;
  appearance: none;
  border: none;
  border-radius: 0.5rem;
  padding-left: 1.1rem;
  padding-right: 1.1rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  color: white;
  font-weight: 400;
  font-size: 1rem;
  line-height: 0.5rem;
  background-color: #53b77d;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 3rem;
}

.todo-form__btn:hover {
  transition: all 0.3s ease;
  background-color: #579167;
}

.todo-form__btn:active {
  transition: all 0.3s ease;
  transform: scale(0.9);
  background-color: #3f6c4c;
}

.todo__list {
  margin-top: 2rem;
  display: grid;
}

.todo__item-wrap {
  padding: 1rem 0;
}

.todo__item {
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  background-color: #272C34;
  color: white;
  transition: all 0.3s ease;
}

.todo__item-wrap:first-child {
  padding-top: 0;
}

.todo__item-wrap:hover .todo__item {
  transform: translate(-3%, -3%);
  transition: all 0.3s ease;
}

.todo__item-text {
  display: block;
  flex: 1;
  max-width: 23rem;
  word-break: break-all;
}

.todo__item-text:focus-visible {
  background-color: #757f91;
  outline: none;
  appearance: none;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.todo__item-delete {
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  border-radius: 50%;
  border: none;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 1rem;
}

.todo__item-delete::before {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250%;
  height: 300%;
}

.todo__item-delete:hover {
  background-color: rgb(189, 48, 48);
  transition: background-color 0.3s ease;
}

.todo__item-delete-thumb {
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}

.todo__item-delete-thumb::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 0;
  border: 1px solid #1F232A;
}

.todo__item-delete-thumb::after {
  content: "";
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  width: 100%;
  height: 0;
  border: 1px solid #1F232A;
}

input {
  background-color: #3A4250;
  border: none;
  appearance: none;
  outline: none;
  color: white;
  border-radius: 8px;
  outline: none;
  height: 2.75rem;
}

input::placeholder {
  color: #757f91;
  transition: all 0.3s ease;
}

input:hover::placeholder {
  color: white;
  transition: all 0.3s ease;
}

.todo__search {
  margin-top: 3.5rem;
}

.todo__search-input-wrap {
  position: relative;
}

.todo__search-input {
  width: 100%;
  padding-left: 2.8rem;
}

.todo__notfound {
  text-align: center;
  color: white;
  font-size: 0.875rem;
}

.todo__item-save {
  border: none;
  appearance: none;
  outline: none;
  margin-left: 1.5rem;

  border-radius: 0.5rem;
  padding-left: 1.1rem;
  padding-right: 1.1rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  color: white;
  font-weight: 400;
  font-size: 1rem;
  line-height: 0.5rem;
  background-color: #53b77d;
  transition: background-color 0.3s ease;
  cursor: pointer;
  height: 2.25rem;
}

.todo__search-icon {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
}

.todo__search-icon path {
  fill: #757f91;
  transition: all 0.3s ease;
}

.todo__search-input-wrap:hover .todo__search-icon path {
  fill: white;
  transition: all 0.3s ease;
}

.todo__item-save:hover {
  transition: background-color 0.3s ease;
  background-color: #579167;
}

.todo__item-edit-input {
  flex: 1;
}
</style>