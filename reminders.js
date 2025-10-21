// Reminder System for TithiToday
// Handles notifications, email subscriptions, calendar downloads, WhatsApp groups

// Global notification settings (stored in memory for this session)
let notificationSettings = {
    browser: false,
    email: '',
    calendar: false,
    whatsapp: false,
    reminderType: 'all'
};

// Load and save settings (in-memory for sandboxed environment)
function loadSettings() {
    // Settings are maintained in memory during session
    console.log('Settings loaded from memory');
}

function saveSettings() {
    // Settings are maintained in memory during session
    console.log('Settings saved to memory', notificationSettings);
}

// Notification System Functions
async function enableBrowserNotifications() {
    if (!('Notification' in window)) {
        alert('Browser notifications not supported!');
        return;
    }

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
        notificationSettings.browser = true;
        saveSettings();
        updateReminderStatus();
        scheduleDailyCheck();
        document.getElementById('browserNotifBtn').textContent = 'Enabled ✓';
        document.getElementById('browserNotifBtn').style.background = '#22c55e';
        document.getElementById('browserNotifBtn').style.color = 'white';
        showFloatingNotification('🔔 Browser notifications enabled! You\'ll be reminded before each festival.');
        
        // Show test notification
        new Notification('🪔 TithiToday Reminders Active!', {
            body: 'You\'ll now receive festival reminders 24 hours in advance.',
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🪔</text></svg>'
        });
    }
}

// Schedule daily check for notifications
function scheduleDailyCheck() {
    if (!notificationSettings.browser) return;
    
    // Check every minute for demo purposes
    setInterval(checkUpcomingFestivals, 60000);
    
    // In production, use daily check:
    // setInterval(checkUpcomingFestivals, 24 * 60 * 60 * 1000);
}

// Check for tomorrow's festivals
function checkUpcomingFestivals() {
    if (!notificationSettings.browser || Notification.permission !== 'granted') return;
    
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    
    const festival = panchangData[tomorrowStr];
    
    if (festival && festival.has_major_festival && shouldNotifyForFestival(festival.festival)) {
        new Notification('🪔 Festival Tomorrow!', {
            body: `${festival.festival} - ${festival.meaning}`,
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🪔</text></svg>',
            requireInteraction: true
        });
    }
}

// Check if should notify for festival based on preferences
function shouldNotifyForFestival(festivalName) {
    switch (notificationSettings.reminderType) {
        case 'major':
            return ['Diwali', 'Holi', 'Dussehra', 'Krishna Janmashtami', 'Ganesh Chaturthi', 'Navratri'].some(major => festivalName.includes(major));
        case 'ekadashi':
            return festivalName.includes('Ekadashi');
        case 'all':
        default:
            return true;
    }
}

// Email subscription
function subscribeEmail(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address!');
        return;
    }
    
    // Simulate API call - in real app, would call backend
    notificationSettings.email = email;
    saveSettings();
    updateReminderStatus();
    
    showFloatingNotification(`📧 Email subscription successful! You'll receive reminders at ${email}`);
    event.target.reset();
    
    // Show success message
    const successDiv = document.createElement('div');
    successDiv.innerHTML = `
        <div style="background: #22c55e; color: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
            ✅ Subscribed! Check your email for confirmation.
        </div>
    `;
    event.target.appendChild(successDiv);
    
    setTimeout(() => successDiv.remove(), 3000);
}

// Calendar file generation
function generateICS(festivalDate, festivalData) {
    const startDate = new Date(festivalDate + 'T06:00:00');
    const endDate = new Date(festivalDate + 'T23:59:59');
    
    const formatDate = (date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//TithiToday//Festival Reminder//EN
BEGIN:VEVENT
UID:${festivalDate}-${festivalData.festival.replace(/\s+/g, '-')}@tithitoday.com
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${festivalData.festival}
DESCRIPTION:${festivalData.meaning}\n\nTithi: ${festivalData.tithi}\nMuhurat: ${festivalData.muhurat}\n\nWhat to do: ${festivalData.do.join(', ')}\n\nBrought to you by TithiToday
LOCATION:Home
BEGIN:VALARM
TRIGGER:-P1D
DESCRIPTION:Festival Reminder: ${festivalData.festival} tomorrow!
ACTION:DISPLAY
END:VALARM
END:VEVENT
END:VCALENDAR`;
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${festivalData.festival.replace(/\s+/g, '-')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showFloatingNotification(`📅 Calendar file downloaded for ${festivalData.festival}!`);
}

// Download all festivals for current year
function downloadAllFestivals() {
    const festivals = getFestivalsForYear(currentYear.toString());
    
    let icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//TithiToday//All Festivals ${currentYear}//EN\n`;
    
    festivals.forEach(festival => {
        const startDate = new Date(festival.date + 'T06:00:00');
        const endDate = new Date(festival.date + 'T23:59:59');
        const formatDate = (date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        
        icsContent += `BEGIN:VEVENT\nUID:${festival.date}-${festival.festival.replace(/\s+/g, '-')}@tithitoday.com\nDTSTAMP:${formatDate(new Date())}\nDTSTART:${formatDate(startDate)}\nDTEND:${formatDate(endDate)}\nSUMMARY:${festival.festival}\nDESCRIPTION:${festival.meaning}\nBEGIN:VALARM\nTRIGGER:-P1D\nACTION:DISPLAY\nDESCRIPTION:${festival.festival} tomorrow!\nEND:VALARM\nEND:VEVENT\n`;
    });
    
    icsContent += 'END:VCALENDAR';
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Hindu-Festivals-${currentYear}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    notificationSettings.calendar = true;
    saveSettings();
    updateReminderStatus();
    showFloatingNotification(`📅 Calendar file downloaded! ${festivals.length} festivals added to your calendar with reminders.`);
}

// WhatsApp group join
function joinWhatsAppGroup() {
    const message = encodeURIComponent('🪔 Hi! I want to join the TithiToday festival reminder group. Please add me!');
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
    
    notificationSettings.whatsapp = true;
    saveSettings();
    updateReminderStatus();
    showFloatingNotification('📱 WhatsApp reminder group opened! Send the message to join.');
}

// Show notification settings modal
function showNotificationSettings() {
    document.getElementById('notificationModal').classList.add('show');
    updateNotificationUI();
}

// Close notification modal
function closeNotificationModal() {
    document.getElementById('notificationModal').classList.remove('show');
}

// Update notification UI based on current settings
function updateNotificationUI() {
    const browserBtn = document.getElementById('browserNotifBtn');
    
    if (notificationSettings.browser) {
        browserBtn.textContent = 'Enabled ✓';
        browserBtn.style.background = '#22c55e';
        browserBtn.style.color = 'white';
    } else {
        browserBtn.textContent = 'Enable';
        browserBtn.style.background = '';
        browserBtn.style.color = '';
    }
    
    // Update reminder type radio buttons
    const radios = document.querySelectorAll('input[name="reminderType"]');
    radios.forEach(radio => {
        radio.checked = radio.value === notificationSettings.reminderType;
        radio.addEventListener('change', (e) => {
            notificationSettings.reminderType = e.target.value;
            saveSettings();
        });
    });
}

// Update reminder status display
function updateReminderStatus() {
    const statusDiv = document.getElementById('reminderStatus');
    if (statusDiv) {
        statusDiv.innerHTML = `
            <p>🔔 Browser: <span class="${notificationSettings.browser ? 'status-enabled' : 'status-disabled'}">${notificationSettings.browser ? 'Enabled' : 'Disabled'}</span></p>
            <p>📧 Email: <span class="${notificationSettings.email ? 'status-enabled' : 'status-disabled'}">${notificationSettings.email || 'Not subscribed'}</span></p>
            <p>📅 Calendar: <span class="${notificationSettings.calendar ? 'status-enabled' : 'status-disabled'}">${notificationSettings.calendar ? 'Downloaded' : 'No downloads'}</span></p>
            <p>📱 WhatsApp: <span class="${notificationSettings.whatsapp ? 'status-enabled' : 'status-disabled'}">${notificationSettings.whatsapp ? 'Joined' : 'Not joined'}</span></p>
        `;
    }
}

// Show floating notification message
function showFloatingNotification(message) {
    const notification = document.getElementById('floatingNotification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
        notification.textContent = '🔔 Setup Reminders';
    }, 4000);
}