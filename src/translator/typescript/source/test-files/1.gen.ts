export class someObjectFactory<T> {
  arr: any = [123, 456, 789, 456, 789]
  abc: Integer

  constructor(name: String) {}

  method(x: Number, y: Number): MyType {
    this.hello()
    this.pos()
  }

  hello(): any {}

  pos(): any {}

  location(x: Number, y: Number): Position {
    this.method(x, y)
  }
}

export interface MyType {}

export interface Position {}
