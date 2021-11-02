canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
colour="black";
var widthofline=2;

var last_x,last_y;
var w=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if(w<992){
    document.getElementById("mycanvas").width=newwidth;
    document.getElementById("mycanvas").height=newheight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
 function my_touchstart(e){
     colour=document.getElementById("colour").value;
    
      
       widthofline=document.getElementById("width").value;
       last_x=e.touches[0].clientX - canvas.offsetLeft;
    last_y=e.touches[0].clientY - canvas.offsetTop;
 }
 canvas.addEventListener("touchmove", my_touchmove);
 function my_touchmove(e){
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=widthofline;
    ctx.moveTo(last_x,last_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke()


    last_x=current_x;
    last_y=current_y;
}

 function cleararea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}