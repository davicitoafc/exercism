var Triangle = function(a,b,c) { this.sides = [a,b,c].sort(); }

Triangle.prototype.kind = function() {

  var a = this.sides[0];
  var b = this.sides[1];
  var c = this.sides[2];

  if (a + b < c || c + a < b || b + c < a) {
    throw new Error;
  }

  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error;
  }

  if (b == a && a == c) {return "equilateral";}

  if (a == b || a == c || b == c ) {return "isosceles";}
  return "scalene";

}

module.exports = Triangle;
