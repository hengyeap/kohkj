const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kongji/'
    : '/',
  transpileDependencies: true,
  // publicPath: '/kongji/',
  lintOnSave:false
});

