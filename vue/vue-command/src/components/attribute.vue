<!-- <template>
    <img v-bind:src="pic" alt="">
    <a v-bind:href="url">点击跳转百度</a>
    <h2 @click="handle" :class="name">八嘎代码</h2>
    <h2 @click="handle" :class="{'red':active}">八嘎代码</h2>
    <h2 @click="handle" :class="[active ? 'red':'green']">八嘎代码</h2>
    <h2 @click="handle" :class="['red','green']">八嘎代码</h2>

    <input type="text" @change="onChange">
    <input type="text" @input="onChange" :value="val">
    <h4>{{val}}</h4>

</template>

<script setup>
import {ref} from 'vue';
    const pic = 'https://q3.itc.cn/q_70/images03/20240519/1b4e7565b46241b68288ae482412a866.jpeg'
    const url = 'https://www.baidu.com/'

    let name = ref('')
    let active = ref(false)
    const handle =()=>{
        active.value = !active.value
    }

    let val = ref('Hello')
    const onChange = (e)=>{
        console.log('onChange',e.target.value);
        val.value = e.target.value;
    }

</script>

<style lang="css" scoped>
img{
    width:200px
}
.red{
    color:red
}
.green{
    color:green
}
</style> -->


<template>
    <div>
        <h2 @click="handle">{{ msg }}</h2>
        <input type="text" v-model="msg">

    </div>
</template>

<script setup>
import {ref} from 'vue'

const msg = ref('hello')
const handle = ()=>{
    msg.value += '1'
}

</script>

<style lang="css" scoped>

</style>