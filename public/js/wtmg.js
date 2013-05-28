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
