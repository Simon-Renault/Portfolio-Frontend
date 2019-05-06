import Vue from 'vue'
import '@/plugins/axios'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/store'
import '@/registerServiceWorker'
import VueSVGIcon from 'vue-svgicon';
import Meta from 'vue-meta'

Vue.use(Meta)
Vue.use(VueSVGIcon, {tagName: 'icon'})
Vue.config.productionTip = false


import inputText from '@/components/v-input';
Vue.component('v-input',inputText)

import select from '@/components/v-select';
Vue.component('v-select',select)


import projectCard from '@/components/v-project-card';
Vue.component('v-project-card',projectCard)

import articleCard from '@/components/v-article-card';
Vue.component('v-article-card',articleCard)


import imageLoader from '@/components/image-loader';
Vue.component('image-loader',imageLoader)

import placeholderCard from '@/components/v-card-placeholder';
Vue.component('v-card-placeholder',placeholderCard)

import placeholderProject from '@/components/v-project-placeholder';
Vue.component('v-project-placeholder',placeholderProject)

import pageGrid from '@/components/v-page-grid';
Vue.component('v-page-grid',pageGrid)

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
