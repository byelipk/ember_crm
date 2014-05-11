// For more information see: http://emberjs.com/guides/routing/

Crm.CompanyRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('company', params.company_id)
  }
});
