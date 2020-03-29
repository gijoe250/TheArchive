<template>
    <div class = "container">
        <div class="card" style="width: 30rem;">
            <div class="card border-dark mb-3" style="max-width: 30rem;">
                <div class="card bg-dark text-white">
                    <div class="card-header"><h3>Register</h3>
                    </div>
                    <br>
                    <div class="card-body">
                        <div align="center"><font size="4">{{ thing }}</font></div>
                        <form>
                            <font size="4">Username</font><input v-model="username" placeholder="Enter Username" @keyup.enter="authorize">
                            <br>
                            <font size="4">Password</font><input type="password" v-model="password" placeholder="Enter Password" @keyup.enter="authorize">
                            <br>
                            <font size="4">Verify Password</font><input type="password" v-model="password2" placeholder="Verify Password" @keyup.enter="authorize">
                            <br>
                            <br>
                            <div class="float-right">
                            <b-button @click="authorize">Submit</b-button>
                            </div>
                            <br>
                            <br>
                            <font size="4">Have an account? <router-link to="/login" class="">Login</router-link></font> 	
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            username: '',
            password: '',
            password2: '',
            thing: ''
        };
    },
    methods: {
        authorize: function(){
            this.username = ''
            if ( this.password != this.password2 ) {
                this.thing = 'Password must match'
                }
            else {
                this.thing = ''
                }
            this.password = ''
            this.password2 = ''
        }
    }
};
</script>

<style>
</style>