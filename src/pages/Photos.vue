<script setup>
import ArrowUp from '../components/icons/ArrowUp.vue'
import ArrowLeft from '../components/icons/ArrowLeft.vue'
import ArrowRight from '../components/icons/ArrowRight.vue'
import ArrowDown from '../components/icons/ArrowDown.vue'
</script>

<template>
  <div class="flex flex-row h-[95%]">
    <div
      v-if="!isGalleryView"
      @click="handleClick"
      :id="parentId"
      class="flex flex-col flex-grow relative justify-center overflow-hidden cursor-pointer"
    >
      <div class="flex justify-center my-8">
        <ArrowUp
          class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
        />
      </div>
      <!-- Middle -->
      <div class="flex flex-row justify-center my-8">
        <div class="flex self-center mx-8">
          <ArrowLeft
            class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
          />
        </div>
        <div class="flex flex-col mx-8">
          <div
            class="flex align-center justify-center text-center text-4xl md:text-5xl lg:text-6xl mb-8"
          >
            CLICK TO PLACE
          </div>
          <div class="flex align-center justify-center">
            <div
              @click="toggleGalleryView"
              class="border bg-transparent text-white hover:bg-white hover:text-black text-center text-lg md:text-xl lg:text-2xl p-2"
            >
              GALLERY VIEW
            </div>
          </div>
        </div>
        <div class="flex self-center mx-8">
          <ArrowRight
            class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
          />
        </div>
      </div>
      <div class="flex justify-center my-8">
        <ArrowDown
          class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
        />
      </div>
    </div>
    <div v-else class="flex flex-col flex-grow gap-36">
      <div v-for="p in gallery" :key="p.id" class="flex flex-row h-4/5 justify-center">
        <img :src="p.img.src" class="object-contain" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotosPage',
  components: [ArrowUp, ArrowLeft, ArrowRight, ArrowDown],
  data() {
    return {
      isGalleryView: false,
      parentId: 'photoParent',
      currentIndex: 0,
      preloadBatchSize: 0,
      photos: [],
      gallery: []
    }
  },
  created() {
    this.photos = Object.values(
      import.meta.glob('@assets/images/photography/*.{png,jpg,jpeg,PNG,JPEG}', {
        eager: true,
        query: '?url',
        import: 'default'
      })
    )

    // Shuffle the order just for fun :P
    this.shufflePhotos()

    // Load the first batch of photos on creation
    this.preloadBatchSize = Math.round(this.photos.length / 10)
    this.preloadPhotos(0, this.preloadBatchSize)
  },
  mounted() {
    // Load the rest of the photos on mount
    this.preloadPhotos(this.preloadBatchSize, this.photos.length)
  },
  methods: {
    randomIntInInterval(min, max) {
      // Returns a pseudorandom number in [min, max]
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    shufflePhotos() {
      for (let i = this.photos.length - 1; i > 0; i--) {
        const j = this.randomIntInInterval(0, i)
        ;[this.photos[i], this.photos[j]] = [this.photos[j], this.photos[i]]
      }
    },
    preloadPhotos(start, end) {
      for (let i = start; i < end; i++) {
        const img = new Image()
        img.src = this.photos[i]
        this.gallery.push({ img: img })
      }
    },
    toggleGalleryView() {
      this.isGalleryView = true
    },
    async handleClick(event) {
      if (!event) return
      if (!document.getElementById(this.parentId)) return
      if (!(this.currentIndex < this.gallery.length)) return

      const parent = document.getElementById(this.parentId)
      const bounds = parent.getBoundingClientRect()
      const curImg = this.gallery[this.currentIndex].img

      // Load image
      await curImg.decode()

      // Compute offset relative to parent
      const offsetX = event.clientX - bounds.left
      const offsetY = event.clientY - bounds.top

      // Set classes, attributes, and styles
      const classes = ['absolute', 'transform', '-translate-x-1/2', '-translate-y-1/2', 'max-h-96']
      const attributes = new Map([['src', curImg.src]])
      const styles = new Map([
        ['top', `${offsetY}px`],
        ['left', `${offsetX}px`]
      ])

      // Create new image element and add classes, attributes, and styles
      const imgElement = document.createElement('img')
      classes.forEach((c) => imgElement.classList.add(c))
      attributes.forEach((v, k) => imgElement.setAttribute(k, v))
      styles.forEach((v, k) => (imgElement.style[k] = v))

      // Add the image to the DOM!
      parent.appendChild(imgElement)

      // Increment current image for next click
      this.currentIndex++
    }
  }
}
</script>
