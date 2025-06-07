import { CheerioAPI } from 'cheerio';

export const getMetaContent = ($: CheerioAPI, selector: string) =>
  $(selector).attr('content') || '';

export const getText = ($: CheerioAPI, selector: string) => $(selector).first().text();

export const getParagraphs = ($: CheerioAPI) =>
  $('article p, main p, body p')
    .map((_, el) => $(el).text().trim())
    .get()
    .filter((p) => p.length > 30)
    .slice(0, 10)
    .join(' ');

export const getSrcList = ($: CheerioAPI, selector: string) =>
  $(selector)
    .map((_, el) => $(el).attr('src'))
    .get()
    .filter(Boolean);
