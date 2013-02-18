App.AboutRoute = Ember.Route.extend({
  model: function () {
    return App.Kid.find();
  }
});

App.AboutController = Ember.ArrayController.extend({
    add: function() {
        var record;

        console.log(this.get("name") + ", " + this.get("age"));

        record = App.Kid.createRecord({
            name: this.get('name'),
            age: this.get('age')
        });

        App.store.commit();

        this.set("name", "");
        this.set("age", "");
    }
});
