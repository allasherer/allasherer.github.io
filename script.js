var can = document.getElementById("can")
var ctx = can.getContext("2d")
var m = document.querySelector("#vol")
var c = document.querySelector("#amount")
var button = document.querySelector("#button")
var restart = document.querySelector("#Restart")
var bounce = document.querySelector("#Bounce")

var w = 225
var h = 265
var h2 = 265
var w2 = 225

var rw = 1200
var rh = 70 

var mt1 = false
var mt2 = false

var deceleration = false

restart.addEventListener("click", function() {
     sx = 20
     sy = 150
     tx = 955
     ty = 150
     mt1 = false
     mt2 = false
     u1=3
     u2=3
     w = 225
     h = 265
     h2 = 265
     w2 = 225
     m.value = 33
     m2.value = 33
     c2x = 990
     c2y = 65
     c1x = 50
     c1y = 65
     v = false
     i=0.04
     bounce.checked = false
     deceleration = false
}) 
button.addEventListener("click", function() {
    mt1 = true
    mt2 = true
})


m.addEventListener("input", ()=>{
    h = 100+5*Number(m.value)
    c.innerHTML = m.value
    u1 = parseInt(100/m.value)
})

var m2 = document.querySelector("#vol2")
var x = document.querySelector("#number")

m2.addEventListener("input", ()=>{
    h2 = 100+5*Number(m2.value)
    x.innerHTML = m2.value
})

var sx = 20
var sy = 150

var tx = 955
var ty = 150

var rx = 0
var ry = 20

var c1x = 50
var c1y = 65

var i = 0.04

var c2x = 990
var c2y = 65

var u1 = 3
var u2 = 3

var v = false


function square1() {
    ctx.beginPath()
    ctx.fillStyle = "#660033";
    ctx.fill()
    ctx.fillRect(sx, sy, w, h);
    if(mt1==true) {
        sx+=u1
    }
    ctx.closePath()
}

function InFix() {
    if((sx+w)>(tx+4)) {
        u1 = 0
    }
}


function collision() {
    if((sx+w)>=tx) {
        u1=-u1
        u2=-u2
        deceleration = true
    }
    if(sx<=(0+6*Number(m.value)) && u1<0) {
        u1=0
    }
    if(tx+w2>=(1200-6*Number(m2.value)) && u2<0) {
        u2=0
    }

    // if(m.value) {
        
    // }
}

bounce.addEventListener("click", function() {
    u2 = 0
    v = true
}) 
function slower() {
    if(deceleration==true && u2==0 && v==true) {
        u1+=i
    }

    if((sx+w)>=tx && bounce.checked==true) {
        i+=0.04
    }

}

function square2() {
    ctx.beginPath()
    ctx.fillStyle = "#660033"
    ctx.fill()
    ctx.fillRect(tx, ty, w2, h2);
    if(mt2==true) {
        tx-=u2
    }
    ctx.closePath()
}

function rail() {
    ctx.beginPath()
    ctx.fillStyle = "#00802b"
    ctx.fill()
    ctx.fillRect(rx, ry, rw, rh)
    ctx.closePath()
}

const image = new Image()
image.src= './realtriangle.png';

function conveyar1() {
    ctx.beginPath()
    ctx.drawImage(image, c1x, c1y, 150, 150)
    if(mt1==true) {
        c1x+=u1
    }
    ctx.closePath()
}


function conveyar2() {
    ctx.beginPath()
    ctx.drawImage(image, c2x, c2y, 150, 150)
    if(mt2==true) {
        c2x-=u2
    }
    ctx.closePath()
}

function draw() {
    ctx.clearRect(0, 0, can.width, can.height);
    c.innerHTML = m.value
    x.innerHTML = m2.value
    square1()
    square2()
    rail()
    conveyar1()
    conveyar2()
    collision()
    slower()
    InFix()
}

var n=setInterval(draw, 15)