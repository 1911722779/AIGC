<template>
   <div>
    <!-- hello world -->
     {{ msg }}
  </div>
  <div v-text="msg2"></div><!-- 识别为文本 -->
  <!-- <div v-text="msg3"></div> -->
   <div v-html="msg3"></div><!-- 识别为html -->
   
</template>

<script setup>
const msg = 'Hello world'
const msg2 = 'Hello vue'
const msg3 = '<p>碳烤断秋风</p><p>红烧断秋风</p>'//富文本

</script>

<style lang="css" scoped>

</style>