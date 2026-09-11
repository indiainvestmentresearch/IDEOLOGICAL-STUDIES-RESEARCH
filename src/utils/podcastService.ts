import { PodcastEpisode } from '../types';
import seedEpisodes from '../data/podcasts.json';

export async function fetchLivePodcastFeed(): Promise<PodcastEpisode[]> {
  const rssUrls = [
    '/api/podcast-rss',
    'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://anchor.fm/s/f49f1ccc/podcast/rss'),
    'https://corsproxy.io/?' + encodeURIComponent('https://anchor.fm/s/f49f1ccc/podcast/rss')
  ];

  for (const url of rssUrls) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) continue;
      const text = await res.text();
      if (!text || !text.includes('<rss')) continue;

      const parser = new DOMParser();
      const xml = parser.parseFromString(text, 'text/xml');
      const items = Array.from(xml.querySelectorAll('item'));

      if (items.length > 0) {
        return items.map((item, idx) => {
          const rawTitle = item.querySelector('title')?.textContent || `Episode ${idx + 1}`;
          // Strictly remove all em dashes and en dashes
          const title = rawTitle.replace(/[\u2014\u2013]/g, ': ').replace(/\s+/g, ' ').trim();

          const link = item.querySelector('link')?.textContent || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const enclosure = item.querySelector('enclosure');
          const audioUrl = enclosure ? enclosure.getAttribute('url') || '' : '';
          const duration = item.querySelector('itunes\\:duration, duration')?.textContent || '';
          const rawDesc = item.querySelector('description')?.textContent || '';
          const description = rawDesc.replace(/<[^>]*>?/gm, '').replace(/[\u2014\u2013]/g, ': ').slice(0, 260).trim();

          let category: PodcastEpisode['category'] = 'Quran & Hadith';
          if (/aqeedah/i.test(title)) category = 'Aqeedah';
          else if (/fiqh/i.test(title)) category = 'Fiqh';
          else if (/hadith/i.test(title)) category = 'Hadith';
          else if (/seerah/i.test(title)) category = 'Seerah';
          else if (/tafsir/i.test(title)) category = 'Tafsir';
          else if (/tarbiyah/i.test(title)) category = 'Tarbiyah Islamiyah';

          return {
            id: link ? (link.split('/').pop() || `${idx}`) : `${idx}`,
            title,
            category,
            link,
            pubDate,
            audioUrl,
            duration,
            description
          };
        });
      }
    } catch {
      // Continue to next URL attempt
    }
  }

  // Fallback to validated seed episodes
  return (seedEpisodes as PodcastEpisode[]).map(ep => ({
    ...ep,
    title: ep.title.replace(/[\u2014\u2013]/g, ': '),
    description: ep.description.replace(/[\u2014\u2013]/g, ': ')
  }));
}
