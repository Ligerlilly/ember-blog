import Ember from 'ember';

export default Ember.Component.extend({
  editComment: false,
  actions: {
    updateCommentForm: function() {
      this.set('editComment', true);
    },
    updateComment: function(comment) {
      var params = {
        post: this.get('post'),
        user: this.get('user'),
        body: this.get('body'),
        createdAt: comment.get('createdAt'),
        updatedAt: new Date()
      };
      this.sendAction('updateComment', comment, params);
      this.set('editComment', false);

    }

  }
});
