module.exports = {
  configureWebpack: {
    resolve:{
      extensions:[],
      alias:{
        'api':'@/api',
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'utils':'@/utils',
        'views':'@/views',
      }
    }
  }
};
