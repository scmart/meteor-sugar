Package.describe({
  summary: "Sugar.js, extends native objects with helpful methods."
});

Package.on_use(function (api, where) {
  api.add_files('lib/sugar.js', ['client', 'server']);
});