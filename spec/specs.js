describe('isTriangle', function() {
  it("is false if two sides of a triangle are not greater than the third side", function() {
    expect(isTriangle(2,2,8)).to.equal(false);
  });
});
