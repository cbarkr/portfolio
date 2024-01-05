<script setup>
import Nav from './components/Nav.vue'
import { RouterView } from 'vue-router'
</script>

<template class="flex">
  <Nav />
  <router-view></router-view>
</template>

<script>
import { useWordsStore } from './stores/words'

export default {
  async mounted() {
    await useWordsStore().populate()
  }
}

</script>