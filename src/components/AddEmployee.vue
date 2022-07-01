<template>
    <div>
        <h1>Add Employee Component</h1>
        <b-container>
            <div>
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                   

                    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                        <b-form-input id="input-2" name="name" v-model="employee.name" placeholder="Enter name" required></b-form-input>
                    </b-form-group>

                     <b-form-group id="input-group-2" label="Address:" label-for="input-2">
                        <b-form-input id="textarea"  v-model="employee.address" placeholder="Enter Address" required></b-form-input>
                    </b-form-group>

                     <b-form-group id="input-group-2" label="Mobile:" label-for="input-2">
                        <b-form-input id="input-2" type="number" v-model="employee.mobile" placeholder="Enter Phone Number" required></b-form-input>
                    </b-form-group>
                
                    <b-form-group id="input-group-2" label="Email:" label-for="input-2">
                        <b-form-input id="input-2" name="email" v-model="employee.email" placeholder="Enter Email" required></b-form-input>
                    </b-form-group>

                     <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                        <b-form-input id="input-2" type="password" v-model="employee.password"  placeholder="Enter Password" required></b-form-input>
                    </b-form-group>
                    <br />
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>

                <b-card class="mt-3" header="Form Data Result">
                    <pre class="m-0">{{ employee }}</pre>
                </b-card>
            </div>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AddEmployee',
    data: function() {
      return {
        employee: {
          name: '',
          address: '',
          mobile: '',
          email: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        let apiUrl = "http://localhost:8080/api/banking/addCustomer"

        this.$emit('submit',this.employee)

        // Axios 
        axios.post(apiUrl, this.employee)
        .then(() => {
             this.$router.push("/employees")
             this.employee = {
                name: '',
                address: '',
                mobile: '',
                email: '',
                password: ''
             }
        })
        .catch((error) => {
            console.log(error)
        })
        
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.employee.name = ''
        this.employee.address = ''
        this.employee.mobile = ''
        this.employee.email = ''
        this.employee.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>