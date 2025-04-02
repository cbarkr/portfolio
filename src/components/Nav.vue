<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex justify-center sm:justify-end mb-4">
    <!-- Note: Nav text must match route name -->
    <div
      v-for="(item, index) in nav"
      :key="item.title"
      class="text-lg font-light flex flex-row gap-2"
    >
      <router-link
        v-if="item.title !== 'blog'"
        :to="item.route"
        class="hover:bg-whiteish hover:text-blackish hover:no-underline"
      >
        <div v-if="item.title === $route.name" class="font-medium">
          {{ item.title.toUpperCase() }}
        </div>
        <div v-else>
          {{ item.title.toUpperCase() }}
        </div>
      </router-link>
      <a v-else href="https://blog.cbarkr.com" class="hover:bg-whiteish hover:text-blackish hover:no-underline">
        <!-- 
          Blog is hosted as a separate project, and thus cannot be routed to the same way.
          This here is a bit of a workaround (using an <a> and adding a trailing slash) to make sure we route to the other project.
        -->
        <div v-if="item.title === $route.name" class="font-medium">
          {{ item.title.toUpperCase() }}
        </div>
        <div v-else>
          {{ item.title.toUpperCase() }}
        </div>
      </a>
      <div v-if="index !== nav.length - 1" class="pr-2">/</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavComponent',
  data() {
    return {
      nav: [
        {
          route: '/',
          title: 'home'
        },
        {
          route: '/projects',
          title: 'projects'
        },
        {
          route: '/photos',
          title: 'photos'
        },
        {
          route: '/blog',
          title: 'blog'
        }
      ]
    }
  }
}
</script>
