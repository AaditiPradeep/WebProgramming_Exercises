const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw the sun
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(410, 80, 30, 0, Math.PI * 2);
ctx.fill();

// Sun rays
ctx.strokeStyle = 'yellow';
ctx.lineWidth = 2;
for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    const angle = i * Math.PI / 4;
    ctx.moveTo(410 + Math.cos(angle) * 30, 80 + Math.sin(angle) * 30);
    ctx.lineTo(410 + Math.cos(angle) * 40, 80 + Math.sin(angle) * 40);
    ctx.stroke();
}

// Draw the pond
ctx.fillStyle = 'rgba(173, 216, 230, 0.7)'; // Light blue
ctx.beginPath();
ctx.ellipse(270, 200, 80, 40, 0, 0, Math.PI * 2);
ctx.fill();

// Draw the house
// House body
ctx.fillStyle = '#F4A460'; // Sandy brown
ctx.fillRect(100, 180, 70, 70);

// Roof
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.moveTo(100, 180);
ctx.lineTo(135, 130);
ctx.lineTo(170, 180);
ctx.closePath();
ctx.fill();

// Door
ctx.fillStyle = '#8B4513'; // Brown
ctx.fillRect(125, 210, 20, 40);

// Window
ctx.fillStyle = 'blue';
ctx.fillRect(110, 200, 15, 15);

// Draw rocks/stones
ctx.fillStyle = '#808080'; // Gray

// Rocks on the left
ctx.beginPath();
ctx.arc(140, 280, 10, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(160, 285, 10, 0, Math.PI * 2);
ctx.fill();

// Rock near the duck
ctx.beginPath();
ctx.arc(380, 285, 10, 0, Math.PI * 2);
ctx.fill();

// Draw the flower
// Stem
ctx.strokeStyle = 'green';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(400, 250);
ctx.lineTo(400, 190);
ctx.stroke();

// Petals
ctx.fillStyle = 'pink';
ctx.beginPath();
ctx.arc(400, 180, 10, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(410, 170, 10, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(390, 170, 10, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(410, 185, 10, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(390, 185, 10, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(400, 160, 10, 0, Math.PI * 2);
ctx.fill();

// Center
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(400, 175, 5, 0, Math.PI * 2);
ctx.fill();

// Draw the duck
// Duck body
ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(350, 270, 20, 0, Math.PI * 2);
ctx.fill();

// Duck head
ctx.beginPath();
ctx.arc(370, 260, 10, 0, Math.PI * 2);
ctx.fill();

// Duck eye
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(375, 257, 3, 0, Math.PI * 2);
ctx.fill();

// Duck beak
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.moveTo(380, 260);
ctx.lineTo(390, 265);
ctx.lineTo(380, 270);
ctx.closePath();
ctx.fill();

// Boat on pond
x=230,y=180;
dx=3;
function drawBoat(){
    ctx.fillStyle = 'rgba(173, 216, 230, 0.7)';
    ctx.fillRect(x-5, y-2, 80, 20);
   
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+70,y);
    ctx.lineTo(x+60,y+10);
    ctx.lineTo(x+10,y+10);
    ctx.closePath();
    ctx.fill();

    x+=dx;

    if(x>=260 || x<=200)
        dx=-dx;

    requestAnimationFrame(drawBoat)
}
drawBoat();