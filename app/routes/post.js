import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);

  },
  actions: {
    saveComment(params) {
      debugger
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      this.transitionTo('post');
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
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
