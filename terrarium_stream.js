var Terrarium = require('terrarium'),
  through = require('through');

function TerrariumStream() {
  var t = null;
  return through(function write(data) {
    if (t) t.destroy();
    t = new Terrarium();
    if (!data.value) return;

    t.on('data', function(d) {
      this.emit('data', d);
    }.bind(this));
    t.on('err', function(d) {
      this.emit('err', d);
    }.bind(this));

    t.run(data.value);
  }, function(end) {
    if (t) t.destroy();
    this.emit('end');
  });
}

module.exports = TerrariumStream;
