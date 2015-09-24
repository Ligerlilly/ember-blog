import Ember from 'ember';

export function fullName(params) {
  var first = params[0].get('firstName');
  var last = params[0].get('lastName');
  return first + " " + last
}

export default Ember.Helper.helper(fullName);
