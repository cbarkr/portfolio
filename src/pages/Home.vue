<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="sm:px-16">
    <!-- Bio -->
    <div class="flex justify-center font-light text-lg mb-8">
      {{ about.bio }}
    </div>

    <!-- About header -->
    <div class="flex flex-row justify-between">
      <div class="text-4xl md:text-5xl lg:text-6xl">ABOUT</div>
      <!-- Arrow up -->
      <svg
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

    <!-- Project header -->
    <router-link to="/work">
      <div
        class="flex flex-row justify-between hover:bg-whiteish hover:text-blackish hover:no-underline"
      >
        <div class="text-4xl md:text-5xl lg:text-6xl">WORK</div>
        <!-- Arrow up right -->
        <svg
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
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </router-link>

    <!-- Photos header -->
    <router-link to="/photos">
      <div
        class="flex flex-row justify-between hover:bg-whiteish hover:text-blackish hover:no-underline"
      >
        <div class="text-4xl md:text-5xl lg:text-6xl">PHOTOS</div>
        <!-- Arrow right -->
        <svg
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
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </router-link>

    <!-- Words header -->
    <a href="https://blog.cbarkr.com">
      <div
        class="flex flex-row justify-between hover:bg-whiteish hover:text-blackish hover:no-underline"
      >
        <div class="text-4xl md:text-5xl lg:text-6xl">WORDS</div>
        <!-- Arrow down right -->
        <svg
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
            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
          />
        </svg>
      </div>
    </a>

    <!-- Contact header -->
    <div class="flex flex-row justify-between">
      <div class="text-4xl md:text-5xl lg:text-6xl">CONTACT</div>
      <!-- Arrow down -->
      <svg
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
    </div>

    <!-- Contact -->
    <div class="w-full my-8">
      <div v-for="item in about.links" :key="item.id" class="flex flex-row">
        <a
          :href="item.link"
          class="flex flex-row font-light text-lg p-1 hover:bg-whiteish hover:text-blackish hover:no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ item.text }}
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
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      about: {
        bio: `
          Hi, I'm Callum, a computing science student, software developer, and photographer based in Vancouver; 
          interested in technology (especially in the realm of security and privacy), fashion, design, architecture, music, sights, sounds, tastes, experiences, lists, etc.; 
          outside of work and school, I can be found out on my bicycle, in thrift stores around town, at my local Muay Thai gym, or at home organizing my Pinterest boards.
          `,
        links: [
          {
            text: 'CBARKR@PROTONMAIL.COM',
            link: 'mailto:cbarkr@protonmail.com'
          },
          {
            text: 'GITHUB',
            link: 'https://github.com/cbarkr'
          },
          {
            text: 'LINKEDIN',
            link: 'https://www.linkedin.com/in/cbarkr'
          }
        ]
      }
    }
  }
}
</script>
