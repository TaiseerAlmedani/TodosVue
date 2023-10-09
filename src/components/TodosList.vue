<script>
import TodosItem from "./TodosItem.vue"
import TodosTags from "./TodosTags.vue"
export default {
  components: {
    TodosItem, TodosTags
  },
  props: {
    title: String,
    todoArray: Array,
    classType: String,
  },
  data() {
    return {
      currentTag: "all",
    }
  },
  computed: {

    filteredArray() {
      if (this.currentTag == "all") {
        return this.todoArray
      }
      return this.todoArray.filter(a => a.tag == this.currentTag)
    }
  },
  methods: {
    updateCurrentTag(NewCurrentTag) {
      this.currentTag = NewCurrentTag
    }
  }
}
</script>
<template>
  <div :class="classType" v-show="todoArray.length">

    <h1>{{ title }} <span>({{ todoArray.length }})</span></h1>
    <todos-tags :todoArray="todoArray" v-model="currentTag">
    </todos-tags>

    <ul>
      <todos-item v-for="todo in filteredArray" :key="todo.id" :todo="todo">
      </todos-item>
    </ul>
  </div>
</template>