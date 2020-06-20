<template>
  <form @submit.prevent="addList" class="addlist">
    <input type="text" v-model="title" class="text-input" placeholder="Add new list" />
    <button type="submit" class="add-button">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addList() {
      this.$store.dispatch("addlist", { title: this.title });
      this.title = "";
    }
  }
};
</script>

<style>
</style>
