import Ember from 'ember';

export default Ember.Component.extend({
  newComment: false,
  actions: {
    newCommentForm: function() {
      this.set('newComment', true);
    },
    saveComment: function() {
      var params = {
        post: this.get('post'),
        user: this.get('user'),
        body: this.get('body'),
        createdAt: new Date(),
        updatedAt: ""
      };
      this.sendAction('saveComment', params);
      this.set('newComment', false);

    }

  }
});
