Crm.Store = DS.Store.extend({

});

// Override the default adapter with the `DS.ActiveModelAdapter` which
// is built to work nicely with the ActiveModel::Serializers gem.
Crm.ApplicationAdapter = DS.ActiveModelAdapter.extend({

});

Crm.ApplicationSerializer = DS.ActiveModelSerializer.extend({
  
});
