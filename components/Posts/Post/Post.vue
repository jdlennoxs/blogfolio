<template>
  <article class="post__container">
    <img
      class="post__hero"
      :src="
        `https://res.cloudinary.com/jdlennoxs/image/upload/w_800,c_fill/${post.attributes.hero_image}.webp`
      "
      :alt="post.attributes.title"
    />
    <div class="post__body">
      <div class="post__body--header">
        <h1>{{ post.attributes.title }}</h1>
        <h3>{{ post.attributes.subtitle }}</h3>
        <!-- <ul v-for="(tag, index) in post.attributes.tags" :key="index">
        <div class="tag">{{ tag }}</div>
      </ul> -->
        <div class="post__body--info">
          <p>{{ formattedDate }} ×</p>
          <p class="italic">{{ timeToRead }}</p>
        </div>
      </div>
    </div>
    <div class="post__body">
      <!-- eslint-disable-next-line -->
      <div v-html="post.html"></div>
    </div>
    <div class="post__footer">
      <NuxtLink v-if="next" :to="`/post/${next}`">
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
import formatDate from '~/helpers/dateFormatter';
import timeToRead from '~/helpers/timeToRead';
import Prism from '~/plugins/prism';
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    },
    next: {
      type: String,
      default: ''
    }
  },
  computed: {
    formattedDate() {
      return formatDate(this.post.attributes.date);
    },
    timeToRead() {
      return timeToRead(this.post.body);
    }
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
