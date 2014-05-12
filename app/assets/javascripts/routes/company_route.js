// For more information see: http://emberjs.com/guides/routing/

Crm.CompanyRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('company', params.company_id)
  },

  beforeModel: function() {
    var controller = this.get('controller');

    // Check if the controller has been instantiated
    if (controller) {

      controller.set('isEditing', false);
      controller.send('dismissAllMessages');

      var oldModel = controller.get('model');

      if (oldModel && oldModel.get('isDirty')) {
        oldModel.rollback();
      }
    }
  }
});
