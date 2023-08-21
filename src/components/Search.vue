<template>
  <div class="todo__search" id="todoSearch">
    <div class="todo__search-input-wrap">
      <div class="todo__search-icon">
        <SearchIcon />
      </div>
      <input
        v-on:input="changeSearchInputValue"
        ref="searchInput"
        type="text"
        class="todo__search-input"
        id="todoSearchInput"
        placeholder="Search"
      />
    </div>
  </div>
</template>


<script>
import SearchIcon from "../icons/SearchIcon";
import { eventBus } from "../main";

export default {
  name: "Search",
  components: { SearchIcon },
  emits: ["init-search"],
  computed: {},
  methods: {
    changeSearchInputValue() {
      eventBus.$emit("init-search", this.$refs.searchInput.value.toLowerCase());
    },
  },
};
</script>  