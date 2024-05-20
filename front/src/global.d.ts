import 'jest-puppeteer';

declare global {
  const page: import('puppeteer').Page;
  const browser: import('puppeteer').Browser;
}