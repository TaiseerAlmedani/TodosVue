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
    <a href="/"> click</a>
    <a href="/about"> click</a>
  </header>
   <router-link to="/">Go to Home</router-link>
   <router-link to="/about">Go to About</router-link>

  <router-view></router-view>
  
</template>
<style>
a{
  color: black !important;
  font-size: 20px;
  margin-right: 20px;
}
</style>