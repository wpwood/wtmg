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

    this.get('store').commit();

    this.set("name", "");
    this.set("age", "");
  },

  sortProperties: ['name'],

  sortAscending: true,

  filteredContent: (function() {
    return this.get('arrangedContent').filter(function(item, index) {
      return item.get('id') !== null;
    });
  }).property('content.@each')
});
