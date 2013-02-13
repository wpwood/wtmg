App.AboutRoute = Ember.Route.extend({
  model: function () {
    return App.Kid.find();
  }
});

App.AboutController = Ember.ArrayController.extend();