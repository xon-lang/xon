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
// @ts-nocheck
import { XonLexerBase } from "./xon-lexer-base";
}

// PrimitiveDataType : 'i8' | 'i16' | 'i32' | 'i64' | 'i128' | 'u8' | 'u16' | 'u32' | 'u64' | 'u128' | 'bool' | 'char' | 'str' ;
As:       'as';
If:       'if';
Else:     'else';
ElseIf:   'elif';
Loop:     'loop';
In:       'in';
Pass:     'pass';
Continue: 'continue';
Break:    'break';
Return:   'return';
Select:   'select';
Init:     'init';

Preprocessor: '#{' .*? '}';
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
Tilde:                      '~';
Ad:                         '@';
Comma:                      ',';
Assign:                     '=';
Question:                   '?';
Colon:                      ':';
Dot:                        '.';
Plus:                       '+';
Minus:                      '-';
Exclamation:                '!';
Asterisk:                   '*';
Slash:                      '/';
Modulo:                     '%';
Caret:                      '^';
Hash:                       '#';
LessThan:                   '<';
MoreThan:                   '>';
LessThanEquals:             '<=';
MoreThanEquals:             '>=';
Equals:                     '==';
NotEquals:                  '!=';
And:                        '&&';
Or:                         '||';
AsteriskAssign:             '*=';
SlashAssign:                '/=';
PercentAssign:              '%=';
PlusAssign:                 '+=';
MinusAssign:                '-=';
LeftShiftArithmeticAssign:  '<<=';
RightShiftArithmeticAssign: '>>=';
BitAndAssign:               'and' '=';
BitXorAssign:               'xor' '=';
BitOrAssign:                'or' '=';
Pipe:                       '|';
Underscore:                 '_';
Elipsis:                    '...';
LambdaStart:                '\\';

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
fragment NUMBER:              ([0-9][0-9]? 'x' [0-9a-zA-Z]+ ('_' [0-9a-zA-Z]+)*) | ( [0-9]+ ('_' [0-9]+)*);
fragment CHARACTER:           ~['] | '\\' ['"\\bfnrtv];