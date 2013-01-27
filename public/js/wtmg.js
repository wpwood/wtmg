var Wtmg = Ember.Application.create();

Wtmg.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});

Wtmg.Kid = DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number')
});

Wtmg.Person = Ember.Object.extend({
  firstName: null,
  lastName: null,
  name: function() {
    return this.get('firstName') + " " + this.get('lastName');
  }.property('firstName', 'lastName')
});

Wtmg.ApplicationController = Ember.Controller.extend({
  person: Wtmg.Person.create({firstName: "Bill", lastName: "Woodward"})
});

Wtmg.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

Wtmg.ApplicationRoute = Ember.Route.extend({
  model: function () {
    return Wtmg.Kid.find()
  }
});

Wtmg.initialize();
