var imgs =document.querySelectorAll('img')

//通过循环求出到页面顶部的距离
function getTop(e){
    var eTop = e.offsetTop
    while(e=e.offsetParent){//赋值e.offsetParent 直到underfine
        eTop= eTop + e.offsetTop
    }

    return eTop
}

function lazyLoad(){
    var screenHeight =document.documentElement.clientHeight //可视界面高度
    var scrollMove = document.documentElement.scrollTop||document.body.scrollTop //滚轮距离

    for(var i = 0 ;i<imgs.length;i++){
        if(screenHeight+scrollMove>getTop(img[i])){
            imgs[i].src = imgs[i].getAttribut('data-src')
        }
    }
}
window.onload = window.s\onscroll =function(){
    lazyLoad()
}