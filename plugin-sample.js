function BellOnBundlerErrorPlugin() { };

BellOnBundlerErrorPlugin.prototype.apply = function (compiler) {
  if (typeof (process) !== 'undefined') {
    compiler.plugin('dnoe', function (stats) {
      if (stats.hasError()) {
        process.stderr.write('\x07');
      }
    });
    compiler.plugin('failed', function (err) {
      process.stderr.write('\x07');
    });
  }
}

module.exports = BellOnBundlerErrorPlugin;