// ============================================
// РЕЙТИНГ САЙТА (звёзды)
// ============================================
(function() {
    const STORAGE_KEY = 'sweetdream_rating';
    
    document.addEventListener('DOMContentLoaded', function() {
        const stars = document.querySelectorAll('.rating__star');
        const result = document.getElementById('rating-result');
        
        if (!stars.length) return;
        
        let savedRating = localStorage.getItem(STORAGE_KEY);
        
        function highlightStars(count) {
            stars.forEach((star, index) => {
                if (index < count) {
                    star.classList.add('rating__star--active');
                } else {
                    star.classList.remove('rating__star--active');
                }
            });
        }
        
        if (savedRating) {
            highlightStars(parseInt(savedRating));
            if (result) {
                result.textContent = 'Ваша оценка: ' + savedRating + ' из 5 ⭐';
            }
        }
        
        stars.forEach((star, index) => {
            star.addEventListener('click', function() {
                const rating = index + 1;
                localStorage.setItem(STORAGE_KEY, rating);
                savedRating = rating;
                highlightStars(rating);
                if (result) {
                    result.textContent = 'Спасибо! Ваша оценка: ' + rating + ' из 5 ⭐';
                }
            });
            
            star.addEventListener('mouseenter', function() {
                highlightStars(index + 1);
            });
        });
        
        const ratingContainer = document.querySelector('.rating');
        if (ratingContainer) {
            ratingContainer.addEventListener('mouseleave', function() {
                highlightStars(savedRating ? parseInt(savedRating) : 0);
            });
        }
    });
})();