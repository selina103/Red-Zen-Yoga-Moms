// Füge dies in deine JS-Datei ein
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function () {
    // Nur auf Touch-Geräten aktivieren
    if (window.matchMedia('(hover: none)').matches) {
      card.classList.toggle('flipped');
    }
  });
});

// ...existing code...
// Trick: Deaktiviere :hover auf Touch-Geräten (iOS/Android)
window.addEventListener('touchstart', function() {}, true);
// ...existing code...
