const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kongji/'
    : '/'
    ? '/kongji/about'
    :'/about',
  transpileDependencies: true,
  // publicPath: '/kongji/',
  lintOnSave:false
});

