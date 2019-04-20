const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')


module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";'
      }
    }
  },

  baseUrl: undefined,
  outputDir: './dist',
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: false,
  parallel: undefined,

  /*chainWebpack: config => {
    config.output.chunkFilename(`js/[name].[id].[chunkhash:8].js`)
  }*/

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/projects',
        '/projects/mci',
        '/projects/asie-online',
        '/projects/portfolio-design',
        '/projects/chaos',
        '/projects/starlight',
        '/projects/trees'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
