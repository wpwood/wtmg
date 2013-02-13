App.ContactRoute = Ember.Route.extend({
  model: function () {
    return App.Kid.find();
  }
});

App.ContactController = Ember.ArrayController.extend();