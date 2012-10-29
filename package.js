Package.describe({
  summary: "Sugar.js, extends native objects with helpful methods."
});

Package.on_use(function (api, where) {
  api.add_files('lib/sugar/release/1.3.5/sugar-1.3.5-full.development.js', ['client', 'server']);
});