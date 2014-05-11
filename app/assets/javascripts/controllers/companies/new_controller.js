// for more details see: http://emberjs.com/guides/controllers/

Crm.CompaniesNewController = Ember.Controller.extend({
  actions: {
    save: function() {
      // Get handle on controller
      var self = this;

      // Get model
      var model = self.get('model');

      // Check if model has changes
      if (model.get('isDirty')) {
        var properties = self.getProperties('name');
        model.setProperties(properties);

        model.save().then(function() {

          alert('Save successfull!');

        }, function() {

          alert('Save failed!');

        });
      }

    },

    cancel: function() {
      var self = this;
      var model = self.get('model');

      if (model && model.get('isDirty')) {
        model.rollback();
      }

      self.transitionToRoute('companies');
    }
  }
});
