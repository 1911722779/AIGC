float:浮动 
    效果：可以让元素从左向右排列
         使元素脱离文档流 //对于浏览器来说 容器不在队伍里了
dom结构：获取常规的几何属性
    .offsetWidth //获取宽度
    .offsetHeight //获取高度
    .offsetLeft //距离屏幕左边的距离 （ul自带内边距 body自带外边距
    .offsetTop //距离屏幕顶部的距离 （ul默认有外边距
    .offsetRight //查询不到，因为页面原点在左上角，是以左边为参考标准
数组（arr）：
    1）遍历数组
        console.log(arr)

        arr.forEach(function(/*此处可放参数*/){ // 数组自带遍历代码,但不自带返回值,如需打印需自行console.log
            arr[index] = item +1;
            // item 数组里的元素，index 为下标，arr 为元素组
        })

        arr.map(function(item,index,arr){ // .map自带返回值
            return item*10; //此处又返回了数据*10的值
        })
    2）查找数据
        .indexOf(/*此处放需要查找的元素*/) ：查找数组中有无此元素，并返回此元素所在位置（从最前往后找
            例如： 
                var arr = [1,2,3,4,5,6]; 
                var i =arr.indexOf(3);
                console.log(i);
                //此处打印出来的结果应为2,若没有此元素，值返回-1

        .lastIndexOf(/*此处放需要查找的元素*/) ： 查找数组中有无此元素，并返回此元素所在位置（从最后往前找

        .includes(/*此处放需要查找的元素*/) ： 查找数组中有无此元素，并返回true或false


形参实参：
    function foo(a,b){ //此处ab为形参
        console.log(a+b);
    }
    foo(1,2); //此处12为实参

当引入的js放在头部（head）时，可在js文件中加上 window.onload = function(){
    /*js代码*/
}
让js在整个页面加载完毕后再去执行下面的js代码