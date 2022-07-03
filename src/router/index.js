import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home.vue')
    },
    {
        path:'/addEmployee',
        name: 'AddEmployee',
        component: () => import('../components/AddEmployee.vue')
    },
    {
        path: '/employees',
        name: 'EmployeeList',
        component: () => import('../components/EmployeeList.vue')
    },
    {
        name: "SignUp",
        component: () => import('../components/SignUp.vue'),
        path: "/signup",
      },
      {
        name: "Login",
        component: () => import('../components/Login.vue'),
        path: "/login",
      },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router