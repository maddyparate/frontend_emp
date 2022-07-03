<template>
    <div>
        <form class="register" @submit="onSubmit">
            
            <h2>Login For Admin</h2>
            <input required type="email" v-model="email" placeholder="Your Email Id" />
            <input required type="password" v-model="password" placeholder="Your Password" />
            <button class="btn btn-primary">Login</button>
            <div>
                Are you a new user? <router-link to="/signup">Sign Up</router-link>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from "axios";
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        onSubmit(e) {
            let self = this;
            e.preventDefault();
            const userData = {
                email: this.email,
                password: this.password,
            };
            console.log(userData)
            // let result =  axios.post(
            //   `http://localhost:8080/admin/login`,userData
            // );
            let result = axios.post(`http://localhost:8081/admin/login`, userData).then(function (response) {
                console.log(response.data.status)
                if (response.data.status === "success") {
                    self.$router.push({ name: "Home" });
                }
                else {
                    alert("Please put valid email and password.");
                }
            }).catch(function (error) {
                console.log(error)
            })
            console.log(result)
            // if (result.status == "success") {
            //   localStorage.setItem("user-info", JSON.stringify(result.data[0]));

            //   this.$router.push({ name: "Home" });
            // } else {
            //   //  console.log(localStorage.getItem("user-info"))
            //   alert("Please put valid email and password.");
            // }
            // (this.email = ""), (this.password = "");
        },
    }
}
</script>

<style>
</style>