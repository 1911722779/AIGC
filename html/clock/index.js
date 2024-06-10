var secondHand = document.querySelector('.second-hand')
var minHand = document.querySelector('.min-hand')
var hourHand = document.querySelector(`.hour-hand`)

function setDate(){
    //拿到当前时间
    var now = new Date()

    //读秒
    var seconds = now.getSeconds()
    //计算旋转角度
    var secondsDeg = ((seconds / 60) * 360) + 90
    //设置秒针角度
    secondHand.style.transform = `rotate(${secondsDeg}deg)`

    //读分
    var min = now.getMinutes()
    //计算旋转角度
    var minDeg = ((min / 60) *360) + 90
    //设置分针角度
    minHand.style.transform = `rotate(${minDeg}deg)`

    //读时
    var hour = now.getHours()
    //计算旋转角度
    var hourDeg = ((hour / 12) *360) + 90
    //设置时针角度
    hourHand.style.transform = `rotate(${hourDeg}deg)`
}

setInterval(setDate,1000);//单位ms