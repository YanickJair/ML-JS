import {expect} from 'chai'
import {EuclideanDistance, ManhattanDistance, HammingDistance} from '../distance/Distance'

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
})

describe('Hamming Distance', () => {
    it('Should be 0.5', () => {
        const d = HammingDistance([1,2], [1,100])
        expect(d).to.be.equal(0.5)
    })
})
