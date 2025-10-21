// Hindu Panchang Calendar Application
// Global variables for state management
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let selectedYear = 2025; // Default to 2025

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    displayTodaysPanchang();
    renderCalendar();
    displayUpcomingFestivals();
    renderFestivalTimeline();
});

function initializeApp() {
    // Set current date display
    document.getElementById('currentDate').textContent = formatDate(currentDate);
    
    // Set current month display
    document.getElementById('currentMonth').textContent = 
        `${getMonthName(currentMonth)} ${selectedYear}`;
}

function setupEventListeners() {
    // Navigation hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Month navigation
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            // Keep year as 2025 for this demo
        }
        updateCalendarDisplay();
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            // Keep year as 2025 for this demo
        }
        updateCalendarDisplay();
    });
    
    // Year selector
    document.getElementById('yearSelector').addEventListener('change', (e) => {
        selectedYear = parseInt(e.target.value);
        currentYear = selectedYear;
        updateCalendarDisplay();
    });
    
    // Modal functionality
    const modal = document.getElementById('dayModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function displayTodaysPanchang() {
    const today = currentDate.toISOString().split('T')[0];
    const todayData = panchangData2025[today];
    const container = document.getElementById('todayPanchangCard');
    
    if (!todayData) {
        container.innerHTML = `
            <div class="text-center">
                <h3>Today's Panchang</h3>
                <p>Data not available for today's date.</p>
            </div>
        `;
        return;
    }
    
    const festivalBadge = todayData.has_major_festival ? 
        `<div class="festival-badge">
            <span class="festival-emoji">${festivalEmojis[todayData.festival] || '🎉'}</span>
            <strong>${todayData.festival}</strong>
        </div>` : '';
    
    container.innerHTML = `
        <div class="panchang-details">
            <div class="panchang-header">
                <h3>Today's Panchang - ${formatDate(currentDate)}</h3>
                ${festivalBadge}
            </div>
            <div class="panchang-info">
                <div class="info-row">
                    <strong>Tithi:</strong> ${todayData.tithi}
                </div>
                <div class="info-row">
                    <strong>Paksha:</strong> ${todayData.paksha}
                </div>
                <div class="info-row">
                    <strong>Vara:</strong> ${todayData.vara}
                </div>
                <div class="info-row">
                    <strong>Nakshatra:</strong> ${todayData.nakshatra}
                </div>
                <div class="info-row">
                    <strong>Deity:</strong> ${todayData.deity}
                </div>
                <div class="info-row">
                    <strong>Auspicious Time:</strong> ${todayData.muhurat}
                </div>
                <div class="significance">
                    <strong>Significance:</strong> ${todayData.significance}
                </div>
                ${todayData.meaning ? `<div class="meaning"><em>${todayData.meaning}</em></div>` : ''}
            </div>
        </div>
    `;
}

function renderCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    calendarGrid.innerHTML = '';
    
    // Add day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
        const header = document.createElement('div');
        header.className = 'calendar-header-day';
        header.textContent = day;
        header.style.fontWeight = 'bold';
        header.style.textAlign = 'center';
        header.style.padding = 'var(--space-8)';
        calendarGrid.appendChild(header);
    });
    
    const firstDay = new Date(selectedYear, currentMonth, 1);
    const lastDay = new Date(selectedYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    // Generate 42 days (6 weeks)
    for (let i = 0; i < 42; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        
        const dayElement = createCalendarDay(date);
        calendarGrid.appendChild(dayElement);
    }
}

function createCalendarDay(date) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';
    
    const isToday = isSameDay(date, currentDate);
    const isCurrentMonth = date.getMonth() === currentMonth;
    const dateStr = date.toISOString().split('T')[0];
    const dayData = panchangData2025[dateStr];
    
    if (isToday) {
        dayElement.classList.add('today');
    }
    
    if (!isCurrentMonth) {
        dayElement.classList.add('other-month');
    }
    
    const festivalIndicator = dayData && dayData.has_major_festival ? 
        `<div class="festival-badge">${festivalEmojis[dayData.festival] || '🎉'}</div>` : '';
    
    dayElement.innerHTML = `
        <div class="day-number">${date.getDate()}</div>
        <div class="day-tithi">${dayData ? dayData.tithi : ''}</div>
        ${festivalIndicator}
    `;
    
    dayElement.addEventListener('click', () => {
        showDayModal(date, dayData);
    });
    
    return dayElement;
}

function showDayModal(date, dayData) {
    const modal = document.getElementById('dayModal');
    const dayDetails = document.getElementById('dayDetails');
    
    if (!dayData) {
        dayDetails.innerHTML = `
            <h3>${formatDate(date)}</h3>
            <p>Panchang data not available for this date.</p>
        `;
    } else {
        const festivalSection = dayData.has_major_festival ? `
            <div class="festival-section">
                <h4>${festivalEmojis[dayData.festival] || '🎉'} ${dayData.festival}</h4>
                <p><em>${dayData.meaning}</em></p>
            </div>
        ` : '';
        
        dayDetails.innerHTML = `
            <h3>${formatDate(date)}</h3>
            ${festivalSection}
            <div class="panchang-details">
                <div class="detail-item"><strong>Tithi:</strong> ${dayData.tithi}</div>
                <div class="detail-item"><strong>Paksha:</strong> ${dayData.paksha}</div>
                <div class="detail-item"><strong>Vara:</strong> ${dayData.vara}</div>
                <div class="detail-item"><strong>Nakshatra:</strong> ${dayData.nakshatra}</div>
                <div class="detail-item"><strong>Deity:</strong> ${dayData.deity}</div>
                <div class="detail-item"><strong>Muhurat:</strong> ${dayData.muhurat}</div>
                <div class="significance-item"><strong>Significance:</strong> ${dayData.significance}</div>
            </div>
        `;
    }
    
    modal.style.display = 'block';
}

function displayUpcomingFestivals() {
    const festivalsGrid = document.getElementById('festivalsGrid');
    const upcomingFestivals = getUpcomingFestivals(5);
    
    festivalsGrid.innerHTML = upcomingFestivals.map(festival => `
        <div class="festival-card">
            <div class="festival-emoji">${festivalEmojis[festival.name] || '🎉'}</div>
            <div class="festival-name">${festival.name}</div>
            <div class="festival-date">${formatDate(new Date(festival.date))}</div>
            <div class="festival-meaning">${festival.meaning}</div>
        </div>
    `).join('');
}

function renderFestivalTimeline() {
    const timeline = document.getElementById('festivalTimeline');
    const upcomingFestivals = getUpcomingFestivals(8);
    
    timeline.innerHTML = upcomingFestivals.map(festival => `
        <div class="timeline-item">
            <div class="festival-emoji">${festivalEmojis[festival.name] || '🎉'}</div>
            <div class="festival-name">${festival.name}</div>
            <div class="festival-date">${formatDateShort(new Date(festival.date))}</div>
        </div>
    `).join('');
}

function getUpcomingFestivals(limit = 5) {
    const today = currentDate.toISOString().split('T')[0];
    const festivals = [];
    
    Object.entries(panchangData2025).forEach(([date, data]) => {
        if (data.has_major_festival && date >= today) {
            festivals.push({
                date: date,
                name: data.festival,
                meaning: data.meaning || data.significance
            });
        }
    });
    
    return festivals
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, limit);
}

function updateCalendarDisplay() {
    document.getElementById('currentMonth').textContent = 
        `${getMonthName(currentMonth)} ${selectedYear}`;
    renderCalendar();
}

function showReminderAlert() {
    alert('Reminder feature coming soon! This will send WhatsApp notifications for upcoming festivals.');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Utility functions
function formatDate(date) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-IN', options);
}

function formatDateShort(date) {
    const options = { 
        month: 'short', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-IN', options);
}

function getMonthName(monthIndex) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[monthIndex];
}

function isSameDay(date1, date2) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
}

// Set current date to October 21, 2025 as specified
currentDate = new Date(2025, 9, 21); // Month is 0-indexed
currentMonth = currentDate.getMonth();
currentYear = currentDate.getFullYear();
selectedYear = 2025;