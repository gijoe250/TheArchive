<template>
  <div>
    <h>Login</h>
    <br />
    <input v-model="username" placeholder="Username" @keyup.enter="authorize" />
    <br />
    <input
      type="password"
      v-model="password"
      placeholder="Password"
      @keyup.enter="authorize"
    />
    <br />
    <button @click="authorize">
      Go
    </button>
    <br />
    <router-link v-bind:to="{name: 'register'}" class="">Sign up</router-link>
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
    authorize: function() {
      this.username = '';
      this.password = '';
    }
  }
};
</script>
