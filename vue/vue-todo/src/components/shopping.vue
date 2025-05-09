<template>
    <table>
        <thead>
            <th>序号</th>
            <th>书籍名称</th>
            <th>出版日期</th>
            <th>价格</th>
            <th>购买数量</th>
            <th>操作</th>
        </thead>
        <tbody>
            <!-- <tr>
                <td>1</td>
                <td>明朝那些事儿</td>
                <td>2013-8</td>
                <td>40.00</td>
                <td>
                    <button @click="minus">-</button>
                    <span class="counter">1</span>
                    <button @click="add">+</button>
                </td>
                <td><button>删除</button></td>
            </tr> -->
            <tr v-for="(item,index) in books" :key = "books.id">
                <td> {{ item.id }} </td>
                <td> {{ item.name }} </td>
                <td> {{ item.date }} </td>
                <td> {{ item.price }} </td>
                
                <td>
                    <button @click="minus(index)" :disabled="item.count <= 1">-</button>
                    <span class="counter"> {{ item.count }} </span>
                    <button @click="add(index)">+</button>
                </td>
                <td>
                    <button @click="delete1(index)">删除</button>
                </td>
            </tr>
        </tbody>
    </table>
    <h2>总价格:{{ total }}</h2>
</template>

<script setup>
import { computed, reactive } from 'vue';

const books = reactive([
        {
          id: 1,
          name: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date: '2008-10',
          price: 39.00,
          count: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          date: '2006-3',
          price: 128.00,
          count: 1
        },
])

const total = computed(()=>{
    let sum = 0
    for (let item of books){
        sum += item.price * item.count;
    }
    return sum;
})      

const add = (i) => {
    books[i].count++
}
const minus = (i) => {
    books[i].count--
}
const delete1 = (i) =>{
    books.splice(i,1)
}

</script>

<style lang="css" scoped>
    table{
        margin: 0 auto;
        border: 1px solid #aaa;
        border-collapse: collapse;
    }
    th,td{
        padding: 8px 16px;
        border: 1px solid #aaa;
    }
    .counter{
        margin: 0 5px;
    }
</style>