module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  images: {
    domains: ['ecommerce.staritltd-devemon.one'],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    },
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
  },
};
