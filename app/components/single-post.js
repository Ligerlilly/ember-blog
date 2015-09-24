import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment: function(params) {
      this.sendAction('saveComment', params);
    },
    deleteComment: function(comment) {
      this.sendAction('deleteComment', comment);
    },
    updateComment(comment, params) {
      this.sendAction('updateComment', comment, params);
    }

  }
});
