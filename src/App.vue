<template>
  <div>
    <nav class="navbar navbar-dark bg-primary justify-content-between flex no-wrap flex-row">
      <div class="container mt-3">
        <a class="navbar-brand float-left">EMPLOYEE PORTAL <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="./assets/emp.png" alt="img-fluid"></a>
        <ul class="nav navbar-nav flex-row">

          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Home</router-link>
          </li>
          <br /> 
          <li class="nav-item">
            <router-link class="nav-link" to="/addEmployee">Add Employee</router-link>
          </li>
          <br />
          <li class="nav-item">
            <router-link class="nav-link" to="/employees">Employees</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signup">SignUp</router-link>
          </li>
        </ul>
      </div>
    </nav>


    <!--Router View-->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import AddEmployee from '../src/components/AddEmployee.vue'
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'
export default {
    name:'App',
    data(){
      return{
        msg:"Welcome"
      }
    },
    components:{
      AddEmployee,
      Login,
      SignUp
    },
    
}

</script>

<style>
</style>
