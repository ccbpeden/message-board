import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    editPost(post, params){
      this.sendAction('editPost', post, params);
    },
    deletePost(post){
      this.sendAction('deletePost', post);
    }
  }
});
