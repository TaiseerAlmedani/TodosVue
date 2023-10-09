<script>
export default {
  data() {
    return {
      newTodo: '',
      newTag: '',
    }
  },
  methods: {
    addNewTodo() {
      if (this.newTodo === '' || this.newTag === '')
        return
      this.$emit('add', this.newTodo, this.newTag)
      this.newTodo = ''
    }
  }
}
</script>
<template>
  <form @:submit.prevent="addNewTodo">
    <input type="text" v-model="newTodo" placeholder="Add new todo...">
    <input type="text" v-model="newTag" placeholder="Add Tag">
    <button type="submit">⚡Add..</button>
  </form>
</template>