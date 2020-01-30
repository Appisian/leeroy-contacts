const WebFont = require("webfontloader"); //eslint-disable-line
WebFont.load({
  google: {
    families: [
      'Merriweather:400',
      'Open+Sans:300,400,400i,600,700,800, sans-serif',
    ],
  },
  timeout: 1000, // Set the timeout to two seconds
});
