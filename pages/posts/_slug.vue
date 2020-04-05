// this is a dynamically created template

<template>
  <div>
    <Post :post="post" :next="nextPath" />
  </div>
</template>
<script>
import sortPostsByDate from '../../helpers/sortByDate';
import Post from '~/components/Posts/Post/Post.vue';
export default {
  components: {
    Post
  },
  nextPath() {
    // if there's no 'next' path, return the first path
    const nextPath = isNull(
      this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) + 1]
    )
      ? ''
      : this.sortedPaths[this.sortedPaths.indexOf(this.currentPath) + 1];
    function isNull(item) {
      return item === null || item === undefined;
    }
    return nextPath;
  },
  // get the slug as a param to import the correct md file
  async asyncData({ params }) {
    try {
      const currentPath = params.slug;
      // get current post data
      const post = await import(`~/content/posts/${currentPath}.md`);
      // get all post data for next route
      const postContext = await require.context(
        '~/content/posts/',
        true,
        /\.md$/
      );
      const posts = sortPostsByDate(
        postContext.keys().map((key) => postContext(key))
      );

      const sortedPaths = [];
      sortPostsByDate(posts).map((post) => {
        // clean up the path - split by /
        let relPath = post.meta.resourcePath.split('/');
        // get the end of the path, remove '.md'
        relPath = relPath[relPath.length - 1].slice(0, -3);
        sortedPaths.push(relPath);
      });
      const isNull =
        sortedPaths[sortedPaths.indexOf(currentPath) + 1] === null ||
        sortedPaths[sortedPaths.indexOf(currentPath) + 1] === undefined;
      const nextPath = isNull
        ? ''
        : sortedPaths[sortedPaths.indexOf(currentPath) + 1];
      return {
        nextPath,
        post: post.default
      };
    } catch (err) {
      return false;
    }
  },
};
</script>
