Package.describe({
  summary: 'Contains root component',
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('templating', 'client');
  api.use('react', 'client');

  api.use([
    'app-tasks',
    'app'
  ], ['client', 'server']);

  api.addFiles('index.css', 'client');
  api.addFiles('index.html', 'client');
  api.addFiles('index.jsx', 'client');

});
