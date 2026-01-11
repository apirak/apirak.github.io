// Fortune Data for Easter Egg
// Daily fortune messages in Thai and English

export interface Fortune {
  category: string;
  categoryEn: string;
  message: string;
  messageEn: string;
  emojis: string[];
}

export const fortunes: Fortune[] = [
  // Overview 🌟 ภาพรวมวันนี้
  {
    category: "ภาพรวมวันนี้",
    categoryEn: "Daily Overview",
    message: "วันนี้มีเรื่องเล็กๆ ทำให้ยิ้มได้ทั้งวัน",
    messageEn: "Small things today will make you smile all day",
    emojis: ["✨", "🌟", "💫", "⭐"],
  },
  {
    category: "ภาพรวมวันนี้",
    categoryEn: "Daily Overview",
    message: "เริ่มเช้าดี มีพลัง ทำอะไรก็ไหลลื่น",
    messageEn: "Start your morning with energy, everything flows smoothly",
    emojis: ["✨", "🌟", "💫", "⭐"],
  },
  {
    category: "ภาพรวมวันนี้",
    categoryEn: "Daily Overview",
    message: "มีโอกาสพบข่าวดีจากคนไกล",
    messageEn: "Good news from someone far away is coming",
    emojis: ["✨", "🌟", "💫", "⭐"],
  },
  {
    category: "ภาพรวมวันนี้",
    categoryEn: "Daily Overview",
    message: "สิ่งที่ค้างคามานานเริ่มคลี่คลาย",
    messageEn: "Long-pending matters start to resolve",
    emojis: ["✨", "🌟", "💫", "⭐"],
  },
  {
    category: "ภาพรวมวันนี้",
    categoryEn: "Daily Overview",
    message: "ตั้งใจให้มั่น คุณจะเห็นความเปลี่ยนแปลงเร็วๆ นี้",
    messageEn: "Stay focused, you'll see changes soon",
    emojis: ["✨", "🌟", "💫", "⭐"],
  },

  // Work 💼 การงาน
  {
    category: "การงาน",
    categoryEn: "Work & Career",
    message: "งานวันนี้เดินหน้าเร็ว ถ้ากล้าตัดสินใจ",
    messageEn: "Work progresses quickly if you dare to decide",
    emojis: ["💼", "🚀", "💡", "🎯"],
  },
  {
    category: "การงาน",
    categoryEn: "Work & Career",
    message: "ไอเดียใหม่ได้รับการยอมรับจากทีม",
    messageEn: "Your new idea gains team approval",
    emojis: ["💼", "🚀", "💡", "🎯"],
  },
  {
    category: "การงาน",
    categoryEn: "Work & Career",
    message: "ระวังรายละเอียดเล็กๆ จะกลายเป็นจุดผิดพลาด",
    messageEn: "Watch small details to prevent mistakes",
    emojis: ["💼", "🚀", "💡", "🎯"],
  },
  {
    category: "การงาน",
    categoryEn: "Work & Career",
    message: "คนเก่งช่วยสนับสนุน ทำให้เรื่องยากง่ายขึ้น",
    messageEn: "Talented people support you, making hard things easier",
    emojis: ["💼", "🚀", "💡", "🎯"],
  },
  {
    category: "การงาน",
    categoryEn: "Work & Career",
    message: "ปรับลำดับงานก่อน จะลดความเครียดลงได้มาก",
    messageEn: "Reorganize tasks first to reduce stress significantly",
    emojis: ["💼", "🚀", "💡", "🎯"],
  },

  // Finance 💰 การเงิน
  {
    category: "การเงิน",
    categoryEn: "Finance",
    message: "รายรับเล็กๆ น้อยๆ เพิ่มขึ้นแบบไม่คาดคิด",
    messageEn: "Small unexpected income increases",
    emojis: ["💰", "💸", "🪙", "💵"],
  },
  {
    category: "การเงิน",
    categoryEn: "Finance",
    message: "มีค่าใช้จ่ายฉับพลัน ควรวางแผนเผื่อไว้",
    messageEn: "Sudden expenses ahead, plan accordingly",
    emojis: ["💰", "💸", "🪙", "💵"],
  },
  {
    category: "การเงิน",
    categoryEn: "Finance",
    message: "ต่อรองเก่ง ได้ส่วนลดดีเกินคาด",
    messageEn: "Good negotiation skills bring better discounts",
    emojis: ["💰", "💸", "🪙", "💵"],
  },
  {
    category: "การเงิน",
    categoryEn: "Finance",
    message: "ของที่เล็งไว้นาน วันนี้ซื้อแล้วคุ้ม",
    messageEn: "Items you've been eyeing are worth buying today",
    emojis: ["💰", "💸", "🪙", "💵"],
  },
  {
    category: "การเงิน",
    categoryEn: "Finance",
    message: "เงินที่รออาจล่าช้าอีกนิด แต่ยังมาแน่",
    messageEn: "Expected money may delay slightly but will come",
    emojis: ["💰", "💸", "🪙", "💵"],
  },

  // Love ❤️ ความรัก
  {
    category: "ความรัก",
    categoryEn: "Love & Relationships",
    message: "คนโสดมีสายทักมาแบบเซอร์ไพรส์",
    messageEn: "Singles get surprising messages",
    emojis: ["💕", "❤️", "💝", "🌹"],
  },
  {
    category: "ความรัก",
    categoryEn: "Love & Relationships",
    message: "คู่รักได้คุยเรื่องอนาคต ลงตัวมากขึ้น",
    messageEn: "Couples discuss the future, finding more harmony",
    emojis: ["💕", "❤️", "💝", "🌹"],
  },
  {
    category: "ความรัก",
    categoryEn: "Love & Relationships",
    message: "สื่อสารให้ตรงใจ จะลดเรื่องเข้าใจผิด",
    messageEn: "Clear communication reduces misunderstandings",
    emojis: ["💕", "❤️", "💝", "🌹"],
  },
  {
    category: "ความรัก",
    categoryEn: "Love & Relationships",
    message: "ความใส่ใจเล็กๆ สร้างโมเมนต์ใหญ่",
    messageEn: "Small gestures create big moments",
    emojis: ["💕", "❤️", "💝", "🌹"],
  },
  {
    category: "ความรัก",
    categoryEn: "Love & Relationships",
    message: "รักตัวเองก่อน แล้วรักอื่นจะลงตัว",
    messageEn: "Love yourself first, other love will follow",
    emojis: ["💕", "❤️", "💝", "🌹"],
  },

  // Health 💪 สุขภาพ
  {
    category: "สุขภาพ",
    categoryEn: "Health & Wellness",
    message: "พลังงานดี แต่อย่าลืมดื่มน้ำให้พอ",
    messageEn: "Good energy, but don't forget to hydrate",
    emojis: ["💪", "🏃‍♂️", "🥗", "⚡"],
  },
  {
    category: "สุขภาพ",
    categoryEn: "Health & Wellness",
    message: "ระวังปวดคอจากจอมือถือ/คอมพ์",
    messageEn: "Watch out for neck pain from screens",
    emojis: ["💪", "🏃‍♂️", "🥗", "⚡"],
  },
  {
    category: "สุขภาพ",
    categoryEn: "Health & Wellness",
    message: "เพิ่มผักผลไม้ วันนี้ระบบย่อยดี",
    messageEn: "Add fruits and vegetables, digestion is good today",
    emojis: ["💪", "🏃‍♂️", "🥗", "⚡"],
  },
  {
    category: "สุขภาพ",
    categoryEn: "Health & Wellness",
    message: "พักสายตา 20-20-20 ลดล้าได้ชัด",
    messageEn: "20-20-20 eye breaks reduce fatigue clearly",
    emojis: ["💪", "🏃‍♂️", "🥗", "⚡"],
  },
  {
    category: "สุขภาพ",
    categoryEn: "Health & Wellness",
    message: "เดินสั้นๆ ระหว่างวัน ทำให้สดชื่นขึ้น",
    messageEn: "Short walks during the day boost freshness",
    emojis: ["💪", "🏃‍♂️", "🥗", "⚡"],
  },

  // Opportunities 🤝 โอกาสและผู้คน
  {
    category: "โอกาสและผู้คน",
    categoryEn: "Opportunities & People",
    message: "เพื่อนเก่าติดต่อมา พาโอกาสใหม่เข้าหา",
    messageEn: "Old friends reach out, bringing new opportunities",
    emojis: ["🤝", "👥", "🎊", "🌈"],
  },
  {
    category: "โอกาสและผู้คน",
    categoryEn: "Opportunities & People",
    message: "เข้ากลุ่มใหม่ได้คอนเนคชันที่มีค่า",
    messageEn: "Joining new groups brings valuable connections",
    emojis: ["🤝", "👥", "🎊", "🌈"],
  },
  {
    category: "โอกาสและผู้คน",
    categoryEn: "Opportunities & People",
    message: "คำชมเล็กๆ จุดไฟให้ตั้งใจมากขึ้น",
    messageEn: "Small compliments ignite greater motivation",
    emojis: ["🤝", "👥", "🎊", "🌈"],
  },
  {
    category: "โอกาสและผู้คน",
    categoryEn: "Opportunities & People",
    message: "ฟังให้มากก่อนพูด จะได้ข้อมูลสำคัญ",
    messageEn: "Listen more before speaking to gain key insights",
    emojis: ["🤝", "👥", "🎊", "🌈"],
  },
  {
    category: "โอกาสและผู้คน",
    categoryEn: "Opportunities & People",
    message: "ช่วยเหลือใครบางคน แล้วเรื่องดีจะย้อนกลับมา",
    messageEn: "Help someone, good things will return",
    emojis: ["🤝", "👥", "🎊", "🌈"],
  },

  // Mindset & Actions 🎯 ข้อคิดและการกระทำ
  {
    category: "ข้อคิดและการกระทำ",
    categoryEn: "Mindset & Actions",
    message: "เริ่มจากหนึ่งสิ่งเล็กๆ วันนี้จะสำเร็จเร็ว",
    messageEn: "Start with one small thing, success comes quickly",
    emojis: ["🎯", "✅", "📝", "🔥"],
  },
  {
    category: "ข้อคิดและการกระทำ",
    categoryEn: "Mindset & Actions",
    message: "โฟกัสทีละเรื่อง ประสิทธิภาพพุ่ง",
    messageEn: "Focus on one thing at a time, efficiency soars",
    emojis: ["🎯", "✅", "📝", "🔥"],
  },
  {
    category: "ข้อคิดและการกระทำ",
    categoryEn: "Mindset & Actions",
    message: "เขียนสิ่งที่กังวล แล้วหาทางแก้ทีละข้อ",
    messageEn: "Write down worries and solve them one by one",
    emojis: ["🎯", "✅", "📝", "🔥"],
  },
  {
    category: "ข้อคิดและการกระทำ",
    categoryEn: "Mindset & Actions",
    message: "ปรับโต๊ะทำงานเล็กน้อย สมาธิดีขึ้น",
    messageEn: "Adjust your workspace slightly, focus improves",
    emojis: ["🎯", "✅", "📝", "🔥"],
  },
  {
    category: "ข้อคิดและการกระทำ",
    categoryEn: "Mindset & Actions",
    message: "ขอบคุณตัวเองในสิ่งที่ทำได้ดีแล้ว",
    messageEn: "Thank yourself for what you've done well",
    emojis: ["🎯", "✅", "📝", "🔥"],
  },

  // Lucky Signs 🍀 สัญญาณโชคดี
  {
    category: "สัญญาณโชคดี",
    categoryEn: "Lucky Signs",
    message: "เลขนำโชค: 3, 7, 13, 21 | สี: น้ำเงินเข้ม, เขียวมินต์",
    messageEn: "Lucky numbers: 3, 7, 13, 21 | Colors: Navy, Mint Green",
    emojis: ["🍀", "🎲", "🎰", "✨"],
  },
  {
    category: "สัญญาณโชคดี",
    categoryEn: "Lucky Signs",
    message: "เวลาเฮง: ช่วงสาย 10:00–11:30 | ของนำโชค: ปากกา",
    messageEn: "Lucky hours: 10:00–11:30 AM | Lucky item: Pen",
    emojis: ["🍀", "🎲", "🎰", "✨"],
  },
  {
    category: "สัญญาณโชคดี",
    categoryEn: "Lucky Signs",
    message: "เลขนำโชค: 5, 9, 17, 28 | สี: แดงอมส้ม, ครีม",
    messageEn: "Lucky numbers: 5, 9, 17, 28 | Colors: Coral, Cream",
    emojis: ["🍀", "🎲", "🎰", "✨"],
  },
  {
    category: "สัญญาณโชคดี",
    categoryEn: "Lucky Signs",
    message: "เวลาเฮง: ช่วงบ่าย 14:30–16:00 | เพลงโปรด: อินไซต์มา",
    messageEn: "Lucky hours: 2:30–4:00 PM | Favorite song brings insight",
    emojis: ["🍀", "🎲", "🎰", "✨"],
  },
  {
    category: "สัญญาณโชคดี",
    categoryEn: "Lucky Signs",
    message: "เลขนำโชค: 2, 8, 15, 24 | สี: ม่วงพาสเทล, เทาอมฟ้า",
    messageEn: "Lucky numbers: 2, 8, 15, 24 | Colors: Pastel Purple, Blue Gray",
    emojis: ["🍀", "🎲", "🎰", "✨"],
  },

  // Learning & Growth 📚 การเรียนรู้/พัฒนา
  {
    category: "การเรียนรู้/พัฒนา",
    categoryEn: "Learning & Growth",
    message: "อ่านบทความสั้นๆ วันนี้ได้อินไซต์ใหม่",
    messageEn: "Read a short article today for new insights",
    emojis: ["📚", "🧠", "💻", "🔧"],
  },
  {
    category: "การเรียนรู้/พัฒนา",
    categoryEn: "Learning & Growth",
    message: "ทดลองเครื่องมือใหม่ ช่วยลดเวลางาน",
    messageEn: "Try new tools to reduce work time",
    emojis: ["📚", "🧠", "💻", "🔧"],
  },
  {
    category: "การเรียนรู้/พัฒนา",
    categoryEn: "Learning & Growth",
    message: "ย้อนดูงานเก่า แล้วเห็นทางปรับปรุงชัด",
    messageEn: "Review old work to see clear improvements",
    emojis: ["📚", "🧠", "💻", "🔧"],
  },
  {
    category: "การเรียนรู้/พัฒนา",
    categoryEn: "Learning & Growth",
    message: "ขอฟีดแบ็ก 1 คน ทำให้ก้าวหน้าเร็ว",
    messageEn: "Ask one person for feedback, progress faster",
    emojis: ["📚", "🧠", "💻", "🔧"],
  },
  {
    category: "การเรียนรู้/พัฒนา",
    categoryEn: "Learning & Growth",
    message: "จด 3 บรรทัดสิ่งที่ได้เรียนรู้ก่อนนอน",
    messageEn: "Write 3 lines of learnings before bed",
    emojis: ["📚", "🧠", "💻", "🔧"],
  },

  // Travel & Lifestyle 🚗 การเดินทางและไลฟ์สไตล์
  {
    category: "การเดินทางและไลฟ์สไตล์",
    categoryEn: "Travel & Lifestyle",
    message: "ทางลัดใหม่ช่วยประหยัดเวลา",
    messageEn: "New shortcuts save time",
    emojis: ["🚗", "☕", "🌤️", "📸"],
  },
  {
    category: "การเดินทางและไลฟ์สไตล์",
    categoryEn: "Travel & Lifestyle",
    message: "คาเฟ่ใกล้ๆ มีมุมเงียบเหมาะโฟกัส",
    messageEn: "Nearby cafe has quiet spots perfect for focus",
    emojis: ["🚗", "☕", "🌤️", "📸"],
  },
  {
    category: "การเดินทางและไลฟ์สไตล์",
    categoryEn: "Travel & Lifestyle",
    message: "ลองเมนูใหม่ กลายเป็นของโปรด",
    messageEn: "Try new menu items, they become favorites",
    emojis: ["🚗", "☕", "🌤️", "📸"],
  },
  {
    category: "การเดินทางและไลฟ์สไตล์",
    categoryEn: "Travel & Lifestyle",
    message: "อากาศเปลี่ยนง่าย พกร่มหรือเสื้อคลุมไว้",
    messageEn: "Weather changes easily, bring umbrella or jacket",
    emojis: ["🚗", "☕", "🌤️", "📸"],
  },
  {
    category: "การเดินทางและไลฟ์สไตล์",
    categoryEn: "Travel & Lifestyle",
    message: "ถ่ายรูปวันนี้ เก็บโมเมนต์ดีๆ ได้หลายช็อต",
    messageEn: "Take photos today, capture many good moments",
    emojis: ["🚗", "☕", "🌤️", "📸"],
  },
];
