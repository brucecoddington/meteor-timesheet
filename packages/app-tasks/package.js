Package.describe({
  summary: 'Contains task management components',
  version: '0.0.1'
});

Npm.depends({
  'classnames': '2.1.3',
  'externalify': '0.1.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('react', 'client');
  api.use('cosmos:browserify', 'client');

  api.use([
    'mongo'
  ], ['client', 'server'])

  api.addFiles('lib/tasks.browserify.options.json', 'client');
  api.addFiles('lib/tasks.browserify.js', 'client');

  api.addFiles('tasks.collection.js', ['client', 'server']);
  api.addFiles('task.jsx', 'client');

  api.export([
    'Tasks',
    'Task'
  ]);
});
