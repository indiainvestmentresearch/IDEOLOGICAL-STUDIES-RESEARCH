export interface PodcastEpisode {
  id: string;
  title: string;
  category: 'Aqeedah' | 'Fiqh' | 'Hadith' | 'Seerah' | 'Tafsir' | 'Tarbiyah Islamiyah' | 'Quran & Hadith';
  link: string;
  pubDate: string;
  audioUrl: string;
  duration: string;
  description: string;
}

export interface FeaturedPodcastTopic {
  title: string;
  arabicName: string;
  category: 'Aqeedah' | 'Fiqh' | 'Hadith' | 'Seerah' | 'Tafsir' | 'Tarbiyah Islamiyah';
  spotifyUrl: string;
  description: string;
  keyConcepts: string[];
}

export interface CreativeSlide {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  altText: string;
  aspectRatio: string;
  description: string;
  caption: string;
}

export interface BookItem {
  title: string;
  volume?: string;
  subtitle: string;
  description: string;
  playStoreUrl: string;
  topics: string[];
}
