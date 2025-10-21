// TithiToday Enhanced - Main JavaScript
// Version 2.0 with Notifications & Multi-Year Support

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

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

function getYearFromDate(dateStr) {
    return parseInt(dateStr.split('-')[0]);
}

// ============================================
// YEAR SELECTOR
// ============================================

let currentSelectedYear = new Date().getFullYear();

function setupYearSelector() {
    const yearSelector = document.getElementById('yearSelector');
    if (!yearSelector) return;

    // Get saved year or use current
    const savedYear = localStorage.getItem('selectedYear');
    currentSelectedYear = savedYear ? parseInt(savedYear) : new Date().getFullYear();

    yearSelector.value = currentSelectedYear;

    yearSelector.addEventListener('change', (e) => {
        currentSelectedYear = parseInt(e.target.value);
        localStorage.setItem('selectedYear', currentSelectedYear);
        updateFestivalDisplay();
        displayAllFestivals();
    });
}

// ============================================
// FESTIVAL DISPLAY
// ============================================

function displayTodayFestival() {
    const today = getTodayDate();
    const todayData = panchangData[today];

    document.getElementById('currentDate').textContent = formatDate(today);

    if (todayData) {
        document.getElementById('festivalName').textContent = todayData.festival;
        document.getElementById('tithiBadge').textContent = todayData.tithi;
        document.getElementById('tithiName').textContent = todayData.tithi;
        document.getElementById('pakshaName').textContent = todayData.paksha;
        document.getElementById('muhuratTime').textContent = todayData.muhurat;
        document.getElementById('significance').textContent = todayData.significance;
        document.getElementById('meaning').textContent = todayData.meaning;

        const doList = document.getElementById('doList');
        doList.innerHTML = '';
        todayData.do.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            doList.appendChild(li);
        });

        const avoidList = document.getElementById('avoidList');
        avoidList.innerHTML = '';
        todayData.avoid.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            avoidList.appendChild(li);
        });
    } else {
        displayNoFestival();
    }
}

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

function getNextFestival() {
    const today = getTodayDate();
    const dates = Object.keys(panchangData).sort();

    for (let date of dates) {
        if (date > today) {
            return `${panchangData[date].festival} on ${formatDate(date)}`;
        }
    }
    return "Check next year for updates!";
}

function updateFestivalDisplay() {
    displayAllFestivals();
}

// ============================================
// ALL FESTIVALS DISPLAY
// ============================================

function displayAllFestivals() {
    const festivalsTimeline = document.getElementById('festivalsTimeline');
    if (!festivalsTimeline) return;

    const dates = Object.keys(panchangData)
        .filter(date => getYearFromDate(date) === currentSelectedYear)
        .sort();

    festivalsTimeline.innerHTML = '';

    if (dates.length === 0) {
        festivalsTimeline.innerHTML = `
            <div class="no-festival">
                <h3>No festivals found for ${currentSelectedYear}</h3>
                <p>Try selecting a different year.</p>
            </div>
        `;
        return;
    }

    dates.forEach(date => {
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
            <div class="share-buttons" style="margin-top: 1rem; gap: 0.5rem;">
                <button onclick="shareWhatsAppFestival('${date}')" class="share-btn whatsapp" style="font-size: 0.8rem; padding: 0.5rem 1rem;">📱 WhatsApp</button>
                <button onclick="addToCalendar('${date}')" class="share-btn copy" style="font-size: 0.8rem; padding: 0.5rem 1rem;">📅 Calendar</button>
            </div>
        `;

        festivalsTimeline.appendChild(card);
    });
}

// ============================================
// SEARCH FUNCTIONALITY
// ============================================

function searchFestivals() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase();
    const festivalsTimeline = document.getElementById('festivalsTimeline');
    const dates = Object.keys(panchangData).sort();

    festivalsTimeline.innerHTML = '';

    const filteredDates = dates.filter(date => {
        const festival = panchangData[date];
        return festival.festival.toLowerCase().includes(searchTerm) ||
               festival.tithi.toLowerCase().includes(searchTerm) ||
               festival.paksha.toLowerCase().includes(searchTerm) ||
               festival.meaning.toLowerCase().includes(searchTerm);
    });

    if (filteredDates.length === 0) {
        festivalsTimeline.innerHTML = `
            <div class="no-festival">
                <h3>No festivals found</h3>
                <p>Try: Diwali, Holi, Ekadashi, Purnima, etc.</p>
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
        `;

        festivalsTimeline.appendChild(card);
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function setupNotificationPanel() {
    const notificationFab = document.getElementById('notificationFab');
    const notificationPanel = document.getElementById('notificationPanel');
    const closePanel = document.getElementById('closePanel');

    if (notificationFab) {
        notificationFab.addEventListener('click', () => {
            notificationPanel.classList.toggle('open');
        });
    }

    if (closePanel) {
        closePanel.addEventListener('click', () => {
            notificationPanel.classList.remove('open');
        });
    }

    checkNotificationPermissions();
}

async function enableBrowserNotifications() {
    if (!('Notification' in window)) {
        alert('Your browser doesn\'t support notifications');
        return;
    }

    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
        localStorage.setItem('notificationsEnabled', 'true');
        alert('✅ Notifications enabled! You\'ll get reminders before festivals.');
        scheduleDailyCheck();
    } else {
        alert('❌ Notifications blocked. Enable in browser settings.');
    }
}

function checkNotificationPermissions() {
    if ('Notification' in window && Notification.permission === 'granted') {
        const enabled = localStorage.getItem('notificationsEnabled');
        const checkbox = document.getElementById('browserNotifications');
        if (checkbox) checkbox.checked = enabled === 'true';
    }
}

function scheduleDailyCheck() {
    checkTomorrowFestivals();
    setInterval(checkTomorrowFestivals, 24 * 60 * 60 * 1000);
}

function checkTomorrowFestivals() {
    const tomorrow = getTomorrowDate();
    const festival = panchangData[tomorrow];

    if (festival && Notification.permission === 'granted') {
        new Notification('🪔 Festival Tomorrow!', {
            body: `${festival.festival} - ${festival.meaning}`,
            icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪔</text></svg>',
            requireInteraction: false
        });
    }
}

function saveEmailPreference() {
    const emailInput = document.getElementById('emailInput');
    if (emailInput && emailInput.value) {
        localStorage.setItem('reminderEmail', emailInput.value);
        alert('✅ Email saved! You\'ll receive reminders.');
    }
}

// ============================================
// CALENDAR INTEGRATION
// ============================================

function addToCalendar(dateStr) {
    const festival = panchangData[dateStr];
    if (!festival) return;

    const event = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${dateStr.replace(/-/g, '')}
DTEND:${dateStr.replace(/-/g, '')}
SUMMARY:${festival.festival}
DESCRIPTION:${festival.meaning}\n\nTithi: ${festival.tithi}\nMuhurat: ${festival.muhurat}
BEGIN:VALARM
TRIGGER:-P1D
DESCRIPTION:Festival Reminder
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([event], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${festival.festival.replace(/\s+/g, '_')}.ics`;
    link.click();
    URL.revokeObjectURL(url);
}

// ============================================
// SHARING FUNCTIONS
// ============================================

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

function shareWhatsAppFestival(dateStr) {
    const festival = panchangData[dateStr];
    if (!festival) return;

    const message = `🪔 Upcoming Festival Alert!\n\n` +
                   `📅 ${festival.festival}\n` +
                   `Date: ${formatDate(dateStr)}\n` +
                   `🌙 Tithi: ${festival.tithi}\n` +
                   `💡 ${festival.meaning}\n\n` +
                   `Check all festivals: https://marketing97-app.github.io/tithitoday/`;

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function shareTwitter() {
    const today = getTodayDate();
    const todayData = panchangData[today];

    if (todayData) {
        const message = `🪔 Today: ${todayData.festival}\n` +
                       `${todayData.meaning}\n\n` +
                       `#TithiToday #HinduCalendar #IndianFestivals`;

        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=https://marketing97-app.github.io/tithitoday/`;
        window.open(url, '_blank');
    }
}

function copyLink() {
    const url = 'https://marketing97-app.github.io/tithitoday/';

    navigator.clipboard.writeText(url).then(() => {
        alert('✅ Link copied! Share it with friends.');
    }).catch(() => {
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('✅ Link copied!');
    });
}

// ============================================
// DARK MODE
// ============================================

function setupDarkMode() {
    const darkModeBtn = document.getElementById('darkModeToggle');
    if (!darkModeBtn) return;

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

// ============================================
// NAVIGATION
// ============================================

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🪔 TithiToday Enhanced Loading...');

    // Core functions
    displayTodayFestival();
    displayAllFestivals();
    setupYearSelector();
    setupDarkMode();
    setupNavigation();
    setupNotificationPanel();

    // Check for notifications
    if (localStorage.getItem('notificationsEnabled') === 'true') {
        scheduleDailyCheck();
    }

    console.log('✅ TithiToday Enhanced Ready!');
    console.log(`📅 Current Year: ${currentSelectedYear}`);
    console.log(`🔔 Notifications: ${Notification.permission}`);
});

// Make functions global for onclick handlers
window.shareWhatsApp = shareWhatsApp;
window.shareWhatsAppFestival = shareWhatsAppFestival;
window.shareTwitter = shareTwitter;
window.copyLink = copyLink;
window.searchFestivals = searchFestivals;
window.addToCalendar = addToCalendar;
window.enableBrowserNotifications = enableBrowserNotifications;
window.saveEmailPreference = saveEmailPreference;


// ============================================
// PANCHANG CALENDAR FUNCTIONALITY
// ============================================
let currentCalendarMonth = new Date().getMonth();
let currentCalendarYear = new Date().getFullYear();

function initCalendar() {
    renderCalendar(currentCalendarMonth, currentCalendarYear);
}

function previousMonth() {
    currentCalendarMonth--;
    if (currentCalendarMonth < 0) {
        currentCalendarMonth = 11;
        currentCalendarYear--;
    }
    renderCalendar(currentCalendarMonth, currentCalendarYear);
}

function nextMonth() {
    currentCalendarMonth++;
    if (currentCalendarMonth > 11) {
        currentCalendarMonth = 0;
        currentCalendarYear++;
    }
    renderCalendar(currentCalendarMonth, currentCalendarYear);
}

function renderCalendar(month, year) {
    const calendarGrid = document.getElementById('calendarGrid');
    const monthTitle = document.getElementById('calendarMonth');

    if (!calendarGrid || !monthTitle) return;

    // Month names
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];

    monthTitle.textContent = `${monthNames[month]} ${year}`;

    // Clear calendar
    calendarGrid.innerHTML = '';

    // Add day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
        const header = document.createElement('div');
        header.className = 'calendar-day-header';
        header.textContent = day;
        calendarGrid.appendChild(header);
    });

    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    // Today's date for highlighting
    const today = new Date();
    const isCurrentMonth = (month === today.getMonth() && year === today.getFullYear());

    // Add previous month's trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
        const dayCell = createDayCell(daysInPrevMonth - i, month - 1, year, true);
        calendarGrid.appendChild(dayCell);
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = createDayCell(day, month, year, false, isCurrentMonth && day === today.getDate());
        calendarGrid.appendChild(dayCell);
    }

    // Add next month's leading days
    const totalCells = firstDay + daysInMonth;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let day = 1; day <= remainingCells; day++) {
        const dayCell = createDayCell(day, month + 1, year, true);
        calendarGrid.appendChild(dayCell);
    }
}

function createDayCell(day, month, year, isOtherMonth, isToday) {
    const cell = document.createElement('div');
    cell.className = 'calendar-day';

    if (isOtherMonth) {
        cell.classList.add('other-month');
    }

    if (isToday) {
        cell.classList.add('today');
    }

    // Format date for lookup
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    // Add date number
    const dateNum = document.createElement('div');
    dateNum.className = 'calendar-date';
    dateNum.textContent = day;
    cell.appendChild(dateNum);

    // Check if this date has festival data
    if (panchangData[dateStr]) {
        const data = panchangData[dateStr];

        // Add tithi info
        const tithiDiv = document.createElement('div');
        tithiDiv.className = 'calendar-tithi';
        tithiDiv.textContent = data.tithi;
        cell.appendChild(tithiDiv);

        // Add festival name if exists
        if (data.festival) {
            cell.classList.add('festival');
            const festivalDiv = document.createElement('div');
            festivalDiv.className = 'calendar-festival';
            festivalDiv.textContent = data.festival;
            cell.appendChild(festivalDiv);
        }

        // Special highlighting
        if (data.tithi === 'Ekadashi') {
            cell.classList.add('ekadashi');
        }
        if (data.tithi === 'Purnima' || data.tithi === 'Amavasya') {
            cell.classList.add('purnima');
        }

        // Add click event to show details
        cell.onclick = () => showFestivalDetails(dateStr);
        cell.style.cursor = 'pointer';
    }

    return cell;
}

// Initialize calendar when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('calendarGrid')) {
        initCalendar();
    }
});


// ============================================
// ENHANCED SHARE FUNCTIONS
// ============================================
function shareOnWhatsApp() {
    const festivalData = getCurrentFestivalData();
    const text = `Check out ${festivalData.festival} on ${festivalData.date}! ${festivalData.significance}`;
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
}

function shareOnInstagram() {
    // Instagram doesn't support direct sharing via URL, so we copy to clipboard
    copyToClipboard();
    alert('Festival details copied! You can now paste it in your Instagram story or post.');
}

function shareOnTwitter() {
    const festivalData = getCurrentFestivalData();
    const text = `🎊 ${festivalData.festival} - ${festivalData.date}\n${festivalData.significance}`;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
}

function addToCalendar() {
    const festivalData = getCurrentFestivalData();
    alert('Calendar integration coming soon! For now, you can manually add: ' + festivalData.festival + ' on ' + festivalData.date);
}

function copyToClipboard() {
    const festivalData = getCurrentFestivalData();
    const text = `${festivalData.festival} - ${festivalData.date}\n${festivalData.significance}\n${window.location.href}`;

    navigator.clipboard.writeText(text).then(() => {
        alert('Festival details copied to clipboard!');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Festival details copied to clipboard!');
    });
}

function getCurrentFestivalData() {
    const today = getTodayDate();
    const data = panchangData[today];
    if (data) {
        return {
            festival: data.festival || 'Festival',
            date: formatDate(today),
            significance: data.significance || ''
        };
    }
    return {
        festival: 'Hindu Festival',
        date: formatDate(today),
        significance: 'Check out this amazing Hindu calendar!'
    };
}
