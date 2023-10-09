
<script>
import CardItem from './CardItem.vue';
export default {
  components: { CardItem },
}
</script>
<template>
  <section>
    <div class="row">
      <h1>Our Team</h1>
    </div>
    <div class="row">
      <card-item linkedin="https//www.linkedin.com" twitter="https//www.twitter.com">
        <template #fullName>fathi</template>
        <template #userName>fathi31234</template>
        <template #email>fathi@mail.com</template>
      </card-item>
      <card-item linkedin="https//www.linkedin.com" twitter="https//www.twitter.com">
        <template #fullName>fathia</template>
        <template #userName>fathia31234</template>
        <template #email>fathia@mail.com</template>
      </card-item>
    </div>
  </section>
</template>