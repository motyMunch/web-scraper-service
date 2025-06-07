import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import { extractInfoFromHTML } from '@src/utils/infoExtractor';

export async function scrapeWebsite(url: string) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  const html = await page.content();
  await browser.close();

  const $ = cheerio.load(html);
  return extractInfoFromHTML($, url);
}
