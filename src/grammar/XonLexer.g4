lexer grammar XonLexer
    ;

channels {
    ERROR
}

MultiLineComment:  '/*' .*? '*/'             -> channel(HIDDEN);
SingleLineComment: '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN);

// PrimitiveDataType : 'i8' | 'i16' | 'i32' | 'i64' | 'i128' | 'u8' | 'u16' | 'u32' | 'u64' | 'u128' | 'bool' | 'char' | 'str' ;
If: 'if';
Loop: 'loop';
In: 'in';

OpenBracket:                '[';
CloseBracket:               ']';
OpenParen:                  '(';
CloseParen:                 ')';
OpenBrace:                  '{';
CloseBrace:                 '}';
SemiColon:                  ';';
Comma:                      ',';
Assign:                     '=';
QuestionMark:               '?';
Colon:                      ':';
Ellipsis:                   '...';
Dot:                        '.';
PlusPlus:                   '++';
MinusMinus:                 '--';
Plus:                       '+';
Minus:                      '-';
BitNot:                     '~';
Not:                        '!';
Multiply:                   '*';
Divide:                     '/';
Modulus:                    '%';
RightShiftArithmetic:       '>>';
LeftShiftArithmetic:        '<<';
RightShiftLogical:          '>>>';
LessThan:                   '<';
MoreThan:                   '>';
LessThanEquals:             '<=';
GreaterThanEquals:          '>=';
Equals:                     '==';
NotEquals:                  '!=';
BitAnd:                     '&';
BitXOr:                     '^';
BitOr:                      '|';
And:                        '&&';
Or:                         '||';
MultiplyAssign:             '*=';
DivideAssign:               '/=';
ModulusAssign:              '%=';
PlusAssign:                 '+=';
MinusAssign:                '-=';
LeftShiftArithmeticAssign:  '<<=';
RightShiftArithmeticAssign: '>>=';
RightShiftLogicalAssign:    '>>>=';
BitAndAssign:               '&=';
BitXorAssign:               '^=';
BitOrAssign:                '|=';
LambdaStart:                '\\';

BooleanLiteral:   'true' | 'false';
DecimalLiteral:   DECIMAL_NUMBER;
FloatLiteral:     DECIMAL_NUMBER '.' DECIMAL_NUMBER;
StringLiteral:    '"' ~[\r\n"]* '"';
CharacterLiteral: '\'' ~[\r\n'] '\'';

LambdaParam: '$' DECIMAL_DIGIT;
ID:          [a-zA-Z_] [a-zA-Z0-9_]*;

WhiteSpaces:         [\r\n\t ]+ -> channel(HIDDEN);
UnexpectedCharacter: .          -> channel(ERROR);

fragment DECIMAL_NUMBER: DECIMAL_DIGIT+ ('_' DECIMAL_DIGIT+)*;
fragment DECIMAL_DIGIT:  [0-9];