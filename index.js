// Formula via http://www.movable-type.co.uk/scripts/latlong.html

var bearing = require('turf-bearing'),
    distance = require('turf-distance');

function toRad(degree){
  return degree * Math.PI / 180;
}

module.exports = function(lineStart, lineEnd, point, units) {
  var R = 0;

  switch(units) {
    case 'miles':
      R = 3960;
      break;
    case 'kilometers':
      R = 6373;
      break;
    case 'degrees':
      R = 57.2957795;
      break;
    case 'radians':
    default:
      R = 1;
      break;
  }

  var c = distance(lineStart, point, units);

  var bearing1 = toRad(bearing(lineStart, point)),
      bearing2 = toRad(bearing(lineStart, lineEnd));

  return Math.abs(Math.asin(Math.sin(c/R)) * Math.sin(bearing1 - bearing2) * R);
}
