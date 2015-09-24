import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createUser() {
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName')
      };
      this.sendAction('createUser', params);
    }
  }
});
