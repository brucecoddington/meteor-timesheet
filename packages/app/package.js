Package.describe({
  summary: 'Contains root component',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('react', 'client');
  api.use('semantic:ui-css', 'client');
  api.use('app-tasks', 'client');

  api.addFiles('app.css', 'client');
  api.addFiles('app.jsx', 'client');

  api.export([
    'App'
  ]);

});
