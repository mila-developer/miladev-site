const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true
});

// const { defineConfig } = require('@vue/cli-service')

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/production-sub-path/'
//     : '/'
// }