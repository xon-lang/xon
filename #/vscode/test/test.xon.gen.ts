export type A = {}

export type B = {}

export type Number = {}

export type Integer = Number & {}

export type String = {}
  const length: Integer

const a: A

export type Array<T extends Number = Integer> = {}
  const at: (index: Integer) => T

const __plus__: (a: Integer, b: Integer) => Integer
  const a: Integer
  return /* error test.xon:23:10 */

const arr: Array<Integer>

const foo: () => String
