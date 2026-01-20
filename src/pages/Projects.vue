<script setup>
import ArrowUp from '../components/icons/ArrowUp.vue'
import ArrowUpRight from '../components/icons/ArrowUpRight.vue'
import ArrowDown from '../components/icons/ArrowDown.vue'
</script>

<template>
  <div class="sm:px-16">
    <hr />
    <div v-for="(c, index) in content" :key="c.id">
      <div
        @click="handleClick(index)"
        class="flex flex-row justify-between my-4 hover:bg-whiteish hover:text-blackish hover:no-underline cursor-pointer"
      >
        <div class="text-4xl md:text-5xl lg:text-6xl">{{ c.name.toUpperCase() }}</div>
        <component
          :is="isActive(index) ? ArrowUp : ArrowDown"
          class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
        />
      </div>
      <div v-show="isActive(index)" class="flex flex-col gap-4 mb-4">
        <div class="flex flex-row">
          <img
            :src="c.image.src"
            alt="project image (coming soon)"
            class="object-cover max-h-80 mb-4"
          />
        </div>
        <div class="flex flex-col sm:flex-row text-2xl gap-2">
          <div>
            <a
              v-if="c.links.site"
              :href="c.links.site"
              class="flex flex-row w-max h-max hover:bg-whiteish hover:text-blackish hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ c.name }}
              <ArrowUpRight class="w-6 h-6" />
            </a>
            <div v-else class="w-max h-max">{{ c.name }}</div>
          </div>
          <div class="font-light">{{ c.heading }}</div>
        </div>
        <div class="flex flex-row">
          <div class="font-light text-lg">{{ c.description }}</div>
        </div>
        <div class="flex flex-row">
          <a
            v-if="c.links.project"
            :href="c.links.project"
            class="flex flex-row font-light text-lg hover:bg-whiteish hover:text-blackish hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Link
            <ArrowUpRight class="w-6 h-6" />
          </a>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  components: [ArrowUp, ArrowUpRight, ArrowDown],
  data() {
    return {
      activeContent: new Set(),
      content: [
        {
          name: 'VOLE',
          id: 'vole',
          heading: `
            is a framework for detecting CWEs in program binaries.
          `,
          description: `
            Vulnerability Observance and Learning-based Exploitation (VOLE) simplifies the process of training machine learning models for vulnerability detection. 
            The framework aims to streamline the process of training graph convolutional networks using control flow graphs and intermediate represented recovered from NIST SARD Juliet C/C++ binaries.
            Implemented using angr, pyvex, VEXIR2Vec, and PyTorch.
          `,
          links: {
            project: 'https://github.com/cbarkr/vole'
          },
          imageURL: 'src/assets/images/projects/vole/vole.png'
        },
        {
          name: 'Absence is Presence',
          id: 'absence-is-presence',
          heading: `
            explores the relationship between the absence and presence of information.
          `,
          description: `
            Submitted as my final project for CMNS 353, "The Information Age", receiving a perfect grade and is being used as an example project for future iterations of the course :)
          `,
          links: {
            site: 'https://sway.cloud.microsoft/DG3LWBIUVxsKJeYg'
          },
          imageURL: 'src/assets/images/projects/absence-is-presence/absence_is_presence.png'
        },
        {
          name: 'CTF',
          id: 'ctf',
          heading: `
            is my latest obsession.
          `,
          description: `
            Member of defpwn, SFU Cybersecurity Club's CTF team.
          `,
          links: {
            site: 'https://blog.cbarkr.com/tags/ctf',
            project: 'https://github.com/cbarkr/ctf'
          },
          imageURL: 'src/assets/images/projects/ctf/picoCTF2025.png'
        },
        {
          name: 'My Homelab',
          id: 'homelab',
          heading: `
            is a safe place for me to make, break, dissect, and play with technologies.
          `,
          description: `
            Debian server running Podman containers for self-hosted services, managed with Cockpit.
          `,
          links: {
            site: 'https://blog.cbarkr.com/homelab/'
          },
          imageURL: 'src/assets/images/projects/homelab/homelab_rice.png'
        },
        {
          name: 'Transmiss',
          id: 'transmiss',
          heading: `
            is for when transit misses the mark.
          `,
          description: `Built with Next.js, Tailwind, TypeScript, DynamoDB, and TransLink's Real-Time Transit Info API. `,
          links: {
            site: 'https://transmiss.ca',
            project: 'https://github.com/cbarkr/transmiss'
          },
          imageURL: 'src/assets/images/projects/transmiss/transmiss2.png'
        },
        {
          name: 'Pip-Boy 3000',
          id: 'pipboy',
          heading: `
            is a safe, secure piece of Pre-War technology. It guarantees privacy, safety, and guidance in times of need.
          `,
          description: `
            Prototype of a Pip-Boy from the fallout series.
            3D-printed shell based on the Pip-Boy 3000 from Fallout 3, software based on the Pip-OS v7.1.0.8 from Fallout 4.
            Created with Android and Kotlin.
          `,
          links: {
            project: 'https://github.com/cmpt469-su23-group3/PipBoy_Android'
          },
          imageURL: 'src/assets/images/projects/pipboy/pipboy1.jpg'
        },
        {
          name: 'GPSUtils',
          id: 'gpsutils',
          heading: `is a basic GPS module for Python.`,
          description: `
            Designed to be short and simple.
            Documentation made with Sphinx.
          `,
          links: {
            project: 'https://github.com/cbarkr/gpsutils',
            site: 'https://cbarkr.github.io/gpsutils/'
          },
          imageURL: 'src/assets/images/projects/gpsutils/gpsutils2.png'
        },
        {
          name: 'FlixList',
          id: 'flixlist',
          heading: `is a social movie reviewing site.`,
          description: `
            Built with React, Express.js, MongoDB, and IMDb API.
          `,
          links: {
            project: 'https://github.com/cbarkr/FlixList'
          },
          imageURL: 'src/assets/images/projects/flixlist/flixlist1.png'
        }
      ]
    }
  },
  created() {
    // Preload project images
    for (const c of this.content) {
      const img = new Image()
      img.src = c.imageURL
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
