<script>
import TodosList from "./TodosList.vue";
import TodosAdd from "./TodosAdd.vue";
import card from "./Card.vue"
export default {
  components: {
    TodosList, TodosAdd, card
  },
  data() {
    return {
      todos: [
        { id: 1, title: "study vue js from docs", isCompleted: true, tag: "course" },
        { id: 2, title: "solve the vue tutorial", isCompleted: true, tag: "course" },
        { id: 3, title: "do the homework", isCompleted: false, tag: "homework" },
        { id: 4, title: "study", isCompleted: false, tag: "college" },
      ],
      todosFromApi: [],
      loaded: true
    }

  },
  computed: {
    filteredArray() {
      return {
        done: this.todos.filter(a => a.isCompleted),
        inProgress: this.todos.filter(a => !a.isCompleted),
      }
    }
  },
  methods: {
    addNewTodo(newTodo, newTag) {
      if (newTodo === '')
        return
      this.todos.push({
        id: this.todos.length + 1,
        title: newTodo,
        isCompleted: false,
        tag: newTag
      })
    },
    loadUsersFromApi() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => this.todosFromApi = json.filter(t => t.id <= 10))
    },
    clear() {
      this.todosFromApi = []
    }
  }
}
</script>

<template>
  <card>
    <template v-slot:title>this is title</template>
    <template v-slot:subtitle>this is subtitle</template>
    <template v-slot:default>this is default</template>
  </card>
  <todos-add @add="addNewTodo"></todos-add>
  <todos-list class="InProgress" title="In Progress" :todoArray="filteredArray.inProgress">
  </todos-list>
  <todos-list class="done" title="Done" :todoArray="filteredArray.done"></todos-list>

  <button class="tag active" @click="loaded ? loadUsersFromApi() : clear(), loaded = !loaded">
    {{ loaded ? 'load' : 'clear' }}
  </button>
  <ul>
    <li v-for="todo in todosFromApi">
      {{ todo.id }} {{ todo.title }}
    </li>
  </ul>
</template>