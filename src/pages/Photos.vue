<template>
  <div v-for="(p, index) in photos" class="md:mx-24 lg:mx-48 mb-8 h-4/5 max-h-full">
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
        photos: [
          {
            img: image1,
            tags: [],
          },
          {
            img: image2,
            tags: [],
          },
          {
            img: image3,
            tags: [],
          },
          {
            img: image4,
            tags: ['concert'],
          },
          {
            img: image5,
            tags: ['concert'],
          },
          {
            img: image6,
            tags: ['concert'],
          },
          {
            img: image7,
            tags: [],
          },
          {
            img: image8,
            tags: [],
          },
          {
            img: image9,
            tags: [],
          },
          {
            img: image10,
            tags: ['concert'],
          },
          {
            img: image11,
            tags: [],
          },
          {
            img: image12,
            tags: [],
          },
          {
            img: image13,
            tags: [],
          },
          {
            img: image14,
            tags: [],
          },
          {
            img: image15,
            tags: [],
          },
          {
            img: image16,
            tags: ['concert'],
          },
        ]
      }
    }
  }
</script>