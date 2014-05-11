// For more information see: http://emberjs.com/guides/routing/

Crm.CompaniesNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('company');
  },

  renderTemplate: function() {
    this.render('company/_edit');
  },

  deactivate: function() {
    // Get model from controller
    var model = this.get('controller').get('model');

    // Rollback any changes
    model.rollback();

    // Delete model from store when we leave route
    if (model.get('isNew')) {
      model.deleteRecord();
    }
  }
});
