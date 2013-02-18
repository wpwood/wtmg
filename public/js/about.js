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

        record.on('didLoad', function() {
          console.log("Loaded!");
        });

        record.on('didCreate', function() {
          console.log("Created!");
        });

        record.on('didUpdate', function() {
          console.log("Updated!");
        });

        record.on('didDelete', function() {
          console.log("Deleted!");
        });

        record.on('becameError', function() {
          console.log("Errored!");
        });

        record.on('becameInvalid', function() {
          console.log("Invalidated!");
        });

        record.on('didLoad', function() {
          console.log("Loaded!");
        });

        App.store.commit();

        this.set("name", "");
        this.set("age", "");
    }
});
