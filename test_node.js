var test = require('tape'),
  TerrariumStream = require('./').Node;

test('TerrariumStream.Node', function(t) {
  var stream = new TerrariumStream();
  t.ok(stream, 'stream is created');

  stream.on('data', function(d) {
    t.equal(d['1:0'][0].val, 1, 'emits the correct data');
  });

  stream.on('end', function() {
    t.end();
  });

  stream.write({ value: '//=1' });
});

test('TerrariumStream.Node Error', function(t) {
  var stream = new TerrariumStream();
  t.ok(stream, 'stream is created');

  stream.on('err', function(d) {
    if (d.error.toString().match(/foo/)) {
      t.pass('emits the correct data');
    }
  });

  stream.on('end', function() {
    t.end();
  });

  stream.write({ value: 'foo' });
});
