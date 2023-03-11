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

TOKEN
  : [0-9] [_0-9a-zA-Z]*
  | '\'' (~['] | '\\' ['\\bfnrtv])* '\''
  | .+? {this.isOperator()}?
  | [_a-zA-Z] [_a-zA-Z0-9]*
  ;

COMMA: ',';
NL:    ([\r\n] WS*)+ {this.handleLineBreak()};

WS:            [ \t]+                           -> skip;
LINE_COMMENT:  '--' ~[\r\n]*                    -> skip;
BLOCK_COMMENT: '/*' (BLOCK_COMMENT | .)*? '*/'  -> skip;
LINE_JOINING:  '\\' [ \t]* ('\r'? '\n' | '\r')? -> skip;

UNEXPECTED: .;
