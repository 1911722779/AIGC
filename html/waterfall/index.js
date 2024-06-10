// 确定第一行能放n张图
    // 1. 获取用户的屏幕宽度（js中的代码不建议写太死
    // 2. 获取图片的宽度
// 操作第 n+1 张图的摆放位置 放在高度最小的那一列
    // 1. 获取每一列（上一列）的图片的高度
    // 2. 更新这一列的高度
    
imgLocation('container','box')

function imgLocation(parent,child){
    var cParent = document.getElementById(parent); // document是查找整个文档
    var cChild = cParent.getElementsByClassName(child);  //返回值为数组
    var screenWidth = window.innerWidth; //获取窗口宽度
    var imgWidth = cChild[0].offsetWidth;
    var num = Math.floor(screenWidth / imgWidth); //向下取整函数
    cParent.style.width = `${imgWidth * num}px`

    //操作第 n+1 张图的摆放位置
    var boxHeightArr = [];
    for(var i = 0; i < cChild.length; i++) {
        if(i < num) {
            boxHeightArr.push(cChild[i].offsetHeight);
        } else{
            // 找数组中的最小值（高度最小的那一列
            var minHeight = Math.min(...boxHeightArr); ///'...'就是将数组中的所有值找出
            var minIndex = boxHeightArr.indexOf(minHeight);
            console.log(minIndex);

            // 摆放图片
            cChild[i].style.position = 'absolute'; //设置绝对定位
            cChild[i].style.top = minHeight + 'px';
            cChild[i].style.left = cChild[minIndex].offsetLeft + 'px';

            // 更新这一列高度
            boxHeightArr[minIndex] = boxHeightArr[minIndex] + cChild[i].offsetHeight;

        }
    }



}
