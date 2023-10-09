<script>
import CardItem from './CardItem.vue';
export default {
  components: { CardItem },
  data() {
    return {
      users: []
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(usersArray => this.users = usersArray)
  }
}
</script>
<template>
  <section>
    <div class="row">
      <h1>Our Team</h1>
    </div>
    <div class="row">
      <card-item v-for="user in users" :key="user.id" :twitter="user.name" :linkedin="user.email">
        <template #fullName>
          {{ user.name }}
        </template>
        <template #userName>
          {{ user.username }}
        </template>
        <template #email>
          {{ user.email }}
        </template>
      </card-item>
    </div>
  </section>
</template>