// prerenderer.config.js
const Prerenderer = require('@prerenderer/prerenderer');
const path  = require("path");
const prerenderer = new Prerenderer({
  staticDir: path.join(__dirname, 'dist/prerender'),  // The directory where your built app is
  routes: [
    '',         // List of routes to prerender
    '/about',
    '/contact-us',
    '/products-qr',
    // You can also use regular expressions to match routes
    // /\/products\/\d+/,
  ],
});

module.exports = prerenderer;
