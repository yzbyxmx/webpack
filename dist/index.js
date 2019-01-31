
    (function(modules) {
      function require(fileName) {
        const fn = modules[fileName];

        const module = { exports : {} };

        fn(require, module, module.exports);

        return module.exports;
      }

      require('./example/index.js');
    })({'./example/index.js': function (require, module, exports) { "use strict";

var _message = _interopRequireDefault(require("./message.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

alert(_message.default); },'./message.js': function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _info = require("./info.js");

var _default = "hello ".concat(_info.nickname);

exports.default = _default; },'./info.js': function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nickname = void 0;
var nickname = 'ben';
exports.nickname = nickname; },})
  