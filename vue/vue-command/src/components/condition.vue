<template>
<h2 >{{ count }}</h2>
<button @click="happy">+1</button>
<button @click="sad">-1</button>
<h3 v-if="count < 30">可恶的代码</h3>
<h3 v-else-if="count < 40">我不开心</h3>
<h3 v-else>我相似</h3>
<h4 v-show="count <30">八嘎代码</h4>
</template>

<script setup>
import { ref } from 'vue'

let count = ref(20)

const happy = ()=>{
    count.value++
}
const sad = ()=>{
    count.value--
}

</script>

<style lang="css" scoped>

</style>