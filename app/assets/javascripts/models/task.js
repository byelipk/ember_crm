// for more details see: http://emberjs.com/guides/models/defining-models/

Crm.Task = DS.Model.extend({
  subject: DS.attr('string'),
  taskable: DS.belongsTo('taskable', { polymorphic: true })
});
