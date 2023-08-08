<template>
  <div class="flex justify-center">
    <p>callum barker · [{{ year }}]</p>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    data: () => ({
      year: new Date().getFullYear()
    })
  }
</script>