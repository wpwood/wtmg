var App = Ember.Application.create();

Person = Ember.Object.extend({
  firstName: null,
  lastName: null,
  name: function() {
    return this.get('firstName') + " " + this.get('lastName');
  }.property('firstName', 'lastName'),

  kids: null
});

App.ApplicationController = Ember.Controller.extend({
  person: Person.create({firstName: "Bill", lastName: "Woodward",
                         kids: ["Matt", "Aubrey", "Carly", "Delaney"]})
});

App.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

App.initialize();
