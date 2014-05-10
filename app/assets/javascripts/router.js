// For more information see: http://emberjs.com/guides/routing/

Crm.Router.map(function() {
  // this.resource('posts');
  this.resource('companies', function() {
    this.resource('company', { path: '/:company_id' })
    this.route('new')
  });

  this.resource('people', function() {
    this.resource('person', { path: '/:person_id' })
    this.route('new')
  });
});
