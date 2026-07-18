export type Language = 'en' | 'bm' | 'id' | 'ph' | 'ar' | 'fr' | 'tr';

export interface TranslationSchema {
  // Navigation
  logo: string;
  applyBtn: string;
  menuTitle: string;
  copyright: string;
  langLabel: string;
  
  // Hero
  heroBadge: string;
  heroSub: string;
  heroText: string;
  exploreBtn: string;
  partnerBtn: string;
  portfolioSectors: string;
  sectorWebsites: string;
  sectorWebsitesDesc: string;
  sectorCrm: string;
  sectorCrmDesc: string;
  sectorEcommerce: string;
  sectorEcommerceDesc: string;
  
  // FeaturesChess (Thesis -> Our Rebranding Approach)
  thesisBadge: string;
  thesisHeading: string;
  thesisText: string;
  platform1Title: string;
  platform1Desc: string;
  platform1Cta: string;
  platform2Title: string;
  platform2Desc: string;
  platform2Cta: string;
  
  // FeaturesGrid (Capabilities -> Services)
  servicesBadge: string;
  servicesHeading: string;
  servicesText: string;
  service1Title: string;
  service1Desc: string;
  service2Title: string;
  service2Desc: string;
  service3Title: string;
  service3Desc: string;
  service4Title: string;
  service4Desc: string;
  activeStatus: string;
  originalPrice1: string;
  originalPrice2: string;
  originalPrice3: string;
  originalPrice4: string;
  
  // Stats (Pricing & Urgency)
  statsBadge: string;
  statsHeading: string;
  statsText: string;
  statsSync: string;
  metricMarketTitle: string;
  metricPromoTitle: string;
  metricPromoDesc: string;
  metricTimeTitle: string;
  metricSlotsTitle: string;
  metricSlotsDesc: string;
  
  // Leadership (Trusted & Legitimacy)
  trustBadge: string;
  trustHeading: string;
  trustSub: string;
  lead1Role: string;
  founder1Quote: string;
  lead2Role: string;
  founder2Quote: string;
  lead3Role: string;
  founder3Quote: string;
  trustNode: string;
  verifiedLabel: string;
  
  // FooterCTA & Form
  formBadge: string;
  formHeading: string;
  formText: string;
  step1Num: string;
  step1Title: string;
  step1Desc: string;
  step2Num: string;
  step2Title: string;
  step2Desc: string;
  step3Num: string;
  step3Title: string;
  step3Desc: string;
  stepTime1: string;
  stepTime2: string;
  stepTime3: string;
  
  // Form fields
  formTitle: string;
  formSub: string;
  labelName: string;
  labelEmail: string;
  labelPhone: string;
  labelCompany: string;
  labelService: string;
  labelBottleneck: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderPhone: string;
  placeholderCompany: string;
  placeholderBottleneck: string;
  btnSubmit: string;
  formDisclaimer: string;
  
  // Form success
  successTitle: string;
  successText: string;
  successBtn: string;
  
  // Database panel
  dbTitle: string;
  dbSub: string;
  dbEmpty: string;
  dbName: string;
  dbEmail: string;
  dbPhone: string;
  dbCompany: string;
  dbService: string;
  dbNotes: string;
  dbExport: string;
  
  // Services Options
  optWeb: string;
  optCrm: string;
  optEcom: string;
  optRebrand: string;
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    logo: 'DIGITIZE',
    applyBtn: 'Join Waitlist',
    menuTitle: 'Menu Navigation',
    copyright: 'DIGITIZE SYSTEMS © 2026. ALL RIGHTS RESERVED.',
    langLabel: 'English',
    
    heroBadge: 'Limited Promotion',
    heroSub: 'Next-Generation Rebranding & Elite Digital Engineering',
    heroText: 'We rebuild old websites, bespoke CRMs, and hyper-scalable custom systems into futuristic liquid masterpieces. Available worldwide. Completed in 3 to 5 days. One-time payment, zero recurring fees.',
    exploreBtn: 'View Pricing & Offer',
    partnerBtn: 'Secure Promo Spot',
    portfolioSectors: 'Enterprise Services',
    sectorWebsites: 'Ultra-Fast Web',
    sectorWebsitesDesc: '3D & Liquid Experience',
    sectorCrm: 'Bespoke CRM',
    sectorCrmDesc: 'Startup & Enterprise',
    sectorEcommerce: 'Next-Gen E-com',
    sectorEcommerceDesc: 'Hyper-scalable Sales',
    
    thesisBadge: '01 // THE REBRANDING REVOLUTION',
    thesisHeading: 'Transforming Legacy Systems into Modern Masterpieces',
    thesisText: 'Slow, clunky platforms destroy brand trust and lose sales. We rebuild everything from the ground up using modern lightweight code, fluid animations, and high-conversion aesthetic designs. Global reach, localized precision.',
    platform1Title: 'Legacy Web Rebranding // Visual Authority',
    platform1Desc: 'We take your outdated website and transform it into a premium interactive experience with immersive glassmorphism, responsive micro-interactions, and lighting-fast serverless loading. Built within 3-5 days.',
    platform1Cta: 'See Interactive Proof',
    platform2Title: 'Bespoke CRM // High-Performance Operations',
    platform2Desc: 'Ditch expensive recurring software subscriptions. We engineer beautiful, custom internal dashboards, customer relationship tools, and database pipelines tailored exactly to your workflow. No monthly fees ever.',
    platform2Cta: 'Unlock Workspace',
    
    servicesBadge: '02 // DESIGN & BUILD SERVICES',
    servicesHeading: 'Uncompromising Software Primitives',
    servicesText: 'Whether you require a custom marketplace, an absolute landing page, or a full-scale corporate workflow CRM, we construct your system to perform globally without limits.',
    service1Title: 'High-Fidelity Web',
    service1Desc: 'Immersive, ultra-performing websites with custom scroll-driven fluid animations, custom typographic pairing, and flawless mobile experiences.',
    service2Title: 'Custom CRM Systems',
    service2Desc: 'Automate business leads, track support pipelines, and store core customer metrics inside a custom dashboard built for your exact business goals.',
    service3Title: 'System Rebranding',
    service3Desc: 'Complete digital facelift. We redefine your logo, visual aesthetics, typography, layouts, and copy to match elite international startup trends.',
    service4Title: 'Scalable E-Commerce',
    service4Desc: 'Seamless payment gateways, interactive shopping interfaces, and fast checkout pipelines supporting multiple currencies worldwide.',
    activeStatus: 'Active Protocol',
    originalPrice1: 'Original: RM 5,000',
    originalPrice2: 'Original: RM 15,000',
    originalPrice3: 'Original: RM 12,000',
    originalPrice4: 'Original: RM 10,000',
    
    statsBadge: '03 // PROMOTIONAL PRICING',
    statsHeading: 'Elite Quality at an Impossible Flat Rate',
    statsText: 'We are disrupting standard agency pricing to establish our global waitlist. Premium systems built by top-tier architects at a friction-free rate.',
    statsSync: 'Slots tracked in real-time worldwide',
    metricMarketTitle: 'STANDARD MARKET PRICE',
    metricPromoTitle: 'PROMOTIONAL OFFER',
    metricPromoDesc: 'ONETIME PAYMENT',
    metricTimeTitle: 'DEVELOPMENT TIMEFRAME',
    metricSlotsTitle: 'ONLY 10 SLOTS AVAILABLE',
    metricSlotsDesc: 'SECURE SLOT TODAY',
    
    trustBadge: '04 // TRUST & RELIABILITY',
    trustHeading: 'Engineered by Trusted Digital Systems Architects',
    trustSub: 'Our systems are backed by trusted global industry practices. We guarantee absolute transparency, security, and next-generation code quality with zero compromises.',
    lead1Role: 'Managing Director & Lead Architect',
    founder1Quote: 'Legacy agencies charge exorbitant fees and take months. We automated our layout rendering and code compilation to deliver ultra-premium code bases in just 3-5 days flat.',
    lead2Role: 'Chief Creative Officer',
    founder2Quote: 'First impressions are dictated in milliseconds. We inject the Liquid Glass aesthetic into your business to instantly build elite trust and establish global visual authority.',
    lead3Role: 'Head of Customer Success',
    founder3Quote: 'We ensure your CRM or web application functions perfectly globally. No bugs, no recurring server maintenance fees, and completely open-source handoff.',
    trustNode: 'Sovereign Node',
    verifiedLabel: 'Certified Active',
    
    formBadge: '05 // JOIN THE WAITLIST',
    formHeading: 'Secure Your Next-Gen Rebrand Spot',
    formText: 'We are currently accepting waitlist applicants for our promotional flat-rate slot. Join the waitlist now to get this special offer, limited to 10 clients only.',
    step1Num: 'STEP 01',
    step1Title: 'Instant Blueprint Audit',
    step1Desc: 'Join the waitlist by submitting your details. We trigger an instant structural evaluation of your legacy systems, branding, and goals.',
    step2Num: 'STEP 02',
    step2Title: '3-5 Day Design & Build',
    step2Desc: 'Our elite developers build your custom web application or CRM with premium animations, custom copywriting, and high-fidelity layouts.',
    step3Num: 'STEP 03',
    step3Title: 'Global Launch & Handoff',
    step3Desc: 'We deploy your system securely on high-speed global servers. You receive 100% ownership, zero recurring subscription fees, and complete code handoff.',
    stepTime1: 'EST: 24 HOURS',
    stepTime2: 'EST: 3-5 DAYS',
    stepTime3: 'EST: IMMEDIATE',
    
    formTitle: 'Join Waitlist (Promo Slot)',
    formSub: 'Provide your details to join the waitlist and get the offer. Limited to 10 clients only.',
    labelName: 'Your Full Name',
    labelEmail: 'Business Email Address',
    labelPhone: 'Secure Contact Phone Number',
    labelCompany: 'Company / Business Information',
    labelService: 'Requested Type of Service',
    labelBottleneck: 'Branding Goals & Requirements',
    placeholderName: 'e.g. Mikhail Vassell',
    placeholderEmail: 'e.g. founder@mybusiness.com',
    placeholderPhone: 'e.g. +1 (555) 019-2834',
    placeholderCompany: 'e.g. Nexcraft Systems Inc.',
    placeholderBottleneck: 'e.g. We want to rebuild our legacy website into a fast liquid CRM & portfolio experience...',
    btnSubmit: 'Trigger Waitlist Application',
    formDisclaimer: 'Fully secured. We prioritize data protection and strictly follow global compliance.',
    
    successTitle: 'Waitlist Registered Successfully',
    successText: 'Your details have been registered into our local customer database. A systems architect will reach out via email or phone within 24 hours to schedule your rapid launch blueprint call.',
    successBtn: 'Submit Another Application',
    
    dbTitle: 'ACTIVE CUSTOMER DATABASE (WAITLIST CONTROL)',
    dbSub: 'Simulated live database representation of active applicants (persisted locally). Use this to track all registrants.',
    dbEmpty: 'No registrants currently stored. Complete the form above to add a live entry!',
    dbName: 'Name',
    dbEmail: 'Email',
    dbPhone: 'Phone',
    dbCompany: 'Company',
    dbService: 'Service',
    dbNotes: 'Notes',
    dbExport: 'Export Database JSON',
    
    optWeb: 'Next-Generation Corporate Website',
    optCrm: 'Bespoke Custom CRM System',
    optEcom: 'High-Performance E-Commerce Platform',
    optRebrand: 'Complete Startup Rebranding + System Rebuild',
  },
  bm: {
    logo: 'DIGITIZE',
    applyBtn: 'Sertai Senarai Menunggu',
    menuTitle: 'Navigasi Menu',
    copyright: 'DIGITIZE SYSTEMS © 2026. HAK CIPTA TERPELIHARA.',
    langLabel: 'Bahasa Melayu',
    
    heroBadge: 'Promosi Terhad',
    heroSub: 'Penjenamaan Semula Generasi Baru & Kejuruteraan Digital Elit',
    heroText: 'Kami membina semula laman web lama, CRM tersuai, dan sistem tersuai berskala tinggi menjadi karya agung cecair futuristik. Tersedia di seluruh dunia. Siap dalam 3 hingga 5 hari sahaja. Bayaran sekali sahaja, tiada yuran berulang.',
    exploreBtn: 'Lihat Harga & Tawaran',
    partnerBtn: 'Tempah Slot Promosi',
    portfolioSectors: 'Perkhidmatan Perusahaan',
    sectorWebsites: 'Web Sangat Pantas',
    sectorWebsitesDesc: 'Pengalaman Cecair & 3D',
    sectorCrm: 'CRM Tersuai',
    sectorCrmDesc: 'Syarikat Pemula & Korporat',
    sectorEcommerce: 'E-Dagang Moden',
    sectorEcommerceDesc: 'Jualan Skala Tinggi',
    
    thesisBadge: '01 // REVOLUSI PENJENAMAAN SEMULA',
    thesisHeading: 'Mengubah Sistem Lama Menjadi Karya Agung Moden',
    thesisText: 'Platform yang perlahan dan lapuk memusnahkan kepercayaan jenama dan mengurangkan jualan. Kami membina semula segala-galanya dari asas menggunakan kod ringan moden, animasi lancar, dan reka bentuk estetik berkonversi tinggi. Capaian global, ketepatan tempatan.',
    platform1Title: 'Penjenamaan Laman Web Lama // Kuasa Visual',
    platform1Desc: 'Kami mengambil laman web lapuk anda dan mengubahnya menjadi pengalaman interaktif premium dengan "glassmorphism" premium, mikro-interaksi responsif, dan pemuatan tanpa pelayan yang sangat pantas. Siap dalam 3-5 hari.',
    platform1Cta: 'Lihat Bukti Interaktif',
    platform2Title: 'CRM Tersuai // Operasi Prestasi Tinggi',
    platform2Desc: 'Tinggalkan langganan perisian bulanan yang mahal. Kami membina papan pemuka dalaman tersuai yang indah, alat hubungan pelanggan, dan saluran pangkalan data yang disesuaikan mengikut aliran kerja anda. Tiada yuran bulanan selama-lamanya.',
    platform2Cta: 'Buka Ruang Kerja',
    
    servicesBadge: '02 // PERKHIDMATAN REKA & BINA',
    servicesHeading: 'Primitif Perisian Tanpa Kompromi',
    servicesText: 'Sama ada anda memerlukan pasaran tersuai, halaman pendaratan mutlak, atau CRM aliran kerja korporat berskala penuh, kami membina sistem anda untuk beroperasi secara global tanpa had.',
    service1Title: 'Web Berprestasi Tinggi',
    service1Desc: 'Laman web interaktif yang mengagumkan dengan animasi cecair didorong tatalan tersuai, gandingan tipografi bersih, dan paparan mudah alih yang sempurna.',
    service2Title: 'Sistem CRM Tersuai',
    service2Desc: 'Automasikan petunjuk perniagaan, jejaki maklum balas pelanggan, dan simpan data penting dalam papan pemuka tersuai yang dibina khas untuk perniagaan anda.',
    service3Title: 'Penjenamaan Semula Sistem',
    service3Desc: 'Wajah digital baharu sepenuhnya. Kami mentakrifkan semula logo, estetika visual, tipografi, susun atur, dan penulisan untuk sepadan dengan trend permulaan elit global.',
    service4Title: 'E-Dagang Berskala Tinggi',
    service4Desc: 'Gerbang pembayaran lancar, antara muka beli-belah interaktif, dan aliran daftar keluar pantas yang menyokong pelbagai mata wang di seluruh dunia.',
    activeStatus: 'Protokol Aktif',
    originalPrice1: 'Asal: RM 5,000',
    originalPrice2: 'Asal: RM 15,000',
    originalPrice3: 'Asal: RM 12,000',
    originalPrice4: 'Asal: RM 10,000',
    
    statsBadge: '03 // HARGA PROMOSI',
    statsHeading: 'Kualiti Elit pada Kadar Rata yang Mustahil',
    statsText: 'Kami mencabar harga agensi standard untuk membina senarai menunggu global kami. Sistem premium yang dibina oleh arkitek terkemuka pada kadar bebas geseran.',
    statsSync: 'Slot dijejaki secara langsung di seluruh dunia',
    metricMarketTitle: 'HARGA PASARAN STANDARD',
    metricPromoTitle: 'TAWARAN PROMOSI',
    metricPromoDesc: 'BAYARAN SEKALI SAHAJA',
    metricTimeTitle: 'TEMPOH PEMBANGUNAN',
    metricSlotsTitle: 'HANYA 10 SLOT TERSEDIA',
    metricSlotsDesc: 'TEMPAH SLOT HARI INI',
    
    trustBadge: '04 // AMANAH & KEBOLEHPERCAYAAN',
    trustHeading: 'Dibina oleh Arkitek Sistem Digital yang Dipercayai',
    trustSub: 'Sistem kami disokong oleh amalan industri global yang dipercayai. Kami menjamin ketelusan mutlak, keselamatan tinggi, dan kualiti kod generasi baru tanpa sebarang kompromi.',
    lead1Role: 'Pengarah Urusan & Arkitek Utama',
    founder1Quote: 'Agensi tradisional mengenakan bayaran melampau dan mengambil masa berbulan-bulan. Kami mengautomasikan susun atur dan kompilasi kod untuk menyampaikan kod premium dalam masa 3-5 hari sahaja.',
    lead2Role: 'Ketua Pegawai Kreatif',
    founder2Quote: 'Tanggapan pertama diputuskan dalam beberapa milisaat. Kami menyuntik estetika "Liquid Glass" ke dalam perniagaan anda untuk membina kepercayaan elit dan kuasa visual global dengan serta-merta.',
    lead3Role: 'Ketua Kejayaan Pelanggan',
    founder3Quote: 'Kami memastikan CRM atau aplikasi web anda berfungsi dengan sempurna di seluruh dunia. Bebas ralat, tiada yuran penyelenggaraan pelayan berulang, dan penyerahan kod sumber 100%.',
    trustNode: 'Nodus Berdaulat',
    verifiedLabel: 'Disahkan Aktif',
    
    formBadge: '05 // SERTAI SENARAI MENUNGGU',
    formHeading: 'Amankan Slot Jenama Semula Generasi Baru Anda',
    formText: 'Kami kini menerima pemohon senarai menunggu untuk slot kadar rata promosi kami. Sertai senarai menunggu sekarang untuk mendapatkan tawaran istimewa ini, terhad kepada 10 pelanggan sahaja.',
    step1Num: 'LANGKAH 01',
    step1Title: 'Audit Cetak Biru Segera',
    step1Desc: 'Sertai senarai menunggu dengan menyerahkan butiran anda. Kami mencetuskan penilaian struktur segera bagi sistem lama, penjenamaan, dan matlamat anda.',
    step2Num: 'LANGKAH 02',
    step2Title: 'Reka & Bina 3-5 Hari',
    step2Desc: 'Arkitek elit kami membina laman web atau CRM tersuai anda dengan animasi premium, penulisan salinan tersuai, dan susun atur berprestasi tinggi.',
    step3Num: 'LANGKAH 03',
    step3Title: 'Pelancaran Global & Penyerahan',
    step3Desc: 'Kami menggunakan sistem anda dengan selamat pada pelayan global berkelajuan tinggi. Anda menerima 100% hak milik, tiada yuran langganan bulanan, dan penyerahan kod penuh.',
    stepTime1: 'EST: 24 JAM',
    stepTime2: 'EST: 3-5 HARI',
    stepTime3: 'EST: SEGERA',
    
    formTitle: 'Sertai Senarai Menunggu (Slot Promo)',
    formSub: 'Berikan butiran anda untuk menyertai senarai menunggu dan mendapatkan tawaran. Terhad kepada 10 pelanggan sahaja.',
    labelName: 'Nama Penuh Anda',
    labelEmail: 'Alamat E-mel Perniagaan',
    labelPhone: 'Nombor Telefon Hubungan',
    labelCompany: 'Maklumat Syarikat / Perniagaan',
    labelService: 'Jenis Perkhidmatan yang Diminta',
    labelBottleneck: 'Matlamat & Keperluan Penjenamaan',
    placeholderName: 'cth. Mikhail Vassell',
    placeholderEmail: 'cth. pengasas@perniagaan.com',
    placeholderPhone: 'cth. +60 12-345 6789',
    placeholderCompany: 'cth. Nexcraft Systems Sdn Bhd',
    placeholderBottleneck: 'cth. Kami ingin membina semula laman web lama kami menjadi sistem CRM cecair yang pantas...',
    btnSubmit: 'Cetuskan Permohonan Senarai Menunggu',
    formDisclaimer: 'Dijamin selamat sepenuhnya. Kami mengutamakan perlindungan data peribadi anda mengikut piawaian global.',
    
    successTitle: 'Pendaftaran Senarai Menunggu Berjaya',
    successText: 'Butiran anda telah berjaya didaftarkan ke dalam pangkalan data pelanggan tempatan kami. Arkitek sistem kami akan menghubungi anda melalui e-mel atau telefon dalam masa 24 jam untuk menjadualkan panggilan cetak biru.',
    successBtn: 'Hantar Permohonan Lain',
    
    dbTitle: 'PANGKALAN DATA PELANGGAN AKTIF (KAWALAN SENARAI MENUNGGU)',
    dbSub: 'Paparan pangkalan data langsung yang disimulasikan bagi pemohon aktif (disimpan secara tempatan). Gunakan ini untuk menjejaki semua pendaftar.',
    dbEmpty: 'Tiada pendaftar disimpan buat masa ini. Lengkapkan borang di atas untuk menambah kemasukan langsung!',
    dbName: 'Nama',
    dbEmail: 'E-mel',
    dbPhone: 'Telefon',
    dbCompany: 'Syarikat',
    dbService: 'Perkhidmatan',
    dbNotes: 'Nota',
    dbExport: 'Eksport JSON Pangkalan Data',
    
    optWeb: 'Laman Web Korporat Generasi Baru',
    optCrm: 'Sistem CRM Tersuai Khas',
    optEcom: 'Platform E-Dagang Berprestasi Tinggi',
    optRebrand: 'Penjenamaan Semula Pemula Penuh + Bina Semula Sistem',
  },
  id: {
    logo: 'DIGITIZE',
    applyBtn: 'Gabung Daftar Tunggu',
    menuTitle: 'Navigasi Menu',
    copyright: 'DIGITIZE SYSTEMS © 2026. HAK CIPTA DILINDUNGI.',
    langLabel: 'Bahasa Indonesia',
    
    heroBadge: 'Promosi Terbatas',
    heroSub: 'Rebranding Generasi Baru & Rekayasa Digital Elit',
    heroText: 'Kami membangun kembali situs web lama, CRM kustom, dan sistem kustom berskala tinggi menjadi karya seni digital cair yang futuristik. Tersedia di seluruh dunia. Selesai dalam 3 hingga 5 hari. Pembayaran sekali saja, tanpa biaya bulanan.',
    exploreBtn: 'Lihat Harga & Penawaran',
    partnerBtn: 'Amankan Slot Promosi',
    portfolioSectors: 'Layanan Perusahaan',
    sectorWebsites: 'Web Sangat Cepat',
    sectorWebsitesDesc: 'Pengalaman Cair & 3D',
    sectorCrm: 'CRM Khusus',
    sectorCrmDesc: 'Startup & Korporat',
    sectorEcommerce: 'E-Commerce Modern',
    sectorEcommerceDesc: 'Penjualan Skala Tinggi',
    
    thesisBadge: '01 // REVOLUSI REBRANDING',
    thesisHeading: 'Mengubah Sistem Lama Menjadi Karya Agung Modern',
    thesisText: 'Platform yang lambat dan usang merusak kepercayaan merek dan mengurangi penjualan. Kami membangun kembali semuanya dari awal menggunakan kode ringan modern, animasi lancar, dan desain estetika berkonversi tinggi. Jangkauan global, presisi lokal.',
    platform1Title: 'Rebranding Situs Web Lama // Otoritas Visual',
    platform1Desc: 'Kami mengambil situs web usang Anda dan mengubahnya menjadi pengalaman interaktif premium dengan "glassmorphism" mewah, mikro-interaksi responsif, dan pemuatan tanpa server yang sangat cepat. Selesai dalam 3-5 hari.',
    platform1Cta: 'Lihat Bukti Interaktif',
    platform2Title: 'CRM Khusus // Operasi Performa Tinggi',
    platform2Desc: 'Tinggalkan langganan perangkat lunak bulanan yang mahal. Kami membangun dasbor internal kustom yang indah, alat hubungan pelanggan, dan saluran basis data yang disesuaikan dengan alur kerja Anda. Tanpa biaya bulanan selamanya.',
    platform2Cta: 'Buka Ruang Kerja',
    
    servicesBadge: '02 // LAYANAN DESAIN & STRUKTUR',
    servicesHeading: 'Primitif Perangkat Lunak Tanpa Kompromi',
    servicesText: 'Apakah Anda memerlukan pasar kustom, halaman pendaratan mutlak, atau CRM alur kerja korporat berskala penuh, kami membangun sistem Anda untuk beroperasi secara global tanpa batas.',
    service1Title: 'Web Berperforma Tinggi',
    service1Desc: 'Situs web interaktif yang luar biasa dengan animasi cairan didorong guliran kustom, gandingan tipografi bersih, dan tampilan seluler yang sempurna.',
    service2Title: 'Sistem CRM Kustom',
    service2Desc: 'Automasikan prospek bisnis, lacak dukungan pelanggan, dan simpan data penting dalam dasbor kustom yang dibuat khusus untuk bisnis Anda.',
    service3Title: 'Rebranding Sistem',
    service3Desc: 'Wajah digital baru sepenuhnya. Kami mendefinisikan ulang logo, estetika visual, tipografi, tata letak, dan salinan tulisan untuk mencocokkan tren permulaan elit global.',
    service4Title: 'E-Commerce Berskala Tinggi',
    service4Desc: 'Gerbang pembayaran lancar, antarmuka belanja interaktif, dan alur checkout cepat yang mendukung berbagai mata uang di seluruh dunia.',
    activeStatus: 'Protokol Aktif',
    originalPrice1: 'Asal: Rp 16.5 Juta',
    originalPrice2: 'Asal: Rp 49.5 Juta',
    originalPrice3: 'Asal: Rp 39.6 Juta',
    originalPrice4: 'Asal: Rp 33.0 Juta',
    
    statsBadge: '03 // HARGA PROMOSI',
    statsHeading: 'Kualitas Elit pada Tarif Flat yang Mustahil',
    statsText: 'Kami menantang harga agensi standar untuk membangun daftar tunggu global kami. Sistem premium yang dibangun oleh arsitek terkemuka pada tarif bebas gesekan.',
    statsSync: 'Slot dilacak langsung di seluruh dunia',
    metricMarketTitle: 'HARGA PASARAN STANDAR',
    metricPromoTitle: 'PENAWARAN PROMOSI',
    metricPromoDesc: 'PEMBAYARAN SEKALI SAHAJA',
    metricTimeTitle: 'TEMPOH PEMBANGUNAN',
    metricSlotsTitle: 'HANYA 10 SLOT TERSEDIA',
    metricSlotsDesc: 'TEMPAH SLOT HARI INI',
    
    trustBadge: '04 // KEPERCAYAAN & KEANDALAN',
    trustHeading: 'Dibangun oleh Arsitek Sistem Digital Terpercaya',
    trustSub: 'Sistem kami didukung oleh praktik industri global terbaik yang terpercaya. Kami menjamin transparansi mutlak, keamanan tinggi, dan kualitas kode generasi baru tanpa kompromi.',
    lead1Role: 'Direktur Pengelola & Arsitek Utama',
    founder1Quote: 'Agensi tradisional mengenakan biaya berlebihan dan memakan waktu berbulan-bulan. Kami mengotomatiskan tata letak dan kompilasi kode untuk memberikan kode premium dalam waktu 3-5 hari saja.',
    lead2Role: 'Chief Creative Officer',
    founder2Quote: 'Kesan pertama diputuskan dalam beberapa milidetik. Kami menyuntikkan estetika "Liquid Glass" ke dalam bisnis Anda untuk membangun kepercayaan elit dan otoritas visual global dengan cepat.',
    lead3Role: 'Kepala Kesuksesan Pelanggan',
    founder3Quote: 'Kami memastikan CRM atau aplikasi web Anda berfungsi dengan sempurna di seluruh dunia. Bebas kesalahan, tanpa biaya pemeliharaan server berulang, dan penyerahan kode sumber 100%.',
    trustNode: 'Nodus Berdaulat',
    verifiedLabel: 'Terverifikasi Aktif',
    
    formBadge: '05 // GABUNG DAFTAR TUNGGU',
    formHeading: 'Amankan Slot Rebrand Generasi Baru Anda',
    formText: 'Kami saat ini menerima pendaftar daftar tunggu untuk slot harga flat promosi kami. Gabung daftar tunggu sekarang untuk mendapatkan penawaran istimewa ini, terbatas untuk 10 klien saja.',
    step1Num: 'LANGKAH 01',
    step1Title: 'Audit Cetak Biru Instan',
    step1Desc: 'Gabung daftar tunggu dengan mengirimkan detail Anda. Kami memicu evaluasi struktur instan dari sistem lama, branding, dan tujuan Anda.',
    step2Num: 'LANGKAH 02',
    step2Title: 'Desain & Bangun 3-5 Hari',
    step2Desc: 'Arsitek elit kami membangun situs web atau CRM kustom Anda dengan animasi premium, penulisan salinan kustom, dan tata letak berperforma tinggi.',
    step3Num: 'LANGKAH 03',
    step3Title: 'Peluncuran Global & Penyerahan',
    step3Desc: 'Kami menerapkan sistem Anda dengan aman di server global berkecepatan tinggi. Anda menerima 100% kepemilikan, tanpa biaya langganan bulanan, dan penyerahan kode penuh.',
    stepTime1: 'EST: 24 JAM',
    stepTime2: 'EST: 3-5 HARI',
    stepTime3: 'EST: SEGERA',
    
    formTitle: 'Gabung Daftar Tunggu (Slot Promo)',
    formSub: 'Berikan detail Anda untuk bergabung dengan daftar tunggu dan dapatkan penawaran. Terbatas untuk 10 klien saja.',
    labelName: 'Nama Lengkap Anda',
    labelEmail: 'Alamat Email Bisnis',
    labelPhone: 'Nomor Telepon Kontak',
    labelCompany: 'Informasi Perusahaan / Bisnis',
    labelService: 'Jenis Layanan yang Diminta',
    labelBottleneck: 'Tujuan & Persyaratan Rebranding',
    placeholderName: 'cth. Mikhail Vassell',
    placeholderEmail: 'cth. founder@bisnisanda.com',
    placeholderPhone: 'cth. +62 812-3456-7890',
    placeholderCompany: 'cth. Nexcraft Systems Indonesia',
    placeholderBottleneck: 'cth. Kami ingin membangun kembali situs web lama kami menjadi sistem CRM cair yang cepat...',
    btnSubmit: 'Picu Aplikasi Daftar Tunggu',
    formDisclaimer: 'Dijamin aman sepenuhnya. Kami memprioritaskan perlindungan data pribadi sesuai dengan standar kepatuhan global.',
    
    successTitle: 'Pendaftaran Daftar Tunggu Berhasil',
    successText: 'Detail Anda telah berhasil didaftarkan ke basis data pelanggan lokal kami. Arsitek sistem kami akan menghubungi Anda melalui email atau telepon dalam waktu 24 jam untuk menjadwalkan panggilan cetak biru.',
    successBtn: 'Kirim Permohonan Lain',
    
    dbTitle: 'BASIS DATA PELANGGAN AKTIF (KONTROL DAFTAR TUNGGU)',
    dbSub: 'Tampilan basis data langsung yang disimulasikan bagi pemohon aktif (disimpan secara lokal). Gunakan ini untuk melacak semua pendaftar.',
    dbEmpty: 'Belum ada pendaftar yang disimpan saat ini. Lengkapi formulir di atas untuk menambahkan entri langsung!',
    dbName: 'Nama',
    dbEmail: 'Email',
    dbPhone: 'Telepon',
    dbCompany: 'Syarikat',
    dbService: 'Layanan',
    dbNotes: 'Catatan',
    dbExport: 'Ekspor JSON Basis Data',
    
    optWeb: 'Situs Web Korporat Generasi Baru',
    optCrm: 'Sistem CRM Kustom Khusus',
    optEcom: 'Platform E-Commerce Berperforma Tinggi',
    optRebrand: 'Rebranding Startup Penuh + Pembangunan Kembali Sistem',
  },
  ph: {
    logo: 'DIGITIZE',
    applyBtn: 'Sumali sa Waitlist',
    menuTitle: 'Menu Navigation',
    copyright: 'DIGITIZE SYSTEMS © 2026. ALL RIGHTS RESERVED.',
    langLabel: 'Tagalog',
    
    heroBadge: 'Limitadong Promosyon',
    heroSub: 'Susunod na Henerasyon ng Rebranding at Elite Digital Engineering',
    heroText: 'Itinatayo namin muli ang mga lumang website, kustom CRM, at hyper-scalable na sistema upang maging futuristikong mga obra maestra. Available sa buong mundo. Matatapos sa loob ng 3 hanggang 5 araw lamang. Isang beses na bayad, walang buwanang singil.',
    exploreBtn: 'Tingnan ang Presyo at Alok',
    partnerBtn: 'I-secure ang Promo Spot',
    portfolioSectors: 'Mga Serbisyo sa Negosyo',
    sectorWebsites: 'Napakabilis na Web',
    sectorWebsitesDesc: '3D at Likidong Karanasan',
    sectorCrm: 'Kustom na CRM',
    sectorCrmDesc: 'Startup at Negosyo',
    sectorEcommerce: 'Modernong E-com',
    sectorEcommerceDesc: 'Mataas na Skala ng Benta',
    
    thesisBadge: '01 // ANG REBOLUSYON NG REBRANDING',
    thesisHeading: 'Pagbabago ng mga Lumang Sistema Patungo sa Makabagong Obra Maestra',
    thesisText: 'Ang mababagal at lumang platform ay sumisira sa tiwala ng tatak at nagpapababa ng benta. Itinatayo namin muli ang lahat gamit ang magaan na modernong code, swabeng animation, at disenyong may mataas na konbersyon. Pandaigdigang abot na may lokal na presisyon.',
    platform1Title: 'Rebranding ng Lumang Web // Awtoridad sa Visual',
    platform1Desc: 'Kinukuha namin ang iyong lumang website at binabago ito upang maging premium na interaktibong karanasan na may marangyang glassmorphism, responsibong micro-interactions, at napakabilis na serverless loading. Gawa sa loob ng 3-5 araw.',
    platform1Cta: 'Tingnan ang Interaktibong Patunay',
    platform2Title: 'Kustom na CRM // Mataas na Operasyon',
    platform2Desc: 'Iwanan ang mahal na buwanang subscription sa software. Gumagawa kami ng magagandang kustom na internal dashboard at database pipeline na swak sa iyong workflow. Walang buwanang bayad habang-buhay.',
    platform2Cta: 'I-unlock ang Workspace',
    
    servicesBadge: '02 // DISENYO AT MGA SERBISYO',
    servicesHeading: 'Mataas na Kalidad ng Software',
    servicesText: 'Kailangan mo man ng kustom na marketplace, absolute landing page, o kumpletong CRM para sa iyong negosyo, itinatayo namin ang iyong sistema upang mag-perform sa buong mundo nang walang limitasyon.',
    service1Title: 'High-Fidelity na Web',
    service1Desc: 'Imersibo at napakabilis na website na may kustom na scroll-driven na animation, magandang tipograpiya, at perpektong mobile na karanasan.',
    service2Title: 'Kustom na Sistemang CRM',
    service2Desc: 'I-automate ang mga lead, subaybayan ang suporta sa customer, at i-save ang mahalagang data sa isang kustom na dashboard na gawa para sa iyong layunin.',
    service3Title: 'Rebranding ng Sistema',
    service3Desc: 'Kumpletong digital facelift. Binabago namin ang iyong logo, visual aesthetics, tipograpiya, at layout upang sumabay sa mga pinaka-elit na startup trend sa mundo.',
    service4Title: 'Scalable na E-Commerce',
    service4Desc: 'Swabeng payment gateway, interaktibong shopping interface, at mabilis na checkout pipeline na sumusuporta sa iba\'t ibang currency sa buong mundo.',
    activeStatus: 'Aktibong Protokol',
    originalPrice1: 'Orihinal: ₱62,500',
    originalPrice2: 'Orihinal: ₱187,500',
    originalPrice3: 'Orihinal: ₱150,000',
    originalPrice4: 'Orihinal: ₱125,000',
    
    statsBadge: '03 // PROMOSYONAL NA PRESYO',
    statsHeading: 'Elite na Kalidad sa Abot-Kayang Flat Rate',
    statsText: 'Binabago namin ang karaniwang presyo sa industriya upang palaguin ang aming global waitlist. Premium na sistemang gawa ng mga nangungunang architect sa murang halaga.',
    statsSync: 'Mga slot na sinusubaybayan nang live sa buong mundo',
    metricMarketTitle: 'KARANIWANG PRESYO SA MARQUET',
    metricPromoTitle: 'PROMOSYONAL NA ALOK',
    metricPromoDesc: 'ISANG BESES NA BAYAD',
    metricTimeTitle: 'TEMPO NG PAG-DEVELOP',
    metricSlotsTitle: '10 SLOT LANG ANG AVAILABLE',
    metricSlotsDesc: 'I-SECURE ANG SLOT NGAYON',
    
    trustBadge: '04 // TIWALA AT KATAPATAN',
    trustHeading: 'Gawa ng mga Pinagkakatiwalaang Digital Systems Architect',
    trustSub: 'Ang aming mga sistema ay sinusuportahan ng mga pinagkakatiwalaang pandaigdigang kasanayan sa industriya. Garantiya namin ang kumpletong transparensya, mataas na seguridad, at elite na kalidad ng code.',
    lead1Role: 'Managing Director & Lead Architect',
    founder1Quote: 'Ang mga tradisyunal na ahensya ay naniningil ng napakamahal at nagtatagal ng buwan. Ini-automate namin ang aming layout at compilation upang maghatid ng premium na code sa loob lamang ng 3-5 araw.',
    lead2Role: 'Chief Creative Officer',
    founder2Quote: 'Ang unang impresyon ay nagpapasya sa loob ng ilang millisecond. Nilalagyan namin ng estetika ng "Liquid Glass" ang iyong negosyo upang agad na makabuo ng mataas na tiwala.',
    lead3Role: 'Head of Customer Success',
    founder3Quote: 'Sinisiguro namin na ang iyong CRM o web application ay gumagana nang perpekto sa buong mundo. Walang bug, walang buwanang server fee, at 100% pagmamay-ari ng source code.',
    trustNode: 'Soberanong Node',
    verifiedLabel: 'Sertipikadong Aktibo',
    
    formBadge: '05 // SUMALI SA WAITLIST',
    formHeading: 'I-secure ang Iyong Next-Gen Rebrand Slot',
    formText: 'Tumatanggap kami ngayon ng mga aplikante para sa aming promosyonal na flat-rate slot. Sumali sa waitlist ngayon upang makuha ang espesyal na alok na ito, limitado sa 10 kliyente lamang.',
    step1Num: 'HAKBANG 01',
    step1Title: 'Instant Blueprint Audit',
    step1Desc: 'Sumali sa waitlist sa pamamagitan ng pag-submit ng iyong detalye. Agad naming susuriin ang iyong lumang sistema, branding, at mga layunin.',
    step2Num: 'HAKBANG 02',
    step2Title: '3-5 Araw na Disenyo at Pagtatayo',
    step2Desc: 'Itatayo ng aming mga elite developer ang iyong kustom na web app o CRM na may mga premium na animation at de-kalidad na layout.',
    step3Num: 'HAKBANG 03',
    step3Title: 'Global na Paglunsad at Pagturn-over',
    step3Desc: 'Ila-launch namin ang iyong system nang ligtas sa mabilis na global server. Mapapasaiyo ang 100% pagmamay-ari, walang buwanang bayad, at buong handoff ng code.',
    stepTime1: 'EST: 24 ORAS',
    stepTime2: 'EST: 3-5 ARAW',
    stepTime3: 'EST: AGARAHAN',
    
    formTitle: 'Sumali sa Waitlist (Promo Slot)',
    formSub: 'Ibigay ang iyong mga detalye upang sumali sa waitlist at makuha ang alok. Limitado sa 10 kliyente lamang.',
    labelName: 'Buong Pangalan Mo',
    labelEmail: 'Email Address ng Negosyo',
    labelPhone: 'Numero ng Telepono',
    labelCompany: 'Impormasyon ng Kompanya / Negosyo',
    labelService: 'Uri ng Serbisyo na Hiling',
    labelBottleneck: 'Mga Layunin at Kinakailangan sa Rebranding',
    placeholderName: 'hal. Mikhail Vassell',
    placeholderEmail: 'hal. founder@negosyomo.com',
    placeholderPhone: 'hal. +63 917-123-4567',
    placeholderCompany: 'hal. Nexcraft Systems Philippines',
    placeholderBottleneck: 'hal. Gusto naming itayong muli ang aming lumang website upang maging mabilis na likidong CRM...',
    btnSubmit: 'I-trigger ang Aplikasyon sa Waitlist',
    formDisclaimer: 'Ganap na secure. Priyoridad namin ang proteksyon ng iyong data alinsunod sa mga global na pamantayan.',
    
    successTitle: 'Matagumpay na Nakarehistro sa Waitlist',
    successText: 'Ang iyong mga detalye ay matagumpay na nairehistro sa aming lokal na customer database. Makikipag-ugnayan ang isang systems architect sa pamamagitan ng email o telepono sa loob ng 24 oras upang i-schedule ang iyong blueprint call.',
    successBtn: 'Mag-submit ng Isa Pang Aplikasyon',
    
    dbTitle: 'AKTIBONG DATABASE NG CUSTOMER (KONTROL NG WAITLIST)',
    dbSub: 'Simulated na live database na nagpapakita ng mga aktibong aplikante (locally saved). Gamitin ito upang subaybayan ang lahat ng nakarehistro.',
    dbEmpty: 'Walang nakarehistrong pendaftar sa ngayon. Kumpletuhin ang form sa itaas upang magdagdag ng live entry!',
    dbName: 'Pangalan',
    dbEmail: 'Email',
    dbPhone: 'Telepono',
    dbCompany: 'Kompanya',
    dbService: 'Serbisyo',
    dbNotes: 'Mga Tala',
    dbExport: 'I-export ang Database sa JSON',
    
    optWeb: 'Next-Generation Corporate Website',
    optCrm: 'Bespoke Custom CRM System',
    optEcom: 'High-Performance E-Commerce Platform',
    optRebrand: 'Kumpletong Startup Rebranding + Pagtatayo Muli ng Sistema',
  },
  ar: {
    logo: 'DIGITIZE',
    applyBtn: 'انضم لقائمة الانتظار',
    menuTitle: 'تصفح القائمة',
    copyright: 'ديجيتيز سيستمز © 2026. جميع الحقوق محفوظة.',
    langLabel: 'العربية',
    
    heroBadge: 'عرض ترويجي محدود',
    heroSub: 'الجيل القادم من إعادة الهيكلة الرقمية والهندسة البرمجية النخبوية',
    heroText: 'نعيد بناء المواقع الإلكترونية القديمة، وأنظمة إدارة العملاء المخصصة، والأنظمة البرمجية فائقة السرعة إلى تحف فنية سائلة وتفاعلية. متاح عالمياً. الإنجاز في 3 إلى 5 أيام فقط. دفع لمرة واحدة، بدون أي رسوم شهرية.',
    exploreBtn: 'عرض الأسعار والعروض',
    partnerBtn: 'احجز مكانك الترويجي',
    portfolioSectors: 'خدمات الشركات والمؤسسات',
    sectorWebsites: 'ويب فائق السرعة',
    sectorWebsitesDesc: 'تجربة ثلاثية الأبعاد تفاعلية',
    sectorCrm: 'نظام إدارة عملاء خاص',
    sectorCrmDesc: 'للشركات الناشئة والمؤسسات',
    sectorEcommerce: 'تجارة إلكترونية حديثة',
    sectorEcommerceDesc: 'مبيعات وحلول فائقة القوة',
    
    thesisBadge: '01 // ثورة إعادة الهيكلة البصرية',
    thesisHeading: 'تحويل الأنظمة البرمجية القديمة والبطيئة إلى تحف فنية حديثة',
    thesisText: 'المنصات البطيئة والقديمة تدمر ثقة العملاء وتتسبب في خسارة المبيعات. نحن نعيد بناء كل شيء من الصفر باستخدام أحدث التقنيات السريعة، والرسومات المتحركة السلسة، والتصاميم الراقية ذات الكفاءة العالية.',
    platform1Title: 'تحديث المواقع القديمة // السلطة البصرية الرائدة',
    platform1Desc: 'نأخذ موقعك القديم والبطيء ونحوله إلى تجربة تفاعلية متميزة مع لمسات زجاجية فاخرة، وتفاعلات سريعة، وتحميل فائق السرعة بدون خوادم معقدة. خلال 3-5 أيام.',
    platform1Cta: 'شاهد العرض التفاعلي الحي',
    platform2Title: 'نظام إدارة عملاء خاص // كفاءة عملياتية قصوى',
    platform2Desc: 'تخلص من الاشتراكات الشهرية المكلفة للبرمجيات. نحن نصمم لوحات تحكم داخلية أنيقة وقنوات قواعد بيانات مخصصة ومصممة خصيصاً لآلية عملك. بدون أي رسوم متكررة.',
    platform2Cta: 'افتح بيئة العمل البرمجية',
    
    servicesBadge: '02 // خدمات التصميم والبناء الرقمي',
    servicesHeading: 'برمجيات متطورة دون أي تنازلات',
    servicesText: 'سواء كنت بحاجة إلى متجر إلكتروني مخصص، أو صفحة هبوط ذات كفاءة استثنائية، أو نظام متكامل لإدارة تدفق العمل لشركتك، فإننا نبني نظامك البرمجي ليعمل عالمياً بلا حدود.',
    service1Title: 'مواقع ويب فائقة الدقة',
    service1Desc: 'مواقع ويب تفاعلية وساحرة مع رسومات متحركة مخصصة تعتمد على التمرير، وتنسيقات خطوط أنيقة، وتجربة تصفح مثالية للهواتف المحمولة.',
    service2Title: 'أنظمة إدارة عملاء مخصصة',
    service2Desc: 'أتمتة المبيعات وتتبع اتصالات العملاء وحفظ بياناتك الأساسية في لوحة تحكم مخصصة مصممة بدقة لتلائم أهداف عملك الخاصة.',
    service3Title: 'إعادة الهيكلة الرقمية للأنظمة',
    service3Desc: 'تجديد شامل لهويتك الرقمية. نعيد تعريف شعارك، واللمسات البصرية، والخطوط، والتصميم العام ليتماشى مع أرقى صيحات الشركات العالمية.',
    service4Title: 'متاجر إلكترونية فائقة الكفاءة',
    service4Desc: 'بوابات دفع آمنة وسلسة، وواجهات تسوق تفاعلية، وقنوات إتمام شراء سريعة تدعم العملات المتعددة لتسهيل البيع في جميع أنحاء العالم.',
    activeStatus: 'بروتوكول فعال',
    originalPrice1: 'الأصل: AED 4,000',
    originalPrice2: 'الأصل: AED 12,000',
    originalPrice3: 'الأصل: AED 9,600',
    originalPrice4: 'الأصل: AED 8,000',
    
    statsBadge: '03 // الأسعار الترويجية الاستثنائية',
    statsHeading: 'جودة نخبوية بسعر ثابت لا يصدق',
    statsText: 'نحن نغير المفهوم التقليدي لأسعار الوكالات البرمجية لتوسيع قائمتنا العالمية. أنظمة متميزة يبنيها كبار المهندسين والمطورين بمعدل تكلفة مخفض وخالٍ من العقبات.',
    statsSync: 'يتم تتبع المقاعد المتاحة عالمياً لحظياً',
    metricMarketTitle: 'سعر السوق التقليدي',
    metricPromoTitle: 'العرض الترويجي الحالي',
    metricPromoDesc: 'دفع لمرة واحدة فقط',
    metricTimeTitle: 'المدة الزمنية للتطوير والإنتاج',
    metricSlotsTitle: '10 مقاعد ترويجية فقط متاحة',
    metricSlotsDesc: 'احجز مقعدك اليوم قبل نفاد الكمية',
    
    trustBadge: '04 // الثقة والاعتمادية القصوى',
    trustHeading: 'تصميم وهندسة نخبة من خبراء الأنظمة الرقمية',
    trustSub: 'أنظمتنا البرمجية مدعومة بأفضل الممارسات الصناعية العالمية الموثوقة. نضمن لك الشفافية المطلقة، والأمان الفائق، وجودة الكود البرمجي من الجيل الحديث.',
    lead1Role: 'المدير التنفيذي وكبير مطوري الأنظمة',
    founder1Quote: 'تتقاضى الوكالات التقليدية رسوماً باهظة وتستغرق أشهراً طويلة. لقد قمنا بأتمتة آليات البناء والتطوير لنقدم أكواد برمجية فائقة الجودة في 3-5 أيام فقط.',
    lead2Role: 'رئيس القسم الإبداعي والتصميمي',
    founder2Quote: 'الانطباع الأول يتحدد في أجزاء من الثانية. نحن ندمج جمالية الزجاج السائل في عملك لبناء ثقة فورية فائقة وترسيخ حضورك البصري العالمي.',
    lead3Role: 'رئيس قسم نجاح وسعادة العملاء',
    founder3Quote: 'نحن نضمن أن نظام إدارة العملاء أو موقع الويب الخاص بك يعمل بكفاءة تامة عالمياً. كود برمجي خالٍ من المشاكل، وبدون رسوم صيانة دورية معقدة.',
    trustNode: 'عقدة برمجية مستقلة',
    verifiedLabel: 'معتمد ونشط حالياً',
    
    formBadge: '05 // انضم إلى قائمة الانتظار',
    formHeading: 'احجز مقعدك الخاص لإعادة الهيكلة الرقمية',
    formText: 'نستقبل حالياً طلبات الانضمام لقائمة الانتظار للحصول على العرض الترويجي بسعر ثابت. انضم الآن للحصول على هذا العرض الخاص والمحدود لعشرة عملاء فقط.',
    step1Num: 'الخطوة 01',
    step1Title: 'تدقيق فوري وتقييم أولي',
    step1Desc: 'انضم لقائمة الانتظار عبر إرسال بياناتك. نقوم فوراً بإجراء تقييم أولي لأنظمتك الحالية، وهويتك البصرية، وأهدافك المستقبلية.',
    step2Num: 'الخطوة 02',
    step2Title: 'التصميم والبناء في 3-5 أيام',
    step2Desc: 'يقوم خبراؤنا ببناء موقعك المخصص أو نظام إدارة عملائك مع رسومات تفاعلية متحركة، وكتابة نصوص تسويقية ذكية، وتصاميم متميزة.',
    step3Num: 'الخطوة 03',
    step3Title: 'الإطلاق العالمي وتسليم الكود',
    step3Desc: 'نقوم بنشر نظامك بأمان على خوادم عالمية فائقة السرعة. تحصل على ملكية كاملة بنسبة 100٪ للكود المصدري، وبدون اشتراكات شهرية.',
    stepTime1: 'المتوقع: خلال 24 ساعة',
    stepTime2: 'المتوقع: خلال 3-5 أيام',
    stepTime3: 'المتوقع: فوري ومباشر',
    
    formTitle: 'انضم لقائمة الانتظار (العرض الترويجي)',
    formSub: 'أدخل بياناتك للانضمام إلى قائمة الانتظار وتأمين العرض. متاح لعشرة عملاء فقط.',
    labelName: 'اسمك الكامل',
    labelEmail: 'البريد الإلكتروني للعمل',
    labelPhone: 'رقم الهاتف للتواصل الآمن',
    labelCompany: 'معلومات وتفاصيل الشركة',
    labelService: 'نوع الخدمة البرمجية المطلوبة',
    labelBottleneck: 'أهدافك من التحديث ومتطلباتك الخاصة',
    placeholderName: 'مثال: ميخائيل فاسيل',
    placeholderEmail: 'مثال: founder@mycompany.com',
    placeholderPhone: 'مثال: +971 50 123 4567',
    placeholderCompany: 'مثال: ديجيتيز سيستمز المحدودة',
    placeholderBottleneck: 'مثال: نريد إعادة بناء موقعنا القديم وتطوير لوحة تحكم تفاعلية لإدارة أعمالنا بسرعة وسلاسة...',
    btnSubmit: 'إرسال طلب الانضمام لقائمة الانتظار',
    formDisclaimer: 'مؤمن بالكامل. نحن نولي حماية خصوصية بياناتك اهتماماً مطلقاً تماشياً مع معايير الامتثال والحماية العالمية.',
    
    successTitle: 'تم تسجيلك بنجاح في قائمة الانتظار',
    successText: 'تم حفظ تفاصيل طلبك بنجاح في قاعدة بياناتنا المحلية الآمنة. سيتواصل معك أحد مهندسي ومطوري الأنظمة لدينا خلال 24 ساعة لترتيب المكالمة التنسيقية الأولى.',
    successBtn: 'إرسال طلب آخر جديد',
    
    dbTitle: 'قاعدة بيانات العملاء النشطة (التحكم بقائمة الانتظار)',
    dbSub: 'محاكاة حية لقاعدة بيانات المتقدمين المسجلين (محفوظة محلياً). استخدم هذه اللوحة لتتبع كافة الطلبات الواردة.',
    dbEmpty: 'لا يوجد متقدمون مسجلون حالياً في قاعدة البيانات. أكمل النموذج أعلاه لتسجيل أول حالة فوراً!',
    dbName: 'الاسم',
    dbEmail: 'البريد الإلكتروني',
    dbPhone: 'الهاتف',
    dbCompany: 'الشركة',
    dbService: 'الخدمة المطلوبة',
    dbNotes: 'ملاحظات الطلب',
    dbExport: 'تصدير قاعدة البيانات بصيغة JSON',
    
    optWeb: 'موقع إلكتروني متميز للشركات والمؤسسات',
    optCrm: 'نظام إدارة علاقات عملاء مخصص بالكامل',
    optEcom: 'منصة متطورة فائقة السرعة للتجارة الإلكترونية',
    optRebrand: 'إعادة هيكلة الهوية الرقمية بالكامل وبناء الأنظمة',
  },
  fr: {
    logo: 'DIGITIZE',
    applyBtn: 'Rejoindre la Liste',
    menuTitle: 'Navigation du Menu',
    copyright: 'DIGITIZE SYSTEMS © 2026. TOUS DROITS RÉSERVÉS.',
    langLabel: 'Français',
    
    heroBadge: 'Promotion Limitée',
    heroSub: 'Rebranding de Nouvelle Génération & Ingénierie Digitale d\'Élite',
    heroText: 'Nous reconstruisons les sites web obsolètes, les CRM sur mesure et les systèmes personnalisés hautement évolutifs en chefs-d\'œuvre fluides et futuristes. Disponible dans le monde entier. Livré en 3 à 5 jours. Paiement unique, aucun frais récurrent.',
    exploreBtn: 'Voir les Tarifs & Offres',
    partnerBtn: 'Sécuriser un Spot Promo',
    portfolioSectors: 'Services d\'Entreprise',
    sectorWebsites: 'Web Ultra-Rapide',
    sectorWebsitesDesc: 'Expérience 3D & Liquide',
    sectorCrm: 'CRM Sur Mesure',
    sectorCrmDesc: 'Startup & Grande Entreprise',
    sectorEcommerce: 'E-Commerce Futuriste',
    sectorEcommerceDesc: 'Ventes Multi-Devises',
    
    thesisBadge: '01 // LA RÉVOLUTION DU REBRANDING',
    thesisHeading: 'Transformer les Systèmes Obsolètes en Chefs-d\'Œuvre Modernes',
    thesisText: 'Les plateformes lentes et obsolètes détruisent la confiance des utilisateurs et plombent les ventes. Nous reconstruisons tout de zéro avec du code moderne ultra-léger, des animations fluides et des designs esthétiques à haute conversion.',
    platform1Title: 'Rebranding Web Obsolète // Autorité Visuelle',
    platform1Desc: 'Nous transformons votre ancien site web en une expérience interactive haut de gamme avec un effet "glassmorphism" saisissant, des micro-interactions réactives et un chargement serverless ultra-rapide. Conçu en 3 à 5 jours.',
    platform1Cta: 'Voir la Démonstration Interactive',
    platform2Title: 'CRM Sur Mesure // Performance Opérationnelle',
    platform2Desc: 'Oubliez les abonnements logiciels mensuels coûteux. Nous concevons de superbes tableaux de bord internes et des pipelines de données adaptés à votre flux de travail précis. Sans aucun frais récurrent.',
    platform2Cta: 'Ouvrir l\'Espace de Travail',
    
    servicesBadge: '02 // SERVICES DE DESIGN & CODAGE',
    servicesHeading: 'Logiciels Performants Sans Concession',
    servicesText: 'Que vous ayez besoin d\'une place de marché personnalisée, d\'une landing page absolue ou d\'un CRM complet pour vos flux d\'entreprise, nous concevons votre système pour qu\'il performe globalement et sans limites.',
    service1Title: 'Web Haute Fidélité',
    service1Desc: 'Des sites web immersifs aux performances extrêmes avec des animations fluides déclenchées au défilement, une typographie soignée et un affichage mobile sans faille.',
    service2Title: 'Systèmes CRM Personnalisés',
    service2Desc: 'Automatisez vos leads, gérez le support client et stockez vos données clés au sein d\'un tableau de bord personnalisé conçu pour vos objectifs précis.',
    service3Title: 'Rebranding de Système',
    service3Desc: 'Un lifting digital complet. Nous redéfinissons votre logo, votre esthétique visuelle, votre typographie et vos textes pour correspondre aux tendances des startups d\'élite.',
    service4Title: 'E-Commerce Évolutif',
    service4Desc: 'Passerelles de paiement fluides, parcours d\'achat interactifs et tunnels de commande ultra-rapides prenant en charge plusieurs devises.',
    activeStatus: 'Protocole Actif',
    originalPrice1: 'Original: €1,000',
    originalPrice2: 'Original: €3,000',
    originalPrice3: 'Original: €2,400',
    originalPrice4: 'Original: €2,000',
    
    statsBadge: '03 // TARIFS PROMOTIONNELS',
    statsHeading: 'Qualité d\'Élite à un Tarif Fixe Incroyable',
    statsText: 'Nous bouleversons les tarifs habituels des agences de développement pour étendre notre liste d\'attente mondiale. Des systèmes premium conçus par les meilleurs architectes.',
    statsSync: 'Places suivies en temps réel dans le monde',
    metricMarketTitle: 'PRIX MOYEN DU MARCHÉ',
    metricPromoTitle: 'OFFRE PROMOTIONNELLE',
    metricPromoDesc: 'PAIEMENT EN UNE FOIS',
    metricTimeTitle: 'TEMPS DE DÉVELOPPEMENT',
    metricSlotsTitle: 'SEULEMENT 10 PLACES DISPONIBLES',
    metricSlotsDesc: 'RÉSERVEZ VOTRE PLACE AUJOURD\'HUI',
    
    trustBadge: '04 // CONFIANCE & SÉCURITÉ',
    trustHeading: 'Conçu par des Architectes de Systèmes Confiance',
    trustSub: 'Nos architectures logicielles reposent sur les meilleures pratiques mondiales. Nous garantissons une transparence totale, une sécurité maximale et un code de nouvelle génération.',
    lead1Role: 'Directeur Général & Architecte Principal',
    founder1Quote: 'Les agences traditionnelles facturent des sommes exorbitantes et prennent des mois. Nous avons automatisé notre processus de compilation pour livrer en 3 à 5 jours seulement.',
    lead2Role: 'Directeur de la Création',
    founder2Quote: 'La première impression se décide en millisecondes. Nous injectons l\'esthétique "Liquid Glass" dans votre marque pour instaurer instantanément une autorité visuelle.',
    lead3Role: 'Responsable de la Satisfaction Client',
    founder3Quote: 'Nous nous assurons que votre CRM ou votre site fonctionne parfaitement dans le monde entier. Aucun bug, aucune maintenance mensuelle complexe et transfert de code complet.',
    trustNode: 'Nœud Souverain',
    verifiedLabel: 'Certifié Actif',
    
    formBadge: '05 // REJOINDRE LA LISTE D\'ATTENTE',
    formHeading: 'Sécurisez Votre Place Pour Votre Rebranding d\'Élite',
    formText: 'Nous acceptons actuellement les candidatures pour notre offre promotionnelle à tarif fixe. Rejoignez la liste d\'attente pour réserver votre spot, limité à 10 clients seulement.',
    step1Num: 'ÉTAPE 01',
    step1Title: 'Audit de Système Instantané',
    step1Desc: 'Rejoignez la liste d\'attente en soumettant vos coordonnées. Nous déclenchons une évaluation structurelle instantanée de vos systèmes actuels et de vos objectifs.',
    step2Num: 'ÉTAPE 02',
    step2Title: 'Design & Code en 3 à 5 Jours',
    step2Desc: 'Nos développeurs d\'élite conçoivent votre application web ou votre CRM personnalisé avec des animations soignées et des mises en page de haute fidélité.',
    step3Num: 'ÉTAPE 03',
    step3Title: 'Déploiement Global & Transfert',
    step3Desc: 'Nous déployons votre système de manière sécurisée sur des serveurs mondiaux ultra-rapides. Vous obtenez la propriété à 100%, sans abonnement récurrent.',
    stepTime1: 'EST: SOUS 24 HEURES',
    stepTime2: 'EST: 3-5 JOURS',
    stepTime3: 'EST: IMMÉDIAT',
    
    formTitle: 'Rejoindre la Liste d\'Attente',
    formSub: 'Soumettez vos coordonnées pour postuler et réserver l\'offre promotionnelle. Limité à 10 clients seulement.',
    labelName: 'Votre Nom Complet',
    labelEmail: 'Adresse E-mail Professionnelle',
    labelPhone: 'Numéro de Téléphone de Contact',
    labelCompany: 'Informations sur l\'Entreprise',
    labelService: 'Type de Service Souhaité',
    labelBottleneck: 'Objectifs & Attentes de Rebranding',
    placeholderName: 'ex. Mikhail Vassell',
    placeholderEmail: 'ex. fondateur@entreprise.com',
    placeholderPhone: 'ex. +33 6 12 34 56 78',
    placeholderCompany: 'ex. Nexcraft Systems France',
    placeholderBottleneck: 'ex. Nous voulons reconstruire notre ancien site web en un CRM fluide et ultra-rapide...',
    btnSubmit: 'Soumettre Ma Demande de Liste d\'Attente',
    formDisclaimer: 'Totalement sécurisé. Nous accordons une priorité absolue à la protection de vos données conformément aux normes de conformité.',
    
    successTitle: 'Inscription Validée avec Succès',
    successText: 'Vos coordonnées ont bien été enregistrées dans notre base de données locale. Un architecte système prendra contact avec vous par e-mail ou téléphone sous 24 heures.',
    successBtn: 'Soumettre une Nouvelle Candidature',
    
    dbTitle: 'BASE DE DONNÉES CLIENTS ACTIFS (CONTRÔLE)',
    dbSub: 'Simulation d\'une base de données en temps réel des candidats actifs (enregistrés localement). Utilisez ce panneau pour suivre les candidatures.',
    dbEmpty: 'Aucune candidature enregistrée pour le moment. Remplissez le formulaire ci-dessus pour ajouter une entrée en direct !',
    dbName: 'Nom',
    dbEmail: 'E-mail',
    dbPhone: 'Téléphone',
    dbCompany: 'Entreprise',
    dbService: 'Service',
    dbNotes: 'Notes',
    dbExport: 'Exporter la Base de Données en JSON',
    
    optWeb: 'Site Web d\'Entreprise de Nouvelle Génération',
    optCrm: 'Système CRM Personnalisé sur Mesure',
    optEcom: 'Plateforme E-Commerce Haute Performance',
    optRebrand: 'Rebranding Startup Complet + Refonte de Système',
  },
  tr: {
    logo: 'DIGITIZE',
    applyBtn: 'Bekleme Listesine Katıl',
    menuTitle: 'Menü Navigasyonu',
    copyright: 'DIGITIZE SYSTEMS © 2026. TÜM HAKLARI SAKLIDIR.',
    langLabel: 'Türkçe',
    
    heroBadge: 'Sınırlı Promosyon',
    heroSub: 'Yeni Nesil Marka Yenileme & Elit Dijital Mühendislik',
    heroText: 'Eski web sitelerini, özel CRM sistemlerini ve yüksek düzeyde ölçeklenebilir özel yazılımları geleceğe dönük akıcı şaeserlere dönüştürüyoruz. Dünya çapında mevcut. 3 ila 5 günde teslim. Tek seferlik ödeme, aylık abonelik yok.',
    exploreBtn: 'Fiyatları & Teklifi Gör',
    partnerBtn: 'Slotunu Güvenceye Al',
    portfolioSectors: 'Kurumsal Yazılım Hizmetleri',
    sectorWebsites: 'Süper Hızlı Web',
    sectorWebsitesDesc: '3D & Akıcı Deneyim',
    sectorCrm: 'Özel CRM',
    sectorCrmDesc: 'Startup & Kurumsal',
    sectorEcommerce: 'Yeni Nesil E-Ticaret',
    sectorEcommerceDesc: 'Ölçeklenebilir Satış Kanalları',
    
    thesisBadge: '01 // REBRANDING DEVRİMİ',
    thesisHeading: 'Eski Sistemleri Modern Şaheserlere Dönüştürmek',
    thesisText: 'Yavaş ve hantal platformlar marka güvenini zedeler ve satış kaybına yol açar. Her şeyi modern hafif kodlar, akıcı animasyonlar ve yüksek dönüşüm oranlı tasarımlarla sıfırdan inşa ediyoruz.',
    platform1Title: 'Eski Web Rebranding // Görsel Otorite',
    platform1Desc: 'Eski web sitenizi alıyor, etkileyici "glassmorphism", hızlı mikro etkileşimler ve sunucusuz süper hızlı yükleme süreleriyle premium bir deneyime dönüştürüyoruz. 3-5 günde inşa edilir.',
    platform1Cta: 'İnteraktif Kanıtı Gör',
    platform2Title: 'Özel CRM // Yüksek Performanslı Operasyonlar',
    platform2Desc: 'Pahalı aylık yazılım aboneliklerini bırakın. İş akışınıza tam olarak uyarlanmış güzel, özel dahili paneller, müşteri ilişkileri araçları ve veritabanı boru hatları tasarlıyoruz.',
    platform2Cta: 'Çalışma Alanını Aç',
    
    servicesBadge: '02 // TASARIM & İNŞA HİZMETLERİ',
    servicesHeading: 'Tavizsiz Yazılım Altyapısı',
    servicesText: 'İster özel bir pazaryerine, ister eksiksiz bir açılış sayfasına, ister tam ölçekli kurumsal iş akışı CRM yazılımına ihtiyacınız olsun, sisteminizi dünya standartlarında inşa ediyoruz.',
    service1Title: 'Yüksek Kaliteli Web',
    service1Desc: 'Kaydırmaya duyarlı akıcı animasyonlar, özel tipografi eşleştirmeleri ve kusursuz mobil deneyime sahip, yüksek performanslı web siteleri.',
    service2Title: 'Özel CRM Sistemleri',
    service2Desc: 'İş süreçlerinizi otomatikleştirin, müşteri destek hatlarını takip edin ve tüm kritik verilerinizi tam işletme hedeflerinize göre tasarlanmış özel bir panelde saklayın.',
    service3Title: 'Sistem Rebranding',
    service3Desc: 'Eksiksiz dijital yenilenme. Logonuzu, görsel estetiğinizi, tipografinizi ve yerleşim planlarınızı elit uluslararası girişim trendlerine göre yeniden tanımlıyoruz.',
    service4Title: 'Ölçeklenebilir E-Ticaret',
    service4Desc: 'Dünya çapında çoklu para birimini destekleyen kesintisiz ödeme ağ geçitleri, etkileşimli alışveriş arayüzleri ve hızlı ödeme adımları.',
    activeStatus: 'Aktif Protokol',
    originalPrice1: 'Orijinal: ₺37,500',
    originalPrice2: 'Orijinal: ₺112,500',
    originalPrice3: 'Orijinal: ₺90,000',
    originalPrice4: 'Orijinal: ₺75,000',
    
    statsBadge: '03 // PROMOSYONLU FİYATLANDIRMA',
    statsHeading: 'İmkansız Bir Sabit Oranla Elit Kalite',
    statsText: 'Küresel bekleme listemizi oluşturmak için standart yazılım ajansı fiyatlandırmasını bozuyoruz. Üst düzey mimarlar tarafından sıfır sürtünmeyle inşa edilen premium sistemler.',
    statsSync: 'Slotlar dünya çapında canlı olarak takip ediliyor',
    metricMarketTitle: 'STANDART PAZAR FİYATI',
    metricPromoTitle: 'PROMOSYON TEKLİFİ',
    metricPromoDesc: 'TEK SEFERLİK ÖDEME',
    metricTimeTitle: 'GELİŞTİRME SÜRESİ',
    metricSlotsTitle: 'SADECE 10 SLOT MEVCUT',
    metricSlotsDesc: 'SLOTUNU BUGÜN GÜVENCEYE AL',
    
    trustBadge: '04 // GÜVEN & GÜVENİLİRLİK',
    trustHeading: 'Güvenilir Dijital Sistem Mimarları Tarafından İnşa Edildi',
    trustSub: 'Sistemlerimiz güvenilir küresel endüstri uygulamalarıyla desteklenmektedir. Sıfır tavizle mutlak şeffaflık, yüksek güvenlik ve yeni nesil kod kalitesini garanti ediyoruz.',
    lead1Role: 'Yönetici Direktör & Baş Mimar',
    founder1Quote: 'Geleneksel ajanslar fahiş ücretler talep eder ve aylar sürer. Süper premium kod tabanlarını sadece 3-5 günde teslim etmek için şablon derlememizi otomatikleştirdik.',
    lead2Role: 'Yaratıcı Grup Başkanı (CCO)',
    founder2Quote: 'İlk izlenime milisaniyeler içinde karar verilir. Anında elit güven oluşturmak ve küresel görsel otorite kurmak için markanıza "Liquid Glass" estetiği enjekte ediyoruz.',
    lead3Role: 'Müşteri Başarı Yöneticisi',
    founder3Quote: 'CRM veya web uygulamanızın dünya çapında mükemmel çalışmasını sağlıyoruz. Hata yok, karmaşık aylık sunucu bakım ücretleri yok ve tam kod teslimi var.',
    trustNode: 'Egemen Düğüm',
    verifiedLabel: 'Sertifikalı Aktif',
    
    formBadge: '05 // BEKLEME LİSTESİNE KATIL',
    formHeading: 'Yeni Nesil Marka Yenileme Slotunu Güvenceye Al',
    formText: 'Promosyonlu sabit fiyatlı slotumuz için şu anda bekleme listesi başvurularını kabul ediyoruz. Bu özel teklifi almak için şimdi katılın, sadece 10 müşteriyle sınırlıdır.',
    step1Num: 'ADIM 01',
    step1Title: 'Anında Sistem Analizi',
    step1Desc: 'Bilgilerinizi göndererek bekleme listesine katılın. Mevcut sistemlerinizin, markanızın ve hedeflerinizin anında yapısal değerlendirmesini başlatıyoruz.',
    step2Num: 'ADIM 02',
    step2Title: '3-5 Günde Tasarım & İnşa',
    step2Desc: 'Elit geliştiricilerimiz, özel web uygulamanızı veya CRM sisteminizi premium animasyonlar ve yüksek kaliteli arayüzlerle oluşturur.',
    step3Num: 'ADIM 03',
    step3Title: 'Küresel Lansman & Kod Teslimi',
    step3Desc: 'Sisteminizi yüksek hızlı küresel sunucularda güvenli bir şekilde yayına alıyoruz. Aylık abonelik ücreti olmadan %100 mülkiyete sahip olursunuz.',
    stepTime1: 'TAHMİNİ: 24 SAAT İÇİNDE',
    stepTime2: 'TAHMİNİ: 3-5 GÜN',
    stepTime3: 'TAHMİNİ: HEMEN',
    
    formTitle: 'Bekleme Listesine Katıl (Promo Slot)',
    formSub: 'Bekleme listesine katılmak ve teklifi almak için bilgilerinizi sağlayın. Sadece 10 müşteriyle sınırlıdır.',
    labelName: 'Tam Adınız',
    labelEmail: 'Kurumsal E-posta Adresiniz',
    labelPhone: 'Güvenli İletişim Telefon Numaranız',
    labelCompany: 'Şirket / İşletme Bilgileri',
    labelService: 'Talep Edilen Hizmet Türü',
    labelBottleneck: 'Marka Hedefleri & Gereksinimleri',
    placeholderName: 'örn. Mikhail Vassell',
    placeholderEmail: 'örn. kurucu@isletmeniz.com',
    placeholderPhone: 'örn. +90 532-123-4567',
    placeholderCompany: 'örn. Nexcraft Systems Turkiye',
    placeholderBottleneck: 'örn. Eski web sitemizi hızlı ve akıcı bir CRM deneyimine dönüştürmek istiyoruz...',
    btnSubmit: 'Bekleme Listesi Başvurusunu Başlat',
    formDisclaimer: 'Tamamen güvence altında. Küresel uyumluluk standartlarına uygun olarak veri korumasına kesinlikle öncelik veriyoruz.',
    
    successTitle: 'Bekleme Listesi Başvurusu Başarılı',
    successText: 'Bilgileriniz yerel müşteri veritabanımıza başarıyla kaydedildi. Bir sistem mimarı, lansman planlama görüşmesini ayarlamak için 24 saat içinde e-posta veya telefon yoluyla sizinle iletişime geçecektir.',
    successBtn: 'Başka Bir Başvuru Yap',
    
    dbTitle: 'AKTİF MÜŞTERİ VERİTABANI (BEKLEME LİSTESİ KONTROL)',
    dbSub: 'Aktif başvuru sahiplerinin simüle edilmiş canlı veritabanı gösterimi (yerel olarak kaydedilir). Tüm kayıtlı kişileri takip etmek için bunu kullanın.',
    dbEmpty: 'Şu anda kayıtlı kimse yok. Canlı bir giriş eklemek için yukarıdaki formu doldurun!',
    dbName: 'Ad Soyad',
    dbEmail: 'E-posta',
    dbPhone: 'Telefon',
    dbCompany: 'Şirket',
    dbService: 'Hizmet',
    dbNotes: 'Notlar',
    dbExport: 'Veritabanını JSON Olarak Dışa Aktar',
    
    optWeb: 'Yeni Nesil Kurumsal Web Sitesi',
    optCrm: 'Mükemmel Özel CRM Sistemi',
    optEcom: 'Yüksek Performanslı E-Ticaret Platformu',
    optRebrand: 'Eksiksiz Startup Rebranding + Sistem Yenileme',
  }
};
