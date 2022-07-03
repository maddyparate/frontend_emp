<template>
  <div>
    <form class="register" @submit="onSubmit">
    
      <h2>Sign Up/Register </h2>
      <input required type="text" v-model="name" placeholder="Your Name" />
      <input
        required
        type="email"
        v-model="email"
        placeholder="Your Email Id"
      />
      <input
        required
        type="password"
        v-model="password"
        placeholder="Your Password"
      />
      <button class="btn">Sign Up</button>
       <div>
          Already have an account? <router-link to="/login">Login</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
  
    async onSubmit(e) {
      e.preventDefault();
      const userData = {
        name: this.name,
        email: this.email,
        id: Math.floor(Math.random() * 100000),
        password: this.password,
      };
      let result = await axios.post("http://localhost:8081/admin/register", userData);
      if (result.status == 200) {
      localStorage.setItem("user-info",JSON.stringify(result.data))
      this.$router.push({name:"Login"})
      }
      (this.name = ""), (this.email = ""), (this.password = "");
    },
  },
  mounted(){
    let user = localStorage.getItem("user-info");
    if(user){
      this.$router.push({name:"Login"})
    }
  }
};
</script>

<style>
</style>