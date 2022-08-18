class Vector {
  static Add(vec1, vec2) {
    return new Vector(vec1.x + vec2.x, vec1.y + vec2.y)
  }

  static Sub(vec1, vec2) {
    vec1.Invert()
    return new Vector(vec1.x + vec2.x, vec1.y = vec1.y + vec2.y)
  }

  static RandomUnit() {
    let tmp = new Vector(Math.floor(Math.random() * 13 + 1), Math.floor(Math.random() * 13 + 1))
    console.log(tmp);
    return tmp.Unit()
  }

  static Scale(vec, amt) {
    vec.x *= amt
    vec.y *= amt

    return vec
  }

  constructor(x, y) {
    this.x = x
    this.y = y
  }

  Invert() {
    this.x = this.x * -1
    this.y = this.y * -1
  }

  Add(vec) {
    vec.x = vec.x + this.x
    vec.y = vec.y + this.y
  }

  Mag() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }

  Unit() {
    let tmp = new Vector(this.x, this.y)
    let mag = this.Mag()
    tmp.x = tmp.x / mag
    tmp.y = tmp.y / mag

    return tmp
  }

  Scale(amt) {
    this.x *= amt
    this.y *= amt

    return this
  }
}

let vec1 = new Vector(3, 4)
let vec2 = new Vector(21, 2)
let vec3 = vec1.Unit()
console.log(Vector.RandomUnit())
console.log(Vector.Scale(vec2, 2));