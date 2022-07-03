<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="employee in employees" :key="employee.id">
                                <td>{{ employee.name }}</td>
                                <td>{{ employee.address }}</td>
                                <td>{{ employee.mobile }}</td>
                                <td>{{ employee.email }}</td>
                                <td>
                                    <b-button variant="success" @click="editEmployee(employee.id)"
                                        v-b-modal.edit-employee>
                                        Edit
                                    </b-button>
                                    <b-button @click.prevent="deleteEmployee(employee.id)" variant="danger">Delete
                                    </b-button>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Edit Modal -->
        <b-modal id="edit-employee" title="Edit Employee">
            <b-form @submit.prevent="handleEditEmployeeForm">
                <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                    <b-form-input  v-model="employee.name" placeholder="Enter name" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Address:" label-for="input-2">
                    <b-form-input  v-model="employee.address" placeholder="Enter Address" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Mobile:" label-for="input-2">
                    <b-form-input  v-model="employee.mobile" placeholder="Enter Phone Number" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Email:" label-for="input-2">
                    <b-form-input  v-model="employee.email" placeholder="Enter Email" required></b-form-input>
                </b-form-group>
                <br />
                <b-button type="submit" variant="primary">Update</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
        </b-modal>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'EmployeeList',
    data() {
        return {
            employees: [],
            employee: {
                name: '',
                address: '',
                mobile: '',
                email: '',
                password: ''
            },
            editId: ''
        }
    },
    created() {
        let apiUrl = "http://localhost:8081/api/employee/getAll"
        axios.get(apiUrl)
            .then((res) => {
                this.employees = res.data.data.model
                console.log(res.data.data.model)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    methods: {
        deleteEmployee(id) {
            console.log(id)
            let apiUrl = `http://localhost:8081/api/employee/deleteById/${id}`
            let indexOfEmployee = this.employees.findIndex((element) => element.id === id)
            axios.delete(apiUrl)
                .then(() => {
                    this.employees.splice(indexOfEmployee, 1)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        editEmployee(id) {
            this.editId = id
        },
        handleEditEmployeeForm(){
            console.log(this.editemployee)
            let apiUrl = `http://localhost:8081/api/employee/updateById/${this.editId}`
             
            axios.put(apiUrl,this.employee)
                .then(() => {
                    location.reload()
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }
}
</script>

<style>
button {
    margin: 6px;
}
</style>