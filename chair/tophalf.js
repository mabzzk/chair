//MOVEMENT ANIMATION

const chairMega = document.querySelector('.chair_mega');
const topHalf = document.querySelector('.top_half'); 


topHalf.style.transform = `rotateY(30deg) rotateX(10deg)`


const bottom = document.getElementById("canvas2parent"); 
bottom.style.transform = `rotateY(-20deg) rotateX(-70deg)`



/* 
//Moving animation event 
chairMega.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10; 
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10; 
    topHalf.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

}); 
 */

//NB! husk å leke med perspektive fra css! for en mer drøy effekt. 
 
