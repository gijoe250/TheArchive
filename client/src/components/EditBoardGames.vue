<template>
  <div class="posts">
    <h1>Edit Board Games</h1>
    <div class="form">
      <div>
        <input type="text" name="name" placeholder="NAME" v-model="name" />
      </div>
      <div>
        <input type="text" name="price" placeholder="PRICE" v-model="price" />
      </div>
      <div>
        <input type="number" name="duration" placeholder="DURATION" v-model="duration" />
      </div>
      <div>
        <select id="diff">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <textarea rows="10" cols="65" placeholder="DESCRIPTION" v-model="description"></textarea>
      </div>
      <div>
        <button class="app_post_btn" @click="updatePost">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditBoardGame",
  data() {
    return {
      name: "",
      description: ""
    };
  },
  methods: {
    getGames: function(id) {
      axios
        .get("http://localhost:8081/boardgames/" + id)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
    /*
    async updatePost() {
      await PostsService.updatePost({
        id: this.$route.params.id,
        title: this.title,
        description: this.description
      });
      this.$router.push({name: 'Posts'});
    }*/
  }
};
</script>
<style type="text/css">
.form input,
.form textarea {
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
</style>
