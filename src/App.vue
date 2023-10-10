<script>
import TodosSection from './components/TodosSection.vue';
import CardSection from './components/userCard/CardSection.vue';
export default {
  components: {
    TodosSection, CardSection
  },
}
</script>

<template>
  <header class="header">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li> <router-link to="/users">Users</router-link></li>
    </ul>
  </header>

  <router-view></router-view>
</template>

<style scoped>
*{
  transition: 200ms;
}
header{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 80px;
}
a{
  color: steelblue;
  text-decoration: none;
  font-size: 1.5em;
}

/* this will apply when the link is active */
.router-link-active{
  color: skyblue;
}
ul{
  display: flex;
  justify-content: center;
  gap: 30px;
}
</style>