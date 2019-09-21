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
someMethod: i32 x, str y 
  ZipCode zipStr = '153008'
  let a = 90
  i8  b = 123
  let c = a + b
  a = 24
  log(x * y)

someMethodWithFuncArg: str(str, int) x,
  PostalIndex y $ x(y, 1)

                                      callLambda
    : $ someMethodWithFuncArg(\a b
                                  : a + b, 'some string')
          .length x : condition
                                  ? 34
                                  : 1 z
    : condition
      ? 34                  // else 0
        x = condition ? 24  // else nothing changed

                // subtypes Type
                PersonTypeWithSubTypes
                      : name
      : str location : street : str zipCode : Zip info : age
    : int tall : 0 weight : 0 isNormalWeight : \x t : this.info.tall
                - this.info.weight
            |
            x : [x - 5..x + 5].includes(100) isNormalWeight2 : \x t
    : this.info.tall
                - this.info.weight
            |
            x : [x - 5..x + 5].includes(100)

                    person : PersonTypeWithSubTypes {
name:
  'John', location : {street : 'San Francisco', zipCode : '153002'}, info : {
  age:
    34, tall : 178, weight : 80
  }
}
isNormal : person.info
               .isNormalWeight()

                   [0..5]

                   [0..58]
               .each(\i
                     : [].find(\x
                               : x == i)[]
                           .find(\x
                                 : x == i)[]
                           .find(\x
                                 : x == i))

                   i = 0 for (i = 0; i < 58; i++) {
  [].find(\x : x == i)
}

for (i = 0; i < 58; i++) {
  a = i[].find(\x : x == i)
}

console.log(x)