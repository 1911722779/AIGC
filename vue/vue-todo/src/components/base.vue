<template>
    <h2>{{ temp }}</h2>
    <h5>{{ suggest }}</h5>
    <button @click="add">+1</button>
    <button @click="minus">-1</button>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

let temp = ref(5)
// let suggest = ref('夹克')
const add = ()=>{
    temp.value += 5;
    // if(temp.value >= 30){
    //     suggest.value = '短袖'
    // } else if(temp.value >= 20){
    //     suggest.value = '夹克'
    // } else if(temp.value >= 10){
    //     suggest.value = '大衣'
    // } else{
    //     suggest.value = '羽绒服'
    // }
}
const minus = ()=>{
    temp.value -= 5;
}

// watch(temp,(newVal,oldVal) =>{
//     console.log(newVal,oldVal);
//     if(newVal >= 30){
//         suggest.value = '短袖'
//     } else if(newVal >= 20){
//         suggest.value = '夹克'
//     } else if(newVal >= 10){
//         suggest.value = '大衣'
//     } else{
//         suggest.value = '羽绒服'
//     }
// },{ immediate: true})

const suggest = computed(() => {
    if(temp.value >= 30){
        return '短袖'
    } else if(temp.value >= 20){
        return '夹克'
    } else if(temp.value >= 10){
        return '大衣'
    } else{
        return '羽绒服'
    }
})

</script>

<style lang="css" scoped>

</style>