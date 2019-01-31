var Minimize = require('minimize');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
    console.log(1234,this)
    if (this.cacheable) {
        this.cacheable();
    }
    var opts = loaderUtils.getOptions(this) || {};
    var minimize = new Minimize(opts);
   return `module.exports = `+  minimize.parse(source)
};
