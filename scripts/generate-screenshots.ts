import { projects } from '../app/work/project-data';
import { generateScreenshot } from '../utils/screenshot';

async function generateAllScreenshots() {
  console.log('🖼️  Starting screenshot generation...');

  for (const project of projects) {
    console.log(`\n📸 Generating screenshot for ${project.title}...`);
    try {
      const screenshotPath = await generateScreenshot(project.websiteUrl, project.id,  project.preview !== 'screenshot');
      if (screenshotPath) {
        console.log(`✅ Screenshot saved to: ${screenshotPath}`);
      } else {
        console.log(`❌ Failed to generate screenshot for ${project.title}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${project.title}:`, error);
    }
  }

  console.log('\n🎉 Screenshot generation complete!');
}

generateAllScreenshots().catch(console.error); 