export default class Vector2 {
  static get kEpsilon() { return 1E-05 }
  static get zero() { return new Vector2(0, 0) }
  static get one() { return new Vector2(1, 1) }
  static get up() { return new Vector2(0, 1) }
  static get down() { return new Vector2(0, -1) }
  static get left() { return new Vector2(-1, 0) }
  static get right() { return new Vector2(1, 0) }

  static Lerp(a, b, t) {
    t = Math.max(Math.min(t, 1), 0)
    return new Vector2(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t)
  }

  static LerpUnclamped(a, b, t) {
    return new Vector2(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t)
  }

  static MoveTowards(current, target, maxDistanceDelta) {
    const a = target.Subtract(current)
    const magnitude = a.magnitude
    if (magnitude <= maxDistanceDelta || magnitude == 0)
      return target
    else
      return current.Add(a).Divide(magnitude*maxDistanceDelta)
  }

  static Scale(a, b) {
    return new Vector2(a.x*b.x, a.y*b.y)
  }

  static Reflect(inDirection, inNormal) {
    return inNormal.Multiply((-2 * Vector2.Dot(inNormal, inDirection))).Add(inDirection)
  }

  static Dot(lhs, rhs) {
    return lhs.x * rhs.x + lhs.y * rhs.y
  }

  static Angle(from, to) {
    return Math.acos(Math.max(Math.min(Vector2.Dot(from.normalized, to.normalized), 1), -1)) * 57.29578
  }

  static Distance(a, b) {
    return a.Subtract(b).magnitude
  }

  static ClampMagnitude(vector, maxLength) {
    if (vector.sqrMagnitude > maxLength**2)
      return vector.normalized.Multiply(maxLength)
    else
      return vector
  }

  constructor(x, y) {
    this.x = x
    this.y = y
  }

  get 0() { return this.x }
  set 0(v) { this.x = v }
  get 1() { return this.y }
  set 1(v) { this.y = v }

  Set(newX, newY) {
    this.x = newX
    this.y = newY
  }

  get normalized() {
    const magnitude = this.magnitude
    if (magnitude > 1E-05) {
      return new Vector2(this.x/magnitude, this.y/magnitude)
    } else {
      return new Vector2(0, 0)
    }
  }

  get magnitude() {
    return Math.sqrt(this.x**2 + this.y**2)
  }

  get sqrMagnitude() {
    return this.x**2 + this.y**2
  }

  Scale(scale) {
    this.x *= scale.x
    this.y *= scale.y
  }

  Normalize() {
    const magnitude = this.magnitude
    if (magnitude > 1E-05) {
      this.x /= magnitude
      this.y /= magnitude
    } else {
      this.x = 0
      this.y = 0
    }
  }

  toString() {
    return `(${this.x}, ${this.y})`
  }

  Equals(other) {
    if (!(other instanceof Vector2)) {
      return false
    } else {
      return (other.Subtract(this)).sqrMagnitude < Vector2.kEpsilon
    }
  }

  Add(other) {
    return new Vector2(this.x+other.x, this.y+other.y)
  }

  Subtract(other) {
    return new Vector2(this.x-other.x, this.y-other.y)
  }

  Multiply(number) {
    return new Vector2(this.x*number, this.y*number)
  }

  Divide(number) {
    return new Vector2(this.x/number, this.y/number)
  }
}
