turf-crosstrack
============
Find the distance between a point and a line segment

### Install

````
npm install turf-crosstrack
````

### Parameters

|name|type|description|
|---|---|---|
| lineStart | point | start coordinate of the line |
| lineEnd | point | end coordinate of the line |
| point | point | point to measure distance from |
| units | string | units of result ('miles', 'kilometers', 'degrees' or 'radians') |

### Usage

````
crosstrack(lineStart, lineEnd, point, units)
````

### Example

````
var point = require("turf-point"),
    crosstrack = require("turf-crosstrack");

var a = point(-114.96, 36.87),
    b = point(-98.79, 46.07),
    c = point(-103.35, 36.88);

var pointToLineDistance = crosstrack(a, b, c, 'miles');

console.log(pointToLineDistance);
````

### Credits
Formula via http://www.movable-type.co.uk/scripts/latlong.html