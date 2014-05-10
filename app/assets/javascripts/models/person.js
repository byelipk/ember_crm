// for more details see: http://emberjs.com/guides/models/defining-models/
//= require ./taskable

Crm.Person = Crm.Taskable.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    email: DS.attr('string'),
    city: DS.attr('string'),
    state: DS.attr('string'),

    fullName: function() {
      return this.get('firstName') + ' ' + this.get('lastName') ;
    }.property('firstName', 'lastName'),

    location: function() {
      var location = this.get('city') ;
      var state = this.get('state') ;

      if (state && state.trim().length > 0) {
        location += ', ' + state ;
      }

      return location ;
    }.property('city', 'state'),

    company: DS.belongsTo('company', { async: true })
});
