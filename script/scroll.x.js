let mouseWheelEvt = function (event) {
    if (document.body.doScroll)
        document.body.doScroll(event.wheelDelta>0?"left":"right");
        
    else if ((event.wheelDelta || event.detail) > 0)
        document.body.scrollLeft -= 40;
    else
        document.body.scrollLeft += 40;
    return false;
}
document.body.addEventListener("mousewheel", mouseWheelEvt);

document.getElementById('deny-scroll').onwheel = function(){ return false; }