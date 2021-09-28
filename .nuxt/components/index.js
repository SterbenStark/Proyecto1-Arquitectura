export { default as FooterView } from '../..\\components\\global\\FooterView.vue'
export { default as HeaderView } from '../..\\components\\global\\HeaderView.vue'

export const LazyFooterView = import('../..\\components\\global\\FooterView.vue' /* webpackChunkName: "components_global/FooterView" */).then(c => c.default || c)
export const LazyHeaderView = import('../..\\components\\global\\HeaderView.vue' /* webpackChunkName: "components_global/HeaderView" */).then(c => c.default || c)
