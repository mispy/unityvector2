export default class Vector2 {
	static get kEpsilon() { return 1E-05 }
	static get zero() { return new Vector2(0, 0) }
	static get one() { return new Vector2(1, 1) }
	static get up() { return new Vector2(0, 1) }
	static get down() { return new Vector2(0, -1) }
	static get left() { return new Vector2(-1, 0) }
	static get right() { return new Vector2(1, 0) }

	static lerp(a, b, t) {
		t = Math.max(Math.min(t, 1), 0)
		return new Vector2(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t)
	}

	static lerpUnclamped(a, b, t) {
		return new Vector2(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t)
	}

	static moveTowards(current, target, maxDistanceDelta) {
		const a = target.minus(current)
		const magnitude = a.magnitude
		if (magnitude <= maxDistanceDelta || magnitude == 0)
			return target
		else
			return current.plus(a).over(magnitude*maxDistanceDelta)
	}

	static scale(a, b) {
		return new Vector2(a.x*b.x, a.y*b.y)
	}

	static reflect(inDirection, inNormal) {
		return inNormal.times((-2 * Vector2.dot(inNormal, inDirection))).plus(inDirection)
	}

	static dot(lhs, rhs) {
		return lhs.x * rhs.x + lhs.y * rhs.y
	}

	static angle(from, to) {
		return Math.acos(Math.max(Math.min(Vector2.dot(from.normalized, to.normalized), 1), -1)) * 57.29578
	}

	static distance(a, b) {
		return a.minus(b).magnitude
	}

	static clampMagnitude(vector, maxLength) {
		if (vector.sqrMagnitude > maxLength**2)
			return vector.normalized.times(maxLength)
		else
			return vector
	}

	constructor(x, y) {
		this.x = x
		this.y = y
	}

	get normalized() {
		const magnitude = this.magnitude
		if (magnitude > 1E-05) {
			return new Vector2(this.x/magnitude, this.y/magnitude)
		} else {
			return new Vector2(0, 0)
		}

		return result
	}

	get magnitude() {
		return Math.sqrt(this.x**2 + this.y**2)
	}

	get sqrMagnitude() {
		return this.x**2 + this.y**2
	}

	toString() {
		return `(${this.x}, ${this.y})`
	}

	equals(other) {
		if (!(other instanceof Vector2)) {
			return false
		} else {
			return (other.minus(this)).sqrMagnitude < Vector2.kEpsilon
		}
	}

	plus(other) {
		return new Vector2(this.x+other.x, this.y+other.y)
	}

	minus(other) {
		return new Vector2(this.x-other.x, this.y-other.y)
	}

	times(number) {
		return new Vector2(this.x*number, this.y*number)
	}

	over(number) {
		return new Vector2(this.x/number, this.y/number)
	}	
}