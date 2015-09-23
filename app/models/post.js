import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  title: DS.attr(),
  author: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr()
});
