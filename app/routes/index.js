import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    postNew(params){
      var newbPost = this.store.createRecord('post', params);
      newbPost.save();
    }
  }
});
