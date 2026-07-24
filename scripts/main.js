function showSection(section) {
  document.getElementById('about-section').style.display = section === 'about' ? 'block' : 'none';
  document.getElementById('work-section').style.display = section === 'work' ? 'block' : 'none';
  document.getElementById('section-title').textContent = section === 'about' ? '☆ About Me ☆' : '☆ Where I\'ve Worked ☆';
  document.querySelectorAll('.menu-item').forEach((el, i) => {
    el.classList.toggle('active', (section === 'about' && i === 0) || (section === 'work' && i === 1));
  });
}

// Y2038 countdown
const y2k38 = new Date('2038-01-19T03:14:07Z');
function updateCountdown() {
  const now = new Date();
  let diff = y2k38 - now;
  if (diff < 0) diff = 0;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  document.getElementById('countdown-time').textContent =
    `${days} DAYS ${String(hours).padStart(2,'0')} : ${String(mins).padStart(2,'0')} : ${String(secs).padStart(2,'0')}`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Sonic-style coin burst on donate click
const donateBtn = document.querySelector('.donate-btn');
donateBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const rect = donateBtn.getBoundingClientRect();
  const coinCount = 10;
  for (let i = 0; i < coinCount; i++) {
    const coin = document.createElement('div');
    coin.className = 'coin';
    const dx = Math.round(Math.random() * 140 - 70);
    coin.style.setProperty('--dx', dx + 'px');
    coin.style.left = (rect.left + rect.width / 2 - 10 + (Math.random() * 16 - 8)) + 'px';
    coin.style.top = (rect.top + rect.height / 2 - 10) + 'px';
    coin.style.animationDelay = (i * 0.04) + 's';
    document.body.appendChild(coin);
    coin.addEventListener('animationend', () => coin.remove());
  }
});
