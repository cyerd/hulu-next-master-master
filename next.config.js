module.exports = {
  images: {
    domains: ["image.tmdb.org"],
  },
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
};
