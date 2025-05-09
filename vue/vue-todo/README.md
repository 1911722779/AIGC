1. import { reactive } from 'vue'
    - 只能把引用类型变成响应式,不能直接传元素
    - 使用reactive可以不用加.value后缀
2. import {ref} from 'vue'
    - 可以把一个原始值变成响应式，也可以把引用类型变成响应式
    - ref完全包含了reactive的功能
3. scoped 作用域，使当前页面的css渲染只作用在当前页面
4. import {watch} from 'vue'
    - 是函数，用于监听某一变量的值，会执行内部的回调
    - 默认不会主动执行一次
    - 监听的变量不需要加.value后缀，watch函数会直接得到变量的值
    - immediate : 进入页面即获取变量值并且更新
    - deep ：深度监听
4. import {computed} from 'vue'
    - 用于计算
    - 开局会默认主动执行一次
    - 可以监听到在computed里用到的所有变量，当回调中任意变量值发生变更，computed都会重新执行
    - 使用computed时不用再额外定义需要监听的对象的值，可直接定义监听对象的值为computed的执行结果
    - 性能相较于watch更好一些，绝大多数情况，watch能实现的东西computed也能实现，反之亦然