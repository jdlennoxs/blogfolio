<template>
  <section>
    <ul class="list">
      <NuxtLink
        v-for="post in sortedPosts"
        :key="post.attributes.title"
        :to="`/${formatSlug(post.attributes.title)}`"
      >
        <li>
          <div class="blogList__info">
            <h2>{{ post.attributes.title }}</h2>
            <p>{{ post.attributes.subtitle }}</p>
            <h3>{{ formatDate(post.attributes.date)}} • {{timeToRead(post.body) }}</h3>
          </div>
          <div class="hero_image">
            <img
              :src="`https://res.cloudinary.com/jdlennoxs/image/upload/w_250,h_250,c_fill/${post.attributes.hero_image}`"
              :alt="post.attributes.title"
            />
          </div>
        </li>
      </NuxtLink>
    </ul>
  </section>
</template>

<script>
import sortPostsByDate from '../helpers/sortByDate';
import timeToRead from '../helpers/timeToRead';
import formatDate from '../helpers/dateFormatter';
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedPosts() {
      return sortPostsByDate(this.posts);
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
