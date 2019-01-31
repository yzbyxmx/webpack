
    (function(modules) {
      function require(fileName) {
        const fn = modules[fileName];

        const module = { exports : {} };

        fn(require, module, module.exports);

        return module.exports;
      }

      require('/Users/xumingxing/Desktop/webpack-demo/src/txt/test.txt');
    })({'/Users/xumingxing/Desktop/webpack-demo/src/txt/test.txt': function (require, module, exports) { "use strict";

console.log(12345); },})
  