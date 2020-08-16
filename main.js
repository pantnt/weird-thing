var cv=document.getElementById("BOX")
var ctx=cv.getContext("2d")
var pi=Math.PI
var cx=0;
var cy=0;
var cc=false;
document.onmousemove=function(e) {
	cx = event.clientX - cv.offsetLeft;
    cy = event.clientY - cv.offsetTop-300;
    //console.log(cx,cy)
}
var ary=[]
var ary2=[]
function main(){
    ctx.clearRect(0, 0, cv.width, cv.height);
    //console.log([cx,cy],ary.length)
    ary2=[]
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
    ctx.beginPath()
    ctx.moveTo(ary[0][0]+400,ary[0][1]+300)
    ary2.forEach(e=>{
        //console.log(e)   
        ctx.lineTo(e[0]+400,e[1]+300)
    })
    ctx.stroke()
}
setInterval(main,1000/1000)
