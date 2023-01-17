/** A sub-script of ./build-portfolio.sh. Should not be run independently. */
const fs = require('fs');
const { portfolioItemsJson } = require('../content/portfolio/build/portfolio');

fs.writeFileSync('./content/portfolio/portfolio.json', portfolioItemsJson);
