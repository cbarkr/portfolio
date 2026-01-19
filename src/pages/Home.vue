<script setup>
import ArrowUp from '../components/icons/ArrowUp.vue'
import ArrowUpRight from '../components/icons/ArrowUpRight.vue'
import ArrowRight from '../components/icons/ArrowRight.vue'
import ArrowDownRight from '../components/icons/ArrowDownRight.vue'
import ArrowDown from '../components/icons/ArrowDown.vue'
</script>

<template>
  <div class="sm:px-16">
    <!-- Bio -->
    <div class="flex justify-center font-light text-lg mb-8">
      {{ about }}
    </div>

    <!-- Main -->
    <div v-for="section in sections">
      <component
        :is="section.path ? 'router-link' : 'div'"
        :to="section.path ? section.path : null"
        :class="section.path ? 'hover:bg-whiteish hover:text-blackish hover:no-underline' : null"
        class="flex flex-row justify-between"
      >
        <div class="text-4xl md:text-5xl lg:text-6xl">{{ section.name.toUpperCase() }}</div>
        <component
          :is="section.icon"
          class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
        />
      </component>
    </div>

    <!-- Contact -->
    <div class="w-full my-8">
      <div class="flex flex-row font-light text-lg p-1">EMAIL: {{ contact.email }}</div>
      <div v-for="item in contact.links" :key="item.id" class="flex flex-row">
        <a
          :href="item.link"
          class="flex flex-row font-light text-lg p-1 hover:bg-whiteish hover:text-blackish hover:no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ item.text }}
          <ArrowUpRight class="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { shallowRef } from 'vue'
import routes from '../router/routes'

export default {
  name: 'HomePage',
  components: [ArrowUp, ArrowUpRight, ArrowRight, ArrowDownRight, ArrowDown],
  data() {
    return {
      about: `
        Hi, I'm Callum, a software developer/security engineer and photographer based in Vancouver; 
        interested in technology (especially in the realm of security and privacy), fashion, design, architecture, music, sights, sounds, tastes, experiences, lists, etc.; 
        outside of work and school, I can be found out on my bicycle, in thrift stores around town, at my local Muay Thai gym, or at home organizing my Pinterest boards.
      `,
      contact: {
        email: '<SECOND-LEVEL DOMAIN OF THIS SITE> [AT] PROTONMAIL [DOT] COM',
        links: [
          {
            text: 'GITHUB',
            link: 'https://github.com/cbarkr'
          },
          {
            text: 'LINKEDIN',
            link: 'https://www.linkedin.com/in/cbarkr'
          }
        ]
      },
      icons: [
        shallowRef(ArrowUp),
        shallowRef(ArrowUpRight),
        shallowRef(ArrowRight),
        shallowRef(ArrowDownRight),
        shallowRef(ArrowDown)
      ],
      sections: routes
        .filter((r) => r.name !== this.$route.name) // Remove current path (home)
        .map(({ name, path }) => ({ name, path })) // Keep only name and path attrs
    }
  },
  created() {
    // Add "about" section to start and "contact" section to end
    this.sections.splice(0, 0, { name: 'about' })
    this.sections.splice(this.sections.length, 0, { name: 'contact' })

    // Add icons to each section
    for (let i = 0; i < this.sections.length; i++) {
      this.sections[i].icon = this.icons[i]
    }
  }
}
</script>
