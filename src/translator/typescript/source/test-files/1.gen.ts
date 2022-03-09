import { Any, Unknown } from '@lib/core'
export class someObjectFactory<T> {
  arr: any
  abc: Integer

  constructor(name: String) {
    this.arr = [123, 456, 789, 456, 789]
  }

  method(x: Number, y: Number): MyType {
    this.hello()
    this.pos()
  }

  location(x: Number, y: Number): Position {
    this.method(x, y)
  }

  hello()
  pos()
}

export interface MyType {}

export interface Position {}
