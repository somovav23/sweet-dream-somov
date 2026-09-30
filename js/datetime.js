// ============================================
// ИНФОРМЕР: дата, время, день недели
// ============================================
(function() {
    function updateDateTime() {
        const now = new Date();
        
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 
                        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        
        const dayName = days[now.getDay()];
        const day = now.getDate();
        const month = months[now.getMonth()];
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const dateElement = document.getElementById('informer-date');
        const timeElement = document.getElementById('informer-time');
        
        if (dateElement) {
            dateElement.textContent = dayName + ', ' + day + ' ' + month + ' ' + year;
        }
        if (timeElement) {
            timeElement.textContent = hours + ':' + minutes + ':' + seconds;
        }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        updateDateTime();
        setInterval(updateDateTime, 1000);
    });
})();