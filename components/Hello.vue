<template>
  <section>
    <h3>HELLO.</h3>
    <p>The text for hello will go here.</p>
    <!-- <h2>{{hello.title}}</h2>
    <div v-html="hello.description" class="blog__body"></div> -->
    <ul class="list">
      <li>github</li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData() {
    try {
      const hello = await import('~/content/data/hello.json');
      // const hello = {
      //   title: "I'm Jack Scott",
      //   description:
      //     "👋 I'm a software engineer at Play Sports Network solving technical and product solutions.\n\nI’m always attempting to expand my knowledge."
      // };
      return {
        hello
      };
    } catch (err) {
      console.debug(err);
      return false;
    }
  }
};
</script>
