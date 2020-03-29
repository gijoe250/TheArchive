<template>
    <div>
        <div>
            {{ thing }}
        </div>
        <h>Register</h>
        <br>
        Username <input v-model="username" placeholder="Enter Username" @keyup.enter="authorize">
        <br>
        Password <input type="password" v-model="password" placeholder="Enter Password" @keyup.enter="authorize">
        <br>
        Re-enter Password <input type="password" v-model="password2" placeholder="Enter Password" @keyup.enter="authorize">
        <br>
        <button @click="authorize">Submit</button>
        <br>
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

<style></style>