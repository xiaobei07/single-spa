import Vue from 'vue'
import VueRouter from 'vue-router'
import singleSpaVue from 'single-spa-vue'
import routes from "./router.js"
import App from "./app.vue"
Vue.use(VueRouter)
const create = (mod) => {
    const router = new VueRouter({
        mode: 'history',
        base: mod,
        routes,
    })
    const vueLifecycles = singleSpaVue({
        Vue,
        appOptions: {
            el: "#app",
            router,
            render: h => h(App)
        }
    })
    return Promise.resolve({
        bootstrap: vueLifecycles.bootstrap,
        mount: vueLifecycles.mount,
        unmount: vueLifecycles.unmount
    })
}
export default create