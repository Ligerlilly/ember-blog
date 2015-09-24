import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  posts: DS.hasMany('post', { async: true}),
  comments: DS.hasMany('comment', { async: true}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
