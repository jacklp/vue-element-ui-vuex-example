<template>
    <div id="app">
        <h1>Clear Bank</h1>
        <h2>Form</h2>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-form :model="form" :rules="rules" ref="form">
                    <el-form-item label="First name" prop="first_name">
                        <el-input placeholder="Joe" v-model="form.first_name"></el-input>
                    </el-form-item>
                    <el-form-item label="Last name" prop="last_name">
                        <el-input placeholder="Blogs" v-model="form.last_name"></el-input>
                    </el-form-item>
                    <el-form-item label="Mobile number" prop="mobile_number">
                        <el-input placeholder="01234567890" v-model="form.mobile_number"></el-input>
                    </el-form-item>
                    <el-form-item label="Email address" prop="email_address">
                        <el-input placeholder="joe.bloggs@gmail.com" v-model="form.email_address"></el-input>
                    </el-form-item>
                    <el-form-item label="Age" prop="age">
                        <el-input placeholder="25" v-model.number="form.age"></el-input>
                    </el-form-item>
                    <el-form-item label="Date of birth" prop="date_of_birth">
                        <el-date-picker
                            v-model="form.date_of_birth"
                            type="date"
                            placeholder="Pick a day">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="Customer query" prop="customer_query">
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            placeholder="Please input your query"
                            v-model="form.customer_query">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('form')">Create</el-button>
                        <el-button @click="resetForm('form')">Reset</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <h2>Table</h2>
                <el-table
                    :data="[this.$store.getters.getForm]"
                    v-if="show"
                    stripe
                    style="width: 100%">
                    <el-table-column
                        prop="first_name"
                        label="First name">
                    </el-table-column>
                    <el-table-column
                        prop="last_name"
                        label="Last name">
                    </el-table-column>
                    <el-table-column
                        prop="mobile_number"
                        label="Mobile number">
                    </el-table-column>
                    <el-table-column
                        prop="email_address"
                        label="Email address">
                    </el-table-column>
                    <el-table-column
                        prop="age"
                        label="Age">
                    </el-table-column>
                    <el-table-column
                        prop="date_of_birth"
                        label="Date of birth">
                    </el-table-column>
                    <el-table-column
                        prop="customer_query"
                        label="Customer query">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script>

export default {
    name: 'app',
    data() {
        const validateText = (rule, value, callback) => {
            const pattern = /[^A-Za-z]+/g
            if(pattern.test(value)) {
                console.log('hey', pattern.test(value))
                callback(new Error('Please input text only'))
            } else {
                callback()
            }
        }

        return {
            show: false,
            form: {
                first_name: '',
                last_name: '',
                mobile_number: '',
                email_address: '',
                age: '',
                date_of_birth: '',
                customer_query: ''
            },
            rules: {
                first_name: [
                    { required: true, message: 'Please input first name', trigger: 'blur' },
                    { validator: validateText, trigger: 'blur' }
                ],
                last_name: [
                    { required: true, message: 'Please input last name', trigger: 'blur' },
                    { validator: validateText, trigger: 'blur' }
                ],
                mobile_number: [
                    { required: true, message: 'Please input mobile number', trigger: 'blur' }
                ],
                email_address: [
                    { required: true, message: 'Please input email address', trigger: 'blur' },
                    { type: 'email', message: 'Please input correct email address', trigger: 'blur' }
                ],
                age: [
                    { type: 'number', message: 'age must be a number'}
                ],
                date_of_birth: [
                    { type: 'date', required: true, message: 'Please input date of birth', trigger: 'blur' }
                ],
                customer_query: [
                    { required: true, message: 'Please input customer query', trigger: 'blur' }
                ]
            },
            tableData: [
                ['a'],
                ['b']
            ]
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.show = true
                    this.$store.dispatch('saveForm', this.form)
                } else {
                    console.log('error submit!!')
                    return false;
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields()
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.container {
    width: 800px;
}
</style>
