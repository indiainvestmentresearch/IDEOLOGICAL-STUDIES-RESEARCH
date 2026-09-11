import { FeaturedPodcastTopic, BookItem } from '../types';

export const FEATURED_TOPICS: FeaturedPodcastTopic[] = [
  {
    title: 'Aqeedah',
    arabicName: 'العقيدة',
    category: 'Aqeedah',
    spotifyUrl: 'https://open.spotify.com/episode/4Ncs2NPVKFwwCbG8pcOAF6?si=ySfykJTDTaqZLNW8fST9vA',
    description: 'The foundational tenets of Islamic belief grounded in Tawhid, the Primordial Covenant, divine attributes, and the balance between sound intellect and revelation.',
    keyConcepts: ['Tawhid', 'Divine Names & Attributes', 'Fitrah', 'Rational Faith']
  },
  {
    title: 'Fiqh',
    arabicName: 'الفقه',
    category: 'Fiqh',
    spotifyUrl: 'https://open.spotify.com/episode/6oZ00lksBvU7Fa5RpFu43M?si=U2kYCSKwTiiigqjUf3GxOw',
    description: 'Practical jurisprudence across the recognized schools of thought, examining how divine principles guide worship, commercial ethics, and human interactions.',
    keyConcepts: ['Madhab Methodology', 'Taharah & Salah', 'Commercial Contracts', 'Maqasid']
  },
  {
    title: 'Hadith Sciences',
    arabicName: 'علوم الحديث',
    category: 'Hadith',
    spotifyUrl: 'https://open.spotify.com/episode/4XwtVeD5s30Spa4zlc3gXQ?si=dPh68lnWS56Q89gCk-eWXg',
    description: 'Critical analysis of chains of narration, biographical evaluation of transmitters, textual verification, and practical application of prophetic traditions.',
    keyConcepts: ['Isnad Verification', 'Sahih Collections', 'Matn Examination', 'Prophetic Akhlaq']
  },
  {
    title: 'Seerah',
    arabicName: 'السيرة النبوية',
    category: 'Seerah',
    spotifyUrl: 'https://open.spotify.com/episode/2jReZQJr35V9pLao50i6JQ?si=0vyNzhzqQsuW4kF300zUkQ',
    description: 'The historical life, moral leadership, diplomacy, and societal reformation established by Prophet Muhammad (peace be upon him) in Mecca and Medina.',
    keyConcepts: ['Mount Safa Da’wah', 'Madinan Constitution', 'Strategic Patience', 'Mercy to Creation']
  },
  {
    title: 'Tafsir',
    arabicName: 'التفسير والبيان',
    category: 'Tafsir',
    spotifyUrl: 'https://open.spotify.com/episode/5XPrJaHWX77LyqKipE0RLG?si=y3WM3WisTdyJRV0k8kq44A',
    description: 'Classical and contemporary exegesis of the Quranic text, distinguishing authentic scholastic commentary from weak narrations and modern misconceptions.',
    keyConcepts: ['Quranic Exegesis', 'Linguistic Nuance', 'Asbab al-Nuzul', 'Thematic Coherence']
  },
  {
    title: 'Tarbiyah Islamiyah',
    arabicName: 'التربية الإسلامية',
    category: 'Tarbiyah Islamiyah',
    spotifyUrl: 'https://open.spotify.com/episode/7joAbptVZxTHTIz6rJfEDr?si=29KLNzk9RUS8aLCH2kBlBQ',
    description: 'Spiritual purification, moral elevation, intellectual humility, and the disciplined pursuit of sacred knowledge in modern daily practice.',
    keyConcepts: ['Purification of Heart', 'Humility in Knowledge', 'Etiquette with Scholars', 'Consistency in Deeds']
  }
];

export const ECOSYSTEM_PLATFORMS = [
  {
    code: 'ISR',
    name: 'Ideological Studies Research',
    focus: 'Faith, Classical Scholarship & Authentic Sources',
    website: 'https://www.zaydalhaji.com',
    displayUrl: 'zaydalhaji.com',
    accent: '#b48a3c',
    description: 'Systematic study of the 6,236 Quranic verses and 68,061 Hadiths through structured audio lessons, classical text exegesis, and academic research circles.'
  },
  {
    code: 'IFR',
    name: 'Integrity Finance Research',
    focus: 'Ethical Finance, Macroeconomics & Shari‘ah Modeling',
    website: 'https://www.zaydhaji.com',
    displayUrl: 'zaydhaji.com',
    accent: '#1e3a5f',
    description: 'Independent economic analysis exposing systemic debt structures, evaluating corporate financial disclosures, and formulating interest-free financial alternatives.'
  },
  {
    code: 'IGC',
    name: 'Inspire Guide Connect',
    focus: 'Career Direction, Strategic Mentorship & Personal Growth',
    website: 'https://www.drzaydalhaji.com',
    displayUrl: 'drzaydalhaji.com',
    accent: '#2d6a4f',
    description: 'Synthesizes behavioural psychology, Islamic moral principles, and executive strategy to assist professionals, entrepreneurs, and seekers in deliberate decision making.'
  },
  {
    code: 'IPN',
    name: 'International Public Network',
    focus: 'Global Society, Human Welfare & Policy Research',
    website: 'https://www.drzaydhaji.com',
    displayUrl: 'drzaydhaji.com',
    accent: '#5c4d7d',
    description: 'Research initiatives centered on institutional ethics, public policy reform, ecological stewardship, and community welfare for civil society.'
  }
];

export const CLASSICAL_TEXT_BREAKDOWN = {
  quranVerses: 6236,
  sahihBukhari: 7563,
  sahihMuslim: 7563,
  sahihTotal: 15126,
  abuDawud: 5274,
  tirmidhi: 3956,
  nasai: 5758,
  ibnMajah: 4341,
  fourSunanTotal: 19329,
  muwattaMalik: 1861,
  musnadAhmad: 28199,
  sunanDarimi: 3546,
  earlyImamsTotal: 33606,
  totalHadiths: 68061,
  combinedTotalTexts: 74297
};

export const FOUNDER_BOOKS: BookItem[] = [
  {
    title: 'The Invisible Debt Trap',
    volume: 'Volume 01',
    subtitle: 'How Interest Exploits Humanity and Why Islamic Finance Offers Freedom',
    description: 'A structural examination of debt mechanics, fractional reserve banking, and the socio-economic inequalities perpetuated by interest based financial systems.',
    playStoreUrl: 'https://play.google.com/store/books/details/Zayd_Haji_The_Invisible_Debt_Trap_Volume_01_How_In?id=jcFqEQAAQBAJ',
    topics: ['Riba Critique', 'Monetary History', 'Systemic Inequality', 'Ethical Capital']
  },
  {
    title: 'The Invisible Debt Trap',
    volume: 'Volume 02',
    subtitle: 'Is Your Bank Stealing Your Future? The Spiritual and Structural Reality',
    description: 'Continues the rigorous critique into modern corporate balance sheets, currency debasement, spiritual repercussions of usury, and practical steps toward economic autonomy.',
    playStoreUrl: 'https://play.google.com/store/books/details/Zayd_Haji_The_Invisible_Debt_Trap_Volume_02_Is_You?id=FsVqEQAAQBAJ',
    topics: ['Banking Mechanics', 'Fiat Inflation', 'Spiritual Consequences', 'Reformed Markets']
  },
  {
    title: 'Zayd’s Rules: Investing in Value Stocks',
    subtitle: 'Disciplined Capital Allocation Rooted in Ethical Fundamentals',
    description: 'Pragmatic guidelines for long-term equity investing, balance sheet auditing, competitive moats, and avoiding speculative bubbles.',
    playStoreUrl: 'https://play.google.com/store/books/collection/cluster?gsr=SheCARQKEAoMd291Z0R3QUFRQkFKEAkQBA%3D%3D:S:ANO1ljIwl7Q&hl=en_CA&gl=US',
    topics: ['Value Investing', 'Fundamental Analysis', 'Risk Management', 'Ethical Screening']
  },
  {
    title: 'Zayd’s Rules: Business & Money for Life',
    subtitle: 'Principles for Sustainable Enterprise, Stewardship, and Wealth Preservation',
    description: 'Essential business frameworks for entrepreneurs seeking commercial success without compromising moral integrity or personal peace.',
    playStoreUrl: 'https://play.google.com/store/books/collection/cluster?gsr=SheCARQKEAoMd291Z0R3QUFRQkFKEAkQBA%3D%3D:S:ANO1ljIwl7Q&hl=en_CA&gl=US',
    topics: ['Entrepreneurship', 'Cash Flow Stewardship', 'Contracts & Amanah', 'Longevity']
  },
  {
    title: 'Unlock Your Mind, Self-Respect & Self-Esteem',
    subtitle: 'Cultivating Mental Clarity, Dignity, and Purposeful Self-Command',
    description: 'An exploration of human psychology, internal sovereignty, and emotional resilience grounded in divine remembrance and intellectual discipline.',
    playStoreUrl: 'https://play.google.com/store/books/collection/cluster?gsr=SheCARQKEAoMd291Z0R3QUFRQkFKEAkQBA%3D%3D:S:ANO1ljIwl7Q&hl=en_CA&gl=US',
    topics: ['Self Mastery', 'Cognitive Discipline', 'Dignity in Islam', 'Emotional Steadfastness']
  }
];

export const FOUNDER_CREDENTIALS = [
  {
    degree: 'BBA in Marketing',
    institution: 'Bharati Vidyapeeth Deemed University, Pune',
    field: 'Commercial Strategy, Consumer Psychology, and Market Research'
  },
  {
    degree: 'Post-Graduate Program in New Age Banking',
    institution: 'Imarticus Learning, Mumbai',
    field: 'Credit Analysis, Modern Banking Operations, and Financial Instruments'
  },
  {
    degree: 'MBA in Banking & Finance Management',
    institution: 'NMIMS (SVKM), Mumbai',
    field: 'Corporate Finance, Investment Analysis, and Strategic Management'
  },
  {
    degree: 'Post-Graduate Diploma in Islamic Sciences',
    institution: 'Zad Academy (Under Shaykh Assim Al-Hakeem)',
    field: 'Classical Fiqh, Quranic Exegesis, Hadith Sciences, and Arabic Terminology'
  },
  {
    degree: 'Advanced Mentorship & Certifications',
    institution: 'Australian Centre for Islamic Finance (AusCIF) with Almir Colan',
    field: 'Behavioural Finance, Corporate Strategy, Ethical Governance, and Islamic Economics'
  }
];

export const SOCIAL_LINKS = {
  whatsappContact: 'https://wa.link/f44l0k',
  whatsappCommunity: 'https://chat.whatsapp.com/K8bshhtQN3RBgLNnFuLcm5',
  microsoftTeams: 'https://teams.live.com/l/community/FEACV71antVJvm6NQI?v=g1',
  instagramISR: 'https://www.instagram.com/isr.gate/',
  instagramBroadcast: 'https://www.instagram.com/channel/AbYBcVTw5e21oSOR/',
  spotifyChannel: 'https://open.spotify.com/show/5rF294PWY9uvktx4JD4BTv?si=XXGix1EVS-GT3CXl9RoUMw',
  applePodcasts: 'https://podcasts.apple.com/in/podcast/islamic-studies-research/id1740407474',
  youtubeChannel: 'https://www.youtube.com/channel/UCnZzzKF9lPSvnH6-oduHTjw',
  twitterISR: 'https://x.com/isrgate',
  founderInstagram: 'https://www.instagram.com/zaydalhaji/',
  founderTwitter: 'https://x.com/zaydalhaji',
  googlePlayBooks: 'https://play.google.com/store/books/collection/cluster?gsr=SheCARQKEAoMd291Z0R3QUFRQkFKEAkQBA%3D%3D:S:ANO1ljIwl7Q&hl=en_CA&gl=US',
  patreon: 'https://wa.link/f44l0k',
  gateWebsite: 'https://www.drzaydh.com',
  gateFacebook: 'https://www.facebook.com/drzgate/',
  gateInstagram: 'https://www.instagram.com/drzgate/',
  gateLinkedIn: 'https://www.linkedin.com/company/drz-gate/',
  gateTwitter: 'https://x.com/drzgate'
};
