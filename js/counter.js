// ============================================
// СЧЁТЧИК ПОСЕЩЕНИЙ (автономный, на localStorage)
// ============================================
(function() {
    let visits = localStorage.getItem('sweetdream_visits');
    
    if (visits === null) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }
    
    localStorage.setItem('sweetdream_visits', visits);
    
    document.addEventListener('DOMContentLoaded', function() {
        const counterElement = document.getElementById('visit-counter');
        if (counterElement) {
            counterElement.textContent = visits;
        }
    });
})();