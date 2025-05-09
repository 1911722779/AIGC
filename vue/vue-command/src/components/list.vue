<template>
    <ul>
        <li @click="showName(item.name)" v-for="(item,index) in list" :key="item.id">{{ index+1 }}-{{item.name}}</li>
    </ul>

    <button v-on:click="handle">确认</button>
</template>

<script setup>
    const list = [
        {id: 1, name: "发如雪"},
        {id: 2, name: "千百度"},
        {id: 3, name: "雅俗共赏"},
        {id: 4, name: "多余的解释"}
    ]

    const handle =()=>{
        console.log('handle');
    }

    const showName = (name)=>{
        console.log('showName',name);
    }
</script>

<style lang="scss" scoped>

</style>