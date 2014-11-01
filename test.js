var test = require('tape'),
  TerrariumStream = require('./');

test('TerrariumStream', function(t) {
  var stream = new TerrariumStream();
  t.ok(stream);

  stream.on('data', function(d) {
    t.equal(d['1:0'][0].val, 1, 'emits the correct data');
    t.end();
  });

  stream.write('//=1');
});
