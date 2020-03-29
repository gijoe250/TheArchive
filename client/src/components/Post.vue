<template>
  <div class="post">
    <h1>Boardgames</h1>
    <br />
    <div
      class="card"
      id="card"
      style="height:auto; max-width: 50rem; align:center"
    >
      <div class="card bg-dark text-white">
        <br />
        <div v-if="games.length > 0" class="table-wrap">
          <div>
            <router-link
              v-bind:to="{name: 'NewBoardGame'}"
              class="add_games_link"
              >Add Board Game</router-link
            >
          </div>

          <br />

          <table>
            <tr>
              <td>Title</td>
              <td>Price</td>
              <td>Duration</td>
              <td>Description</td>
              <td align="center">Action</td>
            </tr>
            <tr v-for="games in games" v-bind:key="games.title">
              <td>{{ games.name }}</td>
              <td>{{ games.price }}</td>
              <td>{{ games.duration }}</td>
              <td>{{ games.description }}</td>
              <td align="center">
                <a href="#" @click="deleteGames(games._id)">Delete</a>
              </td>
            </tr>
          </table>
        </div>

        <div v-else>
          There are no board games.. Lets add one now
          <br />
          <br />
          <router-link v-bind:to="{name: 'NewBoardGame'}" class="add_games_link"
            >Add Board Game</router-link
          >
        </div>
      </div>
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
  mounted() {
    this.getGames();
  },
  methods: {
    getGames: function() {
      axios
        .get('http://localhost:8081/boardgames')
        .then(response => {
          console.log(response);
          this.games = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteGames: function(id) {
      alert(id);
      axios
        .delete('http://localhost:8081/boardgames/' + id)
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
  background: #000;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #000;
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
