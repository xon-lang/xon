lexer grammar XonLexer
  ;

channels {
  ERROR,
  WHITESPACE,
  COMMENT_CHANNEL
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

OPEN:  ('(' | '[' | '{') {this.opened++;};
CLOSE: (')' | ']' | '}') {this.opened--;};

LAMBDA: (NL | WS)? '=>' (NL | WS)?;

FLOAT:   Radix AlphabetNumber '.' AlphabetNumber | DigitNumber '.' DigitNumber;
INTEGER: Radix AlphabetNumber | DigitNumber;
STRING:  '\'' (~['] | '\\' ['\\bfnrtv])* '\'';

KEYWORD:  .+? { this.keywords.includes(this.text)}?;
OPERATOR: .+? { this.operators.includes(this.text)}?;

DOT:    '.';
META:   '::';
COMMA:  ',';
ASSIGN: '=';
COLON:  (NL | WS)? ':' (NL | WS)?;
ID:     [_a-zA-Z] [_a-zA-Z0-9]*;

NL:           ([\r\n] WS*)+ {this.handleLineBreak()};
LINE_COMMENT: '--' ~[\r\n]*;

WS:            [ \t]+                                  -> channel(WHITESPACE);
BLOCK_COMMENT: '/*' (BLOCK_COMMENT | .)*? '*/'         -> channel(COMMENT_CHANNEL);
LINE_JOINING:  '\\' [ \t]* ( '\r'? '\n' | '\r' | '\f') -> skip;
UNEXPECTED:    .                                       -> channel(ERROR);

fragment Radix:          [0-9][0-9]? [xX];
fragment DigitNumber:    [0-9] ('_' | [0-9])*;
fragment AlphabetNumber: [0-9a-zA-Z] ('_' | [0-9a-zA-Z])*;
