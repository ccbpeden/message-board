import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions:{
    editPost(post, params){
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
    },
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
    },
    delete(comment){
      if (confirm("Are you absolutely, positively sure that you want to delete this comment? I think it's some of your best work!")) {
      comment.destroyRecord();
      }
    }
  }
});
