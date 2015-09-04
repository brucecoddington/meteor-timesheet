Package.describe({
  summary: 'Contains the Facebook Flux base classes',
  version: '0.0.1'
});

Npm.depends({
  'lodash': '3.10.0',
  'flux': '2.0.3',
  'events': '1.0.2'
});

Package.onUse(function (api) {
  api.versionsFrom("1.1.0.3");

  api.use([
    "lodash",
    "cosmos:browserify"
  ], "client");

  api.addFiles([
    "flux.browserify.js",
    "flux.dispatcher.jsx",
    "flux.store.jsx"
  ], "client");

  api.export([
    "Store",
    "Dispatcher"
  ]);
});
