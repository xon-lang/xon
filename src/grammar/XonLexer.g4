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

IS:      'is';
AS:      'as';
IF:      'if';
ELSE:    'else';
ELSE_IF: 'elif';
LOOP:    'loop';
IN:      'in';
BREAK:   'break';
RETURN:  'return';

PREPROCESSOR: '#{' .*? '}';
LINE_BREAK: ({this.atStartOfInput()}? Spaces | ( '\r'? '\n' | '\r') Spaces?) {this.handleLineBreak()}
    ;

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

BOOLEAN_LITERAL: 'true' | 'false';
FLOAT_LITERAL:
    [0-9][0-9]? 'x' AlphabetNumber '.' AlphabetNumber
    | DigitNumber '.' DigitNumber
    ;
INTEGER_LITERAL: [0-9][0-9]? 'x' AlphabetNumber | DigitNumber;
CHAR_LITERAL:    '\'' ~['] '\'';
STRING_LITERAL:  '"' StringCharacter* '"';

STRING_FORMAT_START:  '"' StringCharacter* '{';
STRING_FORMAT_MIDDLE: '}' StringCharacter* '{';
STRING_FORMAT_END:    '}' StringCharacter* '"';

ID: [a-zA-Z_]+;

SPACES:               Spaces                           -> skip;
COMMENT:              '//' ~[\r\n]*                    -> skip;
LINE_JOINING:         '\\' Spaces ( '\r'? '\n' | '\r') -> skip;
UNEXPECTED_CHARACTER: .                                -> channel(ERROR);

fragment Spaces:          [ \t]+;
fragment DigitNumber:     [0-9]+ ('_' [0-9]+)*;
fragment AlphabetNumber:  [0-9a-zA-Z]+ ('_' [0-9a-zA-Z]+)*;
fragment StringCharacter: ~["{] | '\\' ["{\\bfnrtv];