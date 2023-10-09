<script>
export default {
  props: {
    todoArray: Array,
    modelValue: String
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.todoArray.map(t => t.tag))]
    },
  }
}
</script>
<template>
  <div>
    <button @click="$emit('update:modelValue', tag)" class="tag" :class="{ 'active': modelValue == tag }"
      v-for="tag in tags">
      {{ tag }}
    </button>
  </div>
</template>