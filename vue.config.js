const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

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
      //useRenderEvent: true,
      headless: false,
      onlyProduction: true,
      renderAfterTime: 60000, // Wait 1min seconds.
      // postProcess: route => {
      //   // Defer scripts and tell Vue it's been server rendered to trigger hydration
      //   route.html = route.html
      //     .replace(/<script (.*?)>/g, '<script $1 defer>')
      //     .replace('id="app"', 'id="app" data-server-rendered="true"');
      //   return route;
      // }
    },
    renderer: new Renderer({
      renderAfterTime: 60000, // Wait 5 seconds.
      headless: true // Display the browser window when rendering. Useful for debugging.
    })
  }
}
