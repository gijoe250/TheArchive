<template>
  <div class="post">
    <h1>Boardgames</h1>
    <div v-if="games.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{name: 'NewBoardGame'}" class=""
          >Add Board Game</router-link
        >
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="games in games" v-bind:key="games.title">
          <td>{{ games.name }}</td>
          <td>{{ games.price }}</td>
          <td align="center">
            <router-link v-bind:to="{name: 'EditPost', params: {id: games._id}}"
              >Edit</router-link
            >
            |
            <a href="#">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no board games.. Lets add one now <br /><br />
      <router-link v-bind:to="{name: 'NewBoardGame'}" class="add_games_link"
        >Add Board Game</router-link
      >
    </div>
  </div>
</template>

<script>
//import PostsService from '@/services/PostsService';
import axios from 'axios';
export default {
  name: 'games',
  data() {
    return {
      games: []
    };
  },
  methods: {
    getGames: function() {
      axios
        .get('http://localhost:8080/boardgames')
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_games_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
