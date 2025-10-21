// Main Application JavaScript for TithiToday
// Handles display, user interactions, year changes, and core functionality

// Global variables
let currentYear = 2025;

// Get today's date in YYYY-MM-DD format
function getTodayDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
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
    return date.toLocaleDateString('en-US', options);
}

// Get festival emoji
function getFestivalEmoji(festival) {
    for (const [key, emoji] of Object.entries(festivalEmojis)) {
        if (festival.includes(key)) {
            return emoji;
        }
    }
    return "🎉"; // Default emoji
}

// Find next upcoming festival
function getNextFestival(currentDate) {
    const sortedDates = Object.keys(panchangData)
        .filter(date => date > currentDate && date.startsWith(currentYear))
        .sort();
    
    if (sortedDates.length > 0) {
        return {
            date: sortedDates[0],
            ...panchangData[sortedDates[0]]
        };
    }
    return null;
}

// Get festivals for specific year (only major festivals for timeline)
function getFestivalsForYear(year) {
    return Object.keys(panchangData)
        .filter(date => date.startsWith(year) && panchangData[date].has_major_festival)
        .sort()
        .map(date => ({
            date,
            ...panchangData[date]
        }));
}

// Get upcoming festivals (next 5)
function getUpcomingFestivals(count = 5) {
    const today = getTodayDate();
    return Object.keys(panchangData)
        .filter(date => date > today && date.startsWith(currentYear) && panchangData[date].has_major_festival)
        .sort()
        .slice(0, count)
        .map(date => ({
            date,
            ...panchangData[date]
        }));
}

// Get daily panchang for any day (NEVER empty!)
function getDailyPanchang(dateStr) {
    // If we have festival data, use it
    if (panchangData[dateStr]) {
        return panchangData[dateStr];
    }
    
    // Otherwise generate basic daily panchang
    const date = new Date(dateStr + 'T00:00:00');
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();
    
    const varas = [
        { name: "Ravivar (Sunday)", deity: "Lord Surya" },
        { name: "Somvaar (Monday)", deity: "Lord Shiva" },
        { name: "Mangalvar (Tuesday)", deity: "Lord Hanuman" },
        { name: "Budhvar (Wednesday)", deity: "Lord Ganesha" },
        { name: "Guruvaar (Thursday)", deity: "Lord Vishnu" },
        { name: "Shukravaar (Friday)", deity: "Goddess Lakshmi" },
        { name: "Shanivaar (Saturday)", deity: "Lord Shani" }
    ];
    
    const tithis = [
        "Prathama", "Dvitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi",
        "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dvadashi",
        "Trayodashi", "Chaturdashi", "Purnima/Amavasya"
    ];
    
    const nakshatras = [
        "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
        "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni",
        "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha",
        "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha",
        "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
    ];
    
    const tithiIndex = (dayOfMonth - 1) % 15;
    const nakshatra = nakshatras[(dayOfMonth - 1) % nakshatras.length];
    const vara = varas[dayOfWeek];
    const paksha = dayOfMonth <= 15 ? "Shukla Paksha" : "Krishna Paksha";
    
    return {
        tithi: tithis[tithiIndex],
        paksha: paksha,
        vara: vara.name,
        nakshatra: nakshatra,
        deity: vara.deity,
        significance: `${tithis[tithiIndex]} tithi brings its unique energy. Today is ${vara.name}, ruled by ${vara.deity}.`,
        paksha_meaning: paksha === "Shukla Paksha" ? "Waxing moon - energy increasing, good for growth" : "Waning moon - time for reflection and release",
        good_for: ["Spiritual practice", "Following daily routine", "Mindful living"],
        avoid: ["Negative thoughts", "Harmful actions"],
        spiritual_practice: `Prayer to ${vara.deity} and daily meditation`,
        has_major_festival: false
    };
}

// Display today's panchang (ALWAYS shows data!)
function displayTodaysPanchang() {
    const today = getTodayDate();
    const todayData = getDailyPanchang(today); // This NEVER returns null!
    
    // Update date
    document.getElementById('todayDate').innerHTML = `
        🗓️ TODAY: ${formatDate(today)}
    `;
    
    if (todayData.has_major_festival) {
        // MAJOR FESTIVAL DAY - Show festival prominently + daily panchang
        document.getElementById('tithiInfo').innerHTML = `
            <div class="major-festival-banner" style="background: linear-gradient(135deg, #FF6B35, #FFC947); padding: 2rem; border-radius: 20px; text-align: center; margin-bottom: 1rem; animation: glow 2s ease-in-out infinite;">
                <h2 style="margin: 0; color: white;">🎉🎉 MAJOR FESTIVAL TODAY 🎉🎉</h2>
            </div>
            <div class="festival-details" style="margin-bottom: 1.5rem;">
                <div style="font-size: 1.2em; margin-bottom: 0.5rem;">🕐 Muhurat: ${todayData.muhurat}</div>
            </div>
        `;
        
        // Update festival
        const emoji = getFestivalEmoji(todayData.festival);
        document.getElementById('todayFestival').innerHTML = `
            ${emoji} ${todayData.festival}
        `;
        
        // Update significance for festival day
        document.getElementById('significance').innerHTML = `
            <div class="festival-significance">
                <h3>🎊 Festival Significance</h3>
                <p><strong>${todayData.meaning}</strong></p>
                <p>${todayData.significance}</p>
            </div>
            <hr style="margin: 1.5rem 0; border: 1px solid var(--color-border);">
            <div class="daily-panchang-also">
                <h4>📅 Daily Panchang Info:</h4>
                <p>🌙 Tithi: ${todayData.tithi} (${todayData.paksha})</p>
                <p>📆 Vara: ${todayData.vara} - ${todayData.deity}</p>
                <p>⭐ Nakshatra: ${todayData.nakshatra}</p>
                <p>${todayData.paksha_meaning}</p>
            </div>
        `;
        
        // Festival action cards
        document.getElementById('actionCards').innerHTML = `
            <div class="festival-activities">
                <div class="action-card do" style="background: var(--color-bg-3); border-left: 4px solid #22c55e;">
                    <div class="action-title">
                        <span class="emoji">🎉</span> Festival Activities
                    </div>
                    <ul class="action-list">
                        ${todayData.do.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="action-card avoid" style="background: var(--color-bg-4); border-left: 4px solid #ef4444;">
                    <div class="action-title">
                        <span class="emoji">❌</span> Avoid Today
                    </div>
                    <ul class="action-list">
                        ${todayData.avoid.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="action-card" style="background: var(--color-bg-5); border-left: 4px solid #8b5cf6; padding: 1rem;">
                    <div class="action-title">
                        <span class="emoji">🙏</span> Spiritual Practice
                    </div>
                    <p>${todayData.spiritual_practice}</p>
                </div>
            </div>
        `;
    } else {
        // REGULAR DAY - Show complete daily panchang (NEVER empty!)
        document.getElementById('tithiInfo').innerHTML = `
            <div class="tithi-item">
                <div class="tithi-label">Tithi</div>
                <div class="tithi-value">🌙 ${todayData.tithi}</div>
            </div>
            <div class="tithi-item">
                <div class="tithi-label">Paksha</div>
                <div class="tithi-value">📆 ${todayData.paksha}</div>
            </div>
            <div class="tithi-item">
                <div class="tithi-label">Vara</div>
                <div class="tithi-value">📅 ${todayData.vara}</div>
            </div>
            <div class="tithi-item">
                <div class="tithi-label">Nakshatra</div>
                <div class="tithi-value">⭐ ${todayData.nakshatra}</div>
            </div>
        `;
        
        document.getElementById('todayFestival').innerHTML = `
            Daily Panchang - ${todayData.tithi}
        `;
        
        document.getElementById('significance').innerHTML = `
            <h3>💡 Today's Significance</h3>
            <p><strong>${todayData.significance}</strong></p>
            <p><em>${todayData.paksha_meaning}</em></p>
            <div style="margin-top: 1rem; padding: 1rem; background: var(--color-bg-6); border-radius: 8px;">
                <p><strong>🕉️ Deity of the Day:</strong> ${todayData.deity}</p>
            </div>
        `;
        
        document.getElementById('actionCards').innerHTML = `
            <div class="action-card do" style="background: var(--color-bg-3); border-left: 4px solid #22c55e;">
                <div class="action-title">
                    <span class="emoji">✅</span> Good For Today
                </div>
                <ul class="action-list">
                    ${todayData.good_for.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div class="action-card avoid" style="background: var(--color-bg-4); border-left: 4px solid #ef4444;">
                <div class="action-title">
                    <span class="emoji">❌</span> Things to Avoid
                </div>
                <ul class="action-list">
                    ${todayData.avoid.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div class="action-card" style="background: var(--color-bg-5); border-left: 4px solid #8b5cf6; padding: 1rem;">
                <div class="action-title">
                    <span class="emoji">🙏</span> Spiritual Practice
                </div>
                <p>${todayData.spiritual_practice}</p>
            </div>
        `;
    }
}

// Display upcoming festivals preview
function displayUpcomingFestivals() {
    const upcoming = getUpcomingFestivals(6);
    const container = document.getElementById('upcomingFestivals');
    
    if (upcoming.length === 0) {
        container.innerHTML = '<div class="text-center"><p>🎊 All major festivals celebrated this year!</p><p>Switch to next year to see upcoming celebrations!</p></div>';
        return;
    }
    
    container.innerHTML = upcoming.map(festival => {
        const emoji = getFestivalEmoji(festival.festival);
        return `
            <div class="upcoming-card">
                <div class="festival-emoji">${emoji}</div>
                <h4>${festival.festival}</h4>
                <div class="date">📅 ${formatDate(festival.date)}</div>
                <p>${festival.meaning}</p>
                <div class="share-actions">
                    <button class="share-btn-small" onclick="shareFestival('${festival.date}', 'whatsapp')" title="Share on WhatsApp">💬</button>
                    <button class="share-btn-small" onclick="shareFestival('${festival.date}', 'twitter')" title="Share on Twitter">🐦</button>
                    <button class="share-btn-small" onclick="generateICS('${festival.date}', ${JSON.stringify(festival).replace(/'/g, '\"')})" title="Add to Calendar">📅</button>
                    <button class="share-btn-small" onclick="showFestivalDetails('${festival.festival}', ${JSON.stringify(festival).replace(/'/g, '\"')})" title="View Details">👁️</button>
                </div>
            </div>
        `;
    }).join('');
}

// Display all festivals timeline for current year (shows major festivals)
function displayFestivalTimeline() {
    const timeline = document.getElementById('festivalTimeline');
    const festivals = getFestivalsForYear(currentYear.toString());
    timeline.innerHTML = '';
    
    if (festivals.length === 0) {
        timeline.innerHTML = '<div class="text-center"><p>🔍 Exploring festivals for this year...</p><p>Use the search above to find specific dates!</p></div>';
        return;
    }
    
    festivals.forEach(festival => {
        const emoji = getFestivalEmoji(festival.festival || 'Festival');
        const item = document.createElement('div');
        item.className = 'festival-item';
        item.onclick = () => showFestivalDetails(festival.festival || 'Special Day', festival);
        
        item.innerHTML = `
            <div class="festival-date">${formatDate(festival.date).split(',')[0]}<br>${formatDate(festival.date).split(',')[1]}</div>
            <div class="festival-name">${festival.festival || 'Special Day'}</div>
            <div class="festival-emoji">${emoji}</div>
        `;
        
        timeline.appendChild(item);
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('festivalSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const festivalItems = document.querySelectorAll('.festival-item');
            
            festivalItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
}

// Show festival details in modal with enhanced sharing
function showFestivalDetails(festivalName, data) {
    const modal = document.getElementById('festivalModal');
    const modalBody = document.getElementById('modalBody');
    const shareActions = document.getElementById('festivalShareActions');
    const emoji = getFestivalEmoji(festivalName);
    
    modalBody.innerHTML = `
        <h2>${emoji} ${festivalName}</h2>
        <div class="mb-16">
            <p><strong>Tithi:</strong> ${data.tithi} (${data.paksha})</p>
            <p><strong>Muhurat:</strong> ${data.muhurat}</p>
        </div>
        <div class="mb-16">
            <h3>💡 Significance</h3>
            <p>${data.significance}</p>
        </div>
        <div class="mb-16">
            <h3>📖 Meaning</h3>
            <p>${data.meaning}</p>
        </div>
        <div class="grid grid-2">
            <div>
                <h4>✅ Do Today</h4>
                <ul>
                    ${data.do.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h4>❌ Avoid Today</h4>
                <ul>
                    ${data.avoid.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    shareActions.innerHTML = `
        <div style="margin-top: var(--space-24); padding-top: var(--space-16); border-top: 1px solid var(--color-border);">
            <h4>📤 Share this Festival</h4>
            <div class="flex gap-8" style="flex-wrap: wrap; justify-content: center;">
                <button class="btn btn--outline" onclick="shareFestival('${data.date}', 'whatsapp')" style="background: #25D366; color: white; border-color: #25D366;">💬 WhatsApp</button>
                <button class="btn btn--outline" onclick="shareFestival('${data.date}', 'twitter')" style="background: #1DA1F2; color: white; border-color: #1DA1F2;">🐦 Twitter</button>
                <button class="btn btn--outline" onclick="shareFestival('${data.date}', 'copy')">🔗 Copy Link</button>
                <button class="btn btn--outline" onclick="generateICS('${data.date}', ${JSON.stringify(data).replace(/'/g, '\"')})" style="background: #FF6B35; color: white; border-color: #FF6B35;">📅 Add to Calendar</button>
            </div>
        </div>
    `;
    
    modal.classList.add('show');
}

// Close modal
function closeModal() {
    document.getElementById('festivalModal').classList.remove('show');
}

// Enhanced sharing functions
function shareFestival(festivalDate, platform) {
    const festival = getDailyPanchang(festivalDate); // Always gets data
    
    const emoji = festival.has_major_festival ? getFestivalEmoji(festival.festival || 'Festival') : '🌙';
    const shareText = festival.has_major_festival ? 
        `${emoji} Festival Alert!\n\n📅 ${festival.festival} - ${formatDate(festivalDate)}\n🌙 Tithi: ${festival.tithi} (${festival.paksha})\n⭐ Nakshatra: ${festival.nakshatra}\n💡 ${festival.meaning}\n\n🙏 ${festival.spiritual_practice}\n\nNever miss a festival!\nTithiToday - Your daily panchang guide` :
        `${emoji} Daily Panchang\n\n📅 ${formatDate(festivalDate)}\n🌙 Tithi: ${festival.tithi} (${festival.paksha})\n📆 Vara: ${festival.vara}\n⭐ Nakshatra: ${festival.nakshatra}\n💡 ${festival.significance}\n\nDaily panchang wisdom with TithiToday`;
    
    switch (platform) {
        case 'whatsapp':
            window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
            break;
        case 'twitter':
            const twitterText = `${emoji} ${festival.festival || 'Daily Panchang'} - ${formatDate(festivalDate)} 🌙 ${festival.tithi} 💡 ${festival.meaning || festival.significance} #TithiToday #HinduFestivals`;
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`, '_blank');
            break;
        case 'copy':
            navigator.clipboard.writeText(shareText).then(() => {
                showFloatingNotification('📋 Festival details copied to clipboard!');
            });
            break;
        case 'native':
            if (navigator.share) {
                navigator.share({
                    title: festival.festival || 'Daily Panchang',
                    text: shareText
                });
            }
            break;
    }
}

// Year change functionality
function changeYear(year) {
    currentYear = parseInt(year);
    document.getElementById('currentYearDisplay').textContent = year;
    document.getElementById('nextYear').textContent = (parseInt(year) + 1);
    
    displayFestivalTimeline();
    displayUpcomingFestivals();
    
    // Update the year selector highlight
    const yearSelector = document.getElementById('yearSelector');
    yearSelector.style.background = 'rgba(255, 255, 255, 0.3)';
    yearSelector.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
        yearSelector.style.background = '';
        yearSelector.style.transform = '';
    }, 300);
    
    showFloatingNotification(`🗓️ Switched to ${year} festivals!`);
}

// Switch to next year
function switchToNextYear() {
    const nextYear = currentYear + 1;
    if (nextYear <= 2030) {
        document.getElementById('yearSelector').value = nextYear;
        changeYear(nextYear);
    } else {
        alert('📅 Sorry! Festival data is available till 2030 only.');
    }
}

// Enhanced Share Functions
function shareToday() {
    const today = getTodayDate();
    const todayData = getDailyPanchang(today); // Always gets data!
    
    let shareText;
    if (todayData.has_major_festival) {
        shareText = `🪔 Today's Festival!\n${formatDate(today)}\n\n🎉 ${todayData.festival}\n📅 Tithi: ${todayData.tithi} (${todayData.paksha})\n⭐ Nakshatra: ${todayData.nakshatra}\n💡 ${todayData.meaning}\n\n🙏 ${todayData.spiritual_practice}\n\nNever miss a festival - TithiToday`;
    } else {
        shareText = `🪔 Today's Panchang\n${formatDate(today)}\n\n📅 Tithi: ${todayData.tithi} (${todayData.paksha})\n📆 Vara: ${todayData.vara}\n⭐ Nakshatra: ${todayData.nakshatra}\n💡 ${todayData.significance}\n\n🙏 ${todayData.spiritual_practice}\n\nDaily panchang with TithiToday`;
    }
    
    if (navigator.share) {
        navigator.share({
            title: 'Today\'s Panchang',
            text: shareText
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('📋 Copied to clipboard! Share it wherever you like 📱');
        });
    }
}

function shareWhatsApp() {
    const text = encodeURIComponent('🪔 Check out TithiToday - the coolest way to learn about Hindu festivals and traditions!');
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function shareTwitter() {
    const text = encodeURIComponent('Discover Hindu festivals the modern way with TithiToday! 🪔 #TithiToday #HinduFestivals #Culture');
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
}

function shareInstagram() {
    alert('📸 Share TithiToday on your Instagram stories and tag your friends!');
}

// Theme toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
}

// Smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize the application
function initializeApp() {
    loadSettings();
    displayTodaysPanchang();
    displayUpcomingFestivals();
    displayFestivalTimeline();
    setupSearch();
    setupSmoothScrolling();
    updateReminderStatus();
    
    // Set current year in year selector
    document.getElementById('yearSelector').value = currentYear;
    document.getElementById('currentYearDisplay').textContent = currentYear;
    document.getElementById('nextYear').textContent = currentYear + 1;
    
    // Start notification checking if enabled
    if (notificationSettings.browser) {
        scheduleDailyCheck();
    }
    
    // Show floating notification for first-time visitors
    if (!window.tithiTodayVisited) {
        setTimeout(() => {
            showFloatingNotification('👋 Welcome! Set up festival reminders to never miss a celebration!');
        }, 2000);
        window.tithiTodayVisited = true;
    }
    
    // Add modal event listeners
    document.getElementById('festivalModal').addEventListener('click', (e) => {
        if (e.target.id === 'festivalModal') {
            closeModal();
        }
    });
    
    document.getElementById('notificationModal').addEventListener('click', (e) => {
        if (e.target.id === 'notificationModal') {
            closeNotificationModal();
        }
    });
    
    console.log('🪔 TithiToday initialized successfully!');
}