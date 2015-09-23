import Ember from 'ember';

export default Ember.Component.extend({
  sortByDate: ['createdAt:desc'],
  sortedByDatePosts: Ember.computed.sort('posts', 'sortByDate'),
  actions: {
    update(post, params) {
      this.sendAction('update', post, params);
    },
    destroyPost(post) {
      this.sendAction('destroyPost', post);

    }
  }
});
