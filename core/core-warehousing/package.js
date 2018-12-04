/* globals Package */
Package.describe({
  name: 'unchained:core-warehousing',
  version: '0.15.0',
  summary: 'Unchained Engine Core: Warehousing',
  git: '',
  documentation: 'README.md',
});

Package.onUse((api) => {
  api.versionsFrom('1.8');
  api.use('ecmascript');
  api.use('mongo');
  api.use('promise');
  api.use('dburles:factory@0.1.9');
  api.use('dburles:collection-helpers@0.1.6');
  api.use('unchained:utils@0.15.0');
  api.use('unchained:core-logger@0.15.0');

  api.mainModule('warehousing.js', 'server');
});

Package.onTest((api) => {
  api.use('ecmascript');
  api.use('unchained:core-warehousing');
  api.mainModule('warehousing-tests.js');
});
