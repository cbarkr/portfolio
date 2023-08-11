<template>
  <div v-if="viewMode" @click="handleClick" :id="parentId" class="h-[95%] relative overflow-hidden flex flex-col justify-center">
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
          fill="none" viewBox="0 0 24 24" 
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
            class="border hover:bg-current text-center text-l md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-4 mb-8"
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
    v-for="(p, index) in photos"
    :key="p.id"
    class="md:mx-24 lg:mx-48 mb-8 h-4/5 max-h-full"
  >
    <!-- (Pseudo-)Right-aligned images -->
    <div v-if="index % 2 == 0" class="flex flex-col xs:flex-row-reverse h-4/5 max-h-full">
      <img :src="p.img" class="object-contain" />
    </div>

    <!-- Left-aligned images -->
    <div v-else class="flex flex-col xs:flex-row h-4/5 max-h-full">
      <img :src="p.img" class="object-contain" />
    </div>
  </div>
</template>

<script>
import image1 from '../assets/images/photography/0779f548dc7b937f879355f9f0b5f6d4_94e0904b_1280.jpg'
import image2 from '../assets/images/photography/d7293b641aca702d4b02f4af7ab88e36_582333f9_1280.jpg'
import image3 from '../assets/images/photography/ef42afa64dee5182393693ea830fecc5_d75c9156_1280.jpg'
import image4 from '../assets/images/photography/37c244a3cef23d6b9458e985f8f191f0_84772b30_1280.jpg'
import image5 from '../assets/images/photography/848745eecd81204bfd80a112e5ff1454_ef51d41c_1280.jpg'
import image6 from '../assets/images/photography/f2be43958b925afe7128d0fa20bc1761_382dce1b_1280.jpg'
import image7 from '../assets/images/photography/e4d197e25cf058767d7639ea8b76a16a_c1973aa7_1280.jpg'
import image8 from '../assets/images/photography/3df3e78d40d236c5ad2fbb6c850f2b5a_a6005add_1280.jpg'
import image9 from '../assets/images/photography/b94efdf8cab1f371db627169ba6b967b_12bbd524_1280.jpg'
import image10 from '../assets/images/photography/b821dcdc270268f72f859c6b46b9e6ec_6d0704be_1280.jpg'
import image11 from '../assets/images/photography/1825e69032fc21db0bdccce859760cf9_06493408_1280.jpg'
import image12 from '../assets/images/photography/382308ef751b86a08441c401c40eecb2_9a2fe60c_1280.jpg'
import image13 from '../assets/images/photography/d01132b7e889b2cd961e1cece3b2385f_37392f01_1280.jpg'
import image14 from '../assets/images/photography/a375caf18e924b6f724e362fbfc40f57_be314628_1280.jpg'
import image15 from '../assets/images/photography/123148408f88b3237e728f399b32d074_5c59250f_1280.jpg'
import image16 from '../assets/images/photography/a6661a1b5955eef77ef75d87c790091a_46bbbd2b_1280.jpg'
import image17 from '../assets/images/photography/b75b5841c06dea496caf0a5528aedffb_690b5cd4_1280.jpg'
import image18 from '../assets/images/photography/f381c65017029d22bc401e83ffc1dc0e_2a4dd152_1280.jpg'
import image19 from '../assets/images/photography/2efdd1479a83862dfa6739c0a0b2c74d_2b9c6078_1280.jpg'
import image20 from '../assets/images/photography/3daaab3fb3e1d1c5bc92a01e7155f372_36c1c114_1280.jpg'
import image21 from '../assets/images/photography/c005f2f8b98a21bc55b81671472c0ddd_7fccdbb0_1280.jpg'
import image22 from '../assets/images/photography/f3bb231249e8dc03279947883bde03b4_be7dfd7d_1280.jpg'
import image23 from '../assets/images/photography/d55e0ad9947fb48e1fc814955a9562dc_73e16b81_1280.jpg'
import image24 from '../assets/images/photography/0e4d926377a6f9ae603fa3b2864ac554_83de195e_1280.jpg'
import image25 from '../assets/images/photography/42b2e66ae1b42c5a38daead63c5798e9_63abcf40_1280.jpg'
import image26 from '../assets/images/photography/6385dccce49b514acdb4e5fd38afd708_2624e772_1280.jpg'
import image27 from '../assets/images/photography/a9c9e73953fb3f45fcc6958583761135_ad76c0ed_1280.jpg'
import image28 from '../assets/images/photography/1415438f9de9bd0ce90562475f81819e_fc9de077_1280.jpg'
import image29 from '../assets/images/photography/eb8d29e602fc5b74fc9ddad0b3c03bb9_bd63f8b0_1280.jpg'

export default {
  name: 'PhotosPage',
  data() {
    return {
      viewMode: true, // here, true represents 'click' mode, 'false' represents 'gallery'
      parentId: 'photoParent',
      current: 0,
      photos: [
        {
          img: image1
        },
        {
          img: image2
        },
        {
          img: image3
        },
        {
          img: image4
        },
        {
          img: image5
        },
        {
          img: image6
        },
        {
          img: image7
        },
        {
          img: image8
        },
        {
          img: image9
        },
        {
          img: image10
        },
        {
          img: image11
        },
        {
          img: image12
        },
        {
          img: image13
        },
        {
          img: image14
        },
        {
          img: image15
        },
        {
          img: image16
        },
        {
          img: image17
        },
        {
          img: image18
        },
        {
          img: image19
        },
        {
          img: image20
        },
        {
          img: image21
        },
        {
          img: image22
        },
        {
          img: image23
        },
        {
          img: image24
        },
        {
          img: image25
        },
        {
          img: image26
        },
        {
          img: image27
        },
        {
          img: image28
        },
        {
          img: image29
        },
      ]
    }
  },
  methods: {
    switchViewMode() {
      this.viewMode = !this.viewMode
    },
    async handleClick(event) {
      if (!event) return
      if (this.current >= this.photos.length) return

      // Create new image
      const image = new Image()
      image.src = this.photos[this.current].img

      // Increment current image for next click
      this.current++

      // Wait for image to load
      await image.decode()

      // Get dimensions and such
      const [x, y] = [event.clientX, event.clientY]
      const [screenW, screenH] = [window.screen.width, window.screen.height]
      const [imageW, imageH] = [image.width, image.height]

      // Calculate image offset
      // Note: Image height later set to 96rem == 384px
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
