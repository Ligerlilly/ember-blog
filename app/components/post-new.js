import Ember from 'ember';

export default Ember.Component.extend({
  newPost: false,
  actions: {
    newPostForm: function() {
      this.set('newPost', true);
    },
    save: function() {

      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        createdAt: new Date(),
        updatedAt: ""
      };
      this.sendAction('save', params);
      this.set('newPost', false);

    }

  }
});
