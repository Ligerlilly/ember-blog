import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    update: function(post, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    destroyPost(post) {
      post.get('comments').then(function(comments) {
        comments.forEach(function(comment) {
          comment.destroyRecord();
        });
     });
      post.destroyRecord();
      //  debugger
      this.transitionTo('index');
    }
  }
});
