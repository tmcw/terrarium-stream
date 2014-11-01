var Terrarium = require('terrarium'),
  through = require('through');

function TerrariumStream() {
  var t = null;
  return through(function write(data) {
    if (t) t.destroy();
    t = new Terrarium();
    t.run(data);
    t.on('data', function(d) {
      this.emit('data', d);
    }.bind(this));
  }, function(end) {
    if (t) t.destroy();
    this.emit('end');
  });
}

module.exports = TerrariumStream;
