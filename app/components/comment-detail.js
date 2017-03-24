import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    upvote(comment){
      this.sendAction('upvote', comment);
    },
    downvote(comment){
      this.sendAction('downvote', comment);
    }
  }
});
