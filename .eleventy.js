const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Enable raw HTML in markdown
  const markdownIt = require("markdown-it");
  eleventyConfig.setLibrary("md", markdownIt({ html: true }));

  // Copy assets and CSS directly to output
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("styles.css");

  // Blog collection (sorted newest first)
  eleventyConfig.addCollection("blog", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/blog/*.md").reverse();
  });

  // Date formatting filter
  eleventyConfig.addFilter("date", (value, format = "MMMM d, yyyy") => {
    return DateTime.fromJSDate(value).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "output"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
