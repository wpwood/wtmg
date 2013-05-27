App.Kid = DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number')
});

DS.RESTAdapter.configure('App.Kid', {
  sideloadAs: 'kids'
});

App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.create({
    namespace: 'api/v1.0'
  })
});

App.ApplicationController = Ember.Controller.extend({
  person: App.Person.create({firstName: "Bill", lastName: "Woodward"})
});

App.Router.reopen({
  location: "history"
});

App.Router.map(function () {
  this.resource("index", {path: "/"});
  this.resource("about", {path: "/about"}, function() {
    this.resource("kid", {path: ":kid_id"});
  });
  this.resource("contact", {path: "/contact"});
});

//App.initialize();
