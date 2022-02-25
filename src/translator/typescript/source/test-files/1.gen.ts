export class someObjectFactory<T> {
  public arr: any = [123, 456, 789, 456, 789]
  public abc: Number

  constructor(name: String) {}

  public method(x: Number, y: Number): MyType {
    this.hello()
    this.pos()
  }

  public hello(): any {}

  public pos(): any {}

  public location(x: Number, y: Number): Position {
    this.method(x, y)
  }
}

export interface MyType {}

export interface Position {}