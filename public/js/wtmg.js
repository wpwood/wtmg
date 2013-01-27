Wtmg.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});

Wtmg.Kid = DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number')
});

Wtmg.ApplicationController = Ember.Controller.extend({
  person: Wtmg.Person.create({firstName: "Bill", lastName: "Woodward"})
});

Wtmg.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

Wtmg.Router.reopen({
  location: "history"
});

Wtmg.Router.map(function () {
  this.route("index", {path: "/"})
  this.route("about", {path: "/about"})
  this.route("contact", {path: "/contact"})
});

Wtmg.initialize();
