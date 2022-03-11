import { Any, Unknown, String, Number } from '@lib/core'
export class someObjectFactory<T> {
  arr: any
  abc: T

  constructor(name: String) {
    this.arr = [123, 456, 789, 456, 789]
  }

  method(x: Number, y: Number): (String | null) {
    this.hello()
    this.pos()
    return null
  }

  location(x: Number, y: Number): Number {
    this.method(x, y)
    return 123
  }

  hello() {
    throw new Error('Not implemented')
  }
  pos() {
    throw new Error('Not implemented')
  }
}

export class MyType {}

export class Position {}
