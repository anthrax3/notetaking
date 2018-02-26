// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios';
import Vue from 'vue';
import App from './App';
import router from './router';
import note from '@/components/note';

Vue.component('note', note);

Vue.config.productionTip = false;

/* eslint-disable no-new */
// eslint-disable-next-line
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
export const HTTP = axios.create({
    baseURL: 'http://localhost:3030/note',
    headers: {
        Authorization: 'Bearer {token}',
    },
});
