<template>
  <section class="about">
    <div class="about__info">
      <h3 class="label">{{ label }}</h3>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <!-- <ul v-for="link in urls" :key="link.url"> -->
      <div class="social">
        <a href="https://www.instagram.com/jdlennoxs/">
          <img src="../assets/icons/instagram.svg" />
        </a>
        <a href="https://github.com/jdlennoxs">
          <img src="../assets/icons/github.svg" />
        </a>
      </div>
      <!-- </ul> -->
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>
