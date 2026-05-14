
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("discoverBtn");
  const overlay = document.getElementById("transitionOverlay");

  btn.addEventListener("click", function() {
    btn.classList.add("clicked");        // effet bouton
    overlay.classList.add("active");     // overlay visible

    // Redirection après la transition
    setTimeout(function() {
      window.location.href = "apropos.html";
    }, 500); // durée de l’overlay (500ms)
  });
});


const canvas = document.getElementById('heroParticles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 60;

for(let i=0; i<particleCount; i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2 + 1,
    speed: Math.random()*0.3 + 0.1,
    angle: Math.random()*Math.PI*2
  });
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    if(p.x>canvas.width) p.x=0;
    if(p.x<0) p.x=canvas.width;
    if(p.y>canvas.height) p.y=0;
    if(p.y<0) p.y=canvas.height;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = "rgba(0,255,255,0.15)";
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// main.js
const overlay = document.getElementById('transitionOverlay');
document.querySelectorAll('.subcategory-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const link = btn.getAttribute('href');
    overlay.classList.add('active');
    setTimeout(() => {
      window.location.href = link;
    }, 500); // durée de la transition
  });
});