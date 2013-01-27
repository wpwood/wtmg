Wtmg.Person = Ember.Object.extend({
  firstName: null,
  lastName: null,
  name: function() {
    return this.get('firstName') + " " + this.get('lastName');
  }.property('firstName', 'lastName')
});
