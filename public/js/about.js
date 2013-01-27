Wtmg.AboutRoute = Ember.Route.extend({
  model: function () {
    return Wtmg.Kid.find()
  }
});
