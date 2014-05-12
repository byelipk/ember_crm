// For more information see: http://emberjs.com/guides/routing/

Crm.PersonRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('person', params.person_id)
  },

  beforeModel: function() {
    var controller = this.get('controller');

    if (controller) {

      // Prepare controller
      controller.set('isEditing', false);
      controller.send('dismissAllMessages');

      // Clear any changes made to model
      var oldModel = controller.get('model');

      if (oldModel && oldModel.get('isDirty')) {
        oldModel.rollback();
      }
    }
  }
});
