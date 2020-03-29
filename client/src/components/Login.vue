<template>
    <div>
        Login
        <br>
        <input v-model="username" id="un" placeholder="Username" @keyup.enter="authorize">
        <br>
        <input type="password" id="pw" placeholder="Password">
        <br>
        <button @click="authorize">
        Go
        </button>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'login',
data: {
  	username: '',
    password: ''
    },
methods: {
  	authorize: function(){
    	this.username = ''
      this.password = ''
    }
}
};

$( "#pw" ).keydown(function(e) {
	if(e.which == 13) {
  			$("#un").val("");
        $(this).val("");
    }
});


</script>