const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve static files from the dist directory (for production)
app.use(express.static(path.join(__dirname, 'dist')));

// Screenshot endpoint
app.post('/api/screenshot', async (req, res) => {
  let browser;
  
  try {
    const { html, filename = 'product-card.png', width = 800, height = 600 } = req.body;
    
    console.log('Screenshot request received:');
    console.log('- Filename:', filename);
    console.log('- Dimensions:', width, 'x', height);
    console.log('- HTML length:', html ? html.length : 'undefined');
    console.log('- HTML preview:', html ? html.substring(0, 200) + '...' : 'undefined');
    
    if (!html) {
      console.error('No HTML content provided');
      return res.status(400).json({ error: 'HTML content is required' });
    }

    console.log('Launching Puppeteer browser...');
    // Launch Puppeteer browser
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    });

    console.log('Creating new page...');
    const page = await browser.newPage();
    
    // Set viewport
    console.log('Setting viewport to', width, 'x', height);
    await page.setViewport({ width: parseInt(width), height: parseInt(height) });
    
    // Use the serialized HTML directly from frontend (it already includes styles and structure)
    console.log('Setting page content...');
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    // Wait for fonts to load
    console.log('Waiting for fonts to load...');
    await page.evaluateHandle('document.fonts.ready');
    
    // Take screenshot of the entire page (since HTML is already structured)
    console.log('Taking screenshot...');
    const screenshot = await page.screenshot({
      type: 'png',
      omitBackground: false,
      fullPage: true
    });
    
    console.log('Screenshot generated successfully, size:', screenshot.length, 'bytes');
    
    // Set response headers for file download
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.send(screenshot);
    
  } catch (error) {
    console.error('Screenshot error:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      error: 'Failed to generate screenshot',
      details: error.message 
    });
  } finally {
    if (browser) {
      console.log('Closing browser...');
      await browser.close();
    }
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Screenshot service is running' });
});

// Catch all handler for SPA routing (serve index.html for all non-API routes)
app.use((req, res, next) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  } else {
    res.status(404).json({ error: 'API endpoint not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Screenshot server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;