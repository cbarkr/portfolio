<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="sm:px-16">
    <!-- Bio -->
    <div class="flex justify-center text-lg sm:flex sm:flex-row lg:text-xl xl:text-2xl py-8">{{ about.bio }}</div>
    
    <!-- About header -->
    <div class="flex flex-row justify-between">
      <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">ABOUT</div>
      <!-- Arrow up -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
      </svg>
    </div>

    <!-- Project header -->
    <router-link to="/projects">
      <div class="flex flex-row justify-between">
        <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">PROJECTS</div>
        <!-- Arrow up right -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    </router-link>

    <!-- Photos header -->
    <router-link to="/photos">
      <div class="flex flex-row justify-between">
        <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">PHOTOS</div>
        <!-- Arrow right -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </router-link>
    
    <!-- Words header -->
    <router-link to="/words">
      <div class="flex flex-row justify-between">
        <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">WORDS</div>
        <!-- Arrow down right -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
        </svg>
      </div>
    </router-link>

    <!-- Contact header -->
    <div class="flex flex-row justify-between">
      <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">CONTACT</div>
      <!-- Arrow down -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
      </svg>
    </div>

    <!-- Contact -->
    <div class="w-full py-8">
      <div v-for="item in about.links">
        <a :href="item.link" class="flex flex-row text-l md:text-xl" target="_blank" rel="noopener noreferrer">
          {{ item.text }}
          <!-- Arrow up right -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        about: {
          bio: `
            I am Callum Barker: a computing science student, software developer, and photographer from Vancouver, British Columbia.
            Interested in fashion, photography, music, design, architecture, utilitarianism, etc.
            Searching for the intersection between fashion and technology.
          `,
          links: [
            {
              text: 'CBARKR@PROTONMAIL.COM',
              link: 'mailto:cbarkr@protonmail.com'
            },
            {
              text: 'GITHUB',
              link: 'https://github.com/cbarkr',
            },
            {
              text: 'LINKEDIN',
              link: 'https://www.linkedin.com/in/cbarkr',
            },
          ],
        },
      }
    },
  }
</script>
