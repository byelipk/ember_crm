// for more details see: http://emberjs.com/guides/controllers/
//= require ../mixins/messagable.js

Crm.CompanyController = Ember.ObjectController.extend( Crm.Savable, {
  isEditing: false,

  actions: {
    edit: function() {
      this.set('isEditing', true);
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
