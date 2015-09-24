import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      params.post.save();
      this.transitionTo('post');
      window.location.reload();
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
      post.get('comments').forEach(function(comment) {
       comment.destroyRecord();
     });
      post.destroyRecord();
      this.transitionTo('index');
    },
    deleteComment: function(comment) {
      comment.destroyRecord();
      this.transitionTo('post');
    },
    updateComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          comment.set(key, params[key]);
        }
      });
      comment.save();
      this.transitionTo('post');
    }
  }
});
