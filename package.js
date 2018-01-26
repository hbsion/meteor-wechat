Package.describe({
  name: 'hbsion:wechat',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This is a library to use wechat js api, including get accessToken, get jsTicket, using wx library',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hbsion/meteor-wechat',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.0.1');
  api.use([
    'http',
    'underscore',
    'aldeed:collection2@2.3.3',
    'matb33:collection-hooks@0.7.13',
    'zimme:collection-timestampable@1.0.6'
  ]);
  api.use([
    'templating'
  ], 'client');
  api.export('WechatJs', 'server');
  api.export('WechatTokens', 'server');
  api.export('WechatJsTickets', 'server');

  api.addFiles('collections/wechat_js_tickets.js', ['client', 'server']);
  api.addFiles('collections/wechat_tokens.js', ['client', 'server']);
  api.addFiles('server/wechat.js', 'server');
  api.addFiles('client/templates/app.html', 'client');
  // api.use('ecmascript');
  // api.mainModule('wechat.js');
});

Package.onTest(function(api) {
  // api.use('ecmascript');
  // api.use('tinytest');
  // api.use('hbsion:wechat');
  // api.mainModule('wechat-tests.js');

  api.use('sanjo:jasmine@0.14.0');
  api.use('velocity:html-reporter@0.6.2');
  api.use('hbsion:wechat');

  api.addFiles('tests/server/collections/wechat_js_ticket_spec.js', 'server');
  api.addFiles('tests/server/collections/wechat_tokens_spec.js', 'server');
  api.addFiles('tests/server/wechat_spec.js', 'server');
});
