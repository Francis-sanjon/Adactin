const report = require("multiple-cucumber-html-reporter")
report.generate({
  jsonDir: "cypress/cucumber-json/",
  reportPath: "cypress/cucumber-json/",
  "metadata": {
    "browser": {
      "name": "chrome",
      "version": "106"
    },
    "device": "Local Test Machine",
    "platform": {
      "name": "Windows",
      "version": "10"
    }
  }
})