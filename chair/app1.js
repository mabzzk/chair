const canvas = document.getElementById("canvas1"); 
const ctx = canvas.getContext('2d'); 
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight; 

let particlesArray; 

//pos mouse

let mouse = {
    x: null,
    y: null, 
    radius: (canvas.height/95) * (canvas.width / 95)  
}



window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.x; 
        mouse.y = event.y; 
    }
); 



// lag particle 
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x; 
        this.y = y; 
        this.directionX = directionX; 
        this.directionY = directionY; 
        this.size = size; 
        this.color = color; 
    }
    // method to draw individual particle 
    draw(){
        ctx.beginPath(); 
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = "rgb(233, 206, 56)";
        ctx.fill(); 
    }
    // check particle position, check mouse position, move particle, draw particle 
    update(){
        //check if particle is still within canvas
        if(this.x > canvas.width || this.x < 0 ) {
            this.directionX = -this.directionX; 
        } 
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY; 
        }

        //check collision detection - mouse position / particle position

        // prøv å skriv dette ned på papir for å forstå det... 
        let dx = mouse.x - this.x; 
        let dy = mouse.y - this.y; 
        let distance = Math.sqrt(dx * dx + dy * dy); 
        if (distance < mouse.radius + this.size){
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                this.x += 10; 
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 10; 
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                this.y += 10; 
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 10; 
            }
        }
        this.x += this.directionX; 
        this.y += this.directionY; 
        // draw particle 
        this.draw(); 
    }
}

// create particle array 

function init(){
    particlesArray = []; 
    let numberOfParticles = (canvas.height * canvas.width) / 9000; 
    for (let i = 0; i < numberOfParticles*2; i++) {
        let size = (Math.random() * 2) + 7; 
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size*2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size*2);
        let directionX = (Math.random() * 5) -2.5; 
        let directionY = (Math.random() * 5) -2.5;
        let color =  "white"; 

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color)); 
    }
}


// animation loop
function animate () {
    requestAnimationFrame(animate); 
    ctx.clearRect(0,0,innerWidth, innerHeight); 

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(); 

    }
    connect(); 
}

//resize event
window.addEventListener('resize', 
function(){
    canvas.width = innerWidth; 
    canvas.height = innerHeight; 
    mouse.radius = ((canvas.height/80) * (canvas.height/80));
    init(); 
});

//mouse out event 
window.addEventListener('mouseout', 
    function () {
        mouse.x = undefined; 
        mouse.y = undefined; 
    }
);


init();
animate();
