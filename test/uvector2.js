import Vector2 from '../src/uvector2'
import {expect} from 'chai'

describe('Vector2', () => {
	it('static get kEpsilon', () => {
		expect(Vector2.kEpsilon).to.be.below(0.0001)
	})

	it('static lerp(a, b, t)', () => {
		const v = Vector2.lerp(new Vector2(1, 1), new Vector2(3, 3), 0.5)
		expect(v.equals(new Vector2(2, 2))).to.be.true
	})

	it('static lerpUnclamped(a, b, t)', () => {
		const v = Vector2.lerpUnclamped(new Vector2(1, 1), new Vector2(3, 3), 2)
		expect(v.equals(new Vector2(5, 5))).to.be.true
	})

	it('static moveTowards(current, target, maxDistanceDelta)', () => {
		const v = Vector2.moveTowards(new Vector2(1, 1), new Vector2(5, 5), 100)
		expect(v.equals(new Vector2(5, 5))).to.be.true
	})

	it('static scale(a, b)', () => {
		const v = Vector2.scale(new Vector2(2, 2), new Vector2(2, 1))
		expect(v.equals(new Vector2(4, 2))).to.be.true
	})

	it('static reflect(inDirection, inNormal)', () => {
		const v = Vector2.reflect(new Vector2(1, 2), new Vector2(2, 4))
		expect(v.equals(new Vector2(-39, -78))).to.be.true
	})

	it('static dot(lhs, rhs)', () => {
		const result = Vector2.dot(new Vector2(1, 2), new Vector2(2, 3))
		expect(result).to.eq(8)
	})

	it('static angle(from, to)', () => {
		const result = Vector2.angle(new Vector2(0, 1), new Vector2(1, 0))
		expect(result-90).to.be.below(Vector2.kEpsilon)
	})

	it('static distance(from, to)', () => {
		const result = Vector2.distance(new Vector2(0, 0), new Vector2(0, 1))
		expect(result).to.eq(1)
	})

	it('static clampMagnitude(vector, maxLength)', () => {
		const result = Vector2.clampMagnitude(new Vector2(10, 10), 1)
		expect(result.magnitude-1).to.be.below(Vector2.kEpsilon)
	})

	it('get normalized', () => {
		expect(new Vector2(1, 1).normalized.x).to.eq(0.7071067811865475)
		expect(new Vector2(1, 1).normalized.y).to.eq(0.7071067811865475)
	})

	it('get magnitude', () => {
		expect(new Vector2(1, 1).magnitude).to.eq(1.4142135623730951)
	})

	it('get sqrMagnitude', () => {
		expect(Math.sqrt(new Vector2(1, 1).sqrMagnitude)).to.eq(new Vector2(1, 1).magnitude)
	})

	it('equals(other)', () => {
		const a = new Vector2(1, 1)
		const b = new Vector2(1, 1)
		const c = new Vector2(2, 2)

		expect(a.equals(b)).to.be.true
		expect(a.equals(c)).to.be.false
	})

	it('plus(other)', () => {
		const a = new Vector2(0, 1)
		const b = new Vector2(1, 2)

		expect(a.plus(b).equals(new Vector2(1, 3))).to.be.true
	})

	it('minus(other)', () => {
		const a = new Vector2(1, 3)
		const b = new Vector2(0, 1)

		expect(a.minus(b).equals(new Vector2(1, 2))).to.be.true
	})

	it('times(number)', () => {
		const a = new Vector2(1, 2)
		expect(a.times(10).equals(new Vector2(10, 20))).to.be.true
	})

	it('over(number)', () => {
		const a = new Vector2(10, 20)
		expect(a.over(10).equals(new Vector2(1, 2))).to.be.true
	})

});
