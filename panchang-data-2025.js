// Panchang Data for 2025
// File naming convention: panchang-data-YYYY.js
// Update this file annually with new year's data

const panchangData2025 = {
  "2025-01-01": {
    tithi: "Dvitiya",
    paksha: "Shukla Paksha",
    vara: "Budhwar (Wednesday)",
    nakshatra: "Uttara Bhadrapada",
    deity: "Lord Ganesha's day",
    significance: "New Year day with divine blessings",
    has_major_festival: true,
    festival: "New Year Day",
    muhurat: "6:00 AM - 12:00 PM",
    meaning: "Welcome the new year with positivity"
  },
  "2025-01-14": {
    tithi: "Purnima",
    paksha: "Shukla Paksha",
    vara: "Mangalwar (Tuesday)",
    nakshatra: "Pushya",
    deity: "Lord Vishnu",
    significance: "Full moon - Makar Sankranti",
    has_major_festival: true,
    festival: "Makar Sankranti",
    muhurat: "7:00 AM - 9:00 AM",
    meaning: "Sun's transition to Capricorn"
  },
  "2025-02-12": {
    tithi: "Purnima",
    paksha: "Shukla Paksha",
    vara: "Budhwar (Wednesday)",
    nakshatra: "Magha",
    deity: "Lord Vishnu",
    significance: "Full moon day of Magha month",
    has_major_festival: true,
    festival: "Magha Purnima",
    muhurat: "6:30 AM - 8:30 AM",
    meaning: "Sacred bathing and charity day"
  },
  "2025-02-26": {
    tithi: "Amavasya",
    paksha: "Krishna Paksha",
    vara: "Budhwar (Wednesday)",
    nakshatra: "Uttara Bhadrapada",
    deity: "Lord Shiva",
    significance: "New moon - Maha Shivratri",
    has_major_festival: true,
    festival: "Maha Shivratri",
    muhurat: "11:00 PM - 12:30 AM",
    meaning: "Night of Lord Shiva - fasting and prayers"
  },
  "2025-03-13": {
    tithi: "Purnima",
    paksha: "Shukla Paksha",
    vara: "Guruvaar (Thursday)",
    nakshatra: "Hasta",
    deity: "Lord Vishnu",
    significance: "Full moon - Holi celebration eve",
    has_major_festival: true,
    festival: "Holika Dahan",
    muhurat: "6:00 PM - 8:00 PM",
    meaning: "Burning of evil - victory of good"
  },
  "2025-03-14": {
    tithi: "Pratipada",
    paksha: "Krishna Paksha",
    vara: "Shukravar (Friday)",
    nakshatra: "Chitra",
    deity: "Lord Krishna",
    significance: "Festival of colors",
    has_major_festival: true,
    festival: "Holi",
    muhurat: "10:00 AM - 2:00 PM",
    meaning: "Celebration of colors and joy"
  },
  "2025-04-06": {
    tithi: "Navami",
    paksha: "Shukla Paksha",
    vara: "Ravivaar (Sunday)",
    nakshatra: "Ashwini",
    deity: "Lord Rama",
    significance: "Birth of Lord Rama",
    has_major_festival: true,
    festival: "Ram Navami",
    muhurat: "11:00 AM - 1:30 PM",
    meaning: "Celebration of Lord Rama's birth"
  },
  "2025-08-16": {
    tithi: "Ashtami",
    paksha: "Krishna Paksha",
    vara: "Shanivaar (Saturday)",
    nakshatra: "Rohini",
    deity: "Lord Krishna",
    significance: "Birth of Lord Krishna",
    has_major_festival: true,
    festival: "Krishna Janmashtami",
    muhurat: "11:30 PM - 12:30 AM",
    meaning: "Celebration of Lord Krishna's birth"
  },
  "2025-08-30": {
    tithi: "Chaturthi",
    paksha: "Shukla Paksha",
    vara: "Shanivaar (Saturday)",
    nakshatra: "Hasta",
    deity: "Lord Ganesha",
    significance: "Birth of Lord Ganesha",
    has_major_festival: true,
    festival: "Ganesh Chaturthi",
    muhurat: "11:00 AM - 1:30 PM",
    meaning: "Celebration of Lord Ganesha's birth"
  },
  "2025-09-29": {
    tithi: "Pratipada",
    paksha: "Shukla Paksha",
    vara: "Somvaar (Monday)",
    nakshatra: "Ashwini",
    deity: "Goddess Durga",
    significance: "Beginning of Navratri",
    has_major_festival: true,
    festival: "Navratri",
    muhurat: "6:00 AM - 8:00 AM",
    meaning: "Nine nights of Goddess Durga worship"
  },
  "2025-10-20": {
    tithi: "Amavasya",
    paksha: "Krishna Paksha",
    vara: "Somvaar (Monday)",
    nakshatra: "Swati",
    deity: "Lord Rama & Goddess Lakshmi",
    significance: "Festival of lights",
    has_major_festival: true,
    festival: "Diwali",
    muhurat: "6:00 PM - 8:00 PM",
    meaning: "Victory of light over darkness"
  }
};

const festivalEmojis = {
  "Diwali": "🪔",
  "Holi": "🎨",
  "Navratri": "💃",
  "Krishna Janmashtami": "🎂",
  "Ganesh Chaturthi": "🐘",
  "New Year Day": "🎊",
  "Makar Sankranti": "🪁",
  "Maha Shivratri": "🕉️",
  "Ram Navami": "🏹",
  "Holika Dahan": "🔥",
  "Magha Purnima": "🌕"
};

// Generate sample data for other days
function generateSamplePanchangData() {
  const tithis = [
    "Pratipada", "Dvitiya", "Tritiya", "Chaturthi", "Panchami",
    "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
    "Ekadashi", "Dvadashi", "Trayodashi", "Chaturdashi", "Purnima/Amavasya"
  ];
  
  const nakshatras = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira",
    "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha",
    "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra",
    "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula",
    "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta",
    "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
  ];
  
  const varas = [
    "Ravivaar (Sunday)", "Somvaar (Monday)", "Mangalwar (Tuesday)",
    "Budhwar (Wednesday)", "Guruvaar (Thursday)", "Shukravar (Friday)",
    "Shanivaar (Saturday)"
  ];
  
  const deities = [
    "Lord Surya", "Lord Chandra", "Lord Mangal", "Lord Budh",
    "Lord Brihaspati", "Lord Shukra", "Lord Shani", "Lord Ganesha",
    "Lord Vishnu", "Lord Shiva", "Goddess Durga", "Goddess Lakshmi"
  ];
  
  const currentYear = 2025;
  const startDate = new Date(currentYear, 0, 1);
  const endDate = new Date(currentYear, 11, 31);
  
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    
    // Skip if we already have data for this date
    if (panchangData2025[dateStr]) {
      continue;
    }
    
    const dayOfYear = Math.floor((d - startDate) / (24 * 60 * 60 * 1000));
    
    panchangData2025[dateStr] = {
      tithi: tithis[dayOfYear % tithis.length],
      paksha: (dayOfYear % 30) < 15 ? "Shukla Paksha" : "Krishna Paksha",
      vara: varas[d.getDay()],
      nakshatra: nakshatras[dayOfYear % nakshatras.length],
      deity: deities[dayOfYear % deities.length],
      significance: "Auspicious day for prayers and meditation",
      has_major_festival: false,
      festival: null,
      muhurat: "6:00 AM - 8:00 AM",
      meaning: "Regular panchang day with divine blessings"
    };
  }
}

// Generate sample data for all days
generateSamplePanchangData();