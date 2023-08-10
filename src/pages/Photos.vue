<template>
  <div v-if="viewMode" @click="handleClick" :id="parentId" class="h-[95%] relative overflow-hidden">
    <div class="flex align-center justify-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">CLICK TO PLACE IMAGES</div>
    <div @click="switchViewMode" class="flex align-center justify-center hover:underline text-l md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">VIEW AS GALLERY?</div>
  </div>
  
  <div v-else v-for="(p, index) in photos" class="md:mx-24 lg:mx-48 mb-8 h-4/5 max-h-full">
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
  import image7 from '../assets/images/photography/3df3e78d40d236c5ad2fbb6c850f2b5a_a6005add_1280.jpg'
  import image8 from '../assets/images/photography/b821dcdc270268f72f859c6b46b9e6ec_6d0704be_1280.jpg'
  import image9 from '../assets/images/photography/382308ef751b86a08441c401c40eecb2_9a2fe60c_1280.jpg'
  import image10 from '../assets/images/photography/d01132b7e889b2cd961e1cece3b2385f_37392f01_1280.jpg'
  import image11 from '../assets/images/photography/a375caf18e924b6f724e362fbfc40f57_be314628_1280.jpg'
  import image12 from '../assets/images/photography/123148408f88b3237e728f399b32d074_5c59250f_1280.jpg'
  import image13 from '../assets/images/photography/a6661a1b5955eef77ef75d87c790091a_46bbbd2b_1280.jpg'
  import image14 from '../assets/images/photography/f381c65017029d22bc401e83ffc1dc0e_2a4dd152_1280.jpg'
  import image15 from '../assets/images/photography/2efdd1479a83862dfa6739c0a0b2c74d_2b9c6078_1280.jpg'
  import image16 from '../assets/images/photography/c005f2f8b98a21bc55b81671472c0ddd_7fccdbb0_1280.jpg'

  export default {
    name: 'Photos',
    data() {
      return {
        viewMode: true, // here, true represents 'click' mode, 'false' represents 'gallery'
        parentId: 'photoParent',
        current: 0,
        photos: [
          {
            img: image1,
          },
          {
            img: image2,
          },
          {
            img: image3,
          },
          {
            img: image4,
          },
          {
            img: image5,
          },
          {
            img: image6,
          },
          {
            img: image7,
          },
          {
            img: image8,
          },
          {
            img: image9,
          },
          {
            img: image10,
          },
          {
            img: image11,
          },
          {
            img: image12,
          },
          {
            img: image13,
          },
          {
            img: image14,
          },
          {
            img: image15,
          },
          {
            img: image16,
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
        await image.decode()

        // Get dimensions and such
        const [x, y] = [event.clientX, event.clientY]
        const [screenW, screenH] = [window.screen.width, window.screen.height]
        const [imageW, imageH] = [image.width, image.height]

        // Calculate image offset
        // Note: Image height later set to 96rem == 384px
        const ratio = 384 / imageH
        const heightCalc = 384/2
        const widthCalc = (ratio * imageW) / 2

        const offsetTop = y - heightCalc % screenH
        const offsetLeft = x - widthCalc % screenW

        const parent = document.getElementById(this.parentId)
        const newImage = document.createElement("img")

        // Assign classes, attributes, and styles necessary to place image at cursor
        const classes = ["absolute", "max-h-96"]
        const attributes = new Map([["src", image.src],])
        const styles = new Map([
          ["top", offsetTop],  
          ["left", offsetLeft],
        ])
        
        classes.forEach((c) => newImage.classList.add(c))
        attributes.forEach((v, k) => newImage.setAttribute(k, v))
        styles.forEach((v, k) => newImage.style[k] = `${v}px`)

        // Add the image to the DOM!
        parent.appendChild(newImage)

        // Increment current image for next click
        this.current++
      }
    }
  }
</script>