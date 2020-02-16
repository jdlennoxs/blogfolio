<template>
  <container>
    <container class="layout-content">
      <nuxt />
    </container>
    <container class="layout-footer">
      <Footer />
    </container>
  </container>
</template>

<script>
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Footer
  }
};
</script>
