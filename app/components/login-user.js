import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    login() {
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName')
      };
      this.sendAction('login',params);

    }
  }
});
