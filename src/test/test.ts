import {expect} from 'chai'
import {EuclideanDistance, ManhattanDistance, HammingDistance} from '../lib/Distance'
import {LinearRegression} from '../lib/LinearRegression'
import {Estimator} from '../lib/Estimators'
import {dataType} from '../utils/helper'

describe('Euclidean Distance', () => {
    it('Should Return a 3.605551275463989', () => {
        const d = EuclideanDistance([1, 2], [4, 0])
        expect(d).to.be.equal(3.605551275463989)
    })
})

describe('Manhattan Distance', () => {
    it('Should be equal to 13', () => {
        const d = ManhattanDistance([5,4,3], [1,7,9])
        expect(d).to.be.equal(13)
    })
})

describe('Manhattan Distance', () => {
    it('Should be equal to 5', () => {
        const d = ManhattanDistance([1,2], [4,0])
        expect(d).to.be.equal(5)
    })
})

describe('Hamming Distance', () => {
    it('Should be 0.3333333333333333', () => {
        const d = HammingDistance([5,4,9], [1,7,9])
        expect(d).to.be.equal(0.3333333333333333)
    })
    it('Should be 0.5', () => {
        const d = HammingDistance([1,2], [1,100])
        expect(d).to.be.equal(0.5)
    })
})


describe('Line', () => {
    it('should be [54, 66, 78, 90, 102, 114, 126, 138, 150, 162, 174, 186]', () => {
        const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        const _math = new LinearRegression()
        const y = _math.Line(months, 12, 42)
        expect(y).to.deep.equal([54, 66, 78, 90, 102, 114, 126, 138, 150, 162, 174, 186])
    })
})

describe('Loss', () => {
    let x = [1, 2, 3]
    let y = [5, 1, 3]
    const _math = new LinearRegression()
    it('should be 17', () => {
        const line = _math.Line(x, 1, 0)
        const loss = _math.Loss(y, line)
        expect(loss).to.be.equal(17)
    })
    it('should be 13.5', () => {
        const line = _math.Line(x, 0.5, 1)
        const loss = _math.Loss(y, line)
        expect(loss).to.be.equal(13.5)
    })
})

describe('Gradient Descent', () => {
    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    let revenue = [52, 74, 79, 95, 115, 110, 129, 126, 147, 146, 156, 184]
    const _math = new LinearRegression()
    const {b, m} = _math.GradientDescent(months, revenue, 0, 100)
    it('b - should be 18.970382485915874', () => {
        expect(b).to.be.equal(18.970382485915874)
    })
    it('m - should be 14.15401609486821', () => {
        expect(m).to.be.equal(14.15401609486821)
    })
})

describe('Data Type', () => {
    it('Shoud return Number', () => {
        const res = dataType(1230)
        expect(res).to.be.equal('number')
    }) 
})

describe('Estimators', () => {
    const solids_reduction = [3,7,11,15,18,27,29,30,30,31,31,32,33,33,34,36,36,
        36,37,38,39,39,39,40,41,42,42,43,44,45,46,47,50]
    const oxygen_demand = [5,11,21,16,16,28,27,25,35,30,40,32,34,32,34,37,38,
        34,36,38,37,36,45,39,41,40,44,37,44,46,46,49,51]
    const estimator = new Estimator(solids_reduction, oxygen_demand)
    const current_b1 = estimator.CurrentSlope()
    const current_b0 = estimator.CurrentIntercept(current_b1)
    describe('Current b1 (Slope)', () => {
        it('Should return 0.9036432105793231', () => {
            expect(current_b1).to.be.equal(0.9036432105793231)
        })
    })
    describe('Current b0 (intercept)', () => {
        it('Should return 3.829633197588709', () => {
            expect(current_b0).to.be.equal(3.829633197588709)
        })
    })

    describe('Variance', () => {
        it('Should return 10.4299', () => {
            const {mse} = estimator.MeanSquaredError()
            expect(mse).to.be.equal(10.429)
        })
    })
    
})

