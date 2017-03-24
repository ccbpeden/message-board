import Ember from 'ember';

export default Ember.Component.extend({
  showNewCommentForm: false,
  actions: {
    showCommentForm(){
      this.set('showNewCommentForm', true);
    },
    commentNew(post){
      var params = {
        user: this.get('user'),
        commentBody: this.get('commentBody'),
        voteStatus: 0,
        post: this.get('post'),
      };
      this.sendAction('commentNew', params);
      this.set('showNewCommentForm', false);
    }
  }
});
