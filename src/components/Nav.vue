<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex flex-wrap items-center justify-between pb-8">
    <!-- Note: Nav text must match route name -->
    <router-link to="/" class="text-md sm:text-l md:text-xl lg:text-2xl">{{ nav.home == this.$route.name ? selectedRoute : nav.home }}</router-link>
    <router-link to="/projects" class="text-md sm:text-l md:text-xl lg:text-2xl">{{ nav.projects == this.$route.name ? selectedRoute : nav.projects }}</router-link>
    <router-link to="/photos" class="text-md sm:text-l md:text-xl lg:text-2xl">{{ nav.photos == this.$route.name ? selectedRoute : nav.photos }}</router-link>
    <router-link to="/words" class="text-md sm:text-l md:text-xl lg:text-2xl">{{ nav.words == this.$route.name ? selectedRoute : nav.words }}</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        nav: {
          home: 'home',
          projects: 'projects',
          photos: 'photos',
          words: 'words',
        },
      }
    },
    computed: {
      selectedRoute() {
        return `[${this.$route.name}]`
      }
    }
  }
</script>
