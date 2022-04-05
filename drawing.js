

function drawPixel(context, x, y, color)
{
    context.beginPath();
    context.fillStyle = color || '#000';
    let pixel_size = 1 * scale;
    context.fillRect(x*pixel_size, y*pixel_size, pixel_size, pixel_size);
    context.fill();
}

var canvas = document.getElementById("viewport");
var context = canvas.getContext("2d");
var w = context.canvas.width; // as set in html
var h = context.canvas.height;  // as set in html
var imagedata = context.createImageData(w, h);



var colors = [
    'rgb(0, 0, 0, 255)', 
    'rgb(129, 30, 159, 255)', 
    'rgb(36, 80, 164, 255)', 
    'rgb(255, 255, 255, 255)', 
    'rgb(255, 69, 0, 255)', 
    'rgb(0, 163, 104, 255)', 
    'rgb(137, 141, 144, 255)', 
    'rgb(126, 237, 86, 255)', 
    'rgb(156, 105, 38, 255)', 
    'rgb(81, 233, 244, 255)', 
    'rgb(180, 74, 192, 255)', 
    'rgb(212, 215, 217, 255)', 
    'rgb(54, 144, 234, 255)', 
    'rgb(255, 153, 170, 255)', 
    'rgb(255, 214, 53, 255)', 
    'rgb(255, 168, 0, 255)',
    'rgb(0, 0, 0, 0)',
    'rgb(0, 117, 111, 255)', 
    'rgb(0, 158, 170, 255)', 
    'rgb(73, 58, 193, 255)', 
    'rgb(255, 56, 129, 255)', 
    'rgb(106, 92, 255, 255)', 
    'rgb(190, 0, 57, 255)', 
    'rgb(0, 204, 120, 255)', 
    'rgb(109, 72, 47, 255)', 
    'rgb(228, 171, 255, 255)', 
    'rgb(109, 0, 26, 255)', 
    'rgb(255, 248, 184, 255)', 
    'rgb(222, 16, 127, 255)', 
    'rgb(81, 82, 82, 255)', 
    'rgb(255, 180, 112, 255)', 
    'rgb(148, 179, 255, 255)',
    'rgb(0, 204, 192, 255)']





// context.save();