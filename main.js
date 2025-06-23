const noBtn = document.getElementById("noBtn");
const music = document.getElementById("loveSong");
let musicStarted = false;

function replyYes() {
  document.getElementById("response").textContent =
    "Anh biết màaaa 😍💗 Bé là vợ me mà  💑";
  startMusic();
  launchFireworks();
}

function startMusic() {
  if (!musicStarted) {
    music.play();
    musicStarted = true;
  }
}

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 300) - 150;
  const y = Math.floor(Math.random() * 200) - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener("click", () => {
  startMusic();
});

// 🎆 PHÁO HOA
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

function launchFireworks() {
  for (let i = 0; i < 10; i++) {
    const x = Math.random() * canvas.width;
    const y = (Math.random() * canvas.height) / 2;
    for (let j = 0; j < 50; j++) {
      particles.push({
        x,
        y,
        radius: Math.random() * 3 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`,
        dx: Math.random() * 6 - 3,
        dy: Math.random() * 6 - 3,
        life: 100,
      });
    }
  }
}

function drawFireworks() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;
    p.life--;

    if (p.life <= 0) particles.splice(i, 1);
  }

  requestAnimationFrame(drawFireworks);
}

drawFireworks();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
