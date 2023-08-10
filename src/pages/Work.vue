<template>
  <div class="flex flex-col sm:flex-row">
    <!-- Contents -->
    <div class="flex flex-col flex-wrap basis-1/2 mx-4">
      <h1 class="flex flex-row text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-8">
        CONTENTS
        <!-- Arrow down -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </h1>
      <div
        v-for="(c, index) in content"
        :key="c.id"
        @mouseover="handleContent(index)"
        @click="handleContent(index)"
        class="text-l md:text-xl hover:cursor-crosshair hover:underline"
      >
        {{ c.name }}
        <hr class="my-2" />
      </div>
    </div>

    <!-- Content -->
    <div class="py-8 sm:py-0 flex flex-col flex-wrap basis-1/2 mx-4">
      <h1
        class="flex flex-row sm:flex sm:justify-end text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-8"
      >
        <!-- Arrow down -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
        CONTENT
      </h1>
      <div :id="currentContent.id" class="text-l md:text-xl">{{ currentContent.name }}</div>
      <hr class="my-2" />
      <a
        :href="currentContent.link"
        class="flex flex-row text-l md:text-xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Project Repo
        <!-- Arrow up right -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </a>
      <hr class="my-2" />
      <div class="text-l md:text-xl">{{ currentContent.description }}</div>
      <hr class="my-2" />
      <img :src="currentContent.image" alt="project image" class="object-cover w-full h-80" />
    </div>
  </div>
</template>

<script>
import pipboyImage from '../assets/images/projects/pipboy/pipboy1.jpg'
import gpsutilsImage from '../assets/images/projects/gpsutils/gpsutils1.png'
import flixlistImage from '../assets/images/projects/flixlist/flixlist1.png'
import pathfindingImage from '../assets/images/projects/pathfinding/pathfinding1.jpg'

export default {
  name: 'WorkPage',
  data() {
    return {
      currentContent: {},
      content: [
        {
          name: 'PIP-BOY 3000 MK? PROTO',
          id: 'pipboy',
          description: `
              Hardware based on Pip-Boy 3000 from Fallout 3, software based on the Pip-OS v7.1.0.8 from Fallout 4.
              Created with Android and Kotlin. 
            `,
          link: 'https://github.com/cmpt469-su23-group3/PipBoy_Android',
          image: pipboyImage
        },
        {
          name: 'GPSUTILS',
          id: 'gpsutils',
          description: `
              Basic GPS module for Python 3.5+. 
              Designed to be short and simple.
              Documentation made with Sphinx.
            `,
          link: 'https://github.com/cbarkr/gpsutils',
          image: gpsutilsImage
        },
        {
          name: 'FLIXLIST',
          id: 'flixlist',
          description: `
              Social movie reviewing site.
              Frontend made with React, backend made with Express, integrated IMDB API, data stored in Mongo.
            `,
          link: 'https://github.com/cbarkr/FlixList',
          image: flixlistImage
        },
        {
          name: 'PATHFINDING VISUALIZER',
          id: 'pathfinding',
          description: `
              Visualizer for A*, Dijkstra, and BFS pathfinding algorithms. 
              Made in Python and Pygame.
            `,
          link: 'https://github.com/cbarkr/PathfindingVisualizer',
          image: pathfindingImage
        }
      ]
    }
  },
  mounted() {
    this.currentContent = this.content[0]
  },
  methods: {
    handleContent(index) {
      this.currentContent = this.content[index]
    }
  }
}
</script>
