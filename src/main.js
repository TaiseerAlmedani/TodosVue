import './assets/main.css'
import TodosSection from "./components/TodosSection.vue"
import CardSection from "./components/userCard/CardSection.vue"

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

const routes = [
  { path: '/', component: TodosSection },
  { path: '/users', component: CardSection },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
