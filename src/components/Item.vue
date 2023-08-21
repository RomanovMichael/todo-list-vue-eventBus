<template>
  <div class="todo__item-wrap">
    <div class="todo__item" :style="{ borderColor: item.borderColor }">
      <div class="todo__item-text" v-if="!editMode">
        {{ item.title }}
      </div>
      <!-- тут в v-model чисто из интереса сделал, чтоб обсудить, 
      вообще знаю, что к свойству в data надо привязывать  -->
      <input
        type="text"
        class="todo__item-edit-input"
        v-if="editMode"
        v-model="item.title"
      />
      <button class="todo__item-delete" @click="emitDeleteTodo(item)">
        <span class="todo__item-delete-thumb"></span>
      </button>
      <button
        class="todo__item-save"
        @click.stop="emitSaveTodo(item)"
        v-if="editMode"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  name: "Item",
  props: ["item", "editMode"],
  emits: ["delete-todo", "save-todo"],
  data() {
    return {
      editStatus: false,
    };
  },
  computed: {},
  methods: {
    emitDeleteTodo(item) {
      eventBus.$emit("delete-todo", item);
    },
    emitSaveTodo(item) {
      if (item.title === "") {
        return;
      }
      eventBus.$emit("save-todo");
    },
  },
};
</script>
