// For more information see: http://emberjs.com/guides/routing/

// Having a go at implementing each route hook for practice...

Crm.PeopleNewRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    console.log('beforeModel hook in PeopleNewRoute');

    // Clear out any messages when visiting a new model
    var controller = this.get('controller');

    if (controller) {
      controller.send('dismissAllMessages');
    }
  },

  model: function(params, transition, queryParams) {
    console.log('model hook in PeopleNewRoute');
    // Provide controller with a brand new Person object
    return this.store.createRecord('person');
  },

  afterModel: function(resolvedModel, transition, queryParams) {
    console.log('afterModel hook in PeopleNewRoute');
    this._super(resolvedModel, transition, queryParams);
  },

  activate: function() {
    console.log('Activated at PeopleNewRoute');
    this._super();
  },

  setupController: function(controller, model) {
    console.log('setupController hook in PeopleNewRoute');
    this._super(controller, model);
  },

  renderTemplate: function(controller, model) {
    console.log('renderTemplate hook in PeopleNewRoute');
    this._super(controller, model);
  },

  deactivate: function() {
    console.log('Leaving PeopleNewRoute');
    // Rollback any uncommitted changes we made to model when leaving the route
    var model = this.get('controller').get('model');

    // If the model isDirty `rollback()` will discard any unsaved changes
    model.rollback();

    // If 'isNew' property is true the record is in the new state.
    // A record will be in the new state when it has been created on
    // the client and the adapter has not yet reported that it was successfully
    // saved.
    if (model.get('isNew')) {
     model.deleteRecord();
    }
  }
});
