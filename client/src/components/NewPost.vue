<template>
  <div class="posts">
    <h1>Add BoardGames</h1>
    <div class="form">
      <div>
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          v-model="Post.title"
        />
      </div>
      <div>
        <textarea
          rows="15"
          cols="15"
          placeholder="DESCRIPTION"
          v-model="Post.description"
        ></textarea>
      </div>
      <div>
        <button class="app_post_btn" @click="addPost">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
//import PostsService from '@/services/PostsService';
import axios from 'axios';
export default {
  name: 'NewPost',
  data() {
    return {
      Post: {title: '', description: ''}
    };
  },
  methods: {
    addPost: function() {
      let newPost = {
        title: this.Post.title,
        description: this.Post.description
      };

      alert(newPost.title);
      alert(newPost.description);

      axios
        .post('http://localhost:8081/api/post/', newPost)
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
