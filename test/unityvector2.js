import Vector2 from '../src/unityvector2'
import {expect} from 'chai'

describe('Vector2', () => {
  it('static get kEpsilon', () => {
    expect(Vector2.kEpsilon).to.be.below(0.0001)
  })

  it('static Lerp(a, b, t)', () => {
    const v = Vector2.Lerp(new Vector2(1, 1), new Vector2(3, 3), 0.5)
    expect(v.Equals(new Vector2(2, 2))).to.be.true
  })

  it('static LerpUnclamped(a, b, t)', () => {
    const v = Vector2.LerpUnclamped(new Vector2(1, 1), new Vector2(3, 3), 2)
    expect(v.Equals(new Vector2(5, 5))).to.be.true
  })

  it('static MoveTowards(current, target, maxDistanceDelta)', () => {
    const v = Vector2.MoveTowards(new Vector2(1, 1), new Vector2(5, 5), 100)
    expect(v.Equals(new Vector2(5, 5))).to.be.true
  })

  it('static Scale(a, b)', () => {
    const v = Vector2.Scale(new Vector2(2, 2), new Vector2(2, 1))
    expect(v.Equals(new Vector2(4, 2))).to.be.true
  })

  it('static Reflect(inDirection, inNormal)', () => {
    const v = Vector2.Reflect(new Vector2(1, 2), new Vector2(2, 4))
    expect(v.Equals(new Vector2(-39, -78))).to.be.true
  })

  it('static Dot(lhs, rhs)', () => {
    const result = Vector2.Dot(new Vector2(1, 2), new Vector2(2, 3))
    expect(result).to.eq(8)
  })

  it('static Angle(from, to)', () => {
    const result = Vector2.Angle(new Vector2(0, 1), new Vector2(1, 0))
    expect(result-90).to.be.below(Vector2.kEpsilon)
  })

  it('static Distance(from, to)', () => {
    const result = Vector2.Distance(new Vector2(0, 0), new Vector2(0, 1))
    expect(result).to.eq(1)
  })

  it('static ClampMagnitude(vector, maxLength)', () => {
    const result = Vector2.ClampMagnitude(new Vector2(10, 10), 1)
    expect(result.magnitude-1).to.be.below(Vector2.kEpsilon)
  })

  it('has 0 and 1 properties', () => {
    const v = new Vector2(1, 1)
    expect(v[0]).to.eq(1)
    expect(v[1]).to.eq(1)
    v[0] = 2
    v[1] = 3
    expect(v[0]).to.eq(2)
    expect(v[1]).to.eq(3)
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

  it('Equals(other)', () => {
    const a = new Vector2(1, 1)
    const b = new Vector2(1, 1)
    const c = new Vector2(2, 2)

    expect(a.Equals(b)).to.be.true
    expect(a.Equals(c)).to.be.false
  })

  it('Add(other)', () => {
    const a = new Vector2(0, 1)
    const b = new Vector2(1, 2)

    expect(a.Add(b).Equals(new Vector2(1, 3))).to.be.true
  })

  it('Subtract(other)', () => {
    const a = new Vector2(1, 3)
    const b = new Vector2(0, 1)

    expect(a.Subtract(b).Equals(new Vector2(1, 2))).to.be.true
  })

  it('Multiply(number)', () => {
    const a = new Vector2(1, 2)
    expect(a.Multiply(10).Equals(new Vector2(10, 20))).to.be.true
  })

  it('Divide(number)', () => {
    const a = new Vector2(10, 20)
    expect(a.Divide(10).Equals(new Vector2(1, 2))).to.be.true
  })
});
