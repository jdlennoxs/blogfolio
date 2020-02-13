<template>
  <header class="header">
    <nav class="nav">
      <NuxtLink class="logo" to="/">
        <h1>jdlennoxs</h1>
      </NuxtLink>
      <input id="menu-btn" class="menu-btn" type="checkbox"/>
      <label class="menu-icon" for="menu-btn">
        <span class="navicon">🍔</span>
      </label>
      <ul class="nav-menu">
        <NuxtLink class="nav-item" to="/projects">
          <span>Projects</span>
        </NuxtLink>
        <NuxtLink class="nav-item" to="/blog">
          <span>Blog</span>
        </NuxtLink>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    isInfoPage: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    infoRoute() {
      return this.isInfoPage ? '/' : '/info';
    }
  }
};
</script>
