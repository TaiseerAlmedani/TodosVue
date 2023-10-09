<script>
export default {
  props: {
    twitter: {
      type: String,
      required: true,
      // default:'https://www.twitter.com'
    },
    linkedin: {
      type: String,
      required: true,
      // default:'https://www.twitter.com'
    },
  },
}
</script>
<template>
  <div class="column">
    <div class="card">
      <div class="img-container">
        <img src="@/assets/avatar.png" />
      </div>
      <h3>
        <slot name="fullName" />
      </h3>
      <p>
        <slot name="userName" />
      </p>
      <p class="brief">
        <slot name="email" />
      </p>
      <div class="icons">
        <a :href="twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a :href="linkedin">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fab fa-github"></i>
        </a>
        <a href="#">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </div>
</template>