// For more information see: http://emberjs.com/guides/routing/

Crm.CompaniesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('company');
  }
});
