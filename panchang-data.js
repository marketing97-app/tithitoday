// TithiToday - Complete 5-Year Festival Database (2025-2030)
// Site Name: TithiToday
// Total: 259 festivals across 6 years
// Auto-updates based on current year

const panchangData = {
  "2025-01-10": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Saphala Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Fulfillment of desires and wishes. A day for spiritual cleansing.",
    "meaning": "This Ekadashi removes obstacles and grants success in endeavors.",
    "do": [
      "Fast",
      "Pray to Lord Vishnu",
      "Chant mantras"
    ],
    "avoid": [
      "Grains",
      "Rice",
      "Heavy meals"
    ]
  },
  "2025-01-15": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Makar Sankranti",
    "muhurat": "7:00 AM - 8:30 AM",
    "significance": "Sun enters Capricorn. Harvest festival marking end of winter.",
    "meaning": "Celebrate new beginnings and thank nature for the harvest.",
    "do": [
      "Fly kites",
      "Eat til-gur sweets",
      "Take holy bath"
    ],
    "avoid": [
      "Negative thoughts",
      "Conflicts"
    ]
  },
  "2025-01-25": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Putrada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Blessing of children and family prosperity.",
    "meaning": "Devotion to Lord Vishnu for family well-being and progeny.",
    "do": [
      "Fast",
      "Family prayers",
      "Charity"
    ],
    "avoid": [
      "Grains",
      "Beans",
      "Onion-garlic"
    ]
  },
  "2025-02-02": {
    "tithi": "Panchami",
    "paksha": "Shukla Paksha",
    "festival": "Vasant Panchami",
    "muhurat": "7:15 AM - 8:45 AM",
    "significance": "Worship Goddess Saraswati. Spring arrives, celebrate knowledge and learning.",
    "meaning": "Honor education, arts, music. Great day to start learning something new!",
    "do": [
      "Wear yellow",
      "Worship books",
      "Learn music"
    ],
    "avoid": [
      "Laziness",
      "Disrespecting teachers"
    ]
  },
  "2025-02-08": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Shattila Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Use of sesame seeds for charity and blessings.",
    "meaning": "Donate sesame seeds, oil, and food for spiritual merit.",
    "do": [
      "Donate sesame",
      "Charity",
      "Fast"
    ],
    "avoid": [
      "Selfishness",
      "Grains"
    ]
  },
  "2025-02-23": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Jaya Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Victory in all endeavors. Brings success and removes sins.",
    "meaning": "Fast for triumph over obstacles and negative karma.",
    "do": [
      "Fast strictly",
      "Read Bhagavad Gita",
      "Meditate"
    ],
    "avoid": [
      "Rice",
      "Grains",
      "Distractions"
    ]
  },
  "2025-02-26": {
    "tithi": "Chaturdashi",
    "paksha": "Krishna Paksha",
    "festival": "Maha Shivaratri",
    "muhurat": "12:00 AM - 1:30 AM",
    "significance": "The great night of Lord Shiva. Marriage of Shiva and Parvati.",
    "meaning": "Stay awake all night, meditate, and worship Shiva for spiritual awakening.",
    "do": [
      "Night vigil",
      "Offer milk to Shiva Lingam",
      "Chant Om Namah Shivaya"
    ],
    "avoid": [
      "Sleep during night",
      "Heavy food"
    ]
  },
  "2025-03-10": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Vijaya Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Conquering obstacles and enemies. Victory in all pursuits.",
    "meaning": "Fast for overcoming challenges and achieving success.",
    "do": [
      "Fast",
      "Pray for strength",
      "Help others"
    ],
    "avoid": [
      "Grains",
      "Negative energy"
    ]
  },
  "2025-03-14": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Holi",
    "muhurat": "6:15 PM - 7:45 PM",
    "significance": "Festival of colors! Victory of devotion over evil. Spring celebration.",
    "meaning": "Celebrate love, friendship, and the triumph of good. Play with colors!",
    "do": [
      "Play with colors",
      "Forgive others",
      "Enjoy with friends"
    ],
    "avoid": [
      "Harmful colors",
      "Fighting"
    ]
  },
  "2025-03-25": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Amalaki Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Worship of Amla (gooseberry) tree. Health and longevity.",
    "meaning": "Honor nature and seek blessings for good health.",
    "do": [
      "Worship Amla tree",
      "Eat Amla",
      "Plant trees"
    ],
    "avoid": [
      "Harming nature",
      "Grains"
    ]
  },
  "2025-03-30": {
    "tithi": "Prathama",
    "paksha": "Shukla Paksha",
    "festival": "Gudi Padwa / Ugadi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Hindu New Year! Celebrate new beginnings and prosperity.",
    "meaning": "Start fresh, set goals, welcome abundance. Hoist the Gudi flag!",
    "do": [
      "New clothes",
      "Eat neem-jaggery",
      "Make rangoli"
    ],
    "avoid": [
      "Negativity",
      "Old grudges"
    ]
  },
  "2025-04-06": {
    "tithi": "Navami",
    "paksha": "Shukla Paksha",
    "festival": "Rama Navami",
    "muhurat": "11:00 AM - 12:30 PM",
    "significance": "Birth of Lord Rama. Symbol of dharma and righteousness.",
    "meaning": "Celebrate the ideal king who stood for truth and duty.",
    "do": [
      "Read Ramayana",
      "Sing bhajans",
      "Fast till noon"
    ],
    "avoid": [
      "Non-veg",
      "Alcohol"
    ]
  },
  "2025-04-08": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Papmochani Ekadashi",
    "muhurat": "6:45 AM - 8:15 AM",
    "significance": "Removal of sins and past karma. Mental clarity and forgiveness.",
    "meaning": "Fast for purification of mind and soul. Let go of guilt.",
    "do": [
      "Fast",
      "Forgive yourself and others",
      "Meditate"
    ],
    "avoid": [
      "Rice",
      "Grains",
      "Holding grudges"
    ]
  },
  "2025-04-12": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Hanuman Jayanti",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Birth of Lord Hanuman. Strength, devotion, and courage.",
    "meaning": "Honor the ultimate devotee. Seek strength to overcome challenges.",
    "do": [
      "Recite Hanuman Chalisa",
      "Visit temple",
      "Help others"
    ],
    "avoid": [
      "Ego",
      "Laziness"
    ]
  },
  "2025-04-23": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Kamada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Fulfillment of desires and wishes. Removes obstacles.",
    "meaning": "Fast with pure intentions for legitimate desires.",
    "do": [
      "Fast",
      "Pray for goals",
      "Stay positive"
    ],
    "avoid": [
      "Grains",
      "Selfish wishes"
    ]
  },
  "2025-05-08": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Varuthini Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Protection from evil and negativity. Shield of faith.",
    "meaning": "Fast for divine protection and spiritual strength.",
    "do": [
      "Fast",
      "Seek protection",
      "Charity"
    ],
    "avoid": [
      "Fear",
      "Grains"
    ]
  },
  "2025-05-22": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Mohini Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Liberation from illusions. See truth clearly.",
    "meaning": "Fast to break free from maya (illusion) and false attachments.",
    "do": [
      "Fast",
      "Meditate",
      "Seek truth"
    ],
    "avoid": [
      "Illusions",
      "Grains",
      "Delusions"
    ]
  },
  "2025-05-30": {
    "tithi": "Tritiya",
    "paksha": "Shukla Paksha",
    "festival": "Akshaya Tritiya",
    "muhurat": "6:00 AM - 12:00 PM",
    "significance": "Most auspicious day! Perfect for new beginnings, buying gold.",
    "meaning": "Everything started today brings eternal prosperity. No muhurat needed!",
    "do": [
      "Buy gold",
      "Start new ventures",
      "Donate"
    ],
    "avoid": [
      "Laziness",
      "Negativity"
    ]
  },
  "2025-06-06": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Apara Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Removal of sins and purification.",
    "meaning": "Fast for cleansing past mistakes and negative karma.",
    "do": [
      "Fast",
      "Charity",
      "Prayers"
    ],
    "avoid": [
      "Grains",
      "Rice"
    ]
  },
  "2025-06-21": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Nirjala Ekadashi",
    "muhurat": "5:15 AM - 6:45 AM",
    "significance": "Most powerful Ekadashi! Waterless fast for ultimate spiritual merit.",
    "meaning": "The toughest fast - no food, no water. Equal to fasting on all 24 Ekadashis!",
    "do": [
      "Complete waterless fast",
      "Pray intensely",
      "Stay strong"
    ],
    "avoid": [
      "Any food or water",
      "Weakness"
    ]
  },
  "2025-07-06": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Yogini Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Spiritual union and yoga practice.",
    "meaning": "Fast for enhancing spiritual connection and inner peace.",
    "do": [
      "Yoga",
      "Meditation",
      "Fast"
    ],
    "avoid": [
      "Grains",
      "Distractions"
    ]
  },
  "2025-07-10": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Guru Purnima",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Honor all teachers and gurus. Express gratitude for knowledge.",
    "meaning": "Thank those who guide you - teachers, parents, mentors. Seek blessings!",
    "do": [
      "Thank your teachers",
      "Learn something new",
      "Guru puja"
    ],
    "avoid": [
      "Disrespect to elders",
      "Ego"
    ]
  },
  "2025-07-20": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Devshayani Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Lord Vishnu goes to sleep for 4 months. Beginning of Chaturmas.",
    "meaning": "Fast as Lord Vishnu enters cosmic sleep. No auspicious ceremonies for 4 months.",
    "do": [
      "Fast",
      "Spiritual practices",
      "Self-discipline"
    ],
    "avoid": [
      "Weddings",
      "Grains"
    ]
  },
  "2025-07-29": {
    "tithi": "Panchami",
    "paksha": "Shukla Paksha",
    "festival": "Nag Panchami",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Worship serpent deities. Protection from snake bites.",
    "meaning": "Honor snakes as symbols of transformation and power.",
    "do": [
      "Offer milk to snakes",
      "Worship Nag devta",
      "Respect nature"
    ],
    "avoid": [
      "Killing snakes",
      "Ploughing fields"
    ]
  },
  "2025-08-04": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Kamika Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Fulfillment of wishes and desires.",
    "meaning": "Fast for achieving your goals and dreams.",
    "do": [
      "Fast",
      "Worship Vishnu",
      "Positive thinking"
    ],
    "avoid": [
      "Grains",
      "Negativity"
    ]
  },
  "2025-08-09": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Raksha Bandhan",
    "muhurat": "9:00 AM - 10:30 AM",
    "significance": "Celebrating the sacred bond between siblings.",
    "meaning": "Sisters tie rakhi on brothers' wrists for protection and love.",
    "do": [
      "Tie rakhi",
      "Exchange gifts",
      "Family time"
    ],
    "avoid": [
      "Fighting with siblings",
      "Negativity"
    ]
  },
  "2025-08-16": {
    "tithi": "Ashtami",
    "paksha": "Krishna Paksha",
    "festival": "Krishna Janmashtami",
    "muhurat": "11:30 PM - 12:30 AM",
    "significance": "Birth of Lord Krishna at midnight. Celebrate divine playfulness!",
    "meaning": "Fast till midnight, then celebrate the birth of the cosmic teacher.",
    "do": [
      "Fast till midnight",
      "Dahi Handi",
      "Sing bhajans",
      "Dance"
    ],
    "avoid": [
      "Sleep before midnight",
      "Non-veg"
    ]
  },
  "2025-08-19": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Shravana Putrada Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Blessing of children and progeny.",
    "meaning": "Fast for family well-being and healthy children.",
    "do": [
      "Fast",
      "Family prayers",
      "Donate"
    ],
    "avoid": [
      "Grains",
      "Selfish thoughts"
    ]
  },
  "2025-08-27": {
    "tithi": "Chaturthi",
    "paksha": "Shukla Paksha",
    "festival": "Ganesh Chaturthi",
    "muhurat": "11:00 AM - 1:30 PM",
    "significance": "Birth of Lord Ganesha! Remover of obstacles and giver of wisdom.",
    "meaning": "Welcome Ganesha into your home for 10 days of celebrations!",
    "do": [
      "Install Ganesha idol",
      "Offer modak",
      "Prayers"
    ],
    "avoid": [
      "Looking at moon",
      "Negativity"
    ]
  },
  "2025-09-03": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Aja Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Protection for ancestors and family lineage.",
    "meaning": "Fast for the well-being of departed ancestors.",
    "do": [
      "Fast",
      "Ancestor prayers",
      "Charity"
    ],
    "avoid": [
      "Grains",
      "Forgetting ancestors"
    ]
  },
  "2025-09-17": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Parsva Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Lord Vishnu turns to the other side during cosmic sleep.",
    "meaning": "Continue spiritual practices during Chaturmas.",
    "do": [
      "Fast",
      "Meditation",
      "Discipline"
    ],
    "avoid": [
      "Grains",
      "Laziness"
    ]
  },
  "2025-09-22": {
    "tithi": "Prathama",
    "paksha": "Shukla Paksha",
    "festival": "Navratri Begins",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "9 nights of Goddess Durga worship begin! Victory over evil.",
    "meaning": "Start 9 days of devotion, dance (Garba/Dandiya), and celebration!",
    "do": [
      "Garba dance",
      "Fast",
      "Worship Goddess",
      "Wear colorful clothes"
    ],
    "avoid": [
      "Non-veg",
      "Alcohol",
      "Negativity"
    ]
  },
  "2025-10-01": {
    "tithi": "Navami",
    "paksha": "Shukla Paksha",
    "festival": "Maha Navami",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "9th day of Navratri. Worship Goddess Siddhidatri.",
    "meaning": "Final day of Navratri - seek ultimate blessings of divine mother.",
    "do": [
      "Kanya puja",
      "Fast",
      "Final prayers"
    ],
    "avoid": [
      "Breaking fast early",
      "Disrespect"
    ]
  },
  "2025-10-02": {
    "tithi": "Dashami",
    "paksha": "Shukla Paksha",
    "festival": "Dussehra / Vijayadashami",
    "muhurat": "2:00 PM - 3:30 PM",
    "significance": "Victory of Lord Rama over Ravana. Good defeats evil!",
    "meaning": "Celebrate triumph of righteousness. Burn Ravana effigies!",
    "do": [
      "Watch Ramlila",
      "Burn Ravana effigy",
      "Start new learning"
    ],
    "avoid": [
      "Evil thoughts",
      "Anger"
    ]
  },
  "2025-10-02_b": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Indira Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Blessing ancestors and departed souls.",
    "meaning": "Fast for peace of ancestors and family protection.",
    "do": [
      "Fast",
      "Ancestor prayers",
      "Charity"
    ],
    "avoid": [
      "Grains",
      "Ignoring family"
    ]
  },
  "2025-10-17": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Pasankusha Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Control of senses and mind. Inner discipline.",
    "meaning": "Fast for mastering your 10 senses and mind.",
    "do": [
      "Fast",
      "Meditation",
      "Self-control"
    ],
    "avoid": [
      "Grains",
      "Sensory overload"
    ]
  },
  "2025-10-18": {
    "tithi": "Trayodashi",
    "paksha": "Krishna Paksha",
    "festival": "Dhanteras",
    "muhurat": "5:30 PM - 7:00 PM",
    "significance": "Worship Goddess Lakshmi and Lord Dhanvantari. Wealth and health.",
    "meaning": "Buy gold, utensils, or something new for prosperity!",
    "do": [
      "Buy gold/silver",
      "Lakshmi puja",
      "Clean home"
    ],
    "avoid": [
      "Empty handed",
      "Laziness"
    ]
  },
  "2025-10-21": {
    "tithi": "Amavasya",
    "paksha": "Krishna Paksha",
    "festival": "Diwali - Festival of Lights",
    "muhurat": "6:00 PM - 7:30 PM",
    "significance": "Lord Rama returns to Ayodhya! Victory of light over darkness!",
    "meaning": "Light diyas, burst crackers, worship Lakshmi. Most joyous festival!",
    "do": [
      "Light diyas",
      "Lakshmi puja",
      "Sweets",
      "New clothes",
      "Fireworks"
    ],
    "avoid": [
      "Darkness in heart",
      "Greed"
    ]
  },
  "2025-10-23": {
    "tithi": "Dvitiya",
    "paksha": "Shukla Paksha",
    "festival": "Bhai Dooj",
    "muhurat": "1:00 PM - 2:30 PM",
    "significance": "Celebrating the sacred sibling bond. Sisters pray for brothers.",
    "meaning": "Sisters apply tilak on brothers and pray for their long life.",
    "do": [
      "Tilak ceremony",
      "Sweets",
      "Gifts",
      "Family time"
    ],
    "avoid": [
      "Fighting with siblings"
    ]
  },
  "2025-11-01": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Rama Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Devotion to Lord Rama and his ideals.",
    "meaning": "Fast for righteousness and dharma.",
    "do": [
      "Fast",
      "Read Ramayana",
      "Follow dharma"
    ],
    "avoid": [
      "Grains",
      "Adharma"
    ]
  },
  "2025-11-05": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Kartik Purnima",
    "muhurat": "6:00 PM - 7:30 PM",
    "significance": "Most sacred Purnima. Light diyas and take holy bath.",
    "meaning": "End of Kartik month - light 360 diyas for prosperity!",
    "do": [
      "Light diyas",
      "Holy bath",
      "Charity"
    ],
    "avoid": [
      "Darkness",
      "Sins"
    ]
  },
  "2025-11-16": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Devotthan / Prabodhini Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Lord Vishnu wakes up from cosmic sleep! End of Chaturmas.",
    "meaning": "Lord awakens! Wedding season and auspicious ceremonies resume!",
    "do": [
      "Fast",
      "Tulsi vivah",
      "Celebrate"
    ],
    "avoid": [
      "Grains",
      "Laziness"
    ]
  },
  "2025-11-30": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Utpanna Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Birth of Goddess Ekadashi from Lord Vishnu.",
    "meaning": "First ever Ekadashi! Origin story of this sacred day.",
    "do": [
      "Fast",
      "Listen to Ekadashi story",
      "Devotion"
    ],
    "avoid": [
      "Grains",
      "Ignorance"
    ]
  },
  "2025-12-16": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Mokshada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Liberation and moksha (salvation). Most powerful Ekadashi!",
    "meaning": "Fast for ultimate freedom from cycle of birth and death.",
    "do": [
      "Strict fast",
      "Gita reading",
      "Spiritual focus"
    ],
    "avoid": [
      "Grains",
      "Worldly attachments"
    ]
  },
  "2026-12-30": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Saphala Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Fulfillment of desires and wishes. A day for spiritual cleansing.",
    "meaning": "This Ekadashi removes obstacles and grants success in endeavors.",
    "do": [
      "Fast",
      "Pray to Lord Vishnu",
      "Chant mantras"
    ],
    "avoid": [
      "Grains",
      "Rice",
      "Heavy meals"
    ]
  },
  "2026-01-04": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Makar Sankranti",
    "muhurat": "7:00 AM - 8:30 AM",
    "significance": "Sun enters Capricorn. Harvest festival marking end of winter.",
    "meaning": "Celebrate new beginnings and thank nature for the harvest.",
    "do": [
      "Fly kites",
      "Eat til-gur sweets",
      "Take holy bath"
    ],
    "avoid": [
      "Negative thoughts",
      "Conflicts"
    ]
  },
  "2026-01-14": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Putrada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Blessing of children and family prosperity.",
    "meaning": "Devotion to Lord Vishnu for family well-being and progeny.",
    "do": [
      "Fast",
      "Family prayers",
      "Charity"
    ],
    "avoid": [
      "Grains",
      "Beans",
      "Onion-garlic"
    ]
  },
  "2026-01-22": {
    "tithi": "Panchami",
    "paksha": "Shukla Paksha",
    "festival": "Vasant Panchami",
    "muhurat": "7:15 AM - 8:45 AM",
    "significance": "Worship Goddess Saraswati. Spring arrives, celebrate knowledge and learning.",
    "meaning": "Honor education, arts, music. Great day to start learning something new!",
    "do": [
      "Wear yellow",
      "Worship books",
      "Learn music"
    ],
    "avoid": [
      "Laziness",
      "Disrespecting teachers"
    ]
  },
  "2026-01-28": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Shattila Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Use of sesame seeds for charity and blessings.",
    "meaning": "Donate sesame seeds, oil, and food for spiritual merit.",
    "do": [
      "Donate sesame",
      "Charity",
      "Fast"
    ],
    "avoid": [
      "Selfishness",
      "Grains"
    ]
  },
  "2026-02-12": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Jaya Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Victory in all endeavors. Brings success and removes sins.",
    "meaning": "Fast for triumph over obstacles and negative karma.",
    "do": [
      "Fast strictly",
      "Read Bhagavad Gita",
      "Meditate"
    ],
    "avoid": [
      "Rice",
      "Grains",
      "Distractions"
    ]
  },
  "2026-02-15": {
    "tithi": "Chaturdashi",
    "paksha": "Krishna Paksha",
    "festival": "Maha Shivaratri",
    "muhurat": "12:00 AM - 1:30 AM",
    "significance": "The great night of Lord Shiva. Marriage of Shiva and Parvati.",
    "meaning": "Stay awake all night, meditate, and worship Shiva for spiritual awakening.",
    "do": [
      "Night vigil",
      "Offer milk to Shiva Lingam",
      "Chant Om Namah Shivaya"
    ],
    "avoid": [
      "Sleep during night",
      "Heavy food"
    ]
  },
  "2026-02-27": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Vijaya Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Conquering obstacles and enemies. Victory in all pursuits.",
    "meaning": "Fast for overcoming challenges and achieving success.",
    "do": [
      "Fast",
      "Pray for strength",
      "Help others"
    ],
    "avoid": [
      "Grains",
      "Negative energy"
    ]
  },
  "2026-03-03": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Holi",
    "muhurat": "6:15 PM - 7:45 PM",
    "significance": "Festival of colors! Victory of devotion over evil. Spring celebration.",
    "meaning": "Celebrate love, friendship, and the triumph of good. Play with colors!",
    "do": [
      "Play with colors",
      "Forgive others",
      "Enjoy with friends"
    ],
    "avoid": [
      "Harmful colors",
      "Fighting"
    ]
  },
  "2026-03-14": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Amalaki Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Worship of Amla (gooseberry) tree. Health and longevity.",
    "meaning": "Honor nature and seek blessings for good health.",
    "do": [
      "Worship Amla tree",
      "Eat Amla",
      "Plant trees"
    ],
    "avoid": [
      "Harming nature",
      "Grains"
    ]
  },
  "2026-03-19": {
    "tithi": "Prathama",
    "paksha": "Shukla Paksha",
    "festival": "Gudi Padwa / Ugadi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Hindu New Year! Celebrate new beginnings and prosperity.",
    "meaning": "Start fresh, set goals, welcome abundance. Hoist the Gudi flag!",
    "do": [
      "New clothes",
      "Eat neem-jaggery",
      "Make rangoli"
    ],
    "avoid": [
      "Negativity",
      "Old grudges"
    ]
  },
  "2026-03-26": {
    "tithi": "Navami",
    "paksha": "Shukla Paksha",
    "festival": "Rama Navami",
    "muhurat": "11:00 AM - 12:30 PM",
    "significance": "Birth of Lord Rama. Symbol of dharma and righteousness.",
    "meaning": "Celebrate the ideal king who stood for truth and duty.",
    "do": [
      "Read Ramayana",
      "Sing bhajans",
      "Fast till noon"
    ],
    "avoid": [
      "Non-veg",
      "Alcohol"
    ]
  },
  "2026-03-28": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Papmochani Ekadashi",
    "muhurat": "6:45 AM - 8:15 AM",
    "significance": "Removal of sins and past karma. Mental clarity and forgiveness.",
    "meaning": "Fast for purification of mind and soul. Let go of guilt.",
    "do": [
      "Fast",
      "Forgive yourself and others",
      "Meditate"
    ],
    "avoid": [
      "Rice",
      "Grains",
      "Holding grudges"
    ]
  },
  "2026-04-01": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Hanuman Jayanti",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Birth of Lord Hanuman. Strength, devotion, and courage.",
    "meaning": "Honor the ultimate devotee. Seek strength to overcome challenges.",
    "do": [
      "Recite Hanuman Chalisa",
      "Visit temple",
      "Help others"
    ],
    "avoid": [
      "Ego",
      "Laziness"
    ]
  },
  "2026-04-12": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Kamada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Fulfillment of desires and wishes. Removes obstacles.",
    "meaning": "Fast with pure intentions for legitimate desires.",
    "do": [
      "Fast",
      "Pray for goals",
      "Stay positive"
    ],
    "avoid": [
      "Grains",
      "Selfish wishes"
    ]
  },
  "2026-04-27": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Varuthini Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Protection from evil and negativity. Shield of faith.",
    "meaning": "Fast for divine protection and spiritual strength.",
    "do": [
      "Fast",
      "Seek protection",
      "Charity"
    ],
    "avoid": [
      "Fear",
      "Grains"
    ]
  },
  "2026-05-11": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Mohini Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Liberation from illusions. See truth clearly.",
    "meaning": "Fast to break free from maya (illusion) and false attachments.",
    "do": [
      "Fast",
      "Meditate",
      "Seek truth"
    ],
    "avoid": [
      "Illusions",
      "Grains",
      "Delusions"
    ]
  },
  "2026-05-19": {
    "tithi": "Tritiya",
    "paksha": "Shukla Paksha",
    "festival": "Akshaya Tritiya",
    "muhurat": "6:00 AM - 12:00 PM",
    "significance": "Most auspicious day! Perfect for new beginnings, buying gold.",
    "meaning": "Everything started today brings eternal prosperity. No muhurat needed!",
    "do": [
      "Buy gold",
      "Start new ventures",
      "Donate"
    ],
    "avoid": [
      "Laziness",
      "Negativity"
    ]
  },
  "2026-05-26": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Apara Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Removal of sins and purification.",
    "meaning": "Fast for cleansing past mistakes and negative karma.",
    "do": [
      "Fast",
      "Charity",
      "Prayers"
    ],
    "avoid": [
      "Grains",
      "Rice"
    ]
  },
  "2026-06-10": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Nirjala Ekadashi",
    "muhurat": "5:15 AM - 6:45 AM",
    "significance": "Most powerful Ekadashi! Waterless fast for ultimate spiritual merit.",
    "meaning": "The toughest fast - no food, no water. Equal to fasting on all 24 Ekadashis!",
    "do": [
      "Complete waterless fast",
      "Pray intensely",
      "Stay strong"
    ],
    "avoid": [
      "Any food or water",
      "Weakness"
    ]
  },
  "2026-06-25": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Yogini Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Spiritual union and yoga practice.",
    "meaning": "Fast for enhancing spiritual connection and inner peace.",
    "do": [
      "Yoga",
      "Meditation",
      "Fast"
    ],
    "avoid": [
      "Grains",
      "Distractions"
    ]
  },
  "2026-06-29": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Guru Purnima",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Honor all teachers and gurus. Express gratitude for knowledge.",
    "meaning": "Thank those who guide you - teachers, parents, mentors. Seek blessings!",
    "do": [
      "Thank your teachers",
      "Learn something new",
      "Guru puja"
    ],
    "avoid": [
      "Disrespect to elders",
      "Ego"
    ]
  },
  "2026-07-09": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Devshayani Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Lord Vishnu goes to sleep for 4 months. Beginning of Chaturmas.",
    "meaning": "Fast as Lord Vishnu enters cosmic sleep. No auspicious ceremonies for 4 months.",
    "do": [
      "Fast",
      "Spiritual practices",
      "Self-discipline"
    ],
    "avoid": [
      "Weddings",
      "Grains"
    ]
  },
  "2026-07-18": {
    "tithi": "Panchami",
    "paksha": "Shukla Paksha",
    "festival": "Nag Panchami",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Worship serpent deities. Protection from snake bites.",
    "meaning": "Honor snakes as symbols of transformation and power.",
    "do": [
      "Offer milk to snakes",
      "Worship Nag devta",
      "Respect nature"
    ],
    "avoid": [
      "Killing snakes",
      "Ploughing fields"
    ]
  },
  "2026-07-24": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Kamika Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Fulfillment of wishes and desires.",
    "meaning": "Fast for achieving your goals and dreams.",
    "do": [
      "Fast",
      "Worship Vishnu",
      "Positive thinking"
    ],
    "avoid": [
      "Grains",
      "Negativity"
    ]
  },
  "2026-07-29": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Raksha Bandhan",
    "muhurat": "9:00 AM - 10:30 AM",
    "significance": "Celebrating the sacred bond between siblings.",
    "meaning": "Sisters tie rakhi on brothers' wrists for protection and love.",
    "do": [
      "Tie rakhi",
      "Exchange gifts",
      "Family time"
    ],
    "avoid": [
      "Fighting with siblings",
      "Negativity"
    ]
  },
  "2026-08-05": {
    "tithi": "Ashtami",
    "paksha": "Krishna Paksha",
    "festival": "Krishna Janmashtami",
    "muhurat": "11:30 PM - 12:30 AM",
    "significance": "Birth of Lord Krishna at midnight. Celebrate divine playfulness!",
    "meaning": "Fast till midnight, then celebrate the birth of the cosmic teacher.",
    "do": [
      "Fast till midnight",
      "Dahi Handi",
      "Sing bhajans",
      "Dance"
    ],
    "avoid": [
      "Sleep before midnight",
      "Non-veg"
    ]
  },
  "2026-08-08": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Shravana Putrada Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Blessing of children and progeny.",
    "meaning": "Fast for family well-being and healthy children.",
    "do": [
      "Fast",
      "Family prayers",
      "Donate"
    ],
    "avoid": [
      "Grains",
      "Selfish thoughts"
    ]
  },
  "2026-08-16": {
    "tithi": "Chaturthi",
    "paksha": "Shukla Paksha",
    "festival": "Ganesh Chaturthi",
    "muhurat": "11:00 AM - 1:30 PM",
    "significance": "Birth of Lord Ganesha! Remover of obstacles and giver of wisdom.",
    "meaning": "Welcome Ganesha into your home for 10 days of celebrations!",
    "do": [
      "Install Ganesha idol",
      "Offer modak",
      "Prayers"
    ],
    "avoid": [
      "Looking at moon",
      "Negativity"
    ]
  },
  "2026-08-23": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Aja Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Protection for ancestors and family lineage.",
    "meaning": "Fast for the well-being of departed ancestors.",
    "do": [
      "Fast",
      "Ancestor prayers",
      "Charity"
    ],
    "avoid": [
      "Grains",
      "Forgetting ancestors"
    ]
  },
  "2026-09-06": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Parsva Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Lord Vishnu turns to the other side during cosmic sleep.",
    "meaning": "Continue spiritual practices during Chaturmas.",
    "do": [
      "Fast",
      "Meditation",
      "Discipline"
    ],
    "avoid": [
      "Grains",
      "Laziness"
    ]
  },
  "2026-09-11": {
    "tithi": "Prathama",
    "paksha": "Shukla Paksha",
    "festival": "Navratri Begins",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "9 nights of Goddess Durga worship begin! Victory over evil.",
    "meaning": "Start 9 days of devotion, dance (Garba/Dandiya), and celebration!",
    "do": [
      "Garba dance",
      "Fast",
      "Worship Goddess",
      "Wear colorful clothes"
    ],
    "avoid": [
      "Non-veg",
      "Alcohol",
      "Negativity"
    ]
  },
  "2026-09-20": {
    "tithi": "Navami",
    "paksha": "Shukla Paksha",
    "festival": "Maha Navami",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "9th day of Navratri. Worship Goddess Siddhidatri.",
    "meaning": "Final day of Navratri - seek ultimate blessings of divine mother.",
    "do": [
      "Kanya puja",
      "Fast",
      "Final prayers"
    ],
    "avoid": [
      "Breaking fast early",
      "Disrespect"
    ]
  },
  "2026-09-21": {
    "tithi": "Dashami",
    "paksha": "Shukla Paksha",
    "festival": "Dussehra / Vijayadashami",
    "muhurat": "2:00 PM - 3:30 PM",
    "significance": "Victory of Lord Rama over Ravana. Good defeats evil!",
    "meaning": "Celebrate triumph of righteousness. Burn Ravana effigies!",
    "do": [
      "Watch Ramlila",
      "Burn Ravana effigy",
      "Start new learning"
    ],
    "avoid": [
      "Evil thoughts",
      "Anger"
    ]
  },
  "2026-10-06": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Pasankusha Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Control of senses and mind. Inner discipline.",
    "meaning": "Fast for mastering your 10 senses and mind.",
    "do": [
      "Fast",
      "Meditation",
      "Self-control"
    ],
    "avoid": [
      "Grains",
      "Sensory overload"
    ]
  },
  "2026-10-07": {
    "tithi": "Trayodashi",
    "paksha": "Krishna Paksha",
    "festival": "Dhanteras",
    "muhurat": "5:30 PM - 7:00 PM",
    "significance": "Worship Goddess Lakshmi and Lord Dhanvantari. Wealth and health.",
    "meaning": "Buy gold, utensils, or something new for prosperity!",
    "do": [
      "Buy gold/silver",
      "Lakshmi puja",
      "Clean home"
    ],
    "avoid": [
      "Empty handed",
      "Laziness"
    ]
  },
  "2026-10-10": {
    "tithi": "Amavasya",
    "paksha": "Krishna Paksha",
    "festival": "Diwali - Festival of Lights",
    "muhurat": "6:00 PM - 7:30 PM",
    "significance": "Lord Rama returns to Ayodhya! Victory of light over darkness!",
    "meaning": "Light diyas, burst crackers, worship Lakshmi. Most joyous festival!",
    "do": [
      "Light diyas",
      "Lakshmi puja",
      "Sweets",
      "New clothes",
      "Fireworks"
    ],
    "avoid": [
      "Darkness in heart",
      "Greed"
    ]
  },
  "2026-10-12": {
    "tithi": "Dvitiya",
    "paksha": "Shukla Paksha",
    "festival": "Bhai Dooj",
    "muhurat": "1:00 PM - 2:30 PM",
    "significance": "Celebrating the sacred sibling bond. Sisters pray for brothers.",
    "meaning": "Sisters apply tilak on brothers and pray for their long life.",
    "do": [
      "Tilak ceremony",
      "Sweets",
      "Gifts",
      "Family time"
    ],
    "avoid": [
      "Fighting with siblings"
    ]
  },
  "2026-10-21": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Rama Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Devotion to Lord Rama and his ideals.",
    "meaning": "Fast for righteousness and dharma.",
    "do": [
      "Fast",
      "Read Ramayana",
      "Follow dharma"
    ],
    "avoid": [
      "Grains",
      "Adharma"
    ]
  },
  "2026-10-25": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Kartik Purnima",
    "muhurat": "6:00 PM - 7:30 PM",
    "significance": "Most sacred Purnima. Light diyas and take holy bath.",
    "meaning": "End of Kartik month - light 360 diyas for prosperity!",
    "do": [
      "Light diyas",
      "Holy bath",
      "Charity"
    ],
    "avoid": [
      "Darkness",
      "Sins"
    ]
  },
  "2026-11-05": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Devotthan / Prabodhini Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Lord Vishnu wakes up from cosmic sleep! End of Chaturmas.",
    "meaning": "Lord awakens! Wedding season and auspicious ceremonies resume!",
    "do": [
      "Fast",
      "Tulsi vivah",
      "Celebrate"
    ],
    "avoid": [
      "Grains",
      "Laziness"
    ]
  },
  "2026-11-19": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Utpanna Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Birth of Goddess Ekadashi from Lord Vishnu.",
    "meaning": "First ever Ekadashi! Origin story of this sacred day.",
    "do": [
      "Fast",
      "Listen to Ekadashi story",
      "Devotion"
    ],
    "avoid": [
      "Grains",
      "Ignorance"
    ]
  },
  "2026-12-05": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Mokshada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Liberation and moksha (salvation). Most powerful Ekadashi!",
    "meaning": "Fast for ultimate freedom from cycle of birth and death.",
    "do": [
      "Strict fast",
      "Gita reading",
      "Spiritual focus"
    ],
    "avoid": [
      "Grains",
      "Worldly attachments"
    ]
  },
  "2027-12-19": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Saphala Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Fulfillment of desires and wishes. A day for spiritual cleansing.",
    "meaning": "This Ekadashi removes obstacles and grants success in endeavors.",
    "do": [
      "Fast",
      "Pray to Lord Vishnu",
      "Chant mantras"
    ],
    "avoid": [
      "Grains",
      "Rice",
      "Heavy meals"
    ]
  },
  "2027-12-24": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Makar Sankranti",
    "muhurat": "7:00 AM - 8:30 AM",
    "significance": "Sun enters Capricorn. Harvest festival marking end of winter.",
    "meaning": "Celebrate new beginnings and thank nature for the harvest.",
    "do": [
      "Fly kites",
      "Eat til-gur sweets",
      "Take holy bath"
    ],
    "avoid": [
      "Negative thoughts",
      "Conflicts"
    ]
  },
  "2027-01-03": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Putrada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Blessing of children and family prosperity.",
    "meaning": "Devotion to Lord Vishnu for family well-being and progeny.",
    "do": [
      "Fast",
      "Family prayers",
      "Charity"
    ],
    "avoid": [
      "Grains",
      "Beans",
      "Onion-garlic"
    ]
  },
  "2027-01-11": {
    "tithi": "Panchami",
    "paksha": "Shukla Paksha",
    "festival": "Vasant Panchami",
    "muhurat": "7:15 AM - 8:45 AM",
    "significance": "Worship Goddess Saraswati. Spring arrives, celebrate knowledge and learning.",
    "meaning": "Honor education, arts, music. Great day to start learning something new!",
    "do": [
      "Wear yellow",
      "Worship books",
      "Learn music"
    ],
    "avoid": [
      "Laziness",
      "Disrespecting teachers"
    ]
  },
  "2027-01-17": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Shattila Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Use of sesame seeds for charity and blessings.",
    "meaning": "Donate sesame seeds, oil, and food for spiritual merit.",
    "do": [
      "Donate sesame",
      "Charity",
      "Fast"
    ],
    "avoid": [
      "Selfishness",
      "Grains"
    ]
  },
  "2027-02-01": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Jaya Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Victory in all endeavors. Brings success and removes sins.",
    "meaning": "Fast for triumph over obstacles and negative karma.",
    "do": [
      "Fast strictly",
      "Read Bhagavad Gita",
      "Meditate"
    ],
    "avoid": [
      "Rice",
      "Grains",
      "Distractions"
    ]
  },
  "2027-02-04": {
    "tithi": "Chaturdashi",
    "paksha": "Krishna Paksha",
    "festival": "Maha Shivaratri",
    "muhurat": "12:00 AM - 1:30 AM",
    "significance": "The great night of Lord Shiva. Marriage of Shiva and Parvati.",
    "meaning": "Stay awake all night, meditate, and worship Shiva for spiritual awakening.",
    "do": [
      "Night vigil",
      "Offer milk to Shiva Lingam",
      "Chant Om Namah Shivaya"
    ],
    "avoid": [
      "Sleep during night",
      "Heavy food"
    ]
  },
  "2027-02-16": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Vijaya Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Conquering obstacles and enemies. Victory in all pursuits.",
    "meaning": "Fast for overcoming challenges and achieving success.",
    "do": [
      "Fast",
      "Pray for strength",
      "Help others"
    ],
    "avoid": [
      "Grains",
      "Negative energy"
    ]
  },
  "2027-02-20": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Holi",
    "muhurat": "6:15 PM - 7:45 PM",
    "significance": "Festival of colors! Victory of devotion over evil. Spring celebration.",
    "meaning": "Celebrate love, friendship, and the triumph of good. Play with colors!",
    "do": [
      "Play with colors",
      "Forgive others",
      "Enjoy with friends"
    ],
    "avoid": [
      "Harmful colors",
      "Fighting"
    ]
  },
  "2027-03-03": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Amalaki Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Worship of Amla (gooseberry) tree. Health and longevity.",
    "meaning": "Honor nature and seek blessings for good health.",
    "do": [
      "Worship Amla tree",
      "Eat Amla",
      "Plant trees"
    ],
    "avoid": [
      "Harming nature",
      "Grains"
    ]
  },
  "2027-03-08": {
    "tithi": "Prathama",
    "paksha": "Shukla Paksha",
    "festival": "Gudi Padwa / Ugadi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Hindu New Year! Celebrate new beginnings and prosperity.",
    "meaning": "Start fresh, set goals, welcome abundance. Hoist the Gudi flag!",
    "do": [
      "New clothes",
      "Eat neem-jaggery",
      "Make rangoli"
    ],
    "avoid": [
      "Negativity",
      "Old grudges"
    ]
  },
  "2027-03-15": {
    "tithi": "Navami",
    "paksha": "Shukla Paksha",
    "festival": "Rama Navami",
    "muhurat": "11:00 AM - 12:30 PM",
    "significance": "Birth of Lord Rama. Symbol of dharma and righteousness.",
    "meaning": "Celebrate the ideal king who stood for truth and duty.",
    "do": [
      "Read Ramayana",
      "Sing bhajans",
      "Fast till noon"
    ],
    "avoid": [
      "Non-veg",
      "Alcohol"
    ]
  },
  "2027-03-17": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Papmochani Ekadashi",
    "muhurat": "6:45 AM - 8:15 AM",
    "significance": "Removal of sins and past karma. Mental clarity and forgiveness.",
    "meaning": "Fast for purification of mind and soul. Let go of guilt.",
    "do": [
      "Fast",
      "Forgive yourself and others",
      "Meditate"
    ],
    "avoid": [
      "Rice",
      "Grains",
      "Holding grudges"
    ]
  },
  "2027-03-21": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Hanuman Jayanti",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Birth of Lord Hanuman. Strength, devotion, and courage.",
    "meaning": "Honor the ultimate devotee. Seek strength to overcome challenges.",
    "do": [
      "Recite Hanuman Chalisa",
      "Visit temple",
      "Help others"
    ],
    "avoid": [
      "Ego",
      "Laziness"
    ]
  },
  "2027-04-01": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Kamada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Fulfillment of desires and wishes. Removes obstacles.",
    "meaning": "Fast with pure intentions for legitimate desires.",
    "do": [
      "Fast",
      "Pray for goals",
      "Stay positive"
    ],
    "avoid": [
      "Grains",
      "Selfish wishes"
    ]
  },
  "2027-04-16": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Varuthini Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Protection from evil and negativity. Shield of faith.",
    "meaning": "Fast for divine protection and spiritual strength.",
    "do": [
      "Fast",
      "Seek protection",
      "Charity"
    ],
    "avoid": [
      "Fear",
      "Grains"
    ]
  },
  "2027-04-30": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Mohini Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Liberation from illusions. See truth clearly.",
    "meaning": "Fast to break free from maya (illusion) and false attachments.",
    "do": [
      "Fast",
      "Meditate",
      "Seek truth"
    ],
    "avoid": [
      "Illusions",
      "Grains",
      "Delusions"
    ]
  },
  "2027-05-08": {
    "tithi": "Tritiya",
    "paksha": "Shukla Paksha",
    "festival": "Akshaya Tritiya",
    "muhurat": "6:00 AM - 12:00 PM",
    "significance": "Most auspicious day! Perfect for new beginnings, buying gold.",
    "meaning": "Everything started today brings eternal prosperity. No muhurat needed!",
    "do": [
      "Buy gold",
      "Start new ventures",
      "Donate"
    ],
    "avoid": [
      "Laziness",
      "Negativity"
    ]
  },
  "2027-05-15": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Apara Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Removal of sins and purification.",
    "meaning": "Fast for cleansing past mistakes and negative karma.",
    "do": [
      "Fast",
      "Charity",
      "Prayers"
    ],
    "avoid": [
      "Grains",
      "Rice"
    ]
  },
  "2027-05-30": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Nirjala Ekadashi",
    "muhurat": "5:15 AM - 6:45 AM",
    "significance": "Most powerful Ekadashi! Waterless fast for ultimate spiritual merit.",
    "meaning": "The toughest fast - no food, no water. Equal to fasting on all 24 Ekadashis!",
    "do": [
      "Complete waterless fast",
      "Pray intensely",
      "Stay strong"
    ],
    "avoid": [
      "Any food or water",
      "Weakness"
    ]
  },
  "2027-06-14": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Yogini Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Spiritual union and yoga practice.",
    "meaning": "Fast for enhancing spiritual connection and inner peace.",
    "do": [
      "Yoga",
      "Meditation",
      "Fast"
    ],
    "avoid": [
      "Grains",
      "Distractions"
    ]
  },
  "2027-06-18": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Guru Purnima",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Honor all teachers and gurus. Express gratitude for knowledge.",
    "meaning": "Thank those who guide you - teachers, parents, mentors. Seek blessings!",
    "do": [
      "Thank your teachers",
      "Learn something new",
      "Guru puja"
    ],
    "avoid": [
      "Disrespect to elders",
      "Ego"
    ]
  },
  "2027-06-28": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Devshayani Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Lord Vishnu goes to sleep for 4 months. Beginning of Chaturmas.",
    "meaning": "Fast as Lord Vishnu enters cosmic sleep. No auspicious ceremonies for 4 months.",
    "do": [
      "Fast",
      "Spiritual practices",
      "Self-discipline"
    ],
    "avoid": [
      "Weddings",
      "Grains"
    ]
  },
  "2027-07-07": {
    "tithi": "Panchami",
    "paksha": "Shukla Paksha",
    "festival": "Nag Panchami",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Worship serpent deities. Protection from snake bites.",
    "meaning": "Honor snakes as symbols of transformation and power.",
    "do": [
      "Offer milk to snakes",
      "Worship Nag devta",
      "Respect nature"
    ],
    "avoid": [
      "Killing snakes",
      "Ploughing fields"
    ]
  },
  "2027-07-13": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Kamika Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Fulfillment of wishes and desires.",
    "meaning": "Fast for achieving your goals and dreams.",
    "do": [
      "Fast",
      "Worship Vishnu",
      "Positive thinking"
    ],
    "avoid": [
      "Grains",
      "Negativity"
    ]
  },
  "2027-07-18": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Raksha Bandhan",
    "muhurat": "9:00 AM - 10:30 AM",
    "significance": "Celebrating the sacred bond between siblings.",
    "meaning": "Sisters tie rakhi on brothers' wrists for protection and love.",
    "do": [
      "Tie rakhi",
      "Exchange gifts",
      "Family time"
    ],
    "avoid": [
      "Fighting with siblings",
      "Negativity"
    ]
  },
  "2027-07-25": {
    "tithi": "Ashtami",
    "paksha": "Krishna Paksha",
    "festival": "Krishna Janmashtami",
    "muhurat": "11:30 PM - 12:30 AM",
    "significance": "Birth of Lord Krishna at midnight. Celebrate divine playfulness!",
    "meaning": "Fast till midnight, then celebrate the birth of the cosmic teacher.",
    "do": [
      "Fast till midnight",
      "Dahi Handi",
      "Sing bhajans",
      "Dance"
    ],
    "avoid": [
      "Sleep before midnight",
      "Non-veg"
    ]
  },
  "2027-07-28": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Shravana Putrada Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Blessing of children and progeny.",
    "meaning": "Fast for family well-being and healthy children.",
    "do": [
      "Fast",
      "Family prayers",
      "Donate"
    ],
    "avoid": [
      "Grains",
      "Selfish thoughts"
    ]
  },
  "2027-08-05": {
    "tithi": "Chaturthi",
    "paksha": "Shukla Paksha",
    "festival": "Ganesh Chaturthi",
    "muhurat": "11:00 AM - 1:30 PM",
    "significance": "Birth of Lord Ganesha! Remover of obstacles and giver of wisdom.",
    "meaning": "Welcome Ganesha into your home for 10 days of celebrations!",
    "do": [
      "Install Ganesha idol",
      "Offer modak",
      "Prayers"
    ],
    "avoid": [
      "Looking at moon",
      "Negativity"
    ]
  },
  "2027-08-12": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Aja Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Protection for ancestors and family lineage.",
    "meaning": "Fast for the well-being of departed ancestors.",
    "do": [
      "Fast",
      "Ancestor prayers",
      "Charity"
    ],
    "avoid": [
      "Grains",
      "Forgetting ancestors"
    ]
  },
  "2027-08-26": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Parsva Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Lord Vishnu turns to the other side during cosmic sleep.",
    "meaning": "Continue spiritual practices during Chaturmas.",
    "do": [
      "Fast",
      "Meditation",
      "Discipline"
    ],
    "avoid": [
      "Grains",
      "Laziness"
    ]
  },
  "2027-08-31": {
    "tithi": "Prathama",
    "paksha": "Shukla Paksha",
    "festival": "Navratri Begins",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "9 nights of Goddess Durga worship begin! Victory over evil.",
    "meaning": "Start 9 days of devotion, dance (Garba/Dandiya), and celebration!",
    "do": [
      "Garba dance",
      "Fast",
      "Worship Goddess",
      "Wear colorful clothes"
    ],
    "avoid": [
      "Non-veg",
      "Alcohol",
      "Negativity"
    ]
  },
  "2027-09-09": {
    "tithi": "Navami",
    "paksha": "Shukla Paksha",
    "festival": "Maha Navami",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "9th day of Navratri. Worship Goddess Siddhidatri.",
    "meaning": "Final day of Navratri - seek ultimate blessings of divine mother.",
    "do": [
      "Kanya puja",
      "Fast",
      "Final prayers"
    ],
    "avoid": [
      "Breaking fast early",
      "Disrespect"
    ]
  },
  "2027-09-10": {
    "tithi": "Dashami",
    "paksha": "Shukla Paksha",
    "festival": "Dussehra / Vijayadashami",
    "muhurat": "2:00 PM - 3:30 PM",
    "significance": "Victory of Lord Rama over Ravana. Good defeats evil!",
    "meaning": "Celebrate triumph of righteousness. Burn Ravana effigies!",
    "do": [
      "Watch Ramlila",
      "Burn Ravana effigy",
      "Start new learning"
    ],
    "avoid": [
      "Evil thoughts",
      "Anger"
    ]
  },
  "2027-09-25": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Pasankusha Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Control of senses and mind. Inner discipline.",
    "meaning": "Fast for mastering your 10 senses and mind.",
    "do": [
      "Fast",
      "Meditation",
      "Self-control"
    ],
    "avoid": [
      "Grains",
      "Sensory overload"
    ]
  },
  "2027-09-26": {
    "tithi": "Trayodashi",
    "paksha": "Krishna Paksha",
    "festival": "Dhanteras",
    "muhurat": "5:30 PM - 7:00 PM",
    "significance": "Worship Goddess Lakshmi and Lord Dhanvantari. Wealth and health.",
    "meaning": "Buy gold, utensils, or something new for prosperity!",
    "do": [
      "Buy gold/silver",
      "Lakshmi puja",
      "Clean home"
    ],
    "avoid": [
      "Empty handed",
      "Laziness"
    ]
  },
  "2027-09-29": {
    "tithi": "Amavasya",
    "paksha": "Krishna Paksha",
    "festival": "Diwali - Festival of Lights",
    "muhurat": "6:00 PM - 7:30 PM",
    "significance": "Lord Rama returns to Ayodhya! Victory of light over darkness!",
    "meaning": "Light diyas, burst crackers, worship Lakshmi. Most joyous festival!",
    "do": [
      "Light diyas",
      "Lakshmi puja",
      "Sweets",
      "New clothes",
      "Fireworks"
    ],
    "avoid": [
      "Darkness in heart",
      "Greed"
    ]
  },
  "2027-10-01": {
    "tithi": "Dvitiya",
    "paksha": "Shukla Paksha",
    "festival": "Bhai Dooj",
    "muhurat": "1:00 PM - 2:30 PM",
    "significance": "Celebrating the sacred sibling bond. Sisters pray for brothers.",
    "meaning": "Sisters apply tilak on brothers and pray for their long life.",
    "do": [
      "Tilak ceremony",
      "Sweets",
      "Gifts",
      "Family time"
    ],
    "avoid": [
      "Fighting with siblings"
    ]
  },
  "2027-10-10": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Rama Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Devotion to Lord Rama and his ideals.",
    "meaning": "Fast for righteousness and dharma.",
    "do": [
      "Fast",
      "Read Ramayana",
      "Follow dharma"
    ],
    "avoid": [
      "Grains",
      "Adharma"
    ]
  },
  "2027-10-14": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Kartik Purnima",
    "muhurat": "6:00 PM - 7:30 PM",
    "significance": "Most sacred Purnima. Light diyas and take holy bath.",
    "meaning": "End of Kartik month - light 360 diyas for prosperity!",
    "do": [
      "Light diyas",
      "Holy bath",
      "Charity"
    ],
    "avoid": [
      "Darkness",
      "Sins"
    ]
  },
  "2027-10-25": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Devotthan / Prabodhini Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Lord Vishnu wakes up from cosmic sleep! End of Chaturmas.",
    "meaning": "Lord awakens! Wedding season and auspicious ceremonies resume!",
    "do": [
      "Fast",
      "Tulsi vivah",
      "Celebrate"
    ],
    "avoid": [
      "Grains",
      "Laziness"
    ]
  },
  "2027-11-08": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Utpanna Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Birth of Goddess Ekadashi from Lord Vishnu.",
    "meaning": "First ever Ekadashi! Origin story of this sacred day.",
    "do": [
      "Fast",
      "Listen to Ekadashi story",
      "Devotion"
    ],
    "avoid": [
      "Grains",
      "Ignorance"
    ]
  },
  "2027-11-24": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Mokshada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Liberation and moksha (salvation). Most powerful Ekadashi!",
    "meaning": "Fast for ultimate freedom from cycle of birth and death.",
    "do": [
      "Strict fast",
      "Gita reading",
      "Spiritual focus"
    ],
    "avoid": [
      "Grains",
      "Worldly attachments"
    ]
  },
  "2028-12-07": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Saphala Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Fulfillment of desires and wishes. A day for spiritual cleansing.",
    "meaning": "This Ekadashi removes obstacles and grants success in endeavors.",
    "do": [
      "Fast",
      "Pray to Lord Vishnu",
      "Chant mantras"
    ],
    "avoid": [
      "Grains",
      "Rice",
      "Heavy meals"
    ]
  },
  "2028-12-12": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Makar Sankranti",
    "muhurat": "7:00 AM - 8:30 AM",
    "significance": "Sun enters Capricorn. Harvest festival marking end of winter.",
    "meaning": "Celebrate new beginnings and thank nature for the harvest.",
    "do": [
      "Fly kites",
      "Eat til-gur sweets",
      "Take holy bath"
    ],
    "avoid": [
      "Negative thoughts",
      "Conflicts"
    ]
  },
  "2028-12-22": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Putrada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Blessing of children and family prosperity.",
    "meaning": "Devotion to Lord Vishnu for family well-being and progeny.",
    "do": [
      "Fast",
      "Family prayers",
      "Charity"
    ],
    "avoid": [
      "Grains",
      "Beans",
      "Onion-garlic"
    ]
  },
  "2028-12-30": {
    "tithi": "Panchami",
    "paksha": "Shukla Paksha",
    "festival": "Vasant Panchami",
    "muhurat": "7:15 AM - 8:45 AM",
    "significance": "Worship Goddess Saraswati. Spring arrives, celebrate knowledge and learning.",
    "meaning": "Honor education, arts, music. Great day to start learning something new!",
    "do": [
      "Wear yellow",
      "Worship books",
      "Learn music"
    ],
    "avoid": [
      "Laziness",
      "Disrespecting teachers"
    ]
  },
  "2028-01-06": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Shattila Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Use of sesame seeds for charity and blessings.",
    "meaning": "Donate sesame seeds, oil, and food for spiritual merit.",
    "do": [
      "Donate sesame",
      "Charity",
      "Fast"
    ],
    "avoid": [
      "Selfishness",
      "Grains"
    ]
  },
  "2028-01-21": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Jaya Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Victory in all endeavors. Brings success and removes sins.",
    "meaning": "Fast for triumph over obstacles and negative karma.",
    "do": [
      "Fast strictly",
      "Read Bhagavad Gita",
      "Meditate"
    ],
    "avoid": [
      "Rice",
      "Grains",
      "Distractions"
    ]
  },
  "2028-01-24": {
    "tithi": "Chaturdashi",
    "paksha": "Krishna Paksha",
    "festival": "Maha Shivaratri",
    "muhurat": "12:00 AM - 1:30 AM",
    "significance": "The great night of Lord Shiva. Marriage of Shiva and Parvati.",
    "meaning": "Stay awake all night, meditate, and worship Shiva for spiritual awakening.",
    "do": [
      "Night vigil",
      "Offer milk to Shiva Lingam",
      "Chant Om Namah Shivaya"
    ],
    "avoid": [
      "Sleep during night",
      "Heavy food"
    ]
  },
  "2028-02-06": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Vijaya Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Conquering obstacles and enemies. Victory in all pursuits.",
    "meaning": "Fast for overcoming challenges and achieving success.",
    "do": [
      "Fast",
      "Pray for strength",
      "Help others"
    ],
    "avoid": [
      "Grains",
      "Negative energy"
    ]
  },
  "2028-02-10": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Holi",
    "muhurat": "6:15 PM - 7:45 PM",
    "significance": "Festival of colors! Victory of devotion over evil. Spring celebration.",
    "meaning": "Celebrate love, friendship, and the triumph of good. Play with colors!",
    "do": [
      "Play with colors",
      "Forgive others",
      "Enjoy with friends"
    ],
    "avoid": [
      "Harmful colors",
      "Fighting"
    ]
  },
  "2028-02-21": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Amalaki Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Worship of Amla (gooseberry) tree. Health and longevity.",
    "meaning": "Honor nature and seek blessings for good health.",
    "do": [
      "Worship Amla tree",
      "Eat Amla",
      "Plant trees"
    ],
    "avoid": [
      "Harming nature",
      "Grains"
    ]
  },
  "2028-02-26": {
    "tithi": "Prathama",
    "paksha": "Shukla Paksha",
    "festival": "Gudi Padwa / Ugadi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Hindu New Year! Celebrate new beginnings and prosperity.",
    "meaning": "Start fresh, set goals, welcome abundance. Hoist the Gudi flag!",
    "do": [
      "New clothes",
      "Eat neem-jaggery",
      "Make rangoli"
    ],
    "avoid": [
      "Negativity",
      "Old grudges"
    ]
  },
  "2028-03-04": {
    "tithi": "Navami",
    "paksha": "Shukla Paksha",
    "festival": "Rama Navami",
    "muhurat": "11:00 AM - 12:30 PM",
    "significance": "Birth of Lord Rama. Symbol of dharma and righteousness.",
    "meaning": "Celebrate the ideal king who stood for truth and duty.",
    "do": [
      "Read Ramayana",
      "Sing bhajans",
      "Fast till noon"
    ],
    "avoid": [
      "Non-veg",
      "Alcohol"
    ]
  },
  "2028-03-06": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Papmochani Ekadashi",
    "muhurat": "6:45 AM - 8:15 AM",
    "significance": "Removal of sins and past karma. Mental clarity and forgiveness.",
    "meaning": "Fast for purification of mind and soul. Let go of guilt.",
    "do": [
      "Fast",
      "Forgive yourself and others",
      "Meditate"
    ],
    "avoid": [
      "Rice",
      "Grains",
      "Holding grudges"
    ]
  },
  "2028-03-10": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Hanuman Jayanti",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Birth of Lord Hanuman. Strength, devotion, and courage.",
    "meaning": "Honor the ultimate devotee. Seek strength to overcome challenges.",
    "do": [
      "Recite Hanuman Chalisa",
      "Visit temple",
      "Help others"
    ],
    "avoid": [
      "Ego",
      "Laziness"
    ]
  },
  "2028-03-21": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Kamada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Fulfillment of desires and wishes. Removes obstacles.",
    "meaning": "Fast with pure intentions for legitimate desires.",
    "do": [
      "Fast",
      "Pray for goals",
      "Stay positive"
    ],
    "avoid": [
      "Grains",
      "Selfish wishes"
    ]
  },
  "2028-04-05": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Varuthini Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Protection from evil and negativity. Shield of faith.",
    "meaning": "Fast for divine protection and spiritual strength.",
    "do": [
      "Fast",
      "Seek protection",
      "Charity"
    ],
    "avoid": [
      "Fear",
      "Grains"
    ]
  },
  "2028-04-19": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Mohini Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Liberation from illusions. See truth clearly.",
    "meaning": "Fast to break free from maya (illusion) and false attachments.",
    "do": [
      "Fast",
      "Meditate",
      "Seek truth"
    ],
    "avoid": [
      "Illusions",
      "Grains",
      "Delusions"
    ]
  },
  "2028-04-27": {
    "tithi": "Tritiya",
    "paksha": "Shukla Paksha",
    "festival": "Akshaya Tritiya",
    "muhurat": "6:00 AM - 12:00 PM",
    "significance": "Most auspicious day! Perfect for new beginnings, buying gold.",
    "meaning": "Everything started today brings eternal prosperity. No muhurat needed!",
    "do": [
      "Buy gold",
      "Start new ventures",
      "Donate"
    ],
    "avoid": [
      "Laziness",
      "Negativity"
    ]
  },
  "2028-05-04": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Apara Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Removal of sins and purification.",
    "meaning": "Fast for cleansing past mistakes and negative karma.",
    "do": [
      "Fast",
      "Charity",
      "Prayers"
    ],
    "avoid": [
      "Grains",
      "Rice"
    ]
  },
  "2028-05-19": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Nirjala Ekadashi",
    "muhurat": "5:15 AM - 6:45 AM",
    "significance": "Most powerful Ekadashi! Waterless fast for ultimate spiritual merit.",
    "meaning": "The toughest fast - no food, no water. Equal to fasting on all 24 Ekadashis!",
    "do": [
      "Complete waterless fast",
      "Pray intensely",
      "Stay strong"
    ],
    "avoid": [
      "Any food or water",
      "Weakness"
    ]
  },
  "2028-06-03": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Yogini Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Spiritual union and yoga practice.",
    "meaning": "Fast for enhancing spiritual connection and inner peace.",
    "do": [
      "Yoga",
      "Meditation",
      "Fast"
    ],
    "avoid": [
      "Grains",
      "Distractions"
    ]
  },
  "2028-06-07": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Guru Purnima",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Honor all teachers and gurus. Express gratitude for knowledge.",
    "meaning": "Thank those who guide you - teachers, parents, mentors. Seek blessings!",
    "do": [
      "Thank your teachers",
      "Learn something new",
      "Guru puja"
    ],
    "avoid": [
      "Disrespect to elders",
      "Ego"
    ]
  },
  "2028-06-17": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Devshayani Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Lord Vishnu goes to sleep for 4 months. Beginning of Chaturmas.",
    "meaning": "Fast as Lord Vishnu enters cosmic sleep. No auspicious ceremonies for 4 months.",
    "do": [
      "Fast",
      "Spiritual practices",
      "Self-discipline"
    ],
    "avoid": [
      "Weddings",
      "Grains"
    ]
  },
  "2028-06-26": {
    "tithi": "Panchami",
    "paksha": "Shukla Paksha",
    "festival": "Nag Panchami",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Worship serpent deities. Protection from snake bites.",
    "meaning": "Honor snakes as symbols of transformation and power.",
    "do": [
      "Offer milk to snakes",
      "Worship Nag devta",
      "Respect nature"
    ],
    "avoid": [
      "Killing snakes",
      "Ploughing fields"
    ]
  },
  "2028-07-02": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Kamika Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Fulfillment of wishes and desires.",
    "meaning": "Fast for achieving your goals and dreams.",
    "do": [
      "Fast",
      "Worship Vishnu",
      "Positive thinking"
    ],
    "avoid": [
      "Grains",
      "Negativity"
    ]
  },
  "2028-07-07": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Raksha Bandhan",
    "muhurat": "9:00 AM - 10:30 AM",
    "significance": "Celebrating the sacred bond between siblings.",
    "meaning": "Sisters tie rakhi on brothers' wrists for protection and love.",
    "do": [
      "Tie rakhi",
      "Exchange gifts",
      "Family time"
    ],
    "avoid": [
      "Fighting with siblings",
      "Negativity"
    ]
  },
  "2028-07-14": {
    "tithi": "Ashtami",
    "paksha": "Krishna Paksha",
    "festival": "Krishna Janmashtami",
    "muhurat": "11:30 PM - 12:30 AM",
    "significance": "Birth of Lord Krishna at midnight. Celebrate divine playfulness!",
    "meaning": "Fast till midnight, then celebrate the birth of the cosmic teacher.",
    "do": [
      "Fast till midnight",
      "Dahi Handi",
      "Sing bhajans",
      "Dance"
    ],
    "avoid": [
      "Sleep before midnight",
      "Non-veg"
    ]
  },
  "2028-07-17": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Shravana Putrada Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Blessing of children and progeny.",
    "meaning": "Fast for family well-being and healthy children.",
    "do": [
      "Fast",
      "Family prayers",
      "Donate"
    ],
    "avoid": [
      "Grains",
      "Selfish thoughts"
    ]
  },
  "2028-07-25": {
    "tithi": "Chaturthi",
    "paksha": "Shukla Paksha",
    "festival": "Ganesh Chaturthi",
    "muhurat": "11:00 AM - 1:30 PM",
    "significance": "Birth of Lord Ganesha! Remover of obstacles and giver of wisdom.",
    "meaning": "Welcome Ganesha into your home for 10 days of celebrations!",
    "do": [
      "Install Ganesha idol",
      "Offer modak",
      "Prayers"
    ],
    "avoid": [
      "Looking at moon",
      "Negativity"
    ]
  },
  "2028-08-01": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Aja Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Protection for ancestors and family lineage.",
    "meaning": "Fast for the well-being of departed ancestors.",
    "do": [
      "Fast",
      "Ancestor prayers",
      "Charity"
    ],
    "avoid": [
      "Grains",
      "Forgetting ancestors"
    ]
  },
  "2028-08-15": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Parsva Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Lord Vishnu turns to the other side during cosmic sleep.",
    "meaning": "Continue spiritual practices during Chaturmas.",
    "do": [
      "Fast",
      "Meditation",
      "Discipline"
    ],
    "avoid": [
      "Grains",
      "Laziness"
    ]
  },
  "2028-08-20": {
    "tithi": "Prathama",
    "paksha": "Shukla Paksha",
    "festival": "Navratri Begins",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "9 nights of Goddess Durga worship begin! Victory over evil.",
    "meaning": "Start 9 days of devotion, dance (Garba/Dandiya), and celebration!",
    "do": [
      "Garba dance",
      "Fast",
      "Worship Goddess",
      "Wear colorful clothes"
    ],
    "avoid": [
      "Non-veg",
      "Alcohol",
      "Negativity"
    ]
  },
  "2028-08-29": {
    "tithi": "Navami",
    "paksha": "Shukla Paksha",
    "festival": "Maha Navami",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "9th day of Navratri. Worship Goddess Siddhidatri.",
    "meaning": "Final day of Navratri - seek ultimate blessings of divine mother.",
    "do": [
      "Kanya puja",
      "Fast",
      "Final prayers"
    ],
    "avoid": [
      "Breaking fast early",
      "Disrespect"
    ]
  },
  "2028-08-30": {
    "tithi": "Dashami",
    "paksha": "Shukla Paksha",
    "festival": "Dussehra / Vijayadashami",
    "muhurat": "2:00 PM - 3:30 PM",
    "significance": "Victory of Lord Rama over Ravana. Good defeats evil!",
    "meaning": "Celebrate triumph of righteousness. Burn Ravana effigies!",
    "do": [
      "Watch Ramlila",
      "Burn Ravana effigy",
      "Start new learning"
    ],
    "avoid": [
      "Evil thoughts",
      "Anger"
    ]
  },
  "2028-09-14": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Pasankusha Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Control of senses and mind. Inner discipline.",
    "meaning": "Fast for mastering your 10 senses and mind.",
    "do": [
      "Fast",
      "Meditation",
      "Self-control"
    ],
    "avoid": [
      "Grains",
      "Sensory overload"
    ]
  },
  "2028-09-15": {
    "tithi": "Trayodashi",
    "paksha": "Krishna Paksha",
    "festival": "Dhanteras",
    "muhurat": "5:30 PM - 7:00 PM",
    "significance": "Worship Goddess Lakshmi and Lord Dhanvantari. Wealth and health.",
    "meaning": "Buy gold, utensils, or something new for prosperity!",
    "do": [
      "Buy gold/silver",
      "Lakshmi puja",
      "Clean home"
    ],
    "avoid": [
      "Empty handed",
      "Laziness"
    ]
  },
  "2028-09-18": {
    "tithi": "Amavasya",
    "paksha": "Krishna Paksha",
    "festival": "Diwali - Festival of Lights",
    "muhurat": "6:00 PM - 7:30 PM",
    "significance": "Lord Rama returns to Ayodhya! Victory of light over darkness!",
    "meaning": "Light diyas, burst crackers, worship Lakshmi. Most joyous festival!",
    "do": [
      "Light diyas",
      "Lakshmi puja",
      "Sweets",
      "New clothes",
      "Fireworks"
    ],
    "avoid": [
      "Darkness in heart",
      "Greed"
    ]
  },
  "2028-09-20": {
    "tithi": "Dvitiya",
    "paksha": "Shukla Paksha",
    "festival": "Bhai Dooj",
    "muhurat": "1:00 PM - 2:30 PM",
    "significance": "Celebrating the sacred sibling bond. Sisters pray for brothers.",
    "meaning": "Sisters apply tilak on brothers and pray for their long life.",
    "do": [
      "Tilak ceremony",
      "Sweets",
      "Gifts",
      "Family time"
    ],
    "avoid": [
      "Fighting with siblings"
    ]
  },
  "2028-09-29": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Rama Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Devotion to Lord Rama and his ideals.",
    "meaning": "Fast for righteousness and dharma.",
    "do": [
      "Fast",
      "Read Ramayana",
      "Follow dharma"
    ],
    "avoid": [
      "Grains",
      "Adharma"
    ]
  },
  "2028-10-03": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Kartik Purnima",
    "muhurat": "6:00 PM - 7:30 PM",
    "significance": "Most sacred Purnima. Light diyas and take holy bath.",
    "meaning": "End of Kartik month - light 360 diyas for prosperity!",
    "do": [
      "Light diyas",
      "Holy bath",
      "Charity"
    ],
    "avoid": [
      "Darkness",
      "Sins"
    ]
  },
  "2028-10-14": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Devotthan / Prabodhini Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Lord Vishnu wakes up from cosmic sleep! End of Chaturmas.",
    "meaning": "Lord awakens! Wedding season and auspicious ceremonies resume!",
    "do": [
      "Fast",
      "Tulsi vivah",
      "Celebrate"
    ],
    "avoid": [
      "Grains",
      "Laziness"
    ]
  },
  "2028-10-28": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Utpanna Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Birth of Goddess Ekadashi from Lord Vishnu.",
    "meaning": "First ever Ekadashi! Origin story of this sacred day.",
    "do": [
      "Fast",
      "Listen to Ekadashi story",
      "Devotion"
    ],
    "avoid": [
      "Grains",
      "Ignorance"
    ]
  },
  "2028-11-13": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Mokshada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Liberation and moksha (salvation). Most powerful Ekadashi!",
    "meaning": "Fast for ultimate freedom from cycle of birth and death.",
    "do": [
      "Strict fast",
      "Gita reading",
      "Spiritual focus"
    ],
    "avoid": [
      "Grains",
      "Worldly attachments"
    ]
  },
  "2029-11-27": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Saphala Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Fulfillment of desires and wishes. A day for spiritual cleansing.",
    "meaning": "This Ekadashi removes obstacles and grants success in endeavors.",
    "do": [
      "Fast",
      "Pray to Lord Vishnu",
      "Chant mantras"
    ],
    "avoid": [
      "Grains",
      "Rice",
      "Heavy meals"
    ]
  },
  "2029-12-02": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Makar Sankranti",
    "muhurat": "7:00 AM - 8:30 AM",
    "significance": "Sun enters Capricorn. Harvest festival marking end of winter.",
    "meaning": "Celebrate new beginnings and thank nature for the harvest.",
    "do": [
      "Fly kites",
      "Eat til-gur sweets",
      "Take holy bath"
    ],
    "avoid": [
      "Negative thoughts",
      "Conflicts"
    ]
  },
  "2029-12-12": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Putrada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Blessing of children and family prosperity.",
    "meaning": "Devotion to Lord Vishnu for family well-being and progeny.",
    "do": [
      "Fast",
      "Family prayers",
      "Charity"
    ],
    "avoid": [
      "Grains",
      "Beans",
      "Onion-garlic"
    ]
  },
  "2029-12-20": {
    "tithi": "Panchami",
    "paksha": "Shukla Paksha",
    "festival": "Vasant Panchami",
    "muhurat": "7:15 AM - 8:45 AM",
    "significance": "Worship Goddess Saraswati. Spring arrives, celebrate knowledge and learning.",
    "meaning": "Honor education, arts, music. Great day to start learning something new!",
    "do": [
      "Wear yellow",
      "Worship books",
      "Learn music"
    ],
    "avoid": [
      "Laziness",
      "Disrespecting teachers"
    ]
  },
  "2029-12-26": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Shattila Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Use of sesame seeds for charity and blessings.",
    "meaning": "Donate sesame seeds, oil, and food for spiritual merit.",
    "do": [
      "Donate sesame",
      "Charity",
      "Fast"
    ],
    "avoid": [
      "Selfishness",
      "Grains"
    ]
  },
  "2029-01-10": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Jaya Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Victory in all endeavors. Brings success and removes sins.",
    "meaning": "Fast for triumph over obstacles and negative karma.",
    "do": [
      "Fast strictly",
      "Read Bhagavad Gita",
      "Meditate"
    ],
    "avoid": [
      "Rice",
      "Grains",
      "Distractions"
    ]
  },
  "2029-01-13": {
    "tithi": "Chaturdashi",
    "paksha": "Krishna Paksha",
    "festival": "Maha Shivaratri",
    "muhurat": "12:00 AM - 1:30 AM",
    "significance": "The great night of Lord Shiva. Marriage of Shiva and Parvati.",
    "meaning": "Stay awake all night, meditate, and worship Shiva for spiritual awakening.",
    "do": [
      "Night vigil",
      "Offer milk to Shiva Lingam",
      "Chant Om Namah Shivaya"
    ],
    "avoid": [
      "Sleep during night",
      "Heavy food"
    ]
  },
  "2029-01-25": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Vijaya Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Conquering obstacles and enemies. Victory in all pursuits.",
    "meaning": "Fast for overcoming challenges and achieving success.",
    "do": [
      "Fast",
      "Pray for strength",
      "Help others"
    ],
    "avoid": [
      "Grains",
      "Negative energy"
    ]
  },
  "2029-01-29": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Holi",
    "muhurat": "6:15 PM - 7:45 PM",
    "significance": "Festival of colors! Victory of devotion over evil. Spring celebration.",
    "meaning": "Celebrate love, friendship, and the triumph of good. Play with colors!",
    "do": [
      "Play with colors",
      "Forgive others",
      "Enjoy with friends"
    ],
    "avoid": [
      "Harmful colors",
      "Fighting"
    ]
  },
  "2029-02-09": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Amalaki Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Worship of Amla (gooseberry) tree. Health and longevity.",
    "meaning": "Honor nature and seek blessings for good health.",
    "do": [
      "Worship Amla tree",
      "Eat Amla",
      "Plant trees"
    ],
    "avoid": [
      "Harming nature",
      "Grains"
    ]
  },
  "2029-02-14": {
    "tithi": "Prathama",
    "paksha": "Shukla Paksha",
    "festival": "Gudi Padwa / Ugadi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Hindu New Year! Celebrate new beginnings and prosperity.",
    "meaning": "Start fresh, set goals, welcome abundance. Hoist the Gudi flag!",
    "do": [
      "New clothes",
      "Eat neem-jaggery",
      "Make rangoli"
    ],
    "avoid": [
      "Negativity",
      "Old grudges"
    ]
  },
  "2029-02-21": {
    "tithi": "Navami",
    "paksha": "Shukla Paksha",
    "festival": "Rama Navami",
    "muhurat": "11:00 AM - 12:30 PM",
    "significance": "Birth of Lord Rama. Symbol of dharma and righteousness.",
    "meaning": "Celebrate the ideal king who stood for truth and duty.",
    "do": [
      "Read Ramayana",
      "Sing bhajans",
      "Fast till noon"
    ],
    "avoid": [
      "Non-veg",
      "Alcohol"
    ]
  },
  "2029-02-23": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Papmochani Ekadashi",
    "muhurat": "6:45 AM - 8:15 AM",
    "significance": "Removal of sins and past karma. Mental clarity and forgiveness.",
    "meaning": "Fast for purification of mind and soul. Let go of guilt.",
    "do": [
      "Fast",
      "Forgive yourself and others",
      "Meditate"
    ],
    "avoid": [
      "Rice",
      "Grains",
      "Holding grudges"
    ]
  },
  "2029-02-27": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Hanuman Jayanti",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Birth of Lord Hanuman. Strength, devotion, and courage.",
    "meaning": "Honor the ultimate devotee. Seek strength to overcome challenges.",
    "do": [
      "Recite Hanuman Chalisa",
      "Visit temple",
      "Help others"
    ],
    "avoid": [
      "Ego",
      "Laziness"
    ]
  },
  "2029-03-10": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Kamada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Fulfillment of desires and wishes. Removes obstacles.",
    "meaning": "Fast with pure intentions for legitimate desires.",
    "do": [
      "Fast",
      "Pray for goals",
      "Stay positive"
    ],
    "avoid": [
      "Grains",
      "Selfish wishes"
    ]
  },
  "2029-03-25": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Varuthini Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Protection from evil and negativity. Shield of faith.",
    "meaning": "Fast for divine protection and spiritual strength.",
    "do": [
      "Fast",
      "Seek protection",
      "Charity"
    ],
    "avoid": [
      "Fear",
      "Grains"
    ]
  },
  "2029-04-08": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Mohini Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Liberation from illusions. See truth clearly.",
    "meaning": "Fast to break free from maya (illusion) and false attachments.",
    "do": [
      "Fast",
      "Meditate",
      "Seek truth"
    ],
    "avoid": [
      "Illusions",
      "Grains",
      "Delusions"
    ]
  },
  "2029-04-16": {
    "tithi": "Tritiya",
    "paksha": "Shukla Paksha",
    "festival": "Akshaya Tritiya",
    "muhurat": "6:00 AM - 12:00 PM",
    "significance": "Most auspicious day! Perfect for new beginnings, buying gold.",
    "meaning": "Everything started today brings eternal prosperity. No muhurat needed!",
    "do": [
      "Buy gold",
      "Start new ventures",
      "Donate"
    ],
    "avoid": [
      "Laziness",
      "Negativity"
    ]
  },
  "2029-04-23": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Apara Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Removal of sins and purification.",
    "meaning": "Fast for cleansing past mistakes and negative karma.",
    "do": [
      "Fast",
      "Charity",
      "Prayers"
    ],
    "avoid": [
      "Grains",
      "Rice"
    ]
  },
  "2029-05-08": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Nirjala Ekadashi",
    "muhurat": "5:15 AM - 6:45 AM",
    "significance": "Most powerful Ekadashi! Waterless fast for ultimate spiritual merit.",
    "meaning": "The toughest fast - no food, no water. Equal to fasting on all 24 Ekadashis!",
    "do": [
      "Complete waterless fast",
      "Pray intensely",
      "Stay strong"
    ],
    "avoid": [
      "Any food or water",
      "Weakness"
    ]
  },
  "2029-05-23": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Yogini Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Spiritual union and yoga practice.",
    "meaning": "Fast for enhancing spiritual connection and inner peace.",
    "do": [
      "Yoga",
      "Meditation",
      "Fast"
    ],
    "avoid": [
      "Grains",
      "Distractions"
    ]
  },
  "2029-05-27": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Guru Purnima",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Honor all teachers and gurus. Express gratitude for knowledge.",
    "meaning": "Thank those who guide you - teachers, parents, mentors. Seek blessings!",
    "do": [
      "Thank your teachers",
      "Learn something new",
      "Guru puja"
    ],
    "avoid": [
      "Disrespect to elders",
      "Ego"
    ]
  },
  "2029-06-06": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Devshayani Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Lord Vishnu goes to sleep for 4 months. Beginning of Chaturmas.",
    "meaning": "Fast as Lord Vishnu enters cosmic sleep. No auspicious ceremonies for 4 months.",
    "do": [
      "Fast",
      "Spiritual practices",
      "Self-discipline"
    ],
    "avoid": [
      "Weddings",
      "Grains"
    ]
  },
  "2029-06-15": {
    "tithi": "Panchami",
    "paksha": "Shukla Paksha",
    "festival": "Nag Panchami",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Worship serpent deities. Protection from snake bites.",
    "meaning": "Honor snakes as symbols of transformation and power.",
    "do": [
      "Offer milk to snakes",
      "Worship Nag devta",
      "Respect nature"
    ],
    "avoid": [
      "Killing snakes",
      "Ploughing fields"
    ]
  },
  "2029-06-21": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Kamika Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Fulfillment of wishes and desires.",
    "meaning": "Fast for achieving your goals and dreams.",
    "do": [
      "Fast",
      "Worship Vishnu",
      "Positive thinking"
    ],
    "avoid": [
      "Grains",
      "Negativity"
    ]
  },
  "2029-06-26": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Raksha Bandhan",
    "muhurat": "9:00 AM - 10:30 AM",
    "significance": "Celebrating the sacred bond between siblings.",
    "meaning": "Sisters tie rakhi on brothers' wrists for protection and love.",
    "do": [
      "Tie rakhi",
      "Exchange gifts",
      "Family time"
    ],
    "avoid": [
      "Fighting with siblings",
      "Negativity"
    ]
  },
  "2029-07-03": {
    "tithi": "Ashtami",
    "paksha": "Krishna Paksha",
    "festival": "Krishna Janmashtami",
    "muhurat": "11:30 PM - 12:30 AM",
    "significance": "Birth of Lord Krishna at midnight. Celebrate divine playfulness!",
    "meaning": "Fast till midnight, then celebrate the birth of the cosmic teacher.",
    "do": [
      "Fast till midnight",
      "Dahi Handi",
      "Sing bhajans",
      "Dance"
    ],
    "avoid": [
      "Sleep before midnight",
      "Non-veg"
    ]
  },
  "2029-07-06": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Shravana Putrada Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Blessing of children and progeny.",
    "meaning": "Fast for family well-being and healthy children.",
    "do": [
      "Fast",
      "Family prayers",
      "Donate"
    ],
    "avoid": [
      "Grains",
      "Selfish thoughts"
    ]
  },
  "2029-07-14": {
    "tithi": "Chaturthi",
    "paksha": "Shukla Paksha",
    "festival": "Ganesh Chaturthi",
    "muhurat": "11:00 AM - 1:30 PM",
    "significance": "Birth of Lord Ganesha! Remover of obstacles and giver of wisdom.",
    "meaning": "Welcome Ganesha into your home for 10 days of celebrations!",
    "do": [
      "Install Ganesha idol",
      "Offer modak",
      "Prayers"
    ],
    "avoid": [
      "Looking at moon",
      "Negativity"
    ]
  },
  "2029-07-21": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Aja Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Protection for ancestors and family lineage.",
    "meaning": "Fast for the well-being of departed ancestors.",
    "do": [
      "Fast",
      "Ancestor prayers",
      "Charity"
    ],
    "avoid": [
      "Grains",
      "Forgetting ancestors"
    ]
  },
  "2029-08-04": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Parsva Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Lord Vishnu turns to the other side during cosmic sleep.",
    "meaning": "Continue spiritual practices during Chaturmas.",
    "do": [
      "Fast",
      "Meditation",
      "Discipline"
    ],
    "avoid": [
      "Grains",
      "Laziness"
    ]
  },
  "2029-08-09": {
    "tithi": "Prathama",
    "paksha": "Shukla Paksha",
    "festival": "Navratri Begins",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "9 nights of Goddess Durga worship begin! Victory over evil.",
    "meaning": "Start 9 days of devotion, dance (Garba/Dandiya), and celebration!",
    "do": [
      "Garba dance",
      "Fast",
      "Worship Goddess",
      "Wear colorful clothes"
    ],
    "avoid": [
      "Non-veg",
      "Alcohol",
      "Negativity"
    ]
  },
  "2029-08-18": {
    "tithi": "Navami",
    "paksha": "Shukla Paksha",
    "festival": "Maha Navami",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "9th day of Navratri. Worship Goddess Siddhidatri.",
    "meaning": "Final day of Navratri - seek ultimate blessings of divine mother.",
    "do": [
      "Kanya puja",
      "Fast",
      "Final prayers"
    ],
    "avoid": [
      "Breaking fast early",
      "Disrespect"
    ]
  },
  "2029-08-19": {
    "tithi": "Dashami",
    "paksha": "Shukla Paksha",
    "festival": "Dussehra / Vijayadashami",
    "muhurat": "2:00 PM - 3:30 PM",
    "significance": "Victory of Lord Rama over Ravana. Good defeats evil!",
    "meaning": "Celebrate triumph of righteousness. Burn Ravana effigies!",
    "do": [
      "Watch Ramlila",
      "Burn Ravana effigy",
      "Start new learning"
    ],
    "avoid": [
      "Evil thoughts",
      "Anger"
    ]
  },
  "2029-09-03": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Pasankusha Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Control of senses and mind. Inner discipline.",
    "meaning": "Fast for mastering your 10 senses and mind.",
    "do": [
      "Fast",
      "Meditation",
      "Self-control"
    ],
    "avoid": [
      "Grains",
      "Sensory overload"
    ]
  },
  "2029-09-04": {
    "tithi": "Trayodashi",
    "paksha": "Krishna Paksha",
    "festival": "Dhanteras",
    "muhurat": "5:30 PM - 7:00 PM",
    "significance": "Worship Goddess Lakshmi and Lord Dhanvantari. Wealth and health.",
    "meaning": "Buy gold, utensils, or something new for prosperity!",
    "do": [
      "Buy gold/silver",
      "Lakshmi puja",
      "Clean home"
    ],
    "avoid": [
      "Empty handed",
      "Laziness"
    ]
  },
  "2029-09-07": {
    "tithi": "Amavasya",
    "paksha": "Krishna Paksha",
    "festival": "Diwali - Festival of Lights",
    "muhurat": "6:00 PM - 7:30 PM",
    "significance": "Lord Rama returns to Ayodhya! Victory of light over darkness!",
    "meaning": "Light diyas, burst crackers, worship Lakshmi. Most joyous festival!",
    "do": [
      "Light diyas",
      "Lakshmi puja",
      "Sweets",
      "New clothes",
      "Fireworks"
    ],
    "avoid": [
      "Darkness in heart",
      "Greed"
    ]
  },
  "2029-09-09": {
    "tithi": "Dvitiya",
    "paksha": "Shukla Paksha",
    "festival": "Bhai Dooj",
    "muhurat": "1:00 PM - 2:30 PM",
    "significance": "Celebrating the sacred sibling bond. Sisters pray for brothers.",
    "meaning": "Sisters apply tilak on brothers and pray for their long life.",
    "do": [
      "Tilak ceremony",
      "Sweets",
      "Gifts",
      "Family time"
    ],
    "avoid": [
      "Fighting with siblings"
    ]
  },
  "2029-09-18": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Rama Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Devotion to Lord Rama and his ideals.",
    "meaning": "Fast for righteousness and dharma.",
    "do": [
      "Fast",
      "Read Ramayana",
      "Follow dharma"
    ],
    "avoid": [
      "Grains",
      "Adharma"
    ]
  },
  "2029-09-22": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Kartik Purnima",
    "muhurat": "6:00 PM - 7:30 PM",
    "significance": "Most sacred Purnima. Light diyas and take holy bath.",
    "meaning": "End of Kartik month - light 360 diyas for prosperity!",
    "do": [
      "Light diyas",
      "Holy bath",
      "Charity"
    ],
    "avoid": [
      "Darkness",
      "Sins"
    ]
  },
  "2029-10-03": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Devotthan / Prabodhini Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Lord Vishnu wakes up from cosmic sleep! End of Chaturmas.",
    "meaning": "Lord awakens! Wedding season and auspicious ceremonies resume!",
    "do": [
      "Fast",
      "Tulsi vivah",
      "Celebrate"
    ],
    "avoid": [
      "Grains",
      "Laziness"
    ]
  },
  "2029-10-17": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Utpanna Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Birth of Goddess Ekadashi from Lord Vishnu.",
    "meaning": "First ever Ekadashi! Origin story of this sacred day.",
    "do": [
      "Fast",
      "Listen to Ekadashi story",
      "Devotion"
    ],
    "avoid": [
      "Grains",
      "Ignorance"
    ]
  },
  "2029-11-02": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Mokshada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Liberation and moksha (salvation). Most powerful Ekadashi!",
    "meaning": "Fast for ultimate freedom from cycle of birth and death.",
    "do": [
      "Strict fast",
      "Gita reading",
      "Spiritual focus"
    ],
    "avoid": [
      "Grains",
      "Worldly attachments"
    ]
  },
  "2030-11-16": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Saphala Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Fulfillment of desires and wishes. A day for spiritual cleansing.",
    "meaning": "This Ekadashi removes obstacles and grants success in endeavors.",
    "do": [
      "Fast",
      "Pray to Lord Vishnu",
      "Chant mantras"
    ],
    "avoid": [
      "Grains",
      "Rice",
      "Heavy meals"
    ]
  },
  "2030-11-21": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Makar Sankranti",
    "muhurat": "7:00 AM - 8:30 AM",
    "significance": "Sun enters Capricorn. Harvest festival marking end of winter.",
    "meaning": "Celebrate new beginnings and thank nature for the harvest.",
    "do": [
      "Fly kites",
      "Eat til-gur sweets",
      "Take holy bath"
    ],
    "avoid": [
      "Negative thoughts",
      "Conflicts"
    ]
  },
  "2030-12-01": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Putrada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Blessing of children and family prosperity.",
    "meaning": "Devotion to Lord Vishnu for family well-being and progeny.",
    "do": [
      "Fast",
      "Family prayers",
      "Charity"
    ],
    "avoid": [
      "Grains",
      "Beans",
      "Onion-garlic"
    ]
  },
  "2030-12-09": {
    "tithi": "Panchami",
    "paksha": "Shukla Paksha",
    "festival": "Vasant Panchami",
    "muhurat": "7:15 AM - 8:45 AM",
    "significance": "Worship Goddess Saraswati. Spring arrives, celebrate knowledge and learning.",
    "meaning": "Honor education, arts, music. Great day to start learning something new!",
    "do": [
      "Wear yellow",
      "Worship books",
      "Learn music"
    ],
    "avoid": [
      "Laziness",
      "Disrespecting teachers"
    ]
  },
  "2030-12-15": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Shattila Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Use of sesame seeds for charity and blessings.",
    "meaning": "Donate sesame seeds, oil, and food for spiritual merit.",
    "do": [
      "Donate sesame",
      "Charity",
      "Fast"
    ],
    "avoid": [
      "Selfishness",
      "Grains"
    ]
  },
  "2030-12-30": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Jaya Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Victory in all endeavors. Brings success and removes sins.",
    "meaning": "Fast for triumph over obstacles and negative karma.",
    "do": [
      "Fast strictly",
      "Read Bhagavad Gita",
      "Meditate"
    ],
    "avoid": [
      "Rice",
      "Grains",
      "Distractions"
    ]
  },
  "2030-01-02": {
    "tithi": "Chaturdashi",
    "paksha": "Krishna Paksha",
    "festival": "Maha Shivaratri",
    "muhurat": "12:00 AM - 1:30 AM",
    "significance": "The great night of Lord Shiva. Marriage of Shiva and Parvati.",
    "meaning": "Stay awake all night, meditate, and worship Shiva for spiritual awakening.",
    "do": [
      "Night vigil",
      "Offer milk to Shiva Lingam",
      "Chant Om Namah Shivaya"
    ],
    "avoid": [
      "Sleep during night",
      "Heavy food"
    ]
  },
  "2030-01-14": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Vijaya Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Conquering obstacles and enemies. Victory in all pursuits.",
    "meaning": "Fast for overcoming challenges and achieving success.",
    "do": [
      "Fast",
      "Pray for strength",
      "Help others"
    ],
    "avoid": [
      "Grains",
      "Negative energy"
    ]
  },
  "2030-01-18": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Holi",
    "muhurat": "6:15 PM - 7:45 PM",
    "significance": "Festival of colors! Victory of devotion over evil. Spring celebration.",
    "meaning": "Celebrate love, friendship, and the triumph of good. Play with colors!",
    "do": [
      "Play with colors",
      "Forgive others",
      "Enjoy with friends"
    ],
    "avoid": [
      "Harmful colors",
      "Fighting"
    ]
  },
  "2030-01-29": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Amalaki Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Worship of Amla (gooseberry) tree. Health and longevity.",
    "meaning": "Honor nature and seek blessings for good health.",
    "do": [
      "Worship Amla tree",
      "Eat Amla",
      "Plant trees"
    ],
    "avoid": [
      "Harming nature",
      "Grains"
    ]
  },
  "2030-02-03": {
    "tithi": "Prathama",
    "paksha": "Shukla Paksha",
    "festival": "Gudi Padwa / Ugadi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Hindu New Year! Celebrate new beginnings and prosperity.",
    "meaning": "Start fresh, set goals, welcome abundance. Hoist the Gudi flag!",
    "do": [
      "New clothes",
      "Eat neem-jaggery",
      "Make rangoli"
    ],
    "avoid": [
      "Negativity",
      "Old grudges"
    ]
  },
  "2030-02-10": {
    "tithi": "Navami",
    "paksha": "Shukla Paksha",
    "festival": "Rama Navami",
    "muhurat": "11:00 AM - 12:30 PM",
    "significance": "Birth of Lord Rama. Symbol of dharma and righteousness.",
    "meaning": "Celebrate the ideal king who stood for truth and duty.",
    "do": [
      "Read Ramayana",
      "Sing bhajans",
      "Fast till noon"
    ],
    "avoid": [
      "Non-veg",
      "Alcohol"
    ]
  },
  "2030-02-12": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Papmochani Ekadashi",
    "muhurat": "6:45 AM - 8:15 AM",
    "significance": "Removal of sins and past karma. Mental clarity and forgiveness.",
    "meaning": "Fast for purification of mind and soul. Let go of guilt.",
    "do": [
      "Fast",
      "Forgive yourself and others",
      "Meditate"
    ],
    "avoid": [
      "Rice",
      "Grains",
      "Holding grudges"
    ]
  },
  "2030-02-16": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Hanuman Jayanti",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Birth of Lord Hanuman. Strength, devotion, and courage.",
    "meaning": "Honor the ultimate devotee. Seek strength to overcome challenges.",
    "do": [
      "Recite Hanuman Chalisa",
      "Visit temple",
      "Help others"
    ],
    "avoid": [
      "Ego",
      "Laziness"
    ]
  },
  "2030-02-27": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Kamada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Fulfillment of desires and wishes. Removes obstacles.",
    "meaning": "Fast with pure intentions for legitimate desires.",
    "do": [
      "Fast",
      "Pray for goals",
      "Stay positive"
    ],
    "avoid": [
      "Grains",
      "Selfish wishes"
    ]
  },
  "2030-03-14": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Varuthini Ekadashi",
    "muhurat": "6:30 AM - 8:00 AM",
    "significance": "Protection from evil and negativity. Shield of faith.",
    "meaning": "Fast for divine protection and spiritual strength.",
    "do": [
      "Fast",
      "Seek protection",
      "Charity"
    ],
    "avoid": [
      "Fear",
      "Grains"
    ]
  },
  "2030-03-28": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Mohini Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Liberation from illusions. See truth clearly.",
    "meaning": "Fast to break free from maya (illusion) and false attachments.",
    "do": [
      "Fast",
      "Meditate",
      "Seek truth"
    ],
    "avoid": [
      "Illusions",
      "Grains",
      "Delusions"
    ]
  },
  "2030-04-05": {
    "tithi": "Tritiya",
    "paksha": "Shukla Paksha",
    "festival": "Akshaya Tritiya",
    "muhurat": "6:00 AM - 12:00 PM",
    "significance": "Most auspicious day! Perfect for new beginnings, buying gold.",
    "meaning": "Everything started today brings eternal prosperity. No muhurat needed!",
    "do": [
      "Buy gold",
      "Start new ventures",
      "Donate"
    ],
    "avoid": [
      "Laziness",
      "Negativity"
    ]
  },
  "2030-04-12": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Apara Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Removal of sins and purification.",
    "meaning": "Fast for cleansing past mistakes and negative karma.",
    "do": [
      "Fast",
      "Charity",
      "Prayers"
    ],
    "avoid": [
      "Grains",
      "Rice"
    ]
  },
  "2030-04-27": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Nirjala Ekadashi",
    "muhurat": "5:15 AM - 6:45 AM",
    "significance": "Most powerful Ekadashi! Waterless fast for ultimate spiritual merit.",
    "meaning": "The toughest fast - no food, no water. Equal to fasting on all 24 Ekadashis!",
    "do": [
      "Complete waterless fast",
      "Pray intensely",
      "Stay strong"
    ],
    "avoid": [
      "Any food or water",
      "Weakness"
    ]
  },
  "2030-05-12": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Yogini Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Spiritual union and yoga practice.",
    "meaning": "Fast for enhancing spiritual connection and inner peace.",
    "do": [
      "Yoga",
      "Meditation",
      "Fast"
    ],
    "avoid": [
      "Grains",
      "Distractions"
    ]
  },
  "2030-05-16": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Guru Purnima",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Honor all teachers and gurus. Express gratitude for knowledge.",
    "meaning": "Thank those who guide you - teachers, parents, mentors. Seek blessings!",
    "do": [
      "Thank your teachers",
      "Learn something new",
      "Guru puja"
    ],
    "avoid": [
      "Disrespect to elders",
      "Ego"
    ]
  },
  "2030-05-26": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Devshayani Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Lord Vishnu goes to sleep for 4 months. Beginning of Chaturmas.",
    "meaning": "Fast as Lord Vishnu enters cosmic sleep. No auspicious ceremonies for 4 months.",
    "do": [
      "Fast",
      "Spiritual practices",
      "Self-discipline"
    ],
    "avoid": [
      "Weddings",
      "Grains"
    ]
  },
  "2030-06-04": {
    "tithi": "Panchami",
    "paksha": "Shukla Paksha",
    "festival": "Nag Panchami",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Worship serpent deities. Protection from snake bites.",
    "meaning": "Honor snakes as symbols of transformation and power.",
    "do": [
      "Offer milk to snakes",
      "Worship Nag devta",
      "Respect nature"
    ],
    "avoid": [
      "Killing snakes",
      "Ploughing fields"
    ]
  },
  "2030-06-10": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Kamika Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Fulfillment of wishes and desires.",
    "meaning": "Fast for achieving your goals and dreams.",
    "do": [
      "Fast",
      "Worship Vishnu",
      "Positive thinking"
    ],
    "avoid": [
      "Grains",
      "Negativity"
    ]
  },
  "2030-06-15": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Raksha Bandhan",
    "muhurat": "9:00 AM - 10:30 AM",
    "significance": "Celebrating the sacred bond between siblings.",
    "meaning": "Sisters tie rakhi on brothers' wrists for protection and love.",
    "do": [
      "Tie rakhi",
      "Exchange gifts",
      "Family time"
    ],
    "avoid": [
      "Fighting with siblings",
      "Negativity"
    ]
  },
  "2030-06-22": {
    "tithi": "Ashtami",
    "paksha": "Krishna Paksha",
    "festival": "Krishna Janmashtami",
    "muhurat": "11:30 PM - 12:30 AM",
    "significance": "Birth of Lord Krishna at midnight. Celebrate divine playfulness!",
    "meaning": "Fast till midnight, then celebrate the birth of the cosmic teacher.",
    "do": [
      "Fast till midnight",
      "Dahi Handi",
      "Sing bhajans",
      "Dance"
    ],
    "avoid": [
      "Sleep before midnight",
      "Non-veg"
    ]
  },
  "2030-06-25": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Shravana Putrada Ekadashi",
    "muhurat": "5:30 AM - 7:00 AM",
    "significance": "Blessing of children and progeny.",
    "meaning": "Fast for family well-being and healthy children.",
    "do": [
      "Fast",
      "Family prayers",
      "Donate"
    ],
    "avoid": [
      "Grains",
      "Selfish thoughts"
    ]
  },
  "2030-07-03": {
    "tithi": "Chaturthi",
    "paksha": "Shukla Paksha",
    "festival": "Ganesh Chaturthi",
    "muhurat": "11:00 AM - 1:30 PM",
    "significance": "Birth of Lord Ganesha! Remover of obstacles and giver of wisdom.",
    "meaning": "Welcome Ganesha into your home for 10 days of celebrations!",
    "do": [
      "Install Ganesha idol",
      "Offer modak",
      "Prayers"
    ],
    "avoid": [
      "Looking at moon",
      "Negativity"
    ]
  },
  "2030-07-10": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Aja Ekadashi",
    "muhurat": "5:45 AM - 7:15 AM",
    "significance": "Protection for ancestors and family lineage.",
    "meaning": "Fast for the well-being of departed ancestors.",
    "do": [
      "Fast",
      "Ancestor prayers",
      "Charity"
    ],
    "avoid": [
      "Grains",
      "Forgetting ancestors"
    ]
  },
  "2030-07-24": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Parsva Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Lord Vishnu turns to the other side during cosmic sleep.",
    "meaning": "Continue spiritual practices during Chaturmas.",
    "do": [
      "Fast",
      "Meditation",
      "Discipline"
    ],
    "avoid": [
      "Grains",
      "Laziness"
    ]
  },
  "2030-07-29": {
    "tithi": "Prathama",
    "paksha": "Shukla Paksha",
    "festival": "Navratri Begins",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "9 nights of Goddess Durga worship begin! Victory over evil.",
    "meaning": "Start 9 days of devotion, dance (Garba/Dandiya), and celebration!",
    "do": [
      "Garba dance",
      "Fast",
      "Worship Goddess",
      "Wear colorful clothes"
    ],
    "avoid": [
      "Non-veg",
      "Alcohol",
      "Negativity"
    ]
  },
  "2030-08-07": {
    "tithi": "Navami",
    "paksha": "Shukla Paksha",
    "festival": "Maha Navami",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "9th day of Navratri. Worship Goddess Siddhidatri.",
    "meaning": "Final day of Navratri - seek ultimate blessings of divine mother.",
    "do": [
      "Kanya puja",
      "Fast",
      "Final prayers"
    ],
    "avoid": [
      "Breaking fast early",
      "Disrespect"
    ]
  },
  "2030-08-08": {
    "tithi": "Dashami",
    "paksha": "Shukla Paksha",
    "festival": "Dussehra / Vijayadashami",
    "muhurat": "2:00 PM - 3:30 PM",
    "significance": "Victory of Lord Rama over Ravana. Good defeats evil!",
    "meaning": "Celebrate triumph of righteousness. Burn Ravana effigies!",
    "do": [
      "Watch Ramlila",
      "Burn Ravana effigy",
      "Start new learning"
    ],
    "avoid": [
      "Evil thoughts",
      "Anger"
    ]
  },
  "2030-08-23": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Pasankusha Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Control of senses and mind. Inner discipline.",
    "meaning": "Fast for mastering your 10 senses and mind.",
    "do": [
      "Fast",
      "Meditation",
      "Self-control"
    ],
    "avoid": [
      "Grains",
      "Sensory overload"
    ]
  },
  "2030-08-24": {
    "tithi": "Trayodashi",
    "paksha": "Krishna Paksha",
    "festival": "Dhanteras",
    "muhurat": "5:30 PM - 7:00 PM",
    "significance": "Worship Goddess Lakshmi and Lord Dhanvantari. Wealth and health.",
    "meaning": "Buy gold, utensils, or something new for prosperity!",
    "do": [
      "Buy gold/silver",
      "Lakshmi puja",
      "Clean home"
    ],
    "avoid": [
      "Empty handed",
      "Laziness"
    ]
  },
  "2030-08-27": {
    "tithi": "Amavasya",
    "paksha": "Krishna Paksha",
    "festival": "Diwali - Festival of Lights",
    "muhurat": "6:00 PM - 7:30 PM",
    "significance": "Lord Rama returns to Ayodhya! Victory of light over darkness!",
    "meaning": "Light diyas, burst crackers, worship Lakshmi. Most joyous festival!",
    "do": [
      "Light diyas",
      "Lakshmi puja",
      "Sweets",
      "New clothes",
      "Fireworks"
    ],
    "avoid": [
      "Darkness in heart",
      "Greed"
    ]
  },
  "2030-08-29": {
    "tithi": "Dvitiya",
    "paksha": "Shukla Paksha",
    "festival": "Bhai Dooj",
    "muhurat": "1:00 PM - 2:30 PM",
    "significance": "Celebrating the sacred sibling bond. Sisters pray for brothers.",
    "meaning": "Sisters apply tilak on brothers and pray for their long life.",
    "do": [
      "Tilak ceremony",
      "Sweets",
      "Gifts",
      "Family time"
    ],
    "avoid": [
      "Fighting with siblings"
    ]
  },
  "2030-09-07": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Rama Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Devotion to Lord Rama and his ideals.",
    "meaning": "Fast for righteousness and dharma.",
    "do": [
      "Fast",
      "Read Ramayana",
      "Follow dharma"
    ],
    "avoid": [
      "Grains",
      "Adharma"
    ]
  },
  "2030-09-11": {
    "tithi": "Purnima",
    "paksha": "Shukla Paksha",
    "festival": "Kartik Purnima",
    "muhurat": "6:00 PM - 7:30 PM",
    "significance": "Most sacred Purnima. Light diyas and take holy bath.",
    "meaning": "End of Kartik month - light 360 diyas for prosperity!",
    "do": [
      "Light diyas",
      "Holy bath",
      "Charity"
    ],
    "avoid": [
      "Darkness",
      "Sins"
    ]
  },
  "2030-09-22": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Devotthan / Prabodhini Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Lord Vishnu wakes up from cosmic sleep! End of Chaturmas.",
    "meaning": "Lord awakens! Wedding season and auspicious ceremonies resume!",
    "do": [
      "Fast",
      "Tulsi vivah",
      "Celebrate"
    ],
    "avoid": [
      "Grains",
      "Laziness"
    ]
  },
  "2030-10-06": {
    "tithi": "Ekadashi",
    "paksha": "Krishna Paksha",
    "festival": "Utpanna Ekadashi",
    "muhurat": "6:15 AM - 7:45 AM",
    "significance": "Birth of Goddess Ekadashi from Lord Vishnu.",
    "meaning": "First ever Ekadashi! Origin story of this sacred day.",
    "do": [
      "Fast",
      "Listen to Ekadashi story",
      "Devotion"
    ],
    "avoid": [
      "Grains",
      "Ignorance"
    ]
  },
  "2030-10-22": {
    "tithi": "Ekadashi",
    "paksha": "Shukla Paksha",
    "festival": "Mokshada Ekadashi",
    "muhurat": "6:00 AM - 7:30 AM",
    "significance": "Liberation and moksha (salvation). Most powerful Ekadashi!",
    "meaning": "Fast for ultimate freedom from cycle of birth and death.",
    "do": [
      "Strict fast",
      "Gita reading",
      "Spiritual focus"
    ],
    "avoid": [
      "Grains",
      "Worldly attachments"
    ]
  }
};

// Helper: Get festivals for specific year
function getFestivalsByYear(year) {
    const yearStr = year.toString();
    return Object.keys(panchangData)
        .filter(date => date.startsWith(yearStr))
        .sort()
        .reduce((obj, date) => {
            obj[date] = panchangData[date];
            return obj;
        }, {});
}

// Helper: Get current year festivals
function getCurrentYearFestivals() {
    const currentYear = new Date().getFullYear();
    return getFestivalsByYear(currentYear);
}

// Helper: Get all available years
function getAvailableYears() {
    const years = new Set();
    Object.keys(panchangData).forEach(date => {
        years.add(parseInt(date.substring(0, 4)));
    });
    return Array.from(years).sort();
}

// Log info
console.log('🪔 TithiToday Multi-Year Data Loaded');
console.log(`✅ Total Festivals: ${Object.keys(panchangData).length}`);
console.log(`📅 Years Available: ${getAvailableYears().join(', ')}`);

// Auto-update: When calendar year changes, data automatically shows new year's festivals
const currentYear = new Date().getFullYear();
console.log(`📆 Current Year: ${currentYear}`);
console.log(`🎊 Festivals this year: ${Object.keys(getFestivalsByYear(currentYear)).length}`);
