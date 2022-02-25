export class someObjectFactory<T> {
  public arr: any = [123, 456, 789, 456, 789]
  public abc: Integer
  public hello(): any {

  }
  public bye(): any {

  }

  constructor(name: String){}

  public method(): MyType {
    this.hello()
    this.bye()
  }

  public location(x: Number, y: Number): Position {
    pos(x, y)
  }
}

export interface  MyType {}

export interface  Position {}