document.addEventListener("DOMContentLoaded", () => {
  const starCount = 100;
  const body = document.body;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    // Place the star at a random horizontal position at the top:
    star.style.left = `${Math.random() * 100}vw`;
    // Start the star above the viewport:
    star.style.top = `-${Math.random() * 20}px`;
    // Random delay for natural effect:
    star.style.animationDelay = `${Math.random() * 5}s`;
    body.appendChild(star);
  }
});
