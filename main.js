var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var color = "red";
var width = screen.width;
var phone_height = screen.height - 300;
var phone_width = screen.width - 432;
var tablet_height = screen.height - 200 ;
var tablet_width = screen.width - 224;
var last_position_of_x;
var last_position_of_y;
var line_width;

if (width < 992) {
    document.getElementById("myCanvas").width = phone_width;
    document.getElementById("myCanvas").height = phone_height;
    document.body.style.overflow = "hidden";
}

if (width < 768) {
    document.getElementById("myCanvas").width = tablet_width;
    document.getElementById("myCanvas").height = tablet_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", touch_start);

function touch_start(e) {
    console.log("touch event has started");
    color = document.getElementById("colour").value;
    line_width = document.getElementById("width").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", touch_move);

function touch_move (e){
console.log("touch move is working");
position_of_x = e.touches[0].clientX - canvas.offsetLeft;
position_of_y = e.touches[0].clientY - canvas.offsetTop;
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = line_width;
    context.moveTo(last_position_of_x, last_position_of_y);
    context.lineTo(position_of_x, position_of_y);
    context.stroke();
    last_position_of_x = position_of_x;
    last_position_of_y = position_of_y;
}

function clearA() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
