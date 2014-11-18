var test = require('tape'),
    crosstrack = require('./');

test('crosstrack', function(t){
  var pt1 = { 
    "type": "Feature",
    "geometry": {"type": "Point", "coordinates": [-114.96, 36.87]}
  }
  var pt2 = {
    "type": "Feature",
    "geometry": {"type": "Point", "coordinates": [-98.79, 46.07]}
  }
  var pt3 = {
    "type": "Feature",
    "geometry": {"type": "Point", "coordinates": [-103.35, 36.88]}
  }

  var distToLine = crosstrack(pt1, pt2, pt3, 'miles')

  t.ok(distToLine, 'should return a number')
  t.equal(distToLine, 402.27495505732935, 'should be about 402 miles')
  t.end()
})