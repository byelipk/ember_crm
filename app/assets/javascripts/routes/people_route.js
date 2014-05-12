// For more information see: http://emberjs.com/guides/routing/

Crm.PeopleRoute = Ember.Route.extend({
  model: function() {
    // If no second param given, find() delegates to findAll()
    return this.store.find('person');
  }
});
