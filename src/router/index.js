import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/list',
            name:'list',
            component:()=>import('../components/list')
        },
        {
            path:'/pages',
            name:'pages',
            component:()=>import('../components/pages')
        }
    ]
})

export default router;