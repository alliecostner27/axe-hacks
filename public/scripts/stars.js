document.addEventListener("DOMContentLoaded", () => {
    const starCount = 100;
    const body = document.body;
  
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      body.appendChild(star);
    }
  });