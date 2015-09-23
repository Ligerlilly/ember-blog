import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment: function(params) {
      debugger
      this.sendAction('saveComment', params);
    }
  }
});
