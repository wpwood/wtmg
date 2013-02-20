App.Kid = DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number')
});

App.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create({
    namespace: 'api/v1.0',
    mappings: {
      kids: 'App.Kid'
    }
  })
});

App.reopen({
  store: App.Store.create()
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

App.initialize();
