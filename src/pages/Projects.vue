<template>
  <div class="flex flex-col sm:flex-row">
    <!-- Contents -->
    <div class="flex flex-col flex-wrap basis-1/2 mx-4">
      <h1 class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-8">CONTENTS 🡣</h1>
      <div v-for="(c, index) in content" @mouseover="handleContent(index)" @click="handleContent(index)" class="text-l md:text-xl hover:cursor-crosshair hover:underline">
        {{ c.name }}
        <hr class="my-2"/>
      </div>
    </div>

    <!-- Content -->
    <div class="py-8 sm:py-0 flex flex-col flex-wrap basis-1/2 mx-4">
      <h1 class="sm:flex sm:justify-end text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-8">🡣 CONTENT</h1>
      <div :id="currentContent.id" class="text-l md:text-xl mb-4">{{ currentContent.name }}</div>
      <a :href="currentContent.link" class="text-l md:text-xl mb-4" target="_blank" rel="noopener noreferrer">
        PROJECT REPO
        🡥
      </a>
      <div class="text-md lg:text-l xl:text-xl mb-4">{{ currentContent.description }}</div>
      <div class="mb-4">
        <img :src="currentContent.image" alt="project image" class="object-cover h-64 w-80"/>
      </div>
    </div>
  </div>
</template>

<script>
  import pipboyImage from '../assets/images/projects/pipboy/pipboy1.jpg'
  import gpsutilsImage from '../assets/images/projects/gpsutils/gpsutils1.png'
  import flixlistImage from '../assets/images/projects/flixlist/flixlist1.png'
  import pathfindingImage from '../assets/images/projects/pathfinding/pathfinding1.jpg'
  
  export default {
    name: 'Nav',
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
            image: pipboyImage,
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
            image: gpsutilsImage,
          },
          {
            name: 'FLIXLIST',
            id: 'flixlist',
            description: `
              Social movie reviewing site.
              Frontend made with React, backend made with Express, integrated IMDB API, data stored in Mongo.
            `,
            link: 'https://github.com/cbarkr/FlixList',
            image: flixlistImage,
          },
          {
            name: 'PATHFINDING VISUALIZER',
            id: 'pathfinding',
            description: `
              Visualizer for A*, Dijkstra, and BFS pathfinding algorithms. 
              Made in Python and Pygame.
            `,
            link: 'https://github.com/cbarkr/PathfindingVisualizer',
            image: pathfindingImage,
          }
        ],
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