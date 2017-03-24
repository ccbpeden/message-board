import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions:{
    commentNew(params){
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      post.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return post.save();
      });
    },
    upvote(comment){
      comment.incrementProperty('voteStatus');
      comment.save();
    },
    downvote(comment){
      comment.decrementProperty('voteStatus');
      comment.save();

    }
  }
});
