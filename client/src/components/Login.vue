<template>
    <div class = "container">
        <div class="card" style="width: 20rem;">
            <div class="card border-dark mb-3" style="max-width: 20rem;">
                <div class="card bg-dark text-white">
                    <div class="card-header"><h3>Login</h3>
                    </div>
                    <br>
                    <div class="card-body">
                        <form>
                            <input v-model="username" placeholder="Username" @keyup.enter="authorize">
                            <br>
                            <input type="password" v-model="password" placeholder="Password" @keyup.enter="authorize">
                            <br>
                            <br>
                            <div class="float-right">
                            <b-button @click="authorize">Go</b-button>
                            </div>
                            <br>
                            <br>
                            <font size="4">Don't have an account? <router-link to="/register" class="">Sign up</router-link></font> 	
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        authorize: function(){
            this.username = ''
            this.password = ''
        }
    }
};
</script>

<style>
</style>