<template>
  <NuxtLink class="card" :to="`/posts/${formatSlug(post.attributes.title)}`">
  <div class="card__body">
    <p v-for="tag in post.attributes.tag" :key=tag>{{tag}}</p>
  </div>
    <img
      class="card__hero"
      :src="
        `https://res.cloudinary.com/jdlennoxs/image/upload/w_400,c_fill/${post.attributes.hero_image}.webp`
      "
      :alt="post.attributes.title"
    />
    <div class="card__body">
      <h2>{{ post.attributes.title }}</h2>
      <p>{{ post.attributes.subtitle }}</p>
    </div>
    <div class="card__footer">
      <p>{{ formatDate(post.attributes.date) }}</p>
      <p class="italic">{{ timeToRead(post.body) }}</p>
    </div>
  </NuxtLink>
</template>

<script>
import timeToRead from '../../../helpers/timeToRead';
import formatDate from '../../../helpers/dateFormatter';
export default {
  name: 'Card',
  props: {
    post: {
      type: Object,
      default: () => {}
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
