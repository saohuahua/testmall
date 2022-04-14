/*  该项目是整个项目的入口文件*/ 
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'



Vue.config.productionTip = false;




new Vue({
    el:'#app',
    render:h=>h(App),
    beforeCreate() {
    Vue.prototype.$bus=this//注册全局事件
    },       
    
})