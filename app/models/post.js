import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  title: DS.attr(),
  teaser: DS.attr(),
  postBody: DS.attr(),
  tags: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});
