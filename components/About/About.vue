<template>
  <section class="about">
    <div class="about__info">
      <h3 class="label">{{ label }}</h3>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <!-- <ul v-for="link in urls" :key="link.url"> -->
      <div class="social">
        <a href="https://github.com/jdlennoxs">
          <img src="../../assets/icons/github.svg" alt="Github"/>
        </a>
        <a href="https://www.instagram.com/jdlennoxs/">
          <img src="../../assets/icons/instagram.svg" alt="Instagram"/>
        </a>
        <a href="https://www.linkedin.com/in/jack-scott-2920ab47/">
          <img src="../../assets/icons/linkedin.svg" alt="Linked in" />
        </a>
        <a href="https://www.goodreads.com/jdlennoxs">
          <img src="../../assets/icons/goodreads.svg" alt="Good reads"/>
        </a>
      </div>
      <!-- </ul> -->
      <img class="feature" src="../../assets/person.svg" alt="An abstract representation of me"/>
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
