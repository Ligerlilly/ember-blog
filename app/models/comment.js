import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  user: DS.attr(),
  post: DS.belongsTo('post', { async: true }),
  user: DS.belongsTo('user', { async: true }),
  createdAt: DS.attr('date'),
  updatatedAt: DS.attr('date')
});
