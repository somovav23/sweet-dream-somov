// ============================================
// ПОИСК ПО САЙТУ (работает на всех страницах)
// ============================================
(function() {
    const pages = [
        { 
            title: 'Главная', 
            url: 'index.html', 
            keywords: 'главная sweet dream кондитерская десерты торты пирожные макаруны напитки популярные о нас новости' 
        },
        { 
            title: 'Торты', 
            url: 'pages/cakes.html', 
            keywords: 'торты торт шоколадный трюфель красный бархат фруктовый микс свадебный трёхъярусный фисташка малина заказать начинка ганаш крем-чиз ваниль' 
        },
        { 
            title: 'Пирожные', 
            url: 'pages/pastries.html', 
            keywords: 'пирожные пирожное эклер эклеры чизкейк нью-йорк тарт ягоды профитроли медовик тирамису маскарпоне савоярди красный бархат десерты' 
        },
        { 
            title: 'Макаруны', 
            url: 'pages/macarons.html', 
            keywords: 'макаруны макарон макаронс французские ваниль малина фисташка шоколад лимон ассорти набор конфеты' 
        },
        { 
            title: 'Напитки', 
            url: 'pages/drinks.html', 
            keywords: 'напитки кофе капучино латте чай чёрный зелёный травяной какао маршмеллоу лимонад мята коктейль молочный милкшейк' 
        },
        { 
            title: 'О нас', 
            url: 'pages/about.html', 
            keywords: 'о нас история команда ценности кондитеры анна смирнова игорь петров мария иванова натуральность качество' 
        },
        { 
            title: 'Доставка и оплата', 
            url: 'pages/delivery.html', 
            keywords: 'доставка оплата курьер самовывоз карта visa mastercard мир наличные сбп перевод регионы' 
        },
        { 
            title: 'Контакты', 
            url: 'pages/contacts.html', 
            keywords: 'контакты адрес телефон email почта форма обратной связи режим работы карта проезда обнинск триумф плаза маркса' 
        },
        { 
            title: 'Новости', 
            url: 'pages/news.html', 
            keywords: 'новости акции скидки новинки новогодние торты макаруны фисташка малина 2026' 
        },
        { 
            title: 'Гостевая книга', 
            url: 'pages/guestbook.html', 
            keywords: 'гостевая книга отзывы оставить отзыв мнение гостей' 
        },
        { 
            title: 'Полезные ссылки', 
            url: 'pages/links.html', 
            keywords: 'ссылки ресурсы кулинарные рецепты поварёнок едим дома гастроном кондитерские' 
        }
    ];
    
    const isInPages = window.location.pathname.includes('/pages/');
    const basePath = isInPages ? '../' : '';
    const isMainPage = !isInPages;
    
    function searchPages(query) {
        const q = query.toLowerCase().trim();
        if (!q) return [];
        
        return pages.filter(page => {
            return page.title.toLowerCase().includes(q) || 
                   page.keywords.toLowerCase().includes(q);
        });
    }
    
    function renderResults(query, container) {
        if (!query) {
            container.innerHTML = '<p class="search__empty">Введите поисковый запрос</p>';
            return;
        }
        
        const found = searchPages(query);
        
        if (found.length === 0) {
            container.innerHTML = '<p class="search__empty">По запросу «' + query + '» ничего не найдено 😔</p>';
            return;
        }
        
        let html = '<p class="search__count">Найдено страниц: ' + found.length + '</p><ul class="search__list">';
        found.forEach(page => {
            html += '<li class="search__item">';
            html += '<a href="' + basePath + page.url + '" class="search__link">';
            html += '<span class="search__link-icon">🔗</span> ' + page.title;
            html += '</a></li>';
        });
        html += '</ul>';
        
        container.innerHTML = html;
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('search-form');
        const input = document.getElementById('search-input');
        const results = document.getElementById('search-results');
        
        if (form && input) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const query = input.value.trim();
                
                if (!query) return;
                
                if (isMainPage && results) {
                    renderResults(query, results);
                    const searchSection = document.getElementById('search-section');
                    if (searchSection) {
                        searchSection.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    window.location.href = basePath + 'index.html?search=' + encodeURIComponent(query);
                }
            });
        }
        
        if (isMainPage && results) {
            const urlParams = new URLSearchParams(window.location.search);
            const queryParam = urlParams.get('search');
            
            if (queryParam) {
                if (input) input.value = queryParam;
                renderResults(queryParam, results);
                const searchSection = document.getElementById('search-section');
                if (searchSection) {
                    searchSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    });
})();