<template>
  <div
    v-if="viewMode"
    @click="handleClick"
    :id="parentId"
    class="h-[95%] relative overflow-hidden flex flex-col justify-center"
  >
    <div class="flex justify-center my-8">
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
    <!-- Middle -->
    <div class="flex flex-row justify-center my-8">
      <div class="flex self-center mx-8">
        <!-- Left arrow -->
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      <div class="flex flex-col mx-8">
        <div
          class="flex align-center justify-center text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-8"
        >
          CLICK TO PLACE IMAGES
        </div>
        <div class="flex align-center justify-center">
          <div
            @click="switchViewMode"
            class="border hover:bg-current text-center text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-4 mb-8"
          >
            GALLERY VIEW
          </div>
        </div>
      </div>
      <div class="flex self-center mx-8">
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
    </div>
    <div class="flex justify-center my-8">
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
  </div>

  <div
    v-else
    v-for="(p, index) in gallery"
    :key="p.id"
    class="md:mx-24 lg:mx-48 mb-8 h-4/5 max-h-full"
  >
    <!-- (Pseudo-)Right-aligned images -->
    <div v-if="index % 2 == 0" class="flex flex-col xs:flex-row-reverse h-4/5 max-h-full">
      <img :src="p.img.src" class="object-contain" />
    </div>

    <!-- Left-aligned images -->
    <div v-else class="flex flex-col xs:flex-row h-4/5 max-h-full">
      <img :src="p.img.src" class="object-contain" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotosPage',
  data() {
    return {
      // TODO: Represent viewMode better
      viewMode: true, // here, true represents 'click' mode, 'false' represents 'gallery'
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
        as: 'url'
      })
    )

    this.preloadBatchSize = Math.round(this.photos.length / 4)
    
    // Load the first batch of photos on creation
    for (let i = 0; i < this.preloadBatchSize; i++) {
      const img = new Image()
      img.src = this.photos[i]
      this.gallery.push({ 'img': img })
    }
  },
  mounted() {
    // Load the rest of the photos on mount
    for (let i = this.preloadBatchSize; i < this.photos.length; i++) {
      const img = new Image()
      img.src = this.photos[i]
      this.gallery.push({ 'img': img })
    }
  },
  methods: {
    switchViewMode() {
      this.viewMode = !this.viewMode
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
      const classes = ['absolute', 'max-h-96']
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
