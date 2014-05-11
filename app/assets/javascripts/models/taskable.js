// for more details see: http://emberjs.com/guides/models/defining-models/

// We need to maually create the abstract model in order for the `task`
// property to become callable by both Company and Person.
Crm.Taskable = DS.Model.extend({
  tasks: DS.hasMany('task', { async: true })
});
