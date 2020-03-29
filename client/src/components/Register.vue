<template>
    <div>
        <h>Register</h>
        <br>
        <input v-model="username" placeholder="Username" @keyup.enter="authorize">
        <br>
        <input type="password" v-model="password" placeholder="Password" @keyup.enter="authorize">
        <br>
        <button @click="authorize">
        Go
        </button>
        <br>
    </div>
</template>

<script>
export default {
    name: 'register',
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

<style></style>