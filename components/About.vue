<template>
  <section class="about">
    <div class="about__info">
      <h3 class="label">{{label}}</h3>
      <h2>{{title}}</h2>
      <p>{{description}}</p>
      <ul class="list">
        <li>github</li>
      </ul>
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
