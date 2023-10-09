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
  <card-section></card-section>
  <todos-section />
</template>
