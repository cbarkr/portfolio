<template>
  <div class="sm:px-16">
    <hr />
    <div v-for="(c, index) in content" :key="c.id">
      <div @click="handleClick(index)" class="flex flex-row justify-between my-4 hover:underline cursor-pointer">
        <div class="text-4xl md:text-5xl lg:text-6xl">{{ c.name.toUpperCase() }}</div>
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
          <img :src="c.image.src" alt="project image (coming soon)" class="object-cover max-h-80 mb-4" />
        </div>
        <div class="font-light text-lg mb-4">{{ c.description }}</div>
        <div class="flex flex-row">
          <a
            :href="c.link"
            class="flex flex-row font-light text-lg mb-4"
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
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import transmissImageURL from '../assets/images/projects/transmiss/transmiss1.png'
import pipboyImageURL from '../assets/images/projects/pipboy/pipboy1.jpg'
import gpsutilsImageURL from '../assets/images/projects/gpsutils/gpsutils1.png'
import flixlistImageURL from '../assets/images/projects/flixlist/flixlist1.png'

export default {
  name: 'WorkPage',
  data() {
    return {
      activeContent: new Set(),
      content: [
        {
          name: 'Transmiss',
          id: 'transmiss',
          description: `
            A web app for reporting when transit misses the mark.
            Built with Next.js, Tailwind, TypeScript, DynamoDB, and TransLink's Real-Time Transit Info API.
          `,
          link: 'https://github.com/cbarkr/transmiss',
          image: '',
        },
        {
          name: 'Pip-Boy 3000 MK? Proto',
          id: 'pipboy',
          description: `
            Prototype of a Pip-Boy from the fallout series.
            3D-printed shell based on the Pip-Boy 3000 from Fallout 3, software based on the Pip-OS v7.1.0.8 from Fallout 4.
            Created with Android and Kotlin.
          `,
          link: 'https://github.com/cmpt469-su23-group3/PipBoy_Android',
          image: '',
        },
        {
          name: 'GPSUtils',
          id: 'gpsutils',
          description: `
            Basic GPS module for Python 3.5+. 
            Designed to be short and simple.
            Documentation made with Sphinx.
          `,
          link: 'https://github.com/cbarkr/gpsutils',
          image: '',
        },
        {
          name: 'FlixList',
          id: 'flixlist',
          description: `
            A social movie reviewing site.
            Built with React, Express.js, MongoDB, and IMDb API.
          `,
          link: 'https://github.com/cbarkr/FlixList',
          image: '',
        },
      ]
    }
  },
  created() {
    // Preload project images
    // TODO: Do this more programmatically
    for (const c of this.content) {
      const img = new Image()

      switch(c.id) {
        case 'transmiss':
          img.src = transmissImageURL
          break
        case 'pipboy':
          img.src = pipboyImageURL
          break
        case 'gpsutils':
          img.src = gpsutilsImageURL
          break
        case 'flixlist':
          img.src = flixlistImageURL
          break
      }

      c.image = img
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
