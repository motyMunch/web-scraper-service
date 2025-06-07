import { STOP_WORDS } from '@src/constants/stopWords';
import { CheerioAPI } from 'cheerio';
import { MIN_FOUR_LETTER_WORD_REGEX } from './regex';
import { filterEmptyValues } from './obj';
import { getMetaContent, getParagraphs, getSrcList, getText } from './cheerioGetters';

export const extractInfoFromHTML = ($: CheerioAPI, url: string) => {
  const title = getText($, 'title');
  const description = getMetaContent($, 'meta[name="description"]');
  const ogImage = getMetaContent($, 'meta[property="og:image"]');
  const publishDate =
    getMetaContent($, 'meta[property="article:published_time"]') ||
    $('time[datetime]').attr('datetime');
  const author = getText($, '[rel="author"], .author, .byline');
  const mainText = getParagraphs($);
  const keywords = extractKeywords(mainText);
  const images = getSrcList($, 'img');
  const videos = getSrcList($, 'video source');

  const extractedInfo = {
    url,
    title,
    description,
    author,
    publishDate,
    keywords,
    summary: mainText,
    images,
    videos,
    ogImage,
  };

  return filterEmptyValues(extractedInfo);
};

const extractKeywords = (text: string): string[] => {
  const stopWords = new Set(STOP_WORDS);
  const words = text.toLowerCase().match(MIN_FOUR_LETTER_WORD_REGEX) || [];
  const freq = words.reduce<Record<string, number>>((acc, word) => {
    if (!stopWords.has(word)) {
      acc[word] = (acc[word] || 0) + 1;
    }
    return acc;
  }, {});

  const topWordsInDescendingOrder = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  const mostFrequentEntries = topWordsInDescendingOrder.slice(0, 5);
  const topWords = mostFrequentEntries.map(([word]) => word);

  return topWords;
};
