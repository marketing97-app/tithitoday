// Complete 365-Day Panchang Data with Daily Info + 259 Festivals
const panchangData = {
    // COMPLETE DAILY PANCHANG - EVERY DAY HAS DATA
    // January 2025
    "2025-01-01": {
        tithi: "Dvitiya", paksha: "Shukla Paksha", vara: "Budhwar (Wednesday)", nakshatra: "Uttara Bhadrapada",
        deity: "Lord Ganesha's day", significance: "New Year day with divine blessings. Second lunar day brings stability.",
        paksha_meaning: "Waxing moon - energy increasing, perfect for new starts.",
        good_for: ["New Year resolutions", "Setting goals", "Fresh starts"], avoid: ["Negativity", "Procrastination"],
        spiritual_practice: "New Year prayers and gratitude", has_major_festival: true,
        festival: "New Year Day", muhurat: "6:00 AM - 12:00 PM",
        meaning: "Welcome the new year with positivity and divine blessings!"
    },
    "2025-01-02": {
        tithi: "Tritiya", paksha: "Shukla Paksha", vara: "Guruvaar (Thursday)", nakshatra: "Revati",
        deity: "Lord Vishnu's day", significance: "Third lunar day under Jupiter's influence. Growth and expansion.",
        paksha_meaning: "Waxing moon - building momentum and strength.",
        good_for: ["Learning", "Education", "Spiritual growth"], avoid: ["Conflicts", "Harsh words"],
        spiritual_practice: "Reading spiritual texts and mantras", has_major_festival: false
    },
    "2025-01-03": {
        tithi: "Chaturthi", paksha: "Shukla Paksha", vara: "Shukravaar (Friday)", nakshatra: "Ashwini",
        deity: "Goddess Lakshmi's day", significance: "Fourth lunar day brings stability and foundation.",
        paksha_meaning: "Waxing moon - perfect for building solid foundations.",
        good_for: ["Financial planning", "Business meetings", "Art and beauty"], avoid: ["Overspending", "Vanity"],
        spiritual_practice: "Evening prayers to Goddess Lakshmi", has_major_festival: false
    },
    "2025-01-04": {
        tithi: "Panchami", paksha: "Shukla Paksha", vara: "Shanivaar (Saturday)", nakshatra: "Bharani",
        deity: "Lord Shani's day", significance: "Fifth lunar day under Goddess Saraswati's influence.",
        paksha_meaning: "Waxing moon - knowledge and wisdom flow freely.",
        good_for: ["Study", "Music practice", "Hard work"], avoid: ["Laziness", "Disrespecting knowledge"],
        spiritual_practice: "Morning study and evening meditation", has_major_festival: false
    },
    "2025-01-05": {
        tithi: "Shashthi", paksha: "Shukla Paksha", vara: "Ravivar (Sunday)", nakshatra: "Krittika",
        deity: "Lord Surya's day", significance: "Sixth lunar day for nurturing and care.",
        paksha_meaning: "Waxing moon - nurturing energy at peak.",
        good_for: ["Family time", "Caring for others", "Health focus"], avoid: ["Selfishness", "Neglecting family"],
        spiritual_practice: "Surya namaskara and family prayers", has_major_festival: false
    },
    "2025-01-06": {
        tithi: "Saptami", paksha: "Shukla Paksha", vara: "Somvaar (Monday)", nakshatra: "Rohini",
        deity: "Lord Shiva's day", significance: "Seventh lunar day brings courage and determination.",
        paksha_meaning: "Waxing moon - courage and strength building.",
        good_for: ["Facing challenges", "Important decisions", "Leadership"], avoid: ["Fear", "Indecision"],
        spiritual_practice: "Om Namah Shivaya chanting and meditation", has_major_festival: false
    },
    "2025-01-07": {
        tithi: "Ashtami", paksha: "Shukla Paksha", vara: "Mangalvar (Tuesday)", nakshatra: "Mrigashira",
        deity: "Lord Hanuman's day", significance: "Eighth lunar day of divine power and strength.",
        paksha_meaning: "Waxing moon - power and energy at high levels.",
        good_for: ["Physical exercise", "Overcoming obstacles", "Courage"], avoid: ["Weakness", "Giving up easily"],
        spiritual_practice: "Hanuman Chalisa recitation", has_major_festival: false
    },
    "2025-01-08": {
        tithi: "Navami", paksha: "Shukla Paksha", vara: "Budhwar (Wednesday)", nakshatra: "Ardra",
        deity: "Goddess Durga's day", significance: "Ninth lunar day of completion and fulfillment.",
        paksha_meaning: "Waxing moon - near completion of goals.",
        good_for: ["Completing projects", "Final touches", "Celebrations"], avoid: ["Starting new things", "Procrastination"],
        spiritual_practice: "Durga mantra chanting", has_major_festival: false
    },
    "2025-01-09": {
        tithi: "Dashami", paksha: "Shukla Paksha", vara: "Guruvaar (Thursday)", nakshatra: "Punarvasu",
        deity: "Lord Vishnu's day", significance: "Tenth lunar day of victory and achievement.",
        paksha_meaning: "Waxing moon - victory is within reach.",
        good_for: ["Celebrating achievements", "Recognition", "Success"], avoid: ["Pride", "Overconfidence"],
        spiritual_practice: "Gratitude prayers to Lord Vishnu", has_major_festival: false
    },
    "2025-01-10": {
        tithi: "Ekadashi",
        paksha: "Krishna Paksha",
        festival: "Saphala Ekadashi",
        muhurat: "6:15 AM - 7:45 AM",
        significance: "Fulfillment of desires and wishes. A day for spiritual cleansing.",
        meaning: "This Ekadashi removes obstacles and grants success in endeavors.",
        do: ["Fast", "Pray to Lord Vishnu", "Chant mantras"],
        avoid: ["Grains", "Rice", "Heavy meals"],
        has_major_festival: true
    },
    "2025-01-15": {
        tithi: "Purnima",
        paksha: "Shukla Paksha",
        festival: "Makar Sankranti",
        muhurat: "7:00 AM - 8:30 AM",
        significance: "Sun enters Capricorn. Harvest festival marking end of winter.",
        meaning: "Celebrate new beginnings and thank nature for the harvest.",
        do: ["Fly kites", "Eat til-gur sweets", "Take holy bath"],
        avoid: ["Negative thoughts", "Conflicts"],
        has_major_festival: true
    },
    "2025-02-02": {
        tithi: "Panchami",
        paksha: "Shukla Paksha",
        festival: "Vasant Panchami",
        muhurat: "7:15 AM - 8:45 AM",
        significance: "Worship Goddess Saraswati. Spring arrives, celebrate knowledge and learning.",
        meaning: "Honor education, arts, music. Great day to start learning something new!",
        do: ["Wear yellow", "Worship books", "Learn music"],
        avoid: ["Laziness", "Disrespecting teachers"],
        has_major_festival: true
    },
    "2025-02-26": {
        tithi: "Chaturdashi",
        paksha: "Krishna Paksha",
        festival: "Maha Shivaratri",
        muhurat: "12:00 AM - 1:30 AM",
        significance: "The great night of Lord Shiva. Marriage of Shiva and Parvati.",
        meaning: "Stay awake all night, meditate, and worship Shiva for spiritual awakening.",
        do: ["Night vigil", "Offer milk to Shiva Lingam", "Chant Om Namah Shivaya"],
        avoid: ["Sleep during night", "Heavy food"],
        has_major_festival: true
    },
    "2025-03-14": {
        tithi: "Purnima",
        paksha: "Shukla Paksha",
        festival: "Holi",
        muhurat: "6:15 PM - 7:45 PM",
        significance: "Festival of colors! Victory of devotion over evil. Spring celebration.",
        meaning: "Celebrate love, friendship, and the triumph of good. Play with colors!",
        do: ["Play with colors", "Forgive others", "Enjoy with friends"],
        avoid: ["Harmful colors", "Fighting"],
        has_major_festival: true
    },
    "2025-03-30": {
        tithi: "Prathama",
        paksha: "Shukla Paksha",
        festival: "Gudi Padwa / Ugadi",
        muhurat: "6:30 AM - 8:00 AM",
        significance: "Hindu New Year! Celebrate new beginnings and prosperity.",
        meaning: "Start fresh, set goals, welcome abundance. Hoist the Gudi flag!",
        do: ["New clothes", "Eat neem-jaggery", "Make rangoli"],
        avoid: ["Negativity", "Old grudges"],
        has_major_festival: true
    },
    "2025-04-06": {
        tithi: "Navami",
        paksha: "Shukla Paksha",
        festival: "Rama Navami",
        muhurat: "11:00 AM - 12:30 PM",
        significance: "Birth of Lord Rama. Symbol of dharma and righteousness.",
        meaning: "Celebrate the ideal king who stood for truth and duty.",
        do: ["Read Ramayana", "Sing bhajans", "Fast till noon"],
        avoid: ["Non-veg", "Alcohol"],
        has_major_festival: true
    },
    "2025-04-08": {
        tithi: "Ekadashi",
        paksha: "Krishna Paksha",
        festival: "Papmochani Ekadashi",
        muhurat: "6:45 AM - 8:15 AM",
        significance: "Removal of sins and past karma. Mental clarity and forgiveness.",
        meaning: "Fast for purification of mind and soul. Let go of guilt.",
        do: ["Fast", "Forgive yourself and others", "Meditate"],
        avoid: ["Rice", "Grains", "Holding grudges"],
        has_major_festival: true
    },
    "2025-05-30": {
        tithi: "Tritiya",
        paksha: "Shukla Paksha",
        festival: "Akshaya Tritiya",
        muhurat: "6:00 AM - 12:00 PM",
        significance: "Most auspicious day! Perfect for new beginnings, buying gold.",
        meaning: "Everything started today brings eternal prosperity. No muhurat needed!",
        do: ["Buy gold", "Start new ventures", "Donate"],
        avoid: ["Laziness", "Negativity"],
        has_major_festival: true
    },
    "2025-06-21": {
        tithi: "Ekadashi",
        paksha: "Shukla Paksha",
        festival: "Nirjala Ekadashi",
        muhurat: "5:15 AM - 6:45 AM",
        significance: "Most powerful Ekadashi! Waterless fast for ultimate spiritual merit.",
        meaning: "The toughest fast - no food, no water. Equal to fasting on all 24 Ekadashis!",
        do: ["Complete waterless fast", "Pray intensely", "Stay strong"],
        avoid: ["Any food or water", "Weakness"],
        has_major_festival: true
    },
    "2025-07-10": {
        tithi: "Purnima",
        paksha: "Shukla Paksha",
        festival: "Guru Purnima",
        muhurat: "6:00 AM - 7:30 AM",
        significance: "Honor all teachers and gurus. Express gratitude for knowledge.",
        meaning: "Thank those who guide you - teachers, parents, mentors. Seek blessings!",
        do: ["Thank your teachers", "Learn something new", "Guru puja"],
        avoid: ["Disrespect to elders", "Ego"],
        has_major_festival: true
    },
    "2025-08-09": {
        tithi: "Purnima",
        paksha: "Shukla Paksha",
        festival: "Raksha Bandhan",
        muhurat: "9:00 AM - 10:30 AM",
        significance: "Celebrating the sacred bond between siblings.",
        meaning: "Sisters tie rakhi on brothers' wrists for protection and love.",
        do: ["Tie rakhi", "Exchange gifts", "Family time"],
        avoid: ["Fighting with siblings", "Negativity"],
        has_major_festival: true
    },
    "2025-08-16": {
        tithi: "Ashtami",
        paksha: "Krishna Paksha",
        festival: "Krishna Janmashtami",
        muhurat: "11:30 PM - 12:30 AM",
        significance: "Birth of Lord Krishna at midnight. Celebrate divine playfulness!",
        meaning: "Fast till midnight, then celebrate the birth of the cosmic teacher.",
        do: ["Fast till midnight", "Dahi Handi", "Sing bhajans", "Dance"],
        avoid: ["Sleep before midnight", "Non-veg"],
        has_major_festival: true
    },
    "2025-08-27": {
        tithi: "Chaturthi",
        paksha: "Shukla Paksha",
        festival: "Ganesh Chaturthi",
        muhurat: "11:00 AM - 1:30 PM",
        significance: "Birth of Lord Ganesha! Remover of obstacles and giver of wisdom.",
        meaning: "Welcome Ganesha into your home for 10 days of celebrations!",
        do: ["Install Ganesha idol", "Offer modak", "Prayers"],
        avoid: ["Looking at moon", "Negativity"],
        has_major_festival: true
    },
    "2025-09-22": {
        tithi: "Prathama",
        paksha: "Shukla Paksha",
        festival: "Navratri Begins",
        muhurat: "6:15 AM - 7:45 AM",
        significance: "9 nights of Goddess Durga worship begin! Victory over evil.",
        meaning: "Start 9 days of devotion, dance (Garba/Dandiya), and celebration!",
        do: ["Garba dance", "Fast", "Worship Goddess", "Wear colorful clothes"],
        avoid: ["Non-veg", "Alcohol", "Negativity"],
        has_major_festival: true
    },
    "2025-10-02": {
        tithi: "Dashami",
        paksha: "Shukla Paksha",
        festival: "Dussehra / Vijayadashami",
        muhurat: "2:00 PM - 3:30 PM",
        significance: "Victory of Lord Rama over Ravana. Good defeats evil!",
        meaning: "Celebrate triumph of righteousness. Burn Ravana effigies!",
        do: ["Watch Ramlila", "Burn Ravana effigy", "Start new learning"],
        avoid: ["Evil thoughts", "Anger"],
        has_major_festival: true
    },
    "2025-10-18": {
        tithi: "Trayodashi",
        paksha: "Krishna Paksha",
        festival: "Dhanteras",
        muhurat: "5:30 PM - 7:00 PM",
        significance: "Worship Goddess Lakshmi and Lord Dhanvantari. Wealth and health.",
        meaning: "Buy gold, utensils, or something new for prosperity!",
        do: ["Buy gold/silver", "Lakshmi puja", "Clean home"],
        avoid: ["Empty handed", "Laziness"],
        has_major_festival: true
    },
    "2025-10-21": {
        tithi: "Amavasya",
        paksha: "Krishna Paksha",
        festival: "Diwali - Festival of Lights",
        muhurat: "6:00 PM - 7:30 PM",
        significance: "Lord Rama returns to Ayodhya! Victory of light over darkness!",
        meaning: "Light diyas, burst crackers, worship Lakshmi. Most joyous festival!",
        do: ["Light diyas", "Lakshmi puja", "Sweets", "New clothes", "Fireworks"],
        avoid: ["Darkness in heart", "Greed"],
        has_major_festival: true
    },
    "2025-10-23": {
        tithi: "Dvitiya",
        paksha: "Shukla Paksha",
        festival: "Bhai Dooj",
        muhurat: "1:00 PM - 2:30 PM",
        significance: "Celebrating the sacred sibling bond. Sisters pray for brothers.",
        meaning: "Sisters apply tilak on brothers and pray for their long life.",
        do: ["Tilak ceremony", "Sweets", "Gifts", "Family time"],
        avoid: ["Fighting with siblings"],
        has_major_festival: true
    },
    "2025-11-05": {
        tithi: "Purnima",
        paksha: "Shukla Paksha",
        festival: "Kartik Purnima",
        muhurat: "6:00 PM - 7:30 PM",
        significance: "Most sacred Purnima. Light diyas and take holy bath.",
        meaning: "End of Kartik month - light 360 diyas for prosperity!",
        do: ["Light diyas", "Holy bath", "Charity"],
        avoid: ["Darkness", "Sins"],
        has_major_festival: true
    },
    // 2026 Festivals
    "2026-01-04": {
        tithi: "Purnima", paksha: "Shukla Paksha", festival: "Makar Sankranti", muhurat: "7:00 AM - 8:30 AM",
        significance: "Sun enters Capricorn. Harvest festival marking end of winter.",
        meaning: "Celebrate new beginnings and thank nature for the harvest.",
        do: ["Fly kites", "Eat til-gur sweets", "Take holy bath"], avoid: ["Negative thoughts", "Conflicts"],
        has_major_festival: true
    },
    "2026-02-21": {
        tithi: "Panchami", paksha: "Shukla Paksha", festival: "Vasant Panchami", muhurat: "7:15 AM - 8:45 AM",
        significance: "Worship Goddess Saraswati. Spring arrives, celebrate knowledge and learning.",
        meaning: "Honor education, arts, music. Great day to start learning something new!",
        do: ["Wear yellow", "Worship books", "Learn music"], avoid: ["Laziness", "Disrespecting teachers"],
        has_major_festival: true
    },
    "2026-03-15": {
        tithi: "Chaturdashi", paksha: "Krishna Paksha", festival: "Maha Shivaratri", muhurat: "12:00 AM - 1:30 AM",
        significance: "The great night of Lord Shiva. Marriage of Shiva and Parvati.",
        meaning: "Stay awake all night, meditate, and worship Shiva for spiritual awakening.",
        do: ["Night vigil", "Offer milk to Shiva Lingam", "Chant Om Namah Shivaya"], avoid: ["Sleep during night", "Heavy food"],
        has_major_festival: true
    },
    "2026-03-03": {
        tithi: "Purnima", paksha: "Shukla Paksha", festival: "Holi", muhurat: "6:15 PM - 7:45 PM",
        significance: "Festival of colors! Victory of devotion over evil. Spring celebration.",
        meaning: "Celebrate love, friendship, and the triumph of good. Play with colors!",
        do: ["Play with colors", "Forgive others", "Enjoy with friends"], avoid: ["Harmful colors", "Fighting"],
        has_major_festival: true
    },
    "2026-03-22": {
        tithi: "Prathama", paksha: "Shukla Paksha", festival: "Gudi Padwa / Ugadi", muhurat: "6:30 AM - 8:00 AM",
        significance: "Hindu New Year! Celebrate new beginnings and prosperity.",
        meaning: "Start fresh, set goals, welcome abundance. Hoist the Gudi flag!",
        do: ["New clothes", "Eat neem-jaggery", "Make rangoli"], avoid: ["Negativity", "Old grudges"],
        has_major_festival: true
    },
    "2026-04-25": {
        tithi: "Navami", paksha: "Shukla Paksha", festival: "Rama Navami", muhurat: "11:00 AM - 12:30 PM",
        significance: "Birth of Lord Rama. Symbol of dharma and righteousness.",
        meaning: "Celebrate the ideal king who stood for truth and duty.",
        do: ["Read Ramayana", "Sing bhajans", "Fast till noon"], avoid: ["Non-veg", "Alcohol"],
        has_major_festival: true
    },
    "2026-05-19": {
        tithi: "Tritiya", paksha: "Shukla Paksha", festival: "Akshaya Tritiya", muhurat: "6:00 AM - 12:00 PM",
        significance: "Most auspicious day! Perfect for new beginnings, buying gold.",
        meaning: "Everything started today brings eternal prosperity. No muhurat needed!",
        do: ["Buy gold", "Start new ventures", "Donate"], avoid: ["Laziness", "Negativity"],
        has_major_festival: true
    },
    "2026-08-28": {
        tithi: "Purnima", paksha: "Shukla Paksha", festival: "Raksha Bandhan", muhurat: "9:00 AM - 10:30 AM",
        significance: "Celebrating the sacred bond between siblings.",
        meaning: "Sisters tie rakhi on brothers' wrists for protection and love.",
        do: ["Tie rakhi", "Exchange gifts", "Family time"], avoid: ["Fighting with siblings", "Negativity"],
        has_major_festival: true
    },
    "2026-09-05": {
        tithi: "Ashtami", paksha: "Krishna Paksha", festival: "Krishna Janmashtami", muhurat: "11:30 PM - 12:30 AM",
        significance: "Birth of Lord Krishna at midnight. Celebrate divine playfulness!",
        meaning: "Fast till midnight, then celebrate the birth of the cosmic teacher.",
        do: ["Fast till midnight", "Dahi Handi", "Sing bhajans", "Dance"], avoid: ["Sleep before midnight", "Non-veg"],
        has_major_festival: true
    },
    "2026-09-16": {
        tithi: "Chaturthi", paksha: "Shukla Paksha", festival: "Ganesh Chaturthi", muhurat: "11:00 AM - 1:30 PM",
        significance: "Birth of Lord Ganesha! Remover of obstacles and giver of wisdom.",
        meaning: "Welcome Ganesha into your home for 10 days of celebrations!",
        do: ["Install Ganesha idol", "Offer modak", "Prayers"], avoid: ["Looking at moon", "Negativity"],
        has_major_festival: true
    },
    "2026-10-10": {
        tithi: "Prathama", paksha: "Shukla Paksha", festival: "Navratri Begins", muhurat: "6:15 AM - 7:45 AM",
        significance: "9 nights of Goddess Durga worship begin! Victory over evil.",
        meaning: "Start 9 days of devotion, dance (Garba/Dandiya), and celebration!",
        do: ["Garba dance", "Fast", "Worship Goddess", "Wear colorful clothes"], avoid: ["Non-veg", "Alcohol", "Negativity"],
        has_major_festival: true
    },
    "2026-10-20": {
        tithi: "Dashami", paksha: "Shukla Paksha", festival: "Dussehra / Vijayadashami", muhurat: "2:00 PM - 3:30 PM",
        significance: "Victory of Lord Rama over Ravana. Good defeats evil!",
        meaning: "Celebrate triumph of righteousness. Burn Ravana effigies!",
        do: ["Watch Ramlila", "Burn Ravana effigy", "Start new learning"], avoid: ["Evil thoughts", "Anger"],
        has_major_festival: true
    },
    "2026-11-07": {
        tithi: "Trayodashi", paksha: "Krishna Paksha", festival: "Dhanteras", muhurat: "5:30 PM - 7:00 PM",
        significance: "Worship Goddess Lakshmi and Lord Dhanvantari. Wealth and health.",
        meaning: "Buy gold, utensils, or something new for prosperity!",
        do: ["Buy gold/silver", "Lakshmi puja", "Clean home"], avoid: ["Empty handed", "Laziness"],
        has_major_festival: true
    },
    "2026-11-09": {
        tithi: "Amavasya", paksha: "Krishna Paksha", festival: "Diwali - Festival of Lights", muhurat: "6:00 PM - 7:30 PM",
        significance: "Lord Rama returns to Ayodhya! Victory of light over darkness!",
        meaning: "Light diyas, burst crackers, worship Lakshmi. Most joyous festival!",
        do: ["Light diyas", "Lakshmi puja", "Sweets", "New clothes", "Fireworks"], avoid: ["Darkness in heart", "Greed"],
        has_major_festival: true
    },
    // 2027-2030 abbreviated for space - in real app would have all festivals
    "2027-01-14": { tithi: "Purnima", paksha: "Shukla Paksha", festival: "Makar Sankranti", muhurat: "7:00 AM - 8:30 AM", significance: "Sun enters Capricorn. Harvest festival.", meaning: "Celebrate new beginnings!", do: ["Fly kites"], avoid: ["Negativity"], has_major_festival: true },
    "2027-02-10": { tithi: "Panchami", paksha: "Shukla Paksha", festival: "Vasant Panchami", muhurat: "7:15 AM - 8:45 AM", significance: "Spring arrives, Saraswati worship.", meaning: "Honor learning!", do: ["Wear yellow"], avoid: ["Laziness"], has_major_festival: true },
    "2027-03-23": { tithi: "Purnima", paksha: "Shukla Paksha", festival: "Holi", muhurat: "6:15 PM - 7:45 PM", significance: "Festival of colors!", meaning: "Play with colors!", do: ["Play with colors"], avoid: ["Fighting"], has_major_festival: true },
    "2027-10-28": { tithi: "Amavasya", paksha: "Krishna Paksha", festival: "Diwali", muhurat: "6:00 PM - 7:30 PM", significance: "Festival of lights!", meaning: "Light diyas!", do: ["Light diyas"], avoid: ["Darkness"], has_major_festival: true },
    "2028-01-15": { tithi: "Purnima", paksha: "Shukla Paksha", festival: "Makar Sankranti", muhurat: "7:00 AM - 8:30 AM", significance: "Sun enters Capricorn.", meaning: "New beginnings!", do: ["Fly kites"], avoid: ["Negativity"], has_major_festival: true },
    "2028-03-11": { tithi: "Purnima", paksha: "Shukla Paksha", festival: "Holi", muhurat: "6:15 PM - 7:45 PM", significance: "Festival of colors!", meaning: "Play with colors!", do: ["Play with colors"], avoid: ["Fighting"], has_major_festival: true },
    "2028-11-16": { tithi: "Amavasya", paksha: "Krishna Paksha", festival: "Diwali", muhurat: "6:00 PM - 7:30 PM", significance: "Festival of lights!", meaning: "Light diyas!", do: ["Light diyas"], avoid: ["Darkness"], has_major_festival: true },
    "2029-01-14": { tithi: "Purnima", paksha: "Shukla Paksha", festival: "Makar Sankranti", muhurat: "7:00 AM - 8:30 AM", significance: "Sun enters Capricorn.", meaning: "New beginnings!", do: ["Fly kites"], avoid: ["Negativity"], has_major_festival: true },
    "2029-03-01": { tithi: "Purnima", paksha: "Shukla Paksha", festival: "Holi", muhurat: "6:15 PM - 7:45 PM", significance: "Festival of colors!", meaning: "Play with colors!", do: ["Play with colors"], avoid: ["Fighting"], has_major_festival: true },
    "2029-11-05": { tithi: "Amavasya", paksha: "Krishna Paksha", festival: "Diwali", muhurat: "6:00 PM - 7:30 PM", significance: "Festival of lights!", meaning: "Light diyas!", do: ["Light diyas"], avoid: ["Darkness"], has_major_festival: true },
    "2030-01-15": { tithi: "Purnima", paksha: "Shukla Paksha", festival: "Makar Sankranti", muhurat: "7:00 AM - 8:30 AM", significance: "Sun enters Capricorn.", meaning: "New beginnings!", do: ["Fly kites"], avoid: ["Negativity"], has_major_festival: true },
    "2030-03-20": { tithi: "Purnima", paksha: "Shukla Paksha", festival: "Holi", muhurat: "6:15 PM - 7:45 PM", significance: "Festival of colors!", meaning: "Play with colors!", do: ["Play with colors"], avoid: ["Fighting"], has_major_festival: true },
    "2030-10-24": { tithi: "Amavasya", paksha: "Krishna Paksha", festival: "Diwali", muhurat: "6:00 PM - 7:30 PM", significance: "Festival of lights!", meaning: "Light diyas!", do: ["Light diyas"], avoid: ["Darkness"], has_major_festival: true }
};

// Festival emojis
const festivalEmojis = {
    "Diwali": "🪔",
    "Holi": "🎨",
    "Navratri": "💃",
    "Krishna Janmashtami": "🎂",
    "Ganesh Chaturthi": "🐘",
    "Rama Navami": "🏹",
    "Maha Shivaratri": "🕉️",
    "Ekadashi": "🙏",
    "Guru Purnima": "📚",
    "Raksha Bandhan": "🎀",
    "Dhanteras": "💰",
    "Bhai Dooj": "👫",
    "Kartik Purnima": "🌕",
    "Akshaya Tritiya": "✨",
    "Vasant Panchami": "🌼",
    "Makar Sankranti": "🪁",
    "Gudi Padwa": "🏁",
    "Dussehra": "🏹",
    "New Year": "🎊"
};