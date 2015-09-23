import Ember from 'ember';

export default Ember.Component.extend({
  updatePost: false,
  actions: {
    updatePostForm: function() {
      this.set('updatePost', true);
    },
    update: function(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        createdAt: post.get('createdAt'),
        updatedAt: new Date()
      };
      debugger;
      this.set('updatePost', false);
      this.sendAction('update', post, params);


    }
  }
});
