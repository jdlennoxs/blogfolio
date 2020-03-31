// the posts are passed down to the Blog List component to be rendered

<template>
  <div>
    <section>
      <About v-bind="about" />
    </section>
    <section>
      <PostList :posts="posts" />
    </section>
  </div>
</template>

<script>
import sortPostsByDate from '../helpers/sortByDate';
import PostList from '~/components/Posts/PostList/PostList.vue';
import About from '~/components/About/About.vue';

export default {
  components: {
    About,
    PostList
  },
  async asyncData() {
    try {
      // create context via webpack to map over all blog posts
      const postContext = await require.context(
        '~/content/posts/',
        true,
        /\.md$/
      );
      const posts = sortPostsByDate(postContext.keys().map((key) => postContext(key)));
      const about = await import('~/content/data/about.json');
      return {
        posts,
        about
      };
    } catch (err) {}
  }
};
</script>