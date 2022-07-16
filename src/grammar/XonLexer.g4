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

OPEN_BRACKET:  '[' {this.opened++;};
CLOSE_BRACKET: ']' {this.opened--;};
OPEN_PAREN:    '(' {this.opened++;};
CLOSE_PAREN:   ')' {this.opened--;};
OPEN_BRACE:    '{' {this.opened++;};
CLOSE_BRACE:   '}' {this.opened--;};

ACTUAL:   'actual';
BREAK:    'break';
CONTINUE: 'continue';
DO:       'do';
ELSE:     'else';
EXPECT:   'expect';
EXPORT:   'export';
FOR:      'for';
IF:       'if';
IMPORT:   'import';
RETURN:   'return';
WHILE:    'while';

ASSIGN:   '=';
COMMA:    ',';
META:     '::';
COLON:    ':';
QUESTION: (NL | WS)* '?';
DOT:      (NL | WS)* '.' (NL | WS)*;
LAMBDA:   (NL | WS)* '=>' (NL | WS)*;

FLOAT_LITERAL:   Radix AlphabetNumber '.' AlphabetNumber | DigitNumber '.' DigitNumber;
INTEGER_LITERAL: Radix AlphabetNumber | DigitNumber;
STRING_LITERAL:  '\'' (~['] | '\\' ['\\bfnrtv])* '\'';

PREPROCESSOR: '#{' (PREPROCESSOR | '{' .*? '}' | .)*? '}';

ID:    [_a-zA-Z] [_a-zA-Z0-9]*;
LESS:  '<';
GREAT: '>';
OP:    [!+-^*%&|] | '..' | '...' | '<=' | '>=' | '==' | '!=';

NL:           ([\r\n] WS*)+ {this.handleLineBreak()};
LINE_COMMENT: '--' ~[\r\n]*;

WS:            [ \t]+                                  -> channel(WHITESPACE);
BLOCK_COMMENT: '/*' (BLOCK_COMMENT | .)*? '*/'         -> channel(COMMENT_CHANNEL);
LINE_JOINING:  '\\' [ \t]* ( '\r'? '\n' | '\r' | '\f') -> skip;
UNEXPECTED:    .                                       -> channel(ERROR);

fragment Radix:          [0-9][0-9]? [xX];
fragment DigitNumber:    [0-9] ('_' | [0-9])*;
fragment AlphabetNumber: [0-9a-zA-Z] ('_' | [0-9a-zA-Z])*;
