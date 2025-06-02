module.exports = function(eleventyConfig) {
  // This copies the entire 'assets' folder to '_site/assets'
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });

  return {
    dir: {
      input: ".",        // Source directory
      includes: "_includes", // Includes folder
      output: "_site"    // Output folder
    }
  };
};