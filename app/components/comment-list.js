import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment: function(comment) {
      this.sendAction('deleteComment', comment);
    },
    updateComment(comment, params) {
      this.sendAction("updateComment", comment, params);
    }
  }
});
