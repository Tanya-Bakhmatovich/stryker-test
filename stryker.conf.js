module.exports = function(config){
  config.set({
    mutate: [
      'src/**/*.js'
    ],
    testRunner: "jest",
    mutator: "javascript",
    transpilers: [],
    reporter: ["html", "clear-text", "progress"],
    coverageAnalysis: "off",
  });
}
