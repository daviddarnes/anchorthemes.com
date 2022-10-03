const pluginRSS = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");
const path = require("path");

module.exports = function (config) {
  // Merge default an theme specific tags together
  config.setDataDeepMerge(true);

  config.addPassthroughCopy("./src/submissions/**/*.jpg");
  config.addPassthroughCopy("./src/assets/*");
  config.addPassthroughCopy("./src/assets/images/*");

  // Assist RSS feed template
  config.addPlugin(pluginRSS);

  // Resize images
  function imageShortcode(src, alt, sizes) {
    let options = {
      widths: [140, 170, 275, 340, 550, 564, 700, 1080],
      urlPath: `${path.dirname(src).replace("./src/", "/")}/`,
      outputDir: `${path.dirname(src).replace("./src/", "./dist/")}/`,
    };

    Image(src, options);

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };

    let metadata = Image.statsSync(src, options);
    return Image.generateHTML(metadata, imageAttributes);
  }

  config.addNunjucksShortcode("image", imageShortcode);

  // Date formatting filter
  config.addFilter("htmlDateString", (dateObj) => {
    return new Date(dateObj).toISOString().split("T")[0];
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
