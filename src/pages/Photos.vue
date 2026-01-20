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
      if (this.currentIndex >= this.gallery.length) return
      if (!document.getElementById(this.parentId)) return

      const image = this.gallery[this.currentIndex].img

      // Increment current image for next click
      this.currentIndex++

      // Wait for image to load
      await image.decode()

      // Get dimensions and such
      const [x, y] = [event.clientX, event.clientY]
      const [screenW, screenH] = [window.screen.width, window.screen.height]
      const [imageW, imageH] = [image.width, image.height]

      // Calculate image offset
      // Note: Image height later set to 96rem == 384px
      // TODO: Use relative units
      const ratio = 384 / imageH
      const heightCalc = 384 / 2
      const widthCalc = (ratio * imageW) / 2

      const offsetTop = y - (heightCalc % screenH)
      const offsetLeft = x - (widthCalc % screenW)

      const parent = document.getElementById(this.parentId)
      const newImage = document.createElement('img')

      // Assign classes, attributes, and styles necessary to place image at cursor
      const classes = ['absolute', 'h-96']
      const attributes = new Map([['src', image.src]])
      const styles = new Map([
        ['top', offsetTop],
        ['left', offsetLeft]
      ])

      classes.forEach((c) => newImage.classList.add(c))
      attributes.forEach((v, k) => newImage.setAttribute(k, v))
      styles.forEach((v, k) => (newImage.style[k] = `${v}px`))

      // Add the image to the DOM!
      parent.appendChild(newImage)
    }
  }
}
</script>
