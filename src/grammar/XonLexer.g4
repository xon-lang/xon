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
NL:    ([\r\n] [ \t]*)+ {this.handleLineBreak()};

LINE_COMMENT: '--' ~[\r\n]* -> skip;

TOKEN: .;
