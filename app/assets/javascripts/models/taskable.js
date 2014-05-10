// for more details see: http://emberjs.com/guides/models/defining-models/

Crm.Taskable = DS.Model.extend({
  task: DS.hasMany('task', { async: true })
});
