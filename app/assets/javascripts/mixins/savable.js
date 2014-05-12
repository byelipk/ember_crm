//= require ./messagable.js

Crm.Savable = Ember.Mixin.create(Crm.Messagable, {
  actions: {
    save: function() {
      var self = this;
      self.send('dismissAllMessages');
      
      var model = this.get('model');
      if (model.get('isDirty')) {
        model.save().then(function() {

          self.send('addSuccessMessage', 'Save successful!');
          // alert('Success!');

        }, function(data) {
          // alert("Fail!");
          if (data.errors) {
            var errors = data.errors;
            if (errors) {
              $.each(errors, function(key, errorGroup) {
                $.each(errorGroup, function(index, error){
                  self.send('addErrorMessage', error);
                })
              });
            }
          }
        });
      }
    }
  }
});
