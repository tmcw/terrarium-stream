var Terrarium = require('terrarium'),
  through = require('through');

function TerrariumStreamBrowser() {
  var t = null;
  return through(function write(data) {
    if (t) t.destroy();
    t = new Terrarium.Browser();
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

function TerrariumStreamNode() {
  var t = null;
  return through(function write(data) {
    if (t) t.destroy();
    t = new Terrarium.Node();
    if (!data.value) return;

    t.on('data', function(d) {
      this.emit('data', d);
    }.bind(this));
    t.on('err', function(d) {
      this.emit('err', d);
    }.bind(this));
    t.on('end', function(d) {
      this.emit('end');
    }.bind(this));

    t.run(data.value);
  }, function(end) {
    if (t) t.destroy();
    this.emit('end');
  });
}

module.exports.Node = TerrariumStreamNode;
module.exports.Browser = TerrariumStreamBrowser;
