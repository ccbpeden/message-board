import Ember from 'ember';

export default Ember.Component.extend({
  showEditPostForm: false,
  actions: {
    showEditForm(){
      this.set('showEditPostForm', true);
    },
    editPost(post){
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        teaser: this.get('teaser'),
        postBody: this.get('postBody'),
        tag: this.get('tag')
      };
      this.sendAction('editPost', post, params);
      this.set('showEditPostForm', false);
    }
  }
});
