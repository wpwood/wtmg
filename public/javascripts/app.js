var App = Ember.Application.create();

App.ApplicationController = Ember.Controller.extend({
    name: "Bill Woodward"
});
App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    })
  })
});

App.initialize();
