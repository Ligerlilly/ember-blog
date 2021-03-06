import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post, params) {
      debugger;
      this.sendAction('update', post, params);
    },
    delete(post) {
      if(confirm('Are you sure')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
