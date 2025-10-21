// TithiToday - Main JavaScript File
// Auto-update logic and interactivity

// Get today's date in YYYY-MM-DD format
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Format date for display
function formatDate(dateStr) {
    const date = new Date(dateStr + 'T00:00:00');
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-IN', options);
}

// Display today's festival
function displayTodayFestival() {
    const today = getTodayDate();
    const todayData = panchangData[today];

    // Update current date display
    document.getElementById('currentDate').textContent = formatDate(today);

    if (todayData) {
        // Festival exists for today
        document.getElementById('festivalName').textContent = todayData.festival;
        document.getElementById('tithiBadge').textContent = todayData.tithi;
        document.getElementById('tithiName').textContent = todayData.tithi;
        document.getElementById('pakshaName').textContent = todayData.paksha;
        document.getElementById('muhuratTime').textContent = todayData.muhurat;
        document.getElementById('significance').textContent = todayData.significance;
        document.getElementById('meaning').textContent = todayData.meaning;

        // Display Do list
        const doList = document.getElementById('doList');
        doList.innerHTML = '';
        todayData.do.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            doList.appendChild(li);
        });

        // Display Avoid list
        const avoidList = document.getElementById('avoidList');
        avoidList.innerHTML = '';
        todayData.avoid.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            avoidList.appendChild(li);
        });
    } else {
        // No festival today
        displayNoFestival();
    }
}

// Display when no festival today
function displayNoFestival() {
    const festivalCard = document.getElementById('todayFestival');
    festivalCard.innerHTML = `
        <div class="no-festival">
            <h3>🗓️ No Major Festival Today</h3>
            <p>But every day is special! Check out upcoming festivals below.</p>
            <p style="margin-top: 1rem;"><strong>Next Festival:</strong> ${getNextFestival()}</p>
        </div>
    `;
}

// Get next upcoming festival
function getNextFestival() {
    const today = getTodayDate();
    const dates = Object.keys(panchangData).sort();

    for (let date of dates) {
        if (date > today) {
            return `${panchangData[date].festival} on ${formatDate(date)}`;
        }
    }

    return "Check 2026 calendar for updates!";
}

// Display all festivals in timeline
function displayAllFestivals() {
    const festivalsTimeline = document.getElementById('festivalsTimeline');
    const dates = Object.keys(panchangData).sort();

    festivalsTimeline.innerHTML = '';

    dates.forEach(date => {
        const festival = panchangData[date];
        const card = document.createElement('div');
        card.className = 'festival-mini-card';
        card.onclick = () => scrollToTop();

        card.innerHTML = `
            <h3>${festival.festival}</h3>
            <p class="date">📅 ${formatDate(date)}</p>
            <div class="tithi-info">
                <strong>Tithi:</strong> ${festival.tithi} (${festival.paksha})
            </div>
            <p style="margin-top: 0.5rem; font-size: 0.9rem;">${festival.meaning}</p>
        `;

        festivalsTimeline.appendChild(card);
    });
}

// Search festivals
function searchFestivals() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const festivalsTimeline = document.getElementById('festivalsTimeline');
    const dates = Object.keys(panchangData).sort();

    festivalsTimeline.innerHTML = '';

    const filteredDates = dates.filter(date => {
        const festival = panchangData[date];
        return festival.festival.toLowerCase().includes(searchInput) ||
               festival.tithi.toLowerCase().includes(searchInput) ||
               festival.paksha.toLowerCase().includes(searchInput);
    });

    if (filteredDates.length === 0) {
        festivalsTimeline.innerHTML = `
            <div class="no-festival" style="grid-column: 1/-1;">
                <h3>No festivals found</h3>
                <p>Try searching for: Diwali, Holi, Ekadashi, Purnima, etc.</p>
            </div>
        `;
        return;
    }

    filteredDates.forEach(date => {
        const festival = panchangData[date];
        const card = document.createElement('div');
        card.className = 'festival-mini-card';

        card.innerHTML = `
            <h3>${festival.festival}</h3>
            <p class="date">📅 ${formatDate(date)}</p>
            <div class="tithi-info">
                <strong>Tithi:</strong> ${festival.tithi} (${festival.paksha})
            </div>
            <p style="margin-top: 0.5rem; font-size: 0.9rem;">${festival.meaning}</p>
        `;

        festivalsTimeline.appendChild(card);
    });
}

// Dark mode toggle
function setupDarkMode() {
    const darkModeBtn = document.getElementById('darkModeToggle');

    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeBtn.textContent = '☀️';
    }

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeBtn.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeBtn.textContent = '🌙';
        }
    });
}

// Navigation smooth scroll
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            link.classList.add('active');

            // Scroll to section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Share on WhatsApp
function shareWhatsApp() {
    const today = getTodayDate();
    const todayData = panchangData[today];

    if (todayData) {
        const message = `🪔 TithiToday - ${formatDate(today)}\n\n` +
                       `🎊 Festival: ${todayData.festival}\n` +
                       `📅 Tithi: ${todayData.tithi}\n` +
                       `💡 ${todayData.meaning}\n\n` +
                       `Visit: https://marketing97-app.github.io/tithitoday/`;

        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
}

// Share on Twitter
function shareTwitter() {
    const today = getTodayDate();
    const todayData = panchangData[today];

    if (todayData) {
        const message = `🪔 Today's Festival: ${todayData.festival}\n` +
                       `${todayData.meaning}\n\n` +
                       `#TithiToday #HinduCalendar`;

        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=https://marketing97-app.github.io/tithitoday/`;
        window.open(url, '_blank');
    }
}

// Copy link to clipboard
function copyLink() {
    const url = 'https://marketing97-app.github.io/tithitoday/';

    navigator.clipboard.writeText(url).then(() => {
        alert('✅ Link copied! Share it with your friends.');
    }).catch(() => {
        // Fallback for older browsers
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('✅ Link copied! Share it with your friends.');
    });
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🪔 TithiToday Loading...');

    // Display today's festival
    displayTodayFestival();

    // Display all festivals
    displayAllFestivals();

    // Setup dark mode
    setupDarkMode();

    // Setup navigation
    setupNavigation();

    console.log('✅ TithiToday Ready!');
});

// Service Worker for offline support (optional - uncomment to enable)
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}
*/