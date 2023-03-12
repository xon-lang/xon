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

COMMA: ',';
NL:    ([\r\n] WS*)+ {this.handleLineBreak()};

WS:            [ \t]+                          -> skip;
LINE_COMMENT:  '--' ~[\r\n]*                   -> skip;
BLOCK_COMMENT: '/*' (BLOCK_COMMENT | .)*? '*/' -> skip;

TOKEN: .;
