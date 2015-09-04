Package.describe({
  summary: 'Contains root component',
  version: '0.0.1'
});

Npm.depends({
  "react-router": "1.0.0-beta3",
  'externalify': '0.1.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('templating', 'client');
  api.use('react', 'client');
  api.use('cosmos:browserify', 'client');

  api.use([
    'app-tasks',
    'app'
  ], ['client', 'server']);

  // api.addFiles('lib/index.browserify.options.json', 'client');
  // api.addFiles('lib/index.browserify.js', 'client');

  api.addFiles('index.less', 'client');
  api.addFiles('index.html', 'client');
  api.addFiles('index.jsx', 'client');

});
