// ============================================
// КАЛЕНДАРЬ НА ТЕКУЩИЙ МЕСЯЦ
// ============================================
(function() {
    function buildCalendar() {
        const container = document.getElementById('calendar');
        if (!container) return;
        
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const today = now.getDate();
        
        const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const startOffset = (firstDay === 0) ? 6 : firstDay - 1;
        
        let html = '<div class="calendar">';
        html += '<div class="calendar__header">' + months[month] + ' ' + year + '</div>';
        html += '<div class="calendar__weekdays">';
        ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].forEach(d => {
            html += '<div class="calendar__weekday">' + d + '</div>';
        });
        html += '</div>';
        html += '<div class="calendar__days">';
        
        for (let i = 0; i < startOffset; i++) {
            html += '<div class="calendar__day calendar__day--empty"></div>';
        }
        
        for (let d = 1; d <= daysInMonth; d++) {
            const isToday = (d === today) ? ' calendar__day--today' : '';
            html += '<div class="calendar__day' + isToday + '">' + d + '</div>';
        }
        
        html += '</div></div>';
        container.innerHTML = html;
    }
    
    document.addEventListener('DOMContentLoaded', buildCalendar);
})();