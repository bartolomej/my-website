import { chromium } from '@playwright/test';
import fs from 'fs/promises';
import path from 'path';

export async function generateScreenshot(url: string, projectId: string, preferOgImage = true) {
  const outputDir = path.join(process.cwd(), 'public', 'screenshots');
  const outputPath = path.join(outputDir, `${projectId}.png`);

  try {
    await fs.mkdir(outputDir, { recursive: true });
    
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    
    if (preferOgImage) {
      // Try to get OG image first
      const ogImage = await page.$eval('meta[property="og:image"]', el => el.getAttribute('content')).catch(() => null);
      
      if (ogImage) {
        const imageUrl = new URL(ogImage, url).toString();
        const response = await fetch(imageUrl);
        const buffer = Buffer.from(await response.arrayBuffer());
        await fs.writeFile(outputPath, buffer);
        await browser.close();
        return `/screenshots/${projectId}.png`;
      }
    }
    
    // Fall back to screenshot
    await page.setViewportSize({ width: 1200, height: 630 });
    await page.screenshot({ path: outputPath });
    await browser.close();
    return `/screenshots/${projectId}.png`;
  } catch (error) {
    console.error(`Error generating screenshot for ${url}:`, error);
    return null;
  }
} 