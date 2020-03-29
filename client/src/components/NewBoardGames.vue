<template>
  <div class="post">
    <h1>Add Board Game</h1>
    <div class="card" id="card" style="height:auto; max-width: 35rem; align:center">
      <div class="card bg-dark text-white">
        <br />
        <div class="form">
          <div>
            <input type="text" name="name" placeholder="NAME" v-model="Boardgame.name" />
          </div>
          <div>
            <input type="text" name="price" placeholder="PRICE" v-model="Boardgame.price" />
          </div>
          <div>
            <input
              type="number"
              name="duration"
              placeholder="DURATION"
              v-model="Boardgame.duration"
            />
          </div>
          <div>
            <label>Difficulties:</label>

            <select id="diff">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div>
            <textarea rows="10" cols="65" placeholder="DESCRIPTION" v-model="Boardgame.description"></textarea>
          </div>
          <div>
            <button class="app_post_btn" @click="addBoardgame">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import PostsService from '@/services/PostsService';

import axios from "axios";
export default {
  name: "NewBoardGame",
  data() {
    return {
      Boardgame: {
        name: "",
        price: "",
        numOfPpl: "",
        difficulties: "",
        duration: "",
        description: ""
      },
      difficulties: [
        { text: "Select One", value: null },
        "1.0",
        "2.0",
        "3.0",
        "4.0"
      ],
      show: true
    };
  },
  methods: {
    addBoardgame: function() {
      let newBoardGame = {
        name: this.Boardgame.name,
        price: this.Boardgame.price,
        description: this.Boardgame.description,
        duration: this.Boardgame.duration,
        difficulty: this.Boardgame.difficulties
      };
      axios
        .post("http://localhost:8081/boardgames", newBoardGame)
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
.form input,
.form select .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
.label {
  font-size: 12px;
  text-transform: uppercase;
}
</style>
