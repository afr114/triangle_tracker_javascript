describe('isTriangle', function() {

  it("is false if two sides of a triangle are not greater than the third side", function() {
    expect(isTriangle(2,2,8)).to.equal(false);
  });

  it("is true if two smallest sides of a triangle are greater than the largest side", function() {
    expect(isTriangle(3,6,8)).to.equal(true);
  });
});

describe('triangleTracker', function() {

  it("is not a triangle", function() {
    expect(triangleTracker(2,2,8)).to.equal("That is not a triangle.");
  });

  it("is an isosceles", function() {
    expect(triangleTracker(5,5,8)).to.equal("That is an isoceles triangle.");
  });

  it("is an equilateral", function() {
    expect(triangleTracker(5,5,5)).to.equal("That is an equilateral triangle.");
  });

  it("is a scalene", function() {
    expect(triangleTracker(13,9,14)).to.equal("That is a scalene triangle.");
  });
});
