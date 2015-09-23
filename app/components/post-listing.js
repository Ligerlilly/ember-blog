import Ember from 'ember';

export default Ember.Component.extend({
  sortByDate: ['createdAt:desc'],
  sortedByDatePosts: Ember.computed.sort('posts', 'sortByDate'),
  actions: {
    update(post, params) {
      debugger;
      this.sendAction('update', post, params);
    },
    destroyPost(post) {
      this.sendAction('destroyPost', post);

    }
  }
});
