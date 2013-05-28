App.Person = Ember.Object.extend({
  firstName: null,
  lastName: null,
  name: function() {
    return this.get('firstName') + " " + this.get('lastName');
  }.property('firstName', 'lastName')
});

App.Kid = Ember.Object.extend({
  name: null,
  age: null
});

App.Kid.reopenClass({
  findAll: function() {
    return $.getJSON("api/v1.0/kids").then(
      function(response) {
        var kids = [];
        response.kids.forEach(function (kid) {
          kids.push(App.Kid.create({
            id: kid.id,
            name: kid.name,
            age: kid.age
            }));
          });
        return kids;
      }
    );
  }
});
