// for more details see: http://emberjs.com/guides/controllers/

Crm.CompanyController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },

    save: function() {
      // Get current model
      var model = this.get('model');

      // Check if model has changes
      if (model.get('isDirty')) {

        // Get a handle on the controller
        var self = this;

        model.save().then(function() {

          self.set('isEditing', false);

        }, function() {

          alert('Save failed!')

        });
      }
    },

    cancel: function() {
      // Get current model
      var model = this.get('model');

      if (model.get('isDirty')) {
        model.rollback();
      }

      this.set('isEditing', false);
    }
  }
});
