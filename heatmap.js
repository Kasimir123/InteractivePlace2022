var scale = 1;
var start_x = 0;
var start_y = 0;

function draw_frame(bytes) {
    if (!bytes) return;

    var x, y;

    if (bytes.length == 250000) (x = 500,y = 500);
    else if (bytes.length < 800000) (x = 1000,y = 500);
    else (x = 1000,y = 1000);

    for (let i = 0; i < x / scale; i++) {
        for (let j = 0; j < y / scale; j++) {
            drawPixel(context, i, j, colors[bytes[((i*y)+j) + ((start_x*y) + start_y)]]);
        }
    }
}

function readTextFile(file)
{
    
    last_changed = null;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'arraybuffer';
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            draw_frame(new Uint8Array(xhr.response));
            // console.log([0]);
        }
    }
    xhr.open('GET', file);
    xhr.send();
}

let interval;



function main() {

    context = canvas.getContext("2d");
    
    readTextFile("..//condensed/" + (count - 1));

    document.getElementById("frame_input").addEventListener("blur", function() {
        console.log(this.value);
        if (!isNaN(parseInt(this.value))) {
            count = parseInt(this.value);
            context.clearRect(0, 0, canvas.width, canvas.height);
            readTextFile("..//condensed/" + (count));
        }
      });

    $("#play").click(function() {
        interval = setInterval(do_frame, 50);
    });

    $("#pause").click(function() {
        clearInterval(interval);
    });
    
    $("#zoomin").click(function() {
        scale = scale * 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        readTextFile("..//condensed/" + (count - 1));
    });
    
    $("#zoomout").click(function() {
        scale = scale / 2;
        if (scale < 1) scale = 1;
        context.clearRect(0, 0, canvas.width, canvas.height);
        readTextFile("..//condensed/" + (count - 1));
    });

    var diff = 50;

    $("#left").click(function() {
        start_x -= diff;
        if (start_x < 0) start_x = 0;
        context.clearRect(0, 0, canvas.width, canvas.height);
        readTextFile("..//condensed/" + (count - 1));
    });

    $("#right").click(function() {
        start_x += diff;
        if (start_x > 1000) start_x = 1000;
        context.clearRect(0, 0, canvas.width, canvas.height);
        readTextFile("..//condensed/" + (count - 1));
    });

    $("#up").click(function() {
        start_y -= diff;
        if (start_y < 0) start_y = 0;
        context.clearRect(0, 0, canvas.width, canvas.height);
        readTextFile("..//condensed/" + (count - 1));
    });

    $("#down").click(function() {
        start_y += diff;
        if (start_y > 1000) start_y = 1000;
        context.clearRect(0, 0, canvas.width, canvas.height);
        readTextFile("..//condensed/" + (count - 1));
    });

    $("#reset").click(function() {
        scale = 1;
        start_x = 0;
        start_y = 0;
        context.clearRect(0, 0, canvas.width, canvas.height);
        readTextFile("..//condensed/" + (count - 1));
    });
    
}


var count = 0;

function do_frame() {
    document.getElementById("frame_input").value = count.toString();
    readTextFile("..//condensed/" + count++);
    if (count >= 10000) {
        clearInterval(interval);
        console.log("ended");
    }
}

