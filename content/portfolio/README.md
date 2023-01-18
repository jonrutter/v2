# Portfolio

This folder contains all the data about my portfolio items.

My goal was to be able to create my portfolio item data in TypeScript (with images stored as path strings), and dynamically load it (with images as `GatsbyImageData`) into GraphQL. Because (as far as I'm aware), the only way to source JSON data with associated gatsby image data is to have a pure `.json` file sourced by `gatsby-source-filesystem` and transformed with `gatsby-transformer-json`, I created a custom script to transform my TypeScript portfolio definitions into a raw JSON file.

In order to update the site's portfolio:

1. Update the type-safe portfolio data in `./portfolio.ts`, adding images to `./images/` (if applicable).
2. Run `npm run build-portfolio`. This will generate a new `portfolio.json` file that can be sourced by GraphQL.

You'll need to run the build-portfolio script any time a change is made to `portfolio.ts`, because otherwise the site will continue to use the old version of `portfolio.json`.

This could have been done automatically as part of the Gatsby build process, but I decided to make it a stand-alone script and store the `.json` file in git, since (1) running the script every build would negatively impact build and development startup times, and (2) I don't anticipate updating the portfolio very often.
