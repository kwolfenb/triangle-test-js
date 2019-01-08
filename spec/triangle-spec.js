import { Triangle } from './../src/triangle.js';
describe('Triangle', function() {
  var reusableTriangle;

  beforeEach(function() {
    reusableTriangle = new Triangle(5,5,5);
  });

  it('should show how beforeEach works', function() {
    console.log(reusableTriangle);
  });

  it('should test whether a Triangle has three sides', function() {
    expect(reusableTriangle.side1).toEqual(5);
    expect(reusableTriangle.side2).toEqual(5);
    expect(reusableTriangle.side3).not.toEqual(6);
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  it('should determine whether a triangle with 3 equal sides is equalateral', function() {
    expect(reusableTriangle.isEqualateral()).toEqual("this is equalateral");
  });
});