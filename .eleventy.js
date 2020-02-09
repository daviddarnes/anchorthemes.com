const pluginRSS = require("@11ty/eleventy-plugin-rss");
const localImages = require("eleventy-plugin-local-images");
const lazyImages = require("eleventy-plugin-lazyimages");
const htmlmin = require('html-minifier');

const htmlMinTransform = (value, outputPath) => {
  if (outputPath.indexOf('.html') > -1) {
    let minified = htmlmin.minify(value, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true
    });
    return minified;
  }
  return value;
};

module.exports = function(config) {

  // Merge default an theme specific tags together
  config.setDataDeepMerge(true);

  // Minify HTML
  config.addTransform("htmlmin", htmlMinTransform);

  // Assist RSS feed template
  config.addPlugin(pluginRSS);

  // Apply performance attributes to images
  // config.addPlugin(lazyImages, {
  //   cacheFile: "",
  //   imgSelector: "main img"
  // });

  // Copy images over from Ghost
  config.addPlugin(localImages, {
    distPath: "dist",
    assetPath: "/assets/images",
    selector: "img",
    attribute: "data-src", // Lazy images attribute
    verbose: false
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    templateFormats: ["njk", "md", "css", "js", "jpg", "gif", "svg", "png", "ico"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
