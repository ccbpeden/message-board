import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  commentBody: DS.attr(),
  voteStatus: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
