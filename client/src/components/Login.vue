<template>
  <div>
    <div class="card horizontally-aligned" style="width: 25rem;">
      <div class="card" id="card" style="max-width: 30rem;">
        <div class="card bg-dark text-white">
          <div class="card-header"><h3>Login</h3></div>
          <br />
          <div class="card-body">
            <div align="center">
              <font size="4">{{ message }}</font>
            </div>
            <br />
            <form>
              <div class="row">
                <div class="col">
                  <font size="4">Username</font>
                </div>
                <div class="col">
                  <input
                    v-model="username"
                    placeholder="Username"
                    @keyup.enter="login"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <font size="4">Password</font>
                </div>
                <div class="col">
                  <input
                    type="password"
                    v-model="password"
                    placeholder="Password"
                    @keyup.enter="login"
                  />
                </div>
              </div>
              <br />
              <div class="float-right">
                <b-button @click="login">Go</b-button>
              </div>
              <br />
              <br />
              <font size="4"
                >Don't have an account?
                <router-link to="/register" class="">Sign up</router-link></font
              >
            </form>
          </div>
        </div>
      </div>
      <div id="response" class="response-message horizontally-aligned">
        <p style="color: black;"><font size="4">You have logged in!</font></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      message: ''
    };
  },
  methods: {
    login: function() {
      if (this.username == '' || this.password == '') {
        this.message = 'Username and Password required';
      } else {
        let loginInfo = {
          username: this.username,
          password: this.password
        };
        axios
          .post('http://localhost:8081/users/login', loginInfo)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
        this.message = '';
        $('#card').slideUp();
        $('#response').slideDown();
      }
      this.username = '';
      this.password = '';
    }
  }
};
</script>

<style>
.response-message {
  display: none;
}
</style>
