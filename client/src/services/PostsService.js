import Api from '@/services/Api';

export default {
    fetchPosts() {
        return Api().get('posts');
    },

    addPost(params) {
        console.log('enter here');
        return Api().post('posts', params);
    }

    /*
    ,updatePost(params) {
        return Api().put('posts/' + params.id, params)
    },

    getPost(params) {
        return Api().get('post/' + params.id)
    }
*/
};