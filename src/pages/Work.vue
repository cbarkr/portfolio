<template>
  <div class="sm:px-16">
    <hr />
    <div v-for="(c, index) in content" :key="c.id">
      <div @click="handleClick(index)" class="flex flex-row justify-between my-4 hover:underline">
        <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{{ c.name }}</div>
        <div>
          <!-- Arrow down -->
          <svg
            v-if="!isActive(index)"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
          <!-- Arrow up -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </div>
      </div>
      <div v-show="isActive(index)" class="flex flex-col justify-between">
        <div class="flex flex-row">
          <img :src="c.image" alt="project image" class="object-cover max-h-80 mb-4" />
        </div>
        <div class="text-lg lg:text-xl xl:text-2xl mb-4">{{ c.description }}</div>
        <a
          :href="c.link"
          class="flex flex-row text-lg md:text-xl mb-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          PROJECT REPO
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
      </div>
      <hr />
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
      activeContent: new Set(),
      content: [
        {
          name: 'PIP-BOY 3000 MK? PROTO',
          id: 'pipboy',
          description: `
            Prototype of a Pip-Boy from the fallout series.
            3D-printed shell based on the Pip-Boy 3000 from Fallout 3, software based on the Pip-OS v7.1.0.8 from Fallout 4.
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
            A social movie reviewing site.
            React frontend, Express backend, Mongo database, IMDB API integration.
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
  methods: {
    handleClick(index) {
      if (this.isActive(index)) {
        this.activeContent.delete(index)
      } else {
        this.activeContent.add(index)
      }
    },
    isActive(index) {
      return this.activeContent.has(index)
    }
  }
}
</script>
