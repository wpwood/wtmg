App = Ember.Application.create({
    store: DS.Store.create({
        revision: 11,
        adapter: DS.RESTAdapter.create()
    })
});
