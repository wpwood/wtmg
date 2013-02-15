App.AboutRoute = Ember.Route.extend({
  model: function () {
    return App.Kid.find();
  }
});

App.AboutController = Ember.ArrayController.extend({
    add: function() {
        console.log(this.get("name") + ", " + this.get("age"));
        this.set("name", "");
        this.set("age", "");
    }
});
