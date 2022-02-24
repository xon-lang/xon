

class someObjectFactory<T>(name String)
  arr: any = [123, 456, 789, 456, 789]
  abc: Integer

  method: (): MyType = 
    hello()
    bye()

  location: (x: Number, y: Number): Position = 
    pos(x, y)

  +: (it: SomeClass): AnotherClass = 
    log('fine!')

interface Array<T>
  +: (other: any): undefined
  *: (other: Integer): undefined