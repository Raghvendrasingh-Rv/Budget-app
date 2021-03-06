/* www.youtube.com/CodeExplained */
const chart = document.querySelector(".chart");

// create canvas element
const canvas = document.createElement("canvas");
canvas.width=50;
canvas.height=50;

// append canvas to chsrt element

chart.appendChild(canvas);

// to draw on canvas we need to get context of canvas

const ctx = canvas.getContext("2d");

// change line width
ctx.lineWidth = 8;
//circle radius

const R = 20;

function drawCircle(color , ratio , anticlockwise){
    ctx.strokeStyle= color;
    ctx.beginPath();
    ctx.arc(canvas.width/2 , canvas.height/2 , R , 0 , ratio *2*(Math.PI), anticlockwise);
    ctx.stroke();
}


function updateChart(income , outcome){
    let ratio = income / (income+outcome);

    drawCircle("#ffffff", -ratio , true);
    drawCircle("#f06240" , 1-ratio , false);
}