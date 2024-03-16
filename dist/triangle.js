"use strict";
class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
}
const isEquilateral = (triangle) => {
    return triangle.side1 === triangle.side2 && triangle.side2 === triangle.side3;
};
const isIsosceles = (triangle) => {
    return triangle.side1 === triangle.side2 || triangle.side2 === triangle.side3 || triangle.side1 === triangle.side3;
};
const isScalene = (triangle) => {
    return triangle.side1 !== triangle.side2 && triangle.side2 !== triangle.side3 && triangle.side1 !== triangle.side3;
};
const isTriangle = (triangle) => {
    if (triangle.side1 > 0 && triangle.side2 > 0 && triangle.side3 > 0) {
        let side1_plus_side2 = (triangle.side1 + triangle.side2) >= triangle.side3;
        let side2_plus_side3 = (triangle.side2 + triangle.side3) >= triangle.side1;
        let side1_plus_side3 = (triangle.side1 + triangle.side3) >= triangle.side2;
        if (side1_plus_side2 && side2_plus_side3 && side1_plus_side3) {
            return true;
        }
    }
    return false;
};
let triangle = new Triangle(1, 2, 3);
console.log("Is a valid triangle? ", isTriangle(triangle));
console.log("is a isosceles triangle? ", isIsosceles(triangle));
console.log("is a scanelede triangle? ", isScalene(triangle));
console.log("is a equilateral triangle? ", isEquilateral(triangle));
