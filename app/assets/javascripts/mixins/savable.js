//= require ./messagable.js

Crm.Savable = Ember.Mixin.create(Crm.Messagable, {
  actions: {
    save: function() {
      var model = this.get('model');
      if (model.get('isDirty')) {
        var self = this;
        model.save().then(function() {

          self.send('addSuccessMessage', 'Save successful!');
          // alert('Success!');

        }, function(data) {
          // alert("Fail!");
          if (data.responseJSON && data.responseJSON.errors) {
            var errors = data.responseJSON.errors;
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
})
