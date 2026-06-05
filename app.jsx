const { useState, useEffect, useRef, useMemo } = React;

// ============ I18N ============
const TR = {
  th: {
    nav_features: "ฟีเจอร์",
    nav_demo: "วีดีโอ",
    nav_pricing: "แพ็คเกจ",
    nav_reviews: "รีวิว",
    nav_faq: "คำถามที่พบบ่อย",
    nav_contact: "ติดต่อ",
    cta_buy: "เริ่มใช้งาน",
    cta_chat: "แชทสอบถาม",

    hero_kicker: "AI VIDEO AUTOMATION SYSTEM",
    hero_title_1: "เหนื่อยน้อยลง",
    hero_title_1b: "10 เท่า",
    hero_title_2: "ขยายผลลัพธ์",
    hero_title_2b: "100 เท่า",
    hero_title_3: "แค่คลิกเดียว",
    hero_sub: "ระบบสร้างคลิป AI อัตโนมัติ พร้อมโพสต์+แนบลิงก์สินค้าให้คุณ 24 ชม. ไม่ต้องนั่งทำเอง ไม่ต้องจ้างทีม",
    hero_cta_main: "ดูแพ็คเกจ",
    hero_cta_sub: "ดูคลิป",
    hero_stat_1: "ไม่จำกัด คลิป/วัน",
    hero_stat_2: "ฟีเจอร์",
    hero_stat_3: "ออโต้ 100%",

    stats_users_n: "70,000+",
    stats_users_l: "กำลังใช้งานระบบ",
    stats_orders_n: "1.2M+",
    stats_orders_l: "ออเดอร์ที่ส่งสำเร็จ",
    stats_countries_n: "5 ประเทศ",
    stats_countries_l: "ไทย · มาเลเซีย · อินโดนีเซีย · ลาว · สิงคโปร์",
    stats_rating_n: "4.9",
    stats_rating_l: "คะแนนรีวิวเฉลี่ย",

    what_kicker: "ระบบนี้ช่วยอะไรคุณ?",
    what_title: "เปลี่ยนงานหนัก ให้เหลือแค่ 1 คลิก",
    what_1_t: "สร้างคลิป AI อัตโนมัติ",
    what_1_d: "ใส่แค่คำสั่งที่ต้องการ ระบบสร้างวิดีโอให้ทันที พร้อมเสียง ซับ และเอฟเฟกต์ ครบจบในคลิกเดียว",
    what_2_t: "ลงคลิป + ผูกลิงก์สินค้าให้ออโต้",
    what_2_d: "ระบบโพสต์คลิปลงแพลตฟอร์ม TikTok พร้อมแนบลิงก์สินค้าให้อัตโนมัติ ตามเวลาที่กำหนด",
    what_3_t: "ตอบคอมเมนต์อัตโนมัติ",
    what_3_d: "AI ตอบคอมเมนต์ลูกค้าให้ในทุกคลิป แทนคุณได้ตลอด 24 ชม. ไม่พลาดทุกข้อความ",
    what_4_t: "ดูระบบหลังบ้านได้ทั้งหมด",
    what_4_d: "แดชบอร์ดเดียวเห็นทุกอย่าง — ยอดวิว ยอดขาย คลิปที่กำลังรัน สถานะ API ทุกตัวเลขอยู่ในที่เดียว",
    what_5_t: "ทำงาน 24/7 ไม่หยุด",
    what_5_d: "ตั้งคำสั่งครั้งเดียว ระบบรันต่อเนื่องตลอดวัน ตลอดคืน ขยายผลลัพธ์ในแบบที่คนทำไม่ทัน",
    what_6_t: "ตั้งครั้งเดียว ใช้ตลอดชีพ",
    what_6_d: "ไม่ต้องจ่ายรายเดือน ไม่มีค่าซ่อนเร้น — ซื้อครั้งเดียว Key ใช้งานได้ตลอดไป",

    demo_kicker: "ดูระบบทำงานจริง",
    demo_title: "คลิปการใช้งาน",
    demo_sub: "จากคำสั่ง → คลิปจริง → โพสต์ลงโซเชียล ไม่เกิน 10 นาที",
    demo_placeholder: "วางลิงก์วิดีโอสาธิตที่นี่",

    features_kicker: "ฟีเจอร์เด่น",
    features_title: "ทุกอย่างที่ต้องใช้ ครบในระบบเดียว",
    f1: "Click-to-Video AI",
    f1d: "คลิกเดียว ได้คลิปทันที",
    f2: "Auto Post Scheduler",
    f2d: "โพสต์อัตโนมัติ",
    f3: "Product Link Sync",
    f3d: "ผูกลิงก์สินค้าอัตโนมัติ",
    f4: "Multi-Screen Control",
    f4d: "ควบคุมหลายหน้าจอพร้อมกัน",
    f5: "Gemini Ultra Ready",
    f5d: "รองรับโมเดล AI ระดับสูงสุด",
    f6: "Grok Automatic",
    f6d: "ทำงานร่วมกับ Grok แบบไร้รอยต่อ",
    f7: "Auto Comment Reply",
    f7d: "AI ตอบลูกค้าให้ทุกข้อความ",
    f8: "VIP Community",
    f8d: "กลุ่มลับ ช่วยเหลือ 24 ชม.",

    pricing_kicker: "แพ็คเกจ",
    pricing_title: "เลือกแพ็คเกจที่ใช่สำหรับคุณ",
    pricing_sub: "เริ่มใช้งานได้ทันที — เปลี่ยนวิธีทำคอนเทนต์ และรายได้ของคุณวันนี้",
    badge_hit: "ฮิต",
    badge_top: "คุ้มสุด",
    p_currency_th: "บาท",
    p_currency_my: "MYR",
    p_currency_us: "USD",

    p1_name: "ทดลองใช้",
    p1_tag: "เริ่มต้นทดลองระบบ",
    p1_features: [
    "1 Key × 2 หน้าจอ (1 เดือน)",
    "API Key ฟรี (1 เดือน)",
    "ไม่รวม Gemini Ultra",
    "ไฟล์วีดีโอสอนติดตั้งระบบจนทำคลิปสำเร็จ",
    "อัปเดตระบบทุกสัปดาห์ ตามเทรนด์โลก",
    "กลุ่มชั่วคราว"],

    p1_cta: "เริ่มทดลอง",

    p2_name: "ปกติ",
    p2_tag: "เลือกใช้เยอะที่สุด",
    p2_features: [
    "1 Key × 2 หน้าจอ (ตลอดชีพ)",
    "API Key ฟรี (1 เดือน)",
    "Gemini Ultra ฟรี (1 เดือน)",
    "Grok Automatic ฟรี (ตลอดชีพ)",
    "ไฟล์วีดีโอสอนติดตั้งระบบจนทำคลิปสำเร็จ",
    "อัปเดตระบบทุกสัปดาห์ ตามเทรนด์โลก",
    "กลุ่ม VIP ถาวร"],

    p2_cta: "ซื้อแพ็คเกจปกติ",

    p3_name: "ระดับสูง",
    p3_tag: "สำหรับสายจริงจัง",
    p3_features: [
    "1 Key × 10 หน้าจอ (ตลอดชีพ)",
    "API Key ฟรี (3 เดือน)",
    "Gemini Ultra ฟรี (1 เดือน)",
    "Grok Automatic ฟรี (ตลอดชีพ)",
    "ไฟล์วีดีโอสอนติดตั้งระบบจนทำคลิปสำเร็จ",
    "อัปเดตระบบทุกสัปดาห์ ตามเทรนด์โลก",
    "กลุ่ม VIP ถาวร"],

    p3_cta: "อัปเกรดเลย",

    contact_kicker: "สอบถามเพิ่มเติม หรือสนใจ",
    contact_title: "ทักหาเราโดยตรง สอบถามได้ทุกเรื่อง",
    contact_sub: "ตอบไว ปรึกษาฟรี ไม่กดดัน",
    contact_fb_page: "Facebook เพจ",
    contact_fb_page_h: "ทักแชทเพจหลัก",
    contact_fb_personal: "Facebook ส่วนตัว",
    contact_ig: "Instagram",
    contact_wa: "WhatsApp",
    contact_line: "LINE",
    contact_line_h: "เพิ่มเพื่อนทาง LINE",

    faq_kicker: "FAQ",
    faq_title: "คำถามที่พบบ่อย",
    faqs: [
    ["ระบบใช้งานยากไหม สำหรับคนไม่เก่งเทคโนโลยี?",
    "ไม่ยากเลย ออกแบบมาให้ใช้คลิกเดียว เพียงตั้งคำสั่งครั้งเดียวระบบจะทำต่อให้อัตโนมัติ มีคู่มือและกลุ่มซัพพอร์ตช่วยตลอด"],
    ["1 Key ใช้กับหลายหน้าจอได้ไหม?",
    "ขึ้นอยู่กับแพ็คเกจ — แพ็คทดลอง/ปกติ ใช้ได้ 2 หน้าจอ แพ็คระดับสูงใช้ได้ 10 หน้าจอ"],
    ["ลิขสิทธิ์ตลอดชีพ หมายถึงอะไร?",
    "ซื้อครั้งเดียวใช้ได้ตลอดไป ไม่มีค่ารายเดือน ไม่มีการต่ออายุ Key ของคุณใช้งานได้ถาวร"],
    ["API Key คืออะไร ต้องใช้เองไหม?",
    "API Key คือกุญแจที่เชื่อมต่อกับ AI Model เราแถมให้ฟรีตามระยะเวลาแพ็คเกจ หลังจากนั้นคุณสามารถใช้ API Key ของตัวเองได้"],
    ["รองรับภาษาอะไรบ้าง?",
    "รองรับภาษาไทย มลายู อังกฤษ และอีกหลายภาษา สร้างคลิปได้หลายภาษาในระบบเดียว"],
    ["ถ้าระบบมีปัญหา ติดต่อใครได้?",
    "เข้ากลุ่ม VIP เพื่อรับการช่วยเหลือทันที หรือทักผ่าน Facebook / IG / WhatsApp ของเราได้ตลอด 24 ชม."]],


    reviews_kicker: "รีวิวจากผู้ใช้จริง",
    reviews_title: "เสียงจริงจากคนที่ใช้ระบบ",
    reviews_sub: "กว่าพันคนเปลี่ยนวิธีทำคอนเทนต์ ด้วยระบบเดียว",
    reviews: [
    ["ตั้งค่าครั้งเดียว ระบบสร้างคลิปแล้วโพสต์ให้เองทั้งวัน จากที่เคยนั่งตัดคลิปทีละอัน ตอนนี้มีเวลาไปคิดคอนเทนต์ใหม่ได้เต็มที่", "ณัฐพล", "ครีเอเตอร์ TikTok"],
    ["ใช้ดันโพสต์ขายของทุกวัน คลิปออกสม่ำเสมอ ยอดวิวกับยอดขายขึ้นไวกว่าเดิมเยอะ คุ้มมากค่ะ", "พิมพ์ชนก", "เจ้าของเพจขายของ"],
    ["ซื้อทีเดียวใช้ตลอดชีพจริง ไม่มีเก็บรายเดือน ไม่มีค่าซ่อนเร้น แอดมินตอบไวทุกคำถาม", "ธนกฤต", "สาย Dropship"],
    ["AI ตอบคอมเมนต์ลูกค้าให้เองตลอด 24 ชม. ไม่พลาดออเดอร์ตอนกลางคืนอีกเลย ขายได้แม้ตอนนอน", "อารยา", "อินฟลู IG"],
    ["คุมได้หลายหน้าจอพร้อมกันจากแดชบอร์ดเดียว เห็นยอดวิว ยอดขาย สถานะทุกคลิปครบ จัดการง่ายมาก", "ก้องภพ", "เจ้าของแบรนด์"],
    ["ตอนแรกกลัวจะใช้ยาก แต่จริง ๆ คลิกเดียวจบ มีกลุ่ม VIP คอยช่วยตลอด มือใหม่ก็ทำตามได้สบาย", "สุชานันท์", "แอดมินเพจ"]],

    footer_tag: "เหนื่อยน้อยลง 10 เท่า ขยายผลลัพธ์ 100 เท่า",
    footer_rights: "สงวนลิขสิทธิ์"
  },
  ms: {
    nav_features: "Ciri",
    nav_demo: "Video",
    nav_pricing: "Pakej",
    nav_reviews: "Ulasan",
    nav_faq: "Soalan Lazim",
    nav_contact: "Hubungi",
    cta_buy: "Mula Sekarang",
    cta_chat: "Tanya Kami",

    hero_kicker: "SISTEM AUTOMASI VIDEO AI",
    hero_title_1: "Kurang Letih",
    hero_title_1b: "10 Kali",
    hero_title_2: "Hasil Berganda",
    hero_title_2b: "100 Kali",
    hero_title_3: "Satu Klik Sahaja",
    hero_sub: "Sistem AI yang cipta video automatik, siar & sertakan link produk untuk anda 24 jam. Tak perlu buat sendiri, tak perlu upah team.",
    hero_cta_main: "Lihat Pakej",
    hero_cta_sub: "Tonton Video",
    hero_stat_1: "Video Tanpa Had / Hari",
    hero_stat_2: "Ciri",
    hero_stat_3: "Automatik 100%",

    stats_users_n: "70,000+",
    stats_users_l: "Sedang Guna Sistem",
    stats_orders_n: "1.2M+",
    stats_orders_l: "Order Berjaya Dihantar",
    stats_countries_n: "5 Negara",
    stats_countries_l: "Thailand · Malaysia · Indonesia · Laos · Singapura",
    stats_rating_n: "4.9",
    stats_rating_l: "Purata Skor Ulasan",

    what_kicker: "Sistem ini bantu apa?",
    what_title: "Tukar kerja berat jadi 1 klik sahaja",
    what_1_t: "Cipta Video AI Automatik",
    what_1_d: "Masukkan arahan atau produk, sistem cipta video terus — lengkap dengan suara, sari kata & efek dalam satu klik.",
    what_2_t: "Siar & Pautan Produk Auto",
    what_2_d: "Sistem siarkan video ke platform yang ditetapkan dengan link produk automatik mengikut jadual anda.",
    what_3_t: "Auto Balas Komen",
    what_3_d: "AI balas komen pelanggan pada setiap video — tutup jualan, jawab soalan, 24 jam tanpa terlepas sebarang mesej.",
    what_4_t: "Dashboard Sistem Penuh",
    what_4_d: "Satu dashboard lihat semua — views, jualan, video yang sedang aktif, status API. Semua data di satu tempat.",
    what_5_t: "Beroperasi 24/7",
    what_5_d: "Set sekali, sistem jalan terus siang malam — skala hasil yang manusia tak mampu kejar.",
    what_6_t: "Set Sekali, Guna Selamanya",
    what_6_d: "Tiada bayaran bulanan, tiada caj tersembunyi — beli sekali, Key kekal aktif untuk selama-lamanya.",

    demo_kicker: "Lihat Sistem Beraksi",
    demo_title: "Video Penggunaan",
    demo_sub: "Daripada arahan → video sebenar → siaran sosial dalam masa kurang 10 minit",
    demo_placeholder: "Letakkan link video demo di sini",

    features_kicker: "Ciri Utama",
    features_title: "Semua yang anda perlukan dalam satu sistem",
    f1: "Click-to-Video AI",
    f1d: "Satu klik, dapat video segera",
    f2: "Penjadual Auto-Post",
    f2d: "Siaran automatik",
    f3: "Sync Link Produk",
    f3d: "Pautan produk automatik",
    f4: "Kawalan Multi-Skrin",
    f4d: "Kawal banyak skrin serentak",
    f5: "Gemini Ultra Ready",
    f5d: "Sokong model AI tertinggi",
    f6: "Grok Automatic",
    f6d: "Integrasi lancar dengan Grok",
    f7: "Auto Balas Komen",
    f7d: "AI balas semua mesej",
    f8: "Komuniti VIP",
    f8d: "Grup tertutup, bantuan 24 jam",

    pricing_kicker: "Pakej",
    pricing_title: "Pilih pakej yang sesuai untuk anda",
    pricing_sub: "Mula guna serta-merta — ubah cara anda buat kandungan & pendapatan hari ini",
    badge_hit: "POPULAR",
    badge_top: "TERBAIK",
    p_currency_th: "THB",
    p_currency_my: "MYR",
    p_currency_us: "USD",

    p1_name: "Cubaan",
    p1_tag: "Mula cuba sistem",
    p1_features: [
    "1 Key × 2 Skrin (1 bulan)",
    "API Key percuma (1 bulan)",
    "Tidak termasuk Gemini Ultra",
    "Video panduan pemasangan sehingga berjaya buat klip",
    "Kemaskini sistem setiap minggu ikut trend dunia",
    "Grup sementara"],

    p1_cta: "Mula Cuba",

    p2_name: "Standard",
    p2_tag: "Paling banyak dipilih",
    p2_features: [
    "1 Key × 2 Skrin (Seumur Hidup)",
    "API Key percuma (1 bulan)",
    "Gemini Ultra percuma (1 bulan)",
    "Grok Automatic percuma (Seumur Hidup)",
    "Video panduan pemasangan sehingga berjaya buat klip",
    "Kemaskini sistem setiap minggu ikut trend dunia",
    "Grup VIP Kekal"],

    p2_cta: "Beli Standard",

    p3_name: "Premium",
    p3_tag: "Untuk yang serius",
    p3_features: [
    "1 Key × 10 Skrin (Seumur Hidup)",
    "API Key percuma (3 bulan)",
    "Gemini Ultra percuma (1 bulan)",
    "Grok Automatic percuma (Seumur Hidup)",
    "Video panduan pemasangan sehingga berjaya buat klip",
    "Kemaskini sistem setiap minggu ikut trend dunia",
    "Grup VIP Kekal"],

    p3_cta: "Naik Taraf",

    contact_kicker: "Soalan / Berminat",
    contact_title: "Hubungi kami terus — tanya apa sahaja",
    contact_sub: "Respon pantas, konsultasi percuma, tanpa tekanan",
    contact_fb_page: "Facebook Page",
    contact_fb_page_h: "Mesej ke Page",
    contact_fb_personal: "Facebook Peribadi",
    contact_ig: "Instagram",
    contact_wa: "WhatsApp",
    contact_line: "LINE",
    contact_line_h: "Tambah Rakan LINE",

    faq_kicker: "FAQ",
    faq_title: "Soalan Lazim",
    faqs: [
    ["Susah ke guna sistem ni untuk orang yang tak mahir tech?",
    "Tak susah langsung. Direka untuk satu klik — set sekali, sistem buat sendiri. Ada manual dan grup support untuk bantu."],
    ["Boleh ke 1 Key guna untuk banyak skrin?",
    "Bergantung pada pakej — Cubaan/Standard boleh 2 skrin, Premium boleh sampai 10 skrin."],
    ["Apa maksud lesen seumur hidup?",
    "Beli sekali, guna selamanya. Tiada bayaran bulanan, tiada pembaharuan. Key anda kekal aktif."],
    ["Apa itu API Key, perlu sediakan sendiri?",
    "API Key adalah kunci ke AI Model. Kami beri percuma ikut tempoh pakej. Selepas itu anda boleh guna API Key sendiri."],
    ["Sokong bahasa apa?",
    "Sokong Bahasa Melayu, Thai, Inggeris dan banyak lagi. Boleh cipta video pelbagai bahasa dalam satu sistem."],
    ["Kalau ada masalah, hubungi siapa?",
    "Masuk grup VIP untuk bantuan segera, atau hubungi kami melalui Facebook / IG / WhatsApp pada bila-bila masa."]],


    reviews_kicker: "Ulasan Pengguna Sebenar",
    reviews_title: "Suara sebenar daripada pengguna",
    reviews_sub: "Ribuan pengguna ubah cara buat kandungan dengan satu sistem",
    reviews: [
    ["Set sekali, sistem cipta video dan siar sendiri sepanjang hari. Dulu edit satu-satu, sekarang ada masa fikir kandungan baru.", "Nizam", "Kreator TikTok"],
    ["Guna untuk tolak post jualan setiap hari. Video keluar konsisten, views dan jualan naik lebih laju. Sangat berbaloi.", "Farah", "Pemilik Page Jualan"],
    ["Beli sekali guna seumur hidup betul-betul, takda bayaran bulanan, takda caj tersembunyi. Admin respon pantas.", "Hakim", "Pemain Dropship"],
    ["AI balas komen pelanggan 24 jam. Tak terlepas order waktu malam lagi, boleh jual masa tidur pun.", "Aisyah", "Influencer IG"],
    ["Boleh kawal banyak skrin dari satu dashboard. Views, jualan, status setiap video nampak semua. Mudah urus.", "Daniel", "Pemilik Brand"],
    ["Mula-mula ingat susah, tapi sebenarnya satu klik je. Ada grup VIP bantu selalu, newbie pun boleh ikut.", "Suria", "Admin Page"]],

    footer_tag: "Kurang letih 10 kali, hasil berganda 100 kali",
    footer_rights: "Hak Cipta Terpelihara"
  },
  en: {
    nav_features: "Features",
    nav_demo: "Video",
    nav_pricing: "Pricing",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    cta_buy: "Get Started",
    cta_chat: "Chat With Us",

    hero_kicker: "AI VIDEO AUTOMATION SYSTEM",
    hero_title_1: "Less Effort",
    hero_title_1b: "10×",
    hero_title_2: "More Results",
    hero_title_2b: "100×",
    hero_title_3: "In One Click",
    hero_sub: "An AI system that creates videos automatically, posts them & attaches your product links 24/7. No editing yourself, no hiring a team.",
    hero_cta_main: "See Pricing",
    hero_cta_sub: "Watch Video",
    hero_stat_1: "Unlimited Videos / Day",
    hero_stat_2: "Features",
    hero_stat_3: "100% Automatic",

    stats_users_n: "70,000+",
    stats_users_l: "Currently Using The System",
    stats_orders_n: "1.2M+",
    stats_orders_l: "Orders Delivered Successfully",
    stats_countries_n: "5 Countries",
    stats_countries_l: "Thailand · Malaysia · Indonesia · Laos · Singapore",
    stats_rating_n: "4.9",
    stats_rating_l: "Average Review Score",

    what_kicker: "What does this system do for you?",
    what_title: "Turn heavy work into just 1 click",
    what_1_t: "Create AI Videos Automatically",
    what_1_d: "Just enter a prompt or product and the system builds the video instantly — complete with voice, captions & effects in one click.",
    what_2_t: "Auto Post & Product Links",
    what_2_d: "The system posts videos to your chosen platform with product links attached automatically, on your schedule.",
    what_3_t: "Auto Reply To Comments",
    what_3_d: "AI replies to customer comments on every video — closing sales and answering questions 24/7 without missing a message.",
    what_4_t: "Full Back-End Dashboard",
    what_4_d: "One dashboard shows everything — views, sales, running videos, API status. Every number in one place.",
    what_5_t: "Runs 24/7 Non-Stop",
    what_5_d: "Set it once and the system runs day and night — scaling results faster than any human could keep up.",
    what_6_t: "Set Once, Use Forever",
    what_6_d: "No monthly fees, no hidden costs — buy once and your Key stays active forever.",

    demo_kicker: "See The System In Action",
    demo_title: "Usage Videos",
    demo_sub: "From prompt → real video → social post in under 10 minutes",
    demo_placeholder: "Paste your demo video link here",

    features_kicker: "Key Features",
    features_title: "Everything you need in a single system",
    f1: "Click-to-Video AI",
    f1d: "One click, instant video",
    f2: "Auto Post Scheduler",
    f2d: "Automatic posting",
    f3: "Product Link Sync",
    f3d: "Auto-linked products",
    f4: "Multi-Screen Control",
    f4d: "Control many screens at once",
    f5: "Gemini Ultra Ready",
    f5d: "Supports top-tier AI models",
    f6: "Grok Automatic",
    f6d: "Seamless Grok integration",
    f7: "Auto Comment Reply",
    f7d: "AI replies to every message",
    f8: "VIP Community",
    f8d: "Private group, 24h support",

    pricing_kicker: "Pricing",
    pricing_title: "Choose the right plan for you",
    pricing_sub: "Start right away — change how you make content & your income today",
    badge_hit: "POPULAR",
    badge_top: "BEST VALUE",
    p_currency_th: "THB",
    p_currency_my: "MYR",
    p_currency_us: "USD",

    p1_name: "Trial",
    p1_tag: "Start trying the system",
    p1_features: [
    "1 Key × 2 Screens (1 month)",
    "Free API Key (1 month)",
    "Gemini Ultra not included",
    "Setup video guide until your first successful clip",
    "Weekly system updates following global trends",
    "Temporary group"],

    p1_cta: "Start Trial",

    p2_name: "Standard",
    p2_tag: "Most popular choice",
    p2_features: [
    "1 Key × 2 Screens (Lifetime)",
    "Free API Key (1 month)",
    "Free Gemini Ultra (1 month)",
    "Free Grok Automatic (Lifetime)",
    "Setup video guide until your first successful clip",
    "Weekly system updates following global trends",
    "Permanent VIP group"],

    p2_cta: "Buy Standard",

    p3_name: "Premium",
    p3_tag: "For the serious ones",
    p3_features: [
    "1 Key × 10 Screens (Lifetime)",
    "Free API Key (3 months)",
    "Free Gemini Ultra (1 month)",
    "Free Grok Automatic (Lifetime)",
    "Setup video guide until your first successful clip",
    "Weekly system updates following global trends",
    "Permanent VIP group"],

    p3_cta: "Upgrade Now",

    contact_kicker: "Questions or interested?",
    contact_title: "Reach us directly — ask us anything",
    contact_sub: "Fast replies, free consultation, no pressure",
    contact_fb_page: "Facebook Page",
    contact_fb_page_h: "Message the main Page",
    contact_fb_personal: "Personal Facebook",
    contact_ig: "Instagram",
    contact_wa: "WhatsApp",
    contact_line: "LINE",
    contact_line_h: "Add us on LINE",

    faq_kicker: "FAQ",
    faq_title: "Frequently Asked Questions",
    faqs: [
    ["Is the system hard to use for non-technical people?",
    "Not at all. It's designed for one click — set it once and the system runs by itself. There's a manual and a support group to help."],
    ["Can 1 Key be used on multiple screens?",
    "It depends on the plan — Trial/Standard support 2 screens, Premium supports up to 10 screens."],
    ["What does a lifetime license mean?",
    "Buy once, use forever. No monthly fees, no renewals. Your Key stays active permanently."],
    ["What is an API Key, do I need my own?",
    "An API Key connects to the AI Model. We provide one free for the plan's duration, after which you can use your own."],
    ["What languages are supported?",
    "It supports English, Thai, Malay and many more. You can create videos in multiple languages within one system."],
    ["If something goes wrong, who do I contact?",
    "Join the VIP group for instant help, or reach us via Facebook / IG / WhatsApp anytime, 24/7."]],


    reviews_kicker: "Reviews From Real Users",
    reviews_title: "Real voices from people using the system",
    reviews_sub: "Thousands have changed how they make content with one system",
    reviews: [
    ["Set it once and the system creates and posts videos all day. I used to edit clips one by one — now I have time to think up new content.", "Nathaphon", "TikTok Creator"],
    ["I use it to push sales posts every day. Videos go out consistently, views and sales climb faster. Totally worth it.", "Pimchanok", "Sales Page Owner"],
    ["Buy once, use for life — really no monthly fees, no hidden costs. Admins reply fast to every question.", "Thanakrit", "Dropshipper"],
    ["AI replies to customer comments 24/7. I no longer miss night-time orders — I can sell while I sleep.", "Araya", "IG Influencer"],
    ["I control many screens from one dashboard. Views, sales, the status of every video — all visible. Very easy to manage.", "Kongphop", "Brand Owner"],
    ["At first I thought it'd be hard, but it's really one click. The VIP group helps constantly — even beginners can follow.", "Suchanan", "Page Admin"]],

    footer_tag: "10× less effort, 100× more results",
    footer_rights: "All Rights Reserved"
  }
};

// ============ THEMES ============
const THEMES = {
  pink: { name: "Neon Pink", bg: "#0c0509", surface: "#170810", accent: "oklch(0.74 0.28 0)", accentInk: "#0c0509", text: "#f7ecf0", muted: "#c4b3bb" },
  electric: { name: "Electric Lime", bg: "#0a0d08", surface: "#13170f", accent: "oklch(0.88 0.21 130)", accentInk: "#0a0d08", text: "#f5f6f0", muted: "#b6bcab" },
  cyber: { name: "Cyber Cyan", bg: "#070a10", surface: "#0f131c", accent: "oklch(0.82 0.18 200)", accentInk: "#070a10", text: "#eef3f8", muted: "#aab2c0" },
  violet: { name: "Violet Pulse", bg: "#0a070f", surface: "#140e1c", accent: "oklch(0.78 0.20 300)", accentInk: "#0a070f", text: "#f0ecf7", muted: "#b8b0c4" }
};

// Day-mode accents (tuned for contrast on a near-white background)
const LIGHT_ACCENTS = {
  pink: "oklch(0.64 0.21 5)",
  electric: "oklch(0.58 0.15 142)",
  cyber: "oklch(0.58 0.13 230)",
  violet: "oklch(0.55 0.19 300)"
};

function getPalette(color, mode) {
  if (mode === "light") {
    return {
      bg: "#fdf5f8",
      surface: "#ffffff",
      accent: LIGHT_ACCENTS[color] || LIGHT_ACCENTS.pink,
      accentInk: "#ffffff",
      text: "#1c151a",
      muted: "#5f525a",
      border: "rgba(28,14,22,0.09)",
      borderStrong: "rgba(28,14,22,0.17)"
    };
  }
  const th = THEMES[color] || THEMES.pink;
  return Object.assign({}, th, {
    border: "rgba(255,255,255,0.08)",
    borderStrong: "rgba(255,255,255,0.18)"
  });
}

// ============ DEFAULTS ============
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "pink",
  "mode": "dark",
  "lang": "ms",
  "currency": "my",
  "showStats": true,
  "showRobot": true
} /*EDITMODE-END*/;

// ============ HELPERS ============
const FB_PAGE_URL = "https://m.me/61586869424321";
const FB_URL = "https://m.me/adilan.yusoh.58";
const IG_URL = "https://ig.me/m/lan_yousoh";
const WA_URL = "https://wa.me/66829284661";
const WA_DISPLAY = "+66 82-928-4661";
const LINE_URL = "https://lin.ee/ZWaFWFj";

const RES = (typeof window !== "undefined" && window.__resources) || {};
const DEMO_VIDEOS = [
{ src: RES.demo3 || "videos/demo-3.mp4", type: "video/mp4", label: { th: "— ภาพรวมระบบ", ms: "— Gambaran Sistem" } },
{ src: RES.demo2 || "videos/demo-2.mp4", type: "video/mp4", label: { th: "— ความแตกต่างใช้ระบบ vs ไม่ใช้ระบบ", ms: "— Pakai Sistem vs Tanpa Sistem" } },
{ src: RES.demo1 || "videos/demo-1.mp4", type: "video/mp4", label: { th: "— ระบบกำลังทำงาน", ms: "— Sistem Sedang Berjalan" } }];


function smoothScroll(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
}

// ============ ROBOT MINER ============
function RobotMiner() {
  const [scrollY, setScrollY] = useState(0);
  const [, forceTick] = useState(0);
  const particlesRef = useRef([]);
  const stateRef = useRef({ swing: 0, lastBurstAt: -999 });

  // Track scroll
  useEffect(() => {
    let raf = null;
    const update = () => {
      setScrollY(window.scrollY || 0);
      raf = null;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Animation loop for particles
  useEffect(() => {
    let raf;
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      particlesRef.current = particlesRef.current
        .map((p) => ({
          ...p,
          x: p.x + p.vx * dt,
          y: p.y + p.vy * dt,
          vy: p.vy + 360 * dt,
          vx: p.vx * 0.99,
          rot: p.rot + p.vr * dt,
          life: p.life - dt,
        }))
        .filter((p) => p.life > 0);
      forceTick((n) => (n + 1) % 1000000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Trigger coin bursts on scroll-induced impacts
  useEffect(() => {
    const swing = Math.sin(scrollY / 40) * 38;
    const prevSwing = stateRef.current.swing;
    stateRef.current.swing = swing;
    const wasBelow = Math.abs(prevSwing) <= 32;
    const isAbove = Math.abs(swing) > 32;
    const dist = Math.abs(scrollY - stateRef.current.lastBurstAt);
    if (wasBelow && isAbove && dist > 30) {
      stateRef.current.lastBurstAt = scrollY;
      const burstCount = 10 + Math.floor(Math.random() * 5);
      const newParts = [];
      for (let i = 0; i < burstCount; i++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.6;
        const speed = 110 + Math.random() * 160;
        newParts.push({
          id: Math.random() + performance.now(),
          x: 216 + (Math.random() - 0.5) * 22,
          y: 348,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 5 + Math.random() * 5,
          rot: Math.random() * 360,
          vr: (Math.random() - 0.5) * 420,
          life: 1.0 + Math.random() * 0.8,
          maxLife: 1.8,
          char: Math.random() > 0.55 ? "฿" : "$",
        });
      }
      particlesRef.current = [...particlesRef.current.slice(-40), ...newParts];
    }
  }, [scrollY]);

  const swing = Math.sin(scrollY / 40) * 38;
  const bob = Math.sin(scrollY / 60) * 4;
  const eyeScale = 1 - (Math.abs(swing) > 30 ? 0.4 : 0);
  const impacting = Math.abs(swing) > 30;

  return (
    <div className="robot-bg" aria-hidden="true">
      <svg viewBox="0 0 440 420" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rb-ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect x="0" y="360" width="440" height="60" fill="url(#rb-ground)" />
        <line x1="0" y1="360" x2="440" y2="360" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="6 4" />

        <g opacity="0.55">
          <circle cx="320" cy="358" r="14" fill="currentColor" />
          <circle cx="340" cy="354" r="11" fill="currentColor" opacity="0.8" />
          <circle cx="305" cy="352" r="9" fill="currentColor" opacity="0.7" />
          <circle cx="330" cy="345" r="8" fill="currentColor" opacity="0.6" />
          <text x="320" y="363" textAnchor="middle" fontSize="14" fontWeight="700" fill="#000" opacity="0.55">฿</text>
        </g>

        {particlesRef.current.map((p) => {
          const lifeRatio = Math.max(0, p.life / p.maxLife);
          return (
            <g key={p.id} transform={`translate(${p.x} ${p.y}) rotate(${p.rot})`} opacity={lifeRatio}>
              <circle r={p.size} fill="currentColor" />
              <text textAnchor="middle" y={p.size * 0.4} fontSize={p.size * 1.1} fontWeight="800" fill="#000" opacity="0.6">{p.char}</text>
            </g>
          );
        })}

        <g transform={`translate(0 ${bob})`}>
          <rect x="125" y="295" width="22" height="65" rx="3" fill="currentColor" opacity="0.85" />
          <rect x="165" y="295" width="22" height="65" rx="3" fill="currentColor" opacity="0.85" />
          <rect x="120" y="355" width="32" height="8" rx="2" fill="currentColor" />
          <rect x="160" y="355" width="32" height="8" rx="2" fill="currentColor" />

          <rect x="105" y="180" width="105" height="120" rx="10" fill="currentColor" opacity="0.9" />
          <rect x="125" y="200" width="65" height="40" rx="4" fill="#000" opacity="0.35" />
          <circle cx="138" cy="220" r="4" fill="currentColor" opacity="0.9" />
          <circle cx="158" cy="220" r="4" fill="currentColor" opacity="0.7" />
          <circle cx="178" cy="220" r="4" fill="currentColor" opacity="0.5" />
          <rect x="105" y="260" width="105" height="6" fill="#000" opacity="0.3" />

          <rect x="148" y="165" width="18" height="20" fill="currentColor" opacity="0.8" />

          <rect x="115" y="90" width="85" height="80" rx="14" fill="currentColor" />
          <rect x="125" y="110" width="65" height="30" rx="6" fill="#000" opacity="0.55" />
          <g style={{ transformOrigin: "157px 125px", transform: `scaleY(${eyeScale})` }}>
            <circle cx="142" cy="125" r="5" fill="currentColor" />
            <circle cx="172" cy="125" r="5" fill="currentColor" />
            <circle cx="142" cy="125" r="2.5" fill="#000" />
            <circle cx="172" cy="125" r="2.5" fill="#000" />
          </g>
          <line x1="157" y1="90" x2="157" y2="72" stroke="currentColor" strokeWidth="3" />
          <circle cx="157" cy="68" r="5" fill="currentColor">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
          </circle>
          <rect x="140" y="150" width="34" height="6" rx="2" fill="#000" opacity="0.35" />

          <rect x="92" y="195" width="18" height="55" rx="4" fill="currentColor" opacity="0.85" />
          <circle cx="101" cy="255" r="11" fill="currentColor" />

          <g transform={`rotate(${swing} 215 200)`} style={{ transformOrigin: "215px 200px" }}>
            <circle cx="215" cy="200" r="13" fill="currentColor" />
            <rect x="207" y="200" width="18" height="55" rx="4" fill="currentColor" />
            <circle cx="216" cy="258" r="10" fill="currentColor" />
            <rect x="213" y="245" width="6" height="100" rx="2" fill="#7a5a3a" />
            <g transform="translate(216 340)">
              <polygon points="-32,-6 32,-6 28,8 -28,8" fill="currentColor" opacity="0.95" />
              <polygon points="-32,-6 -50,-12 -46,4 -28,8" fill="currentColor" />
              <polygon points="32,-6 50,-12 46,4 28,8" fill="currentColor" />
              <rect x="-6" y="-10" width="12" height="6" fill="#000" opacity="0.3" />
            </g>
            <g transform="translate(216 346)" opacity={impacting ? 0.95 : 0}>
              <line x1="-22" y1="0" x2="-34" y2="-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="22" y1="0" x2="34" y2="-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="0" y1="-5" x2="0" y2="-22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="-12" y1="-3" x2="-18" y2="-16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="-3" x2="18" y2="-16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
        </g>

        <g opacity={impacting ? 0.45 : 0.15} transform="translate(216 365)">
          <circle cx="-10" cy="0" r="3" fill="currentColor" />
          <circle cx="0" cy="-2" r="2" fill="currentColor" />
          <circle cx="10" cy="0" r="3" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

// ============ COMPONENTS ============
function LangToggle({ lang, setLang }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button className={lang === "th" ? "active" : ""} onClick={() => setLang("th")}>TH</button>
      <button className={lang === "ms" ? "active" : ""} onClick={() => setLang("ms")}>MS</button>
      <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
    </div>);

}

function ModeToggle({ mode, setMode }) {
  const isLight = mode === "light";
  return (
    <button
      className="mode-toggle"
      onClick={() => setMode(isLight ? "dark" : "light")}
      aria-label={isLight ? "Tukar ke mod gelap" : "Tukar ke mod terang"}
      title={isLight ? "Mod gelap" : "Mod terang"}>
      {isLight ?
      <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg> :

      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.3M12 19.2v2.3M2.5 12h2.3M19.2 12h2.3M5.1 5.1l1.6 1.6M17.3 17.3l1.6 1.6M18.9 5.1l-1.6 1.6M6.7 17.3l-1.6 1.6" />
        </svg>}
    </button>);

}

function Nav({ t, lang, setLang, mode, setMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
  ["features", t.nav_features],
  ["demo", t.nav_demo],
  ["pricing", t.nav_pricing],
  ["reviews", t.nav_reviews],
  ["faq", t.nav_faq],
  ["contact", t.nav_contact]];

  return (
    <header className={"nav " + (scrolled ? "nav--scrolled" : "")}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" onClick={(e) => {e.preventDefault();smoothScroll("top");}}>
          <span className="nav__brand-dot" />
          <span>LAN<span style={{ opacity: 0.5 }}>·</span>AUTO</span>
        </a>
        <nav className={"nav__links " + (open ? "open" : "")}>
          {links.map(([id, label]) =>
          <a key={id} href={"#" + id} onClick={(e) => {e.preventDefault();smoothScroll(id);setOpen(false);}}>{label}</a>
          )}
        </nav>
        <div className="nav__right">
          <ModeToggle mode={mode} setMode={setMode} />
          <LangToggle lang={lang} setLang={setLang} />
          <button className="btn btn--primary btn--sm" onClick={() => smoothScroll("pricing")}>{t.cta_buy}</button>
          <button className="nav__burger" onClick={() => setOpen(!open)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>);

}

function Hero({ t }) {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>
      <div className="container hero__inner">
        <div className="kicker">
          <span className="kicker__dot" />
          {t.hero_kicker}
        </div>
        <h1 className="hero__title">
          <span className="hero__line">{t.hero_title_1} <em className="hi">{t.hero_title_1b}</em></span>
          <span className="hero__line">{t.hero_title_2} <em className="hi">{t.hero_title_2b}</em></span>
          <span className="hero__line hero__line--alt">{t.hero_title_3}</span>
        </h1>
        <p className="hero__sub">{t.hero_sub}</p>
        <div className="hero__cta">
          <button className="btn btn--primary btn--lg" onClick={() => smoothScroll("pricing")}>
            {t.hero_cta_main}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button className="btn btn--ghost btn--lg" onClick={() => smoothScroll("demo")}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7L8 5z" /></svg>
            {t.hero_cta_sub}
          </button>
        </div>
        <div className="hero__stats">
          <div className="stat">
            <div className="stat__num"><span>∞</span></div>
            <div className="stat__lbl">{t.hero_stat_1}</div>
          </div>
          <div className="stat">
            <div className="stat__num">8<span>+</span></div>
            <div className="stat__lbl">{t.hero_stat_2}</div>
          </div>
          <div className="stat">
            <div className="stat__num">24/7</div>
            <div className="stat__lbl">{t.hero_stat_3}</div>
          </div>
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {Array.from({ length: 2 }).map((_, i) =>
          <div key={i} className="marquee__group">
              <span>AUTO POST</span><span className="dot">●</span>
              <span>AI VIDEO</span><span className="dot">●</span>
              <span>PRODUCT LINK</span><span className="dot">●</span>
              <span>MULTI-SCREEN</span><span className="dot">●</span>
              <span>GEMINI ULTRA</span><span className="dot">●</span>
              <span>GROK AUTOMATIC</span><span className="dot">●</span>
              <span>24/7 RUN</span><span className="dot">●</span>
              <span>1-CLICK</span><span className="dot">●</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Stats({ t }) {
  const items = [
  [t.stats_users_n, t.stats_users_l, false],
  [t.stats_countries_n, t.stats_countries_l, false],
  [t.stats_rating_n, t.stats_rating_l, true]];

  return (
    <section id="stats" className="stats-band">
      <div className="container">
        <div className="stats-grid">
          {items.map(([num, lbl, star], i) =>
          <div key={i} className="stat-card">
              <div className="stat-card__num">
                {num}
                {star &&
                <svg className="stat-card__star" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l2.9 6.26 6.84.62-5.16 4.54 1.54 6.7L12 17.1 5.88 20.62l1.54-6.7L2.26 8.88l6.84-.62z" />
                  </svg>
                }
              </div>
              <div className="stat-card__lbl">{lbl}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function WhatItDoes({ t }) {
  const items = [
  [t.what_1_t, t.what_1_d, "01"],
  [t.what_2_t, t.what_2_d, "02"],
  [t.what_3_t, t.what_3_d, "03"],
  [t.what_4_t, t.what_4_d, "04"],
  [t.what_5_t, t.what_5_d, "05"],
  [t.what_6_t, t.what_6_d, "06"]];

  return (
    <section id="what" className="section">
      <div className="container">
        <div className="section__head">
          <div className="kicker"><span className="kicker__dot" />{t.what_kicker}</div>
          <h2 className="section__title">{t.what_title}</h2>
        </div>
        <div className="what-grid what-grid--6">
          {items.map(([title, desc, num], i) =>
          <div key={i} className="what-card">
              <div className="what-card__num">{num}</div>
              <h3 className="what-card__t">{title}</h3>
              <p className="what-card__d">{desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Demo({ t, lang }) {
  const [idx, setIdx] = useState(0);
  const videoRef = useRef(null);
  const current = DEMO_VIDEOS[idx];
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [idx]);
  return (
    <section id="demo" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <div className="kicker"><span className="kicker__dot" />{t.demo_kicker}</div>
          <h2 className="section__title">{t.demo_title}</h2>
          <p className="section__sub">{t.demo_sub}</p>
        </div>
        <div className="demo-frame">
          <div className="demo-frame__bar">
            <span /><span /><span />
            <div className="demo-frame__url">lan-auto.app / demo / {String(idx + 1).padStart(2, "0")}</div>
          </div>
          <div className="demo-frame__body">
            <video
              key={current.src}
              ref={videoRef}
              className="demo-video"
              controls
              playsInline
              autoPlay
              muted
              loop>
              
              <source src={current.src} type={current.type} />
              <source src={current.src} />
            </video>
          </div>
        </div>
        <div className="demo-thumbs">
          {DEMO_VIDEOS.map((v, i) =>
          <button
            key={i}
            className={"demo-thumb " + (i === idx ? "active" : "")}
            onClick={() => setIdx(i)}>
            
              <div className="demo-thumb__num">{String(i + 1).padStart(2, "0")}</div>
              <div className="demo-thumb__lbl">{v.label[lang]}</div>
              <div className="demo-thumb__play">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7L8 5z" /></svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>);

}

function Features({ t }) {
  const items = [
  [t.f1, t.f1d], [t.f2, t.f2d], [t.f3, t.f3d], [t.f4, t.f4d],
  [t.f5, t.f5d], [t.f6, t.f6d], [t.f7, t.f7d], [t.f8, t.f8d]];

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section__head">
          <div className="kicker"><span className="kicker__dot" />{t.features_kicker}</div>
          <h2 className="section__title">{t.features_title}</h2>
        </div>
        <div className="features-grid">
          {items.map(([title, desc], i) =>
          <div key={i} className="feature">
              <div className="feature__icon">
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Pricing({ t, currency, setCurrency }) {
  const packages = [
  {
    name: t.p1_name, tag: t.p1_tag,
    priceTh: "1,990", priceMy: "250", priceUs: "65",
    features: t.p1_features,
    cta: t.p1_cta,
    badge: null,
    featured: false
  },
  {
    name: t.p2_name, tag: t.p2_tag,
    priceTh: "4,590", priceMy: "560", priceUs: "140",
    features: t.p2_features,
    cta: t.p2_cta,
    badge: t.badge_hit,
    featured: true
  },
  {
    name: t.p3_name, tag: t.p3_tag,
    priceTh: "7,950", priceMy: "999", priceUs: "250",
    features: t.p3_features,
    cta: t.p3_cta,
    badge: t.badge_top,
    featured: false
  }];

  return (
    <section id="pricing" className="section section--alt">
      <div className="container">
        <div className="section__head">
          <div className="kicker"><span className="kicker__dot" />{t.pricing_kicker}</div>
          <h2 className="section__title">{t.pricing_title}</h2>
          <p className="section__sub">{t.pricing_sub}</p>
          <div className="currency-toggle" role="group">
            <button className={currency === "th" ? "active" : ""} onClick={() => setCurrency("th")}>THB ฿</button>
            <button className={currency === "my" ? "active" : ""} onClick={() => setCurrency("my")}>MYR RM</button>
            <button className={currency === "us" ? "active" : ""} onClick={() => setCurrency("us")}>USD $</button>
          </div>
        </div>
        <div className="pricing-grid">
          {packages.map((p, i) =>
          <div key={i} className={"price-card " + (p.featured ? "price-card--feat" : "")}>
              {p.badge && <div className="price-card__badge">{p.badge}</div>}
              <div className="price-card__head">
                <div className="price-card__name">{p.name}</div>
                <div className="price-card__tag">{p.tag}</div>
              </div>
              <div className="price-card__price">
                <span className="price-card__cur">{currency === "th" ? "฿" : currency === "us" ? "$" : "RM"}</span>
                <span className="price-card__amt">{currency === "th" ? p.priceTh : currency === "us" ? p.priceUs : p.priceMy}</span>
                <span className="price-card__unit">{currency === "th" ? t.p_currency_th : currency === "us" ? t.p_currency_us : t.p_currency_my}</span>
              </div>
              <ul className="price-card__list">
                {p.features.map((f, j) =>
              <li key={j}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span>{f}</span>
                  </li>
              )}
              </ul>
              <button
              className={"btn btn--lg " + (p.featured ? "btn--primary" : "btn--outline")}
              onClick={() => smoothScroll("contact")}>
              
                {p.cta}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Contact({ t }) {
  const fbIcon =
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.9h2.54V9.84c0-2.52 1.49-3.92 3.78-3.92 1.1 0 2.24.2 2.24.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.58v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.94z" /></svg>;
  const channels = [
  {
    name: t.contact_fb_page,
    handle: t.contact_fb_page_h,
    url: FB_PAGE_URL,
    icon: fbIcon
  },
  {
    name: t.contact_fb_personal,
    handle: "adilan.yusoh.58",
    url: FB_URL,
    icon: fbIcon
  },
  {
    name: t.contact_ig,
    handle: "@lan_yousoh",
    url: IG_URL,
    icon:
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>

  },
  {
    name: t.contact_wa,
    handle: WA_DISPLAY,
    url: WA_URL,
    icon:
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11 11 0 0 0 3.2 17l-1.2 4.4 4.5-1.2A11 11 0 1 0 20.5 3.5zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.7.7.7-2.6-.2-.3A9 9 0 1 1 12 20.5zm5-6.7c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.2c-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-1.6-.8-2.6-1.4-3.7-3.2-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.4 1.8.7 2.5.8 3.4.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" /></svg>

  },
  {
    name: t.contact_line,
    handle: t.contact_line_h,
    url: LINE_URL,
    icon:
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.55 2 10.93c0 3.92 3.57 7.2 8.4 7.82.33.07.77.22.88.5.1.26.07.66.03.92l-.14.85c-.04.25-.2.98.86.53s5.7-3.36 7.78-5.75C21.18 14.2 22 12.66 22 10.93 22 6.55 17.5 3 12 3zM8.04 13.2H6.01c-.3 0-.54-.24-.54-.53V9.05c0-.3.24-.54.54-.54.3 0 .54.24.54.54v3.08h1.49c.3 0 .54.24.54.54 0 .29-.24.53-.54.53zm2.12-.53c0 .29-.24.53-.54.53-.3 0-.54-.24-.54-.53V9.05c0-.3.24-.54.54-.54.3 0 .54.24.54.54v3.62zm4.34 0c0 .23-.15.43-.37.51-.06.02-.12.03-.18.03-.17 0-.33-.08-.43-.22l-1.85-2.52v2.2c0 .29-.24.53-.54.53-.3 0-.54-.24-.54-.53V9.05c0-.23.15-.43.37-.51.06-.02.12-.03.18-.03.17 0 .33.09.43.22l1.86 2.53V9.05c0-.3.23-.54.53-.54.3 0 .54.24.54.54v3.62zm3.41-2.35c.3 0 .54.24.54.54 0 .29-.24.53-.54.53h-1.49v.96h1.49c.3 0 .54.24.54.54 0 .29-.24.53-.54.53h-2.03c-.29 0-.53-.24-.53-.53V9.05c0-.3.24-.54.53-.54h2.03c.3 0 .54.24.54.54 0 .3-.24.54-.54.54h-1.49v.96h1.49z" /></svg>

  }];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-left">
            {t.contact_kicker &&
            <div className="kicker"><span className="kicker__dot" />{t.contact_kicker}</div>
            }
            <h2 className="section__title">{t.contact_title}</h2>
            <p className="section__sub">{t.contact_sub}</p>
          </div>
          <div className="contact-right">
            {channels.map((c, i) =>
            <a key={i} className="ch-card" href={c.url} target="_blank" rel="noopener noreferrer">
                <div className="ch-card__icon">{c.icon}</div>
                <div className="ch-card__body">
                  <div className="ch-card__name">{c.name}</div>
                  <div className="ch-card__handle">{c.handle}</div>
                </div>
                <svg className="ch-card__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function Reviews({ t }) {
  const Star = () =>
  <svg className="rv-star" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.26 6.84.62-5.16 4.54 1.54 6.7L12 17.1 5.88 20.62l1.54-6.7L2.26 8.88l6.84-.62z" />
    </svg>;

  return (
    <section id="reviews" className="section">
      <div className="container">
        <div className="section__head">
          <div className="kicker"><span className="kicker__dot" />{t.reviews_kicker}</div>
          <h2 className="section__title">{t.reviews_title}</h2>
          <p className="section__sub">{t.reviews_sub}</p>
        </div>
        <div className="reviews-grid">
          {t.reviews.map((r, i) =>
          <figure key={i} className="rv-card">
              <div className="rv-stars" aria-label="5 / 5">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <blockquote className="rv-quote">&ldquo;{r[0]}&rdquo;</blockquote>
              <figcaption className="rv-author">
                <span className="rv-avatar" aria-hidden="true">{r[1].slice(0, 1)}</span>
                <span className="rv-author__meta">
                  <span className="rv-author__name">{r[1]}</span>
                  <span className="rv-author__role">{r[2]}</span>
                </span>
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>);

}

function FAQ({ t }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section section--alt">
      <div className="container">
        <div className="section__head section__head--left">
          <div className="kicker"><span className="kicker__dot" />{t.faq_kicker}</div>
          <h2 className="section__title">{t.faq_title}</h2>
        </div>
        <div className="faq-list">
          {t.faqs.map((f, i) =>
          <div key={i} className={"faq-item " + (open === i ? "open" : "")}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f[0]}</span>
                <span className="faq-q__icon">{open === i ? "–" : "+"}</span>
              </button>
              <div className="faq-a"><p>{f[1]}</p></div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="nav__brand" style={{ marginBottom: 10 }}>
            <span className="nav__brand-dot" />
            <span>LAN<span style={{ opacity: 0.5 }}>·</span>AUTO</span>
          </div>
          <p className="footer__tag">{t.footer_tag}</p>
        </div>
        <div className="footer__links">
          <a href={FB_PAGE_URL} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={IG_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer">LINE</a>
        </div>
        <div className="footer__copy">© 2026 LAN·AUTO. {t.footer_rights}.</div>
      </div>
    </footer>);

}

// ============ TWEAKS ============
function Tweaks({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Theme">
        <TweakRadio
          label="Mode"
          value={tweaks.mode}
          onChange={(v) => setTweak("mode", v)}
          options={[{ value: "dark", label: "กลางคืน" }, { value: "light", label: "กลางวัน" }]} />
        
        <TweakRadio
          label="Color"
          value={tweaks.theme}
          onChange={(v) => setTweak("theme", v)}
          options={Object.keys(THEMES).map((k) => ({ value: k, label: THEMES[k].name.split(" ")[0] }))} />
        
      </TweakSection>
      <TweakSection title="Language & Currency">
        <TweakRadio
          label="Language"
          value={tweaks.lang}
          onChange={(v) => setTweak("lang", v)}
          options={[{ value: "th", label: "ไทย" }, { value: "ms", label: "Melayu" }, { value: "en", label: "English" }]} />
        
        <TweakRadio
          label="Default Currency"
          value={tweaks.currency}
          onChange={(v) => setTweak("currency", v)}
          options={[{ value: "th", label: "THB ฿" }, { value: "my", label: "MYR RM" }, { value: "us", label: "USD $" }]} />
        
      </TweakSection>
      <TweakSection title="Content">
        <TweakToggle
          label="Show Robot Background"
          value={tweaks.showRobot}
          onChange={(v) => setTweak("showRobot", v)} />
        
      </TweakSection>
    </TweaksPanel>);

}

// ============ APP ============
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [lang, setLang] = useState(tweaks.lang);
  const [currency, setCurrency] = useState(tweaks.currency);

  useEffect(() => {setLang(tweaks.lang);}, [tweaks.lang]);
  useEffect(() => {setCurrency(tweaks.currency);}, [tweaks.currency]);

  const theme = getPalette(tweaks.theme, tweaks.mode);
  const t = TR[lang];

  useEffect(() => {
    const root = document.documentElement;
    const r = root.style;
    root.setAttribute("data-mode", tweaks.mode === "light" ? "light" : "dark");
    r.setProperty("--bg", theme.bg);
    r.setProperty("--surface", theme.surface);
    r.setProperty("--accent", theme.accent);
    r.setProperty("--accent-ink", theme.accentInk);
    r.setProperty("--text", theme.text);
    r.setProperty("--muted", theme.muted);
    r.setProperty("--border", theme.border);
    r.setProperty("--border-strong", theme.borderStrong);
  }, [theme, tweaks.mode]);

  return (
    <>
      {tweaks.showRobot && <RobotMiner />}
      <Nav t={t} lang={lang} setLang={(v) => {setLang(v);setTweak("lang", v);}} mode={tweaks.mode} setMode={(v) => setTweak("mode", v)} />
      <main>
        <Hero t={t} />
        <Stats t={t} />
        <WhatItDoes t={t} />
        <Demo t={t} lang={lang} />
        <Features t={t} />
        <Pricing t={t} currency={currency} setCurrency={(v) => {setCurrency(v);setTweak("currency", v);}} />
        <Reviews t={t} />
        <Contact t={t} />
        <FAQ t={t} />
      </main>
      <Footer t={t} />
      <Tweaks tweaks={tweaks} setTweak={setTweak} />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);