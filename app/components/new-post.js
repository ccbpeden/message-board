import Ember from 'ember';

export default Ember.Component.extend({
  showNewPostForm: false,
  actions: {
    postNew(){
      var params = {
        user: this.get('user'),
        title: this.get('title'),
        teaser: this.get('teaser'),
        postBody: this.get('postBody'),
        tag: this.get('tag')
      };
      console.log(params);
      this.sendAction('postNew', params);
      this.set('showNewPostForm', false);
    },
    showPostForm(){
      this.set('showNewPostForm', true);
    }
  }
});
