// for more details see: http://emberjs.com/guides/models/defining-models/
//= require ./taskable

Crm.Company = Crm.Taskable.extend({
  name: DS.attr('string'),
  people: DS.hasMany('person', { async: true })
});
