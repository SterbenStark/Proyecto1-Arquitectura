import Vue from 'vue'

const globalComponents = {
  FooterView: () => import('../..\\components\\global\\FooterView.vue' /* webpackChunkName: "components_global/FooterView" */).then(c => c.default || c),
  HeaderView: () => import('../..\\components\\global\\HeaderView.vue' /* webpackChunkName: "components_global/HeaderView" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
