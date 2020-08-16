var cv=document.getElementById("BOX")
var ctx=cv.getContext("2d")
var pi=Math.PI
var cx=0;
var cy=0;
var cc=false;
document.onmousemove=function(e) {
	cx = event.clientX - cv.offsetLeft;
    cy = event.clientY - cv.offsetTop-540;
    //console.log(cx,cy)
}
function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}
var o=0
var ary=[]
var ary2=[]
var ss=[],ab=0
function main(){
    if(true)
    ctx.clearRect(0, 0, cv.width, cv.height);
    //console.log([cx,cy],ary.length)
    ary2=[]
    o+=1/360*pi
    ary.unshift([cx,cy])
    //console.log(((ary.length-1)/1000)+1)
    ary.forEach(e=>{
        let b=(ary.indexOf(e)*1),d=[]
        
        e.forEach(e=>{
            
            d.push(e/((b/100)+1))
        })
        ary2.push(d)
    });
    //console.log(ary2)
    ss=[cx,cy]
    ary2.forEach((e,n)=>{
        //console.log(e)   
        ctx.beginPath()
        dd=HSVtoRGB(((ary2.length-n+ab)/100)%1,1,1)
        ctx.moveTo(ss[0]+960,ss[1]+540)
        ctx.strokeStyle=`rgb(${dd.r},${dd.g},${dd.b})`
        ctx.lineTo(e[0]+960,e[1]+540)
        ctx.stroke()
        ss=e
    })
    //console.log(ary[ary.length-1])
    if (ary.length>3000){
        ary.pop()
        ab+=1
    }
}
setInterval(main,1000/120)
