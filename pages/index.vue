// the posts are passed down to the Blog List component to be rendered

<template>
  <div class="content">
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
import About from '~/components/About.vue';

export default {
  layout: 'layout',
  components: {
    About,
    BlogList
  },
  async asyncData() {
    try {
      // create context via webpack to map over all blog posts
      const allPosts = await require.context(
        '~/content/blog-posts/',
        true,
        /\.md$/
      );
      const about = await import('~/content/data/about.json');
      const posts = allPosts.keys().map((key) => {
        // give back the value of each post context
        return allPosts(key);
      });
      return {
        posts,
        about
      };
    } catch (err) {}
  }
};
</script>