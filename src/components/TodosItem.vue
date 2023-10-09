<script>
export default {
  props: {
    todo: Object
  }
}
</script>
<template>
  <label>
    <li>
      {{ todo.title }}
      <input type="checkbox" v-model="todo.isCompleted">
    </li>
  </label>
</template>