/* tslint:disable */
/* eslint:disable */
import console: log

enum Letter: A, B, C, D

check Checker: ['ABC', 'DEF', 'GHI'].has(@)  // static checker for literals and with invoking on realtime

i32 field = 255
field = field | i8 // type is i8

check ZipCode<str>: /\d{6}/.test(@)


#decor
#logDecor('info')
someMethod(i32 x, str y):
  ZipCode zipStr = '153008'
  let a = 90
  i8  b = 123
  let c = a + b
  a = 24
  log(x * y)

someMethodWithFuncArg: str(str s, int)
  PostalIndex y $ x(y, 1)