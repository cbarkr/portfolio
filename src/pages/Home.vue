<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="sm:px-16">
    <!-- Who -->
    <!-- <div class="flex justify-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">CALLUM BARKER</div>  -->

    <!-- Bio -->
    <div class="flex justify-center text-lg sm:flex sm:flex-row lg:text-xl xl:text-2xl py-8">{{ about.bio }}</div>
    
    <!-- About header -->
    <div class="flex flex-row justify-between">
      <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">ABOUT</div>
      <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">&#129121;</div>
    </div>

    <!-- Project header -->
    <router-link to="/projects">
      <div class="flex flex-row justify-between">
        <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">PROJECTS</div>
        <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">&#129125;</div>
      </div>
    </router-link>

    <!-- Photos header -->
    <router-link to="/photos">
      <div class="flex flex-row justify-between">
        <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">PHOTOS</div>
        <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">&#129122;</div>
      </div>
    </router-link>
    
    <!-- Words header -->
    <router-link to="/words">
      <div class="flex flex-row justify-between">
        <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">WORDS</div>
        <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">&#129126;</div>
      </div>
    </router-link>

    <!-- Contact header -->
    <div class="flex flex-row justify-between">
      <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">CONTACT</div>
      <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">&#129123;</div>
    </div>

    <!-- Contact -->
    <div class="w-full py-8">
      <div v-for="item in about.links">
        <a :href="item.link" class="text-l md:text-xl" target="_blank" rel="noopener noreferrer">
          {{ item.text }}
          &#129125;
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
