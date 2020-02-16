// this is a dynamically created template

<template>
  <article class="blog">
    <div class="blog__info">
      <h1>{{ post.attributes.title }}</h1>
      <h2 class="sub">{{post.attributes.subtitle}}</h2>
      <h3>{{ formattedDate }} • {{timeToRead }}</h3>
    </div>
    <figure class="blog__hero">
      <img
        :src="`https://res.cloudinary.com/jdlennoxs/image/upload/${post.attributes.hero_image}`"
        :alt="post.attributes.title"
      />
    </figure>
    <div class="blog__body" v-html="post.html"></div>
    <div class="blog__footer">
      <NuxtLink v-if="nextBlogPath" :to="`/${nextBlogPath}`">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 26 26"
          enable-background="new 0 0 26 26"
        >
          <path
            d="M23.021,12.294l-8.714-8.715l-1.414,1.414l7.007,7.008H2.687v2h17.213l-7.007,7.006l1.414,1.414l8.714-8.713  C23.411,13.317,23.411,12.685,23.021,12.294z"
          />
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>
<script>
import sortPostsByDate from '../helpers/sortByDate';
import formatDate from '../helpers/dateFormatter';
import timeToRead from '../helpers/timeToRead';
import Prism from '~/plugins/prism'
export default {
  // get the slug as a param to import the correct md file
  async asyncData({ params }) {
    try {
      const currentPath = params.slug;
      // get current post data
      const post = await import(`~/content/blog-posts/${params.slug}.md`);
      // get all post data for next route
      const allPosts = await require.context(
        '~/content/blog-posts/',
        true,
        /\.md$/
      );
      const posts = allPosts.keys().map((key) => {
        return allPosts(key);
      });
      const sortedPaths = [];
      sortPostsByDate(posts).map((post) => {
        // clean up the path - split by /
        let relPath = post.meta.resourcePath.split('/');
        // get the end of the path, remove '.md'
        relPath = relPath[relPath.length - 1].slice(0, -3);
        sortedPaths.push(relPath);
      });
      return {
        sortedPaths,
        post,
        currentPath
      };
    } catch (err) {
      return false;
    }
  },
  computed: {
    formattedDate() {
      return formatDate(this.post.attributes.date);
    },
    timeToRead() {
      return timeToRead(this.post.body);
    },
    nextBlogPath() {
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
    }
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
