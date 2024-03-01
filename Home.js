const numStars = 50; // Anzahl der Sterne
const starsContainer = document.querySelector('.stars');

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('stars');
  star.style.setProperty('--star-x', Math.random()); // Zufällige horizontale Position
  star.style.setProperty('--anim-duration', Math.random() * 5 + 5); // Zufällige Animationsdauer zwischen 5 und 10 Sekunden
  starsContainer.appendChild(star);
}
