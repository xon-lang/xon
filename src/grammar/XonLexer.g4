lexer grammar XonLexer
  ;

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

OPEN:  ('(' | '[' | '{') {this.opened++;};
CLOSE: (')' | ']' | '}') {this.opened--;};

FLOAT:   Radix AlphabetNumber '.' AlphabetNumber | DigitNumber '.' DigitNumber;
INTEGER: Radix AlphabetNumber | DigitNumber;
STRING:  '\'' (~['] | '\\' ['\\bfnrtv])* '\'';

OPERATOR: .+? {this.isOperator()}?;
COMMA:    ',';
ID:       [_a-zA-Z] [_a-zA-Z0-9]*;
NL:       ([\r\n] WS*)+ {this.handleLineBreak()};

WS:            [ \t]+                           -> skip;
LINE_COMMENT:  '--' ~[\r\n]*                    -> skip;
BLOCK_COMMENT: '/*' (BLOCK_COMMENT | .)*? '*/'  -> skip;
LINE_JOINING:  '\\' [ \t]* ('\r'? '\n' | '\r')? -> skip;

UNEXPECTED: .;

fragment Radix:          [0-9][0-9]? [xX];
fragment DigitNumber:    [0-9] ('_' | [0-9])*;
fragment AlphabetNumber: [0-9a-zA-Z] ('_' | [0-9a-zA-Z])*;
