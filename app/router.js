import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post', {path: '/posts/:post_id'});
  this.route('user', {path: '/users/:user_id'});
  this.route('login', {path: '/users/login'});
  this.route('sign-up', {path: '/users/new'});
});

export default Router;
