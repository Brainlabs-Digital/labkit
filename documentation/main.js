import '..';
import App from '../documentation/App.vue';
import PortalVue from 'portal-vue';
import router from '../documentation/router';
import Vue from 'vue';

Vue.config.productionTip = false;
Vue.use(PortalVue);

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
