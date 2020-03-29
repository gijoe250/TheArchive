<template>
  <div>
    <div class="card horizontally-aligned" style="width: 30rem;">
      <div class="card" id="card" style="max-width: 30rem;">
        <div class="card bg-dark text-white">
          <div class="card-header"><h3>Register</h3></div>
          <br />
          <div class="card-body">
            <div align="center">
              <font size="4">{{ message }}</font>
            </div>
            <form>
              <div class="row">
                <div class="col">
                  <font size="4">Username</font>
                </div>
                <div class="col">
                  <input
                    v-model="username"
                    placeholder="Enter Username"
                    @keyup.enter="register"
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
                    placeholder="Enter Password"
                    @keyup.enter="register"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <font size="4">Verify Password</font>
                </div>
                <div class="col">
                  <input
                    type="password"
                    v-model="password2"
                    placeholder="Verify Password"
                    @keyup.enter="register"
                  />
                </div>
              </div>
              <div class="float-right">
                <b-button @click="register">Submit</b-button>
              </div>
              <br />
              <br />
              <font size="4"
                >Have an account?
                <router-link to="/login" class="">Login</router-link></font
              >
            </form>
          </div>
        </div>
      </div>
      <div id="response" class="response-message horizontally-aligned">
        <p style="color: black;">
          <font size="4">You have registered succesfully!</font>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
export default {
  name: 'register',
  data() {
    return {
      username: '',
      password: '',
      password2: '',
      message: ''
    };
  },
  methods: {
    register: function() {
      if (this.password != this.password2) {
        this.message = 'Passwords must match';
      } else if (
        this.username == '' ||
        this.password == '' ||
        this.password2 == ''
      ) {
        this.message = 'Username, Password, and Verification required';
      } else {
        let registerInfo = {
          username: this.username,
          password: this.password
        };

        axios
          .post('http://localhost:8081/users/signup', registerInfo)
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
      this.password2 = '';
    }
  }
};
</script>

<style>
.horizontally-aligned {
  margin-bottom: 0;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
}
.response-message {
  display: none;
}
</style>
