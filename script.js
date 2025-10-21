// TithiToday - JavaScript
// Site Name: TithiToday

function getTodayDate() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function displayTodayFestival() {
    const today = getTodayDate();
    const data = panchangData[today];

    document.getElementById('currentDate').textContent = formatDate(today);
    const card = document.getElementById('todayFestival');

    if (data) {
        card.innerHTML = `
            <div class="festival-header">
                <h2>${data.festival}</h2>
                <span class="badge">${data.tithi}</span>
            </div>
            <div class="detail-row">📅 <strong>Tithi:</strong> ${data.tithi}</div>
            <div class="detail-row">🌙 <strong>Paksha:</strong> ${data.paksha}</div>
            <div class="detail-row">🕐 <strong>Muhurat:</strong> ${data.muhurat}</div>

            <div class="significance-box">
                <h3>💡 Significance</h3>
                <p>${data.significance}</p>
            </div>

            <div class="meaning-box">
                <h3>📖 What It Means</h3>
                <p>${data.meaning}</p>
            </div>

            <div class="actions-grid">
                <div class="do-box">
                    <h4>✅ Do Today</h4>
                    <ul>${data.do.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
                <div class="avoid-box">
                    <h4>❌ Avoid</h4>
                    <ul>${data.avoid.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
            </div>

            <div class="share-buttons">
                <button onclick="shareWhatsApp('${today}')" class="share-btn whatsapp">📱 WhatsApp</button>
                <button onclick="shareTwitter('${today}')" class="share-btn twitter">🐦 Twitter</button>
                <button onclick="addToCalendar('${today}')" class="share-btn calendar">📅 Calendar</button>
                <button onclick="copyLink()" class="share-btn copy">🔗 Copy</button>
            </div>
        `;
    } else {
        card.innerHTML = `<div class="no-festival"><h3>🗓️ No Major Festival Today</h3><p>Check upcoming festivals below!</p></div>`;
    }
}

function displayAllFestivals() {
    const year = document.getElementById('yearSelector').value;
    const grid = document.getElementById('festivalsGrid');
    const dates = Object.keys(panchangData).filter(d => d.startsWith(year)).sort();

    document.getElementById('selectedYear').textContent = year;

    grid.innerHTML = dates.map(date => {
        const f = panchangData[date];
        return `
            <div class="festival-mini-card">
                <h3>${f.festival}</h3>
                <p style="color: #666; margin: 0.5rem 0;">📅 ${formatDate(date)}</p>
                <p style="background: rgba(255,107,53,0.1); padding: 0.5rem; border-radius: 8px;">
                    <strong>Tithi:</strong> ${f.tithi} (${f.paksha})
                </p>
                <p style="margin-top: 0.5rem;">${f.meaning}</p>
            </div>
        `;
    }).join('');
}

function searchFestivals() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const grid = document.getElementById('festivalsGrid');
    const dates = Object.keys(panchangData).sort();

    const filtered = dates.filter(d => {
        const f = panchangData[d];
        return f.festival.toLowerCase().includes(term) || f.meaning.toLowerCase().includes(term);
    });

    grid.innerHTML = filtered.map(date => {
        const f = panchangData[date];
        return `<div class="festival-mini-card"><h3>${f.festival}</h3><p>${formatDate(date)}</p></div>`;
    }).join('');
}

function setupNotificationPanel() {
    document.getElementById('notificationFab').onclick = () => {
        document.getElementById('notificationPanel').classList.add('open');
    };
    document.getElementById('closePanel').onclick = () => {
        document.getElementById('notificationPanel').classList.remove('open');
    };
}

function joinWhatsApp() {
    window.open('https://wa.me/?text=' + encodeURIComponent('🪔 Hi! I want to join TithiToday festival reminders!'), '_blank');
}

function saveEmail() {
    const email = document.getElementById('emailInput').value;
    if (email) {
        localStorage.setItem('email', email);
        alert('✅ Email saved!');
    }
}

function enableNotifications() {
    if ('Notification' in window) {
        Notification.requestPermission().then(p => {
            alert(p === 'granted' ? '✅ Notifications enabled!' : '❌ Permission denied');
        });
    }
}

function addToCalendar(dateStr) {
    const f = panchangData[dateStr];
    const ics = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${dateStr.replace(/-/g, '')}
DTEND:${dateStr.replace(/-/g, '')}
SUMMARY:${f.festival}
DESCRIPTION:${f.meaning}
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = f.festival.replace(/\s+/g, '_') + '.ics';
    a.click();
}

function shareWhatsApp(dateStr) {
    const f = panchangData[dateStr];
    const msg = `🪔 ${f.festival}\n📅 ${formatDate(dateStr)}\n🌙 ${f.tithi}\n💡 ${f.meaning}\n\nhttps://marketing97-app.github.io/tithitoday/`;
    window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
}

function shareTwitter(dateStr) {
    const f = panchangData[dateStr];
    const msg = `🪔 ${f.festival} - ${formatDate(dateStr)}\n${f.meaning}\n#TithiToday #HinduFestivals`;
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(msg) + '&url=https://marketing97-app.github.io/tithitoday/', '_blank');
}

function copyLink() {
    navigator.clipboard.writeText('https://marketing97-app.github.io/tithitoday/').then(() => alert('✅ Link copied!'));
}

function setupDarkMode() {
    const btn = document.getElementById('darkModeToggle');
    if (localStorage.getItem('darkMode') === 'yes') {
        document.body.classList.add('dark-mode');
        btn.textContent = '☀️';
    }
    btn.onclick = () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark ? 'yes' : 'no');
        btn.textContent = isDark ? '☀️' : '🌙';
    };
}

function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const target = document.querySelector(link.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        };
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('🪔 TithiToday Loading...');
    displayTodayFestival();
    displayAllFestivals();
    setupNotificationPanel();
    setupDarkMode();
    setupNavigation();
    document.getElementById('yearSelector').onchange = displayAllFestivals;
    console.log('✅ TithiToday Ready!');
});