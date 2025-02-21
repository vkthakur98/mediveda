const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Function to generate the HTML for a given URL
async function renderPage(url, outputDir) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set the viewport (optional)
  await page.setViewport({ width: 1200, height: 800 });

  // Go to your SPA URL
  await page.goto(url, { waitUntil: 'networkidle0' }); // Ensure page loads fully
  
  // Wait for the SPA to finish rendering (if needed)
  await page.waitForSelector('section'); // You can adjust this to wait for a specific element
  
  // Get the fully rendered HTML
  const content = await page.content();
  
  // Define a filename (you can adjust the file structure as needed)
  const filename = path.join(outputDir, url.replace('https://', '').replace(/\//g, '_') + '.html');
  
  // Write the content to an HTML file
  fs.writeFileSync(filename, content);
  
  console.log(`Rendered and saved: ${filename}`);

  await browser.close();
}

// Function to render multiple pages
async function renderMultiplePages() {
  const urls = [
    'https://mediveda.in',         // Your homepage
    'https://mediveda.in/about',   // Other pages
    'https://mediveda.in/contact-us'  // Add more URLs as needed
  ];
  
  const outputDir = path.join(__dirname, 'dist');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  
  for (let url of urls) {
    await renderPage(url, outputDir);
  }
}

// Start the rendering process
renderMultiplePages().catch(err => console.error(err));
