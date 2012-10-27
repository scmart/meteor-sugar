Package.describe({
  summary: "Sugar.js is a Javascript library that extends native objects with helpful methods. It is designed to be intuitive, unobtrusive, and let you do more with less code."
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server']
  api.add_files('lib/sugar/release/1.3.5/sugar-1.3.5-full.development.js', where);
});