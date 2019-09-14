module.exports = function(config) {
  config.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      output: "dist"
    },
    templateFormats : ["njk", "md", "11ty.js", "css", "js", "jpg", "gif", "svg", "png", "ico", "woff", "ttf"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };
};
