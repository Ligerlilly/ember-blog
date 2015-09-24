import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  title: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  comments: DS.hasMany('comment', { async: true }),
  user: DS.belongsTo('user', { async: true })
});
