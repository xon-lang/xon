lexer grammar XonLexer;

channels {
    ERROR
}

options {
    superClass = XonLexerBase;
}

tokens {
    INDENT,
    DEDENT
}

@lexer::header { 
import { XonLexerBase } from "./xon-lexer-base";
}

// PrimitiveDataType : 'i8' | 'i16' | 'i32' | 'i64' | 'i128' | 'u8' | 'u16' | 'u32' | 'u64' | 'u128' | 'bool' | 'char' | 'str' ;
As:       'as';
If:       'if';
Else:     'else';
Loop:     'loop';
In:       'in';
Pass:     'pass';
Continue: 'continue';
Break:    'break';
Return:   'return';
Select:   'select';

Preprocessor: '#:' ~[\r\n]+;
LineBreak:    ({this.atStartOfInput()}? SPACES | ( '\r'? '\n' | '\r') SPACES?) {this.handleLineBreak()};

BitAnd:                     'and';
BitOr:                      'or';
BitXor:                     'xor';
BitNot:                     'not';
RightShiftArithmetic:       '>>';
LeftShiftArithmetic:        '<<';
OpenBracket:                '[' {this.opened++;};
CloseBracket:               ']' {this.opened--;};
OpenParen:                  '(' {this.opened++;};
CloseParen:                 ')' {this.opened--;};
OpenBrace:                  '{' {this.opened++;};
CloseBrace:                 '}' {this.opened--;};
Ad:                         '@';
Comma:                      ',';
Assign:                     '=';
Question:                   '?';
Colon:                      ':';
Dot:                        '.';
Add:                        '+';
Substract:                  '-';
Not:                        '!';
Multiply:                   '*';
Divide:                     '/';
Modulo:                     '%';
Pow:                        '^';
Sharp:                      '#';
LessThan:                   '<';
MoreThan:                   '>';
LessThanEquals:             '<=';
MoreThanEquals:             '>=';
Equals:                     '==';
NotEquals:                  '!=';
And:                        '&&';
Or:                         '||';
MultiplyAssign:             '*=';
DivideAssign:               '/=';
ModuloAssign:               '%=';
AddAssign:                  '+=';
SubstractAssign:            '-=';
LeftShiftArithmeticAssign:  '<<=';
RightShiftArithmeticAssign: '>>=';
BitAndAssign:               'and' '=';
BitXorAssign:               'xor' '=';
BitOrAssign:                'or' '=';
LambdaStart:                '\\';
Pipe:                       '|';
Underscore:                 '_';
Spread:                     '...';

NullLiteral:    'null';
BooleanLiteral: 'true' | 'false';
NumberLiteral:  NUMBER | (NUMBER? '.' NUMBER);
StringLiteral:  '\'' CHARACTER* '\'';

StringFormatStart:  'f\'' CHARACTER* '{';
StringFormatMiddle: '}' CHARACTER* '{';
StringFormatEnd:    '}' CHARACTER* '\'';
ID:                 [a-zA-Z_] [a-zA-Z0-9_]*;

Skip:                ( SPACES | SINGLE_LINE_COMMENT | MULTI_LINE_COMMENT | LINE_JOINING) -> skip;
UnexpectedCharacter: .                                                                   -> channel(ERROR);

fragment SPACES:              [ \t]+;
fragment MULTI_LINE_COMMENT:  '/*' .*? '*/';
fragment SINGLE_LINE_COMMENT: '//' ~[\r\n]*;
fragment LINE_JOINING:        '\\' SPACES? ( '\r'? '\n' | '\r');
fragment NUMBER:              [0-9]+ ('_' [0-9]+)*;
fragment CHARACTER:           ~['] | '\\' ['"\\bfnrtv];