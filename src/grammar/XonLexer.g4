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

IS:     'is';
NOT:    'not';
AS:     'as';
IF:     'if';
ELSE:   'else';
THEN:   'then';
LOOP:   'loop';
IN:     'in';
BREAK:  'break';
RETURN: 'return';

OPEN_BRACKET:  '[' {this.opened++;};
CLOSE_BRACKET: ']' {this.opened--;};
OPEN_PAREN:    '(' {this.opened++;};
CLOSE_PAREN:   ')' {this.opened--;};
OPEN_BRACE:    '{' {this.opened++;};
CLOSE_BRACE:   '}' {this.opened--;};
COMMA:         ',';
ASSIGN:        '=';
QUESTION:      '?';
COLON:         ':';
DOT:           '.';
PLUS:          '+';
MINUS:         '-';
EXCLAMATION:   '!';
ASTERISK:      '*';
SLASH:         '/';
MODULO:        '%';
CARET:         '^';
HASH:          '#';
LESS_THAN:     '<';
MORE_THAN:     '>';
AMPERSAND:     '&';
PIPE:          '|';
TILDE:         '~';
AD:            '@';
UNDERSCORE:    '_';
LAMBDA_START:  '\\';

FLOAT_LITERAL:
    [0-9][0-9]? 'x' AlphabetNumber '.' AlphabetNumber
    | DigitNumber '.' DigitNumber
    ;
INTEGER_LITERAL: [0-9][0-9]? 'x' AlphabetNumber | DigitNumber;
BOOLEAN_LITERAL: 'true' | 'false';
CHAR_LITERAL:    '\'' ~['] '\'';
STRING_LITERAL:  '"' (~["] | '\\' ["\\bfnrtv])* '"';
PREPROCESSOR:    '#{' .*? '}';
ID:              [a-zA-Z_]+;

NL: ({this.atStartOfInput()}? WS | ( '\r'? '\n' | '\r') WS?) {this.handleLineBreak()}
    ;

WS:      [ \t]+        -> skip;
COMMENT: '--' ~[\r\n]* -> skip;

fragment DigitNumber:    [0-9]+ ('_' [0-9]+)*;
fragment AlphabetNumber: [0-9a-zA-Z]+ ('_' [0-9a-zA-Z]+)*;