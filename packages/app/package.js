Package.describe({
  summary: 'Contains root component',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('react', 'client');
  api.use('app-tasks', 'client');

  //api.addFiles('properties.js', ['client', 'server']);
  api.addFiles('app.jsx', 'client');
  api.addFiles('routes.jsx', 'client');

  api.export([
    'App',
    'AppRoutes',
    //'Properties'
  ]);

});
