Package.describe({
  name: 'unchained:core-products',
  version: '0.49.3',
  summary: 'Unchained Engine Core: Products',
  git: 'https://github.com/unchainedshop/unchained',
  documentation: 'README.md',
});

Package.onUse((api) => {
  api.versionsFrom('1.10');
  api.use('ecmascript');
  api.use('mongo');
  api.use('promise');
  api.use('dburles:factory@1.1.0');
  api.use('dburles:collection-helpers@1.1.0');
  api.use('aldeed:collection2@3.0.2');
  api.use('aldeed:schema-index@3.0.0');

  api.use('unchained:utils@0.49.3');
  api.use('unchained:core@0.49.3');
  api.use('unchained:core-files@0.49.3');
  api.use('unchained:core-users@0.49.3');
  api.use('unchained:core-pricing@0.49.3');
  api.use('unchained:core-warehousing@0.49.3');
  api.use('unchained:core-countries@0.49.3');

  api.mainModule('products.js', 'server');
});

Package.onTest((api) => {
  api.use('ecmascript');
  api.use('unchained:core-products');
  api.mainModule('products-tests.js');
});
