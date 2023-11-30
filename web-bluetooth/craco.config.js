const path = require('path');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          https: require.resolve('https-browserify'),
          http: require.resolve('stream-http'),
          url: require.resolve("url/"),
          buffer: require.resolve("buffer/")
        }
      }
    }
  }
};
