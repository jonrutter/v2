#!/bin/bash

# converts the typescript portfolio array into a portfolio.json file than can be read by graphql
# this script should be run every time ./content/portfolio/portfolio.ts is updated 
tsc ./content/portfolio/portfolio.ts --strict --skipLibCheck --excludeDirectories node_modules/ --outDir ./content/portfolio/build && node ./scripts/build-portfolio-json.js