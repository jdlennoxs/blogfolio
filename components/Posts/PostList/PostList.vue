<template>
  <section>
    <div class="list">
    <PostCard
      v-for="post in posts"
      :key="post.attributes.title"
      :post="post"
    ></PostCard>
    </div>
  </section>
</template>

<script>
import timeToRead from '../../../helpers/timeToRead';
import formatDate from '../../../helpers/dateFormatter';
import PostCard from '../PostCard/PostCard';
export default {
  components: {
    PostCard
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatDate,
    formatSlug(title) {
      const regex = / /gi;
      return title
        .toLowerCase()
        .trim()
        .replace(regex, '-');
    },
    timeToRead
  }
};
</script>

/* TODO -- i would love to figure out how to show the md in the summary... right
now its just plaintext not sure how to target the loader to parse this */
