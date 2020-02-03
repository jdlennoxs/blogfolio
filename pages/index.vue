// the posts are passed down to the Blog List component to be rendered

<template>
  <div class="layout">
    <section>
      <Hello />
    </section>
    <section>
      <BlogList :posts="posts" />
    </section>
  </div>
</template>

<script>
import BlogList from '~/components/BlogList.vue';
import Hello from '~/components/Hello.vue';

export default {
  layout: 'layout',
  components: {
    Hello,
    BlogList
  },
  async asyncData() {
    // create context via webpack to map over all blog posts
    const allPosts = await require.context(
      '~/content/blog-posts/',
      true,
      /\.md$/
    );
    const posts = allPosts.keys().map((key) => {
      // give back the value of each post context
      return allPosts(key);
    });
    return {
      posts
    };
  }
};
</script>