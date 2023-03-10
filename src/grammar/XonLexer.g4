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

INTEGER:  [0-9] [_0-9a-zA-Z]*;
STRING:   '\'' (~['] | '\\' ['\\bfnrtv])* '\'';
OPERATOR: .+? {this.isOperator()}?;
ID:       [_a-zA-Z] [_a-zA-Z0-9]*;

COMMA: ',';
NL:    ([\r\n] WS*)+ {this.handleLineBreak()};

WS:            [ \t]+                           -> skip;
LINE_COMMENT:  '--' ~[\r\n]*                    -> skip;
BLOCK_COMMENT: '/*' (BLOCK_COMMENT | .)*? '*/'  -> skip;
LINE_JOINING:  '\\' [ \t]* ('\r'? '\n' | '\r')? -> skip;

UNEXPECTED: .;
