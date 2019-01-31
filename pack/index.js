
    (function(modules) {
      function require(fileName) {
        const fn = modules[fileName];

        const module = { exports : {} };

        fn(require, module, module.exports);

        return module.exports;
      }

      require('./html/example.html');
    })({'./html/example.html': function (require, module, exports) { "use strict";

module.exports = "module.exports = <!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=X-UA-Compatible content=\"ie=edge\"><title>Document</title></head><body><div>this is a test</div></body></html>"; },})
  