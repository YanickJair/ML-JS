"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Distance_1 = require("../distance/Distance");
const _math_1 = require("../_Math/_math");
const helper_1 = require("../utils/helper");
describe('Euclidean Distance', () => {
    it('Should Return a 3.605551275463989', () => {
        const d = Distance_1.EuclideanDistance([1, 2], [4, 0]);
        chai_1.expect(d).to.be.equal(3.605551275463989);
    });
});
describe('Manhattan Distance', () => {
    it('Should be equal to 13', () => {
        const d = Distance_1.ManhattanDistance([5, 4, 3], [1, 7, 9]);
        chai_1.expect(d).to.be.equal(13);
    });
});
describe('Manhattan Distance', () => {
    it('Should be equal to 5', () => {
        const d = Distance_1.ManhattanDistance([1, 2], [4, 0]);
        chai_1.expect(d).to.be.equal(5);
    });
});
describe('Hamming Distance', () => {
    it('Should be 0.3333333333333333', () => {
        const d = Distance_1.HammingDistance([5, 4, 9], [1, 7, 9]);
        chai_1.expect(d).to.be.equal(0.3333333333333333);
    });
    it('Should be 0.5', () => {
        const d = Distance_1.HammingDistance([1, 2], [1, 100]);
        chai_1.expect(d).to.be.equal(0.5);
    });
});
describe('Line', () => {
    it('should be [54, 66, 78, 90, 102, 114, 126, 138, 150, 162, 174, 186]', () => {
        const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const _math = new _math_1._Math();
        const y = _math.Line(months, 12, 42);
        chai_1.expect(y).to.deep.equal([54, 66, 78, 90, 102, 114, 126, 138, 150, 162, 174, 186]);
    });
});
describe('Loss', () => {
    let x = [1, 2, 3];
    let y = [5, 1, 3];
    const _math = new _math_1._Math();
    it('should be 17', () => {
        const line = _math.Line(x, 1, 0);
        const loss = _math.Loss(y, line);
        chai_1.expect(loss).to.be.equal(17);
    });
    it('should be 13.5', () => {
        const line = _math.Line(x, 0.5, 1);
        const loss = _math.Loss(y, line);
        chai_1.expect(loss).to.be.equal(13.5);
    });
});
describe('Gradient Descent', () => {
    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let revenue = [52, 74, 79, 95, 115, 110, 129, 126, 147, 146, 156, 184];
    const _math = new _math_1._Math();
    const { b, m } = _math.GradientDescent(months, revenue, 0, 100);
    it('b - should be 18.970382485915874', () => {
        chai_1.expect(b).to.be.equal(18.970382485915874);
    });
    it('m - should be 14.15401609486821', () => {
        chai_1.expect(m).to.be.equal(14.15401609486821);
    });
});
describe('Data Type', () => {
    it('Shoud return Number', () => {
        const res = helper_1.dataType(1230);
        chai_1.expect(res).to.be.equal('number');
    });
});
describe('Data Frame', () => {
    it('should return ', () => { });
});
