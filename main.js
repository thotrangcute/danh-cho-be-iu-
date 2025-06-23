// Mở thư
document.querySelector(".open-letter-btn").addEventListener("click", () => {
  document.getElementById("loveLetter").style.display = "block";
});

// Tuyết rơi
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");
let W = window.innerWidth;
let H = window.innerHeight;
canvas.width = W;
canvas.height = H;

const maxFlakes = 100;
const flakes = [];

for (let i = 0; i < maxFlakes; i++) {
  flakes.push({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 4 + 1,
    d: Math.random() * maxFlakes,
  });
}

function drawFlakes() {
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < maxFlakes; i++) {
    const f = flakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveFlakes();
}

let angle = 0;
function moveFlakes() {
  angle += 0.01;
  for (let i = 0; i < maxFlakes; i++) {
    const f = flakes[i];
    f.y += Math.cos(angle + f.d) + 1 + f.r / 2;
    f.x += Math.sin(angle) * 2;

    if (f.y > H) {
      flakes[i] = { x: Math.random() * W, y: 0, r: f.r, d: f.d };
    }
  }
}

setInterval(drawFlakes, 25);

// Resize canvas
window.addEventListener("resize", () => {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
});

      const emojis = ["💖", "💘", "💞", "🌷", "💕", "💓"];
      function createFallingEmoji() {
        const emoji = document.createElement("div");
        emoji.classList.add("falling");
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.animationDuration = Math.random() * 2 + 3 + "s";
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 6000);
      }

      setInterval(createFallingEmoji, 200);

      function replyYes() {
        document.getElementById("response").textContent =
          "Me biết màaaa 😍💗 Bé LÀ vợ me me biết mà 💑";
        for (let i = 0; i < 80; i++) createFallingEmoji();
      }

      function replyNo() {
        document.getElementById("response").textContent =
          "Huhu, hết yêu thương mk gòi  😭💔";
      }

      window.addEventListener("click", () => {
        document.getElementById("loveSong").play();
      });
