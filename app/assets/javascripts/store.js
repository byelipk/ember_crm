Crm.Store = DS.Store.extend({

});

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
Crm.ApplicationAdapter = DS.ActiveModelAdapter.extend({
  ajaxError: function(jqXHR) {
    var error = this._super(jqXHR);

    if (jqXHR && jqXHR.status === 422) {
      var jsonErrors = Ember.$.parseJSON(jqXHR.responseText)["errors"];
      return new DS.InvalidError(jsonErrors);
    } else {
      return error;
    }
  }
});

Crm.ApplicationSerializer = DS.ActiveModelSerializer.extend();
