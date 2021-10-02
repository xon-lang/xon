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

OPEN_BRACKET:  '[' {this.opened++;};
CLOSE_BRACKET: ']' {this.opened--;};
OPEN_PAREN:    '(' {this.opened++;};
CLOSE_PAREN:   ')' {this.opened--;};
OPEN_BRACE:    '{' {this.opened++;};
CLOSE_BRACE:   '}' {this.opened--;};

IS:        'is';
AS:        'as';
IF:        'if';
IN:        'in';
OR:        'or';
FOR:       'for';
NOT:       'not';
AND:       'and';
ELSE:      'else';
INIT:      'init';
LOOP:      'loop';
TEST:      'test';
BREAK:     'break';
INFIX:     'infix';
WHILE:     'while';
ACTUAL:    'actual';
EXPECT:    'expect';
EXPORT:    'export';
IMPORT:    'import';
PREFIX:    'prefix';
RETURN:    'return';
POSTFIX:   'postfix';
CLASS:     'class';
LITERAL:   'literal';
INTERFACE: 'interface';

AT:          '@';
DOT:         '.';
PLUS:        '+';
HASH:        '#';
PIPE:        '|';
LESS:        '<';
COMMA:       ',';
COLON:       ':';
GREAT:       '>';
MINUS:       '-';
SLASH:       '/';
CARET:       '^';
TILDE:       '~';
EQUAL:       '=';
DOLLAR:      '$';
MODULO:      '%';
QUESTION:    '?';
ASTERISK:    '*';
AMPERSAND:   '&';
UNDERSCORE:  '_';
EXCLAMATION: '!';

BACK_SLASH: '\\';

NULL_LITERAL: 'null';
FLOAT_LITERAL:
    [0-9][0-9]? [xX] AlphabetNumber '.' AlphabetNumber
    | DigitNumber '.' DigitNumber
    ;
INTEGER_LITERAL: [0-9][0-9]? [xX] AlphabetNumber | DigitNumber;
BOOLEAN_LITERAL: 'true' | 'false';
CHAR_LITERAL:    '\'' ~['] '\'';
STRING_LITERAL:  '"' (~["] | '\\' ["\\bfnrtv])* '"';
PREPROCESSOR:    '#{' .*? '}';

ID: [_a-zA-Z] [_a-zA-Z0-9]*;

NL: ({this.atStartOfInput()}? WS | ( '\r'? '\n' | '\r') WS?) {this.handleLineBreak()}
    ;

WS:      [ \t]+        -> skip;
COMMENT: '--' ~[\r\n]* -> skip;

fragment DigitNumber:    [0-9]+ ('_' [0-9]+)*;
fragment AlphabetNumber: [0-9a-zA-Z]+ ('_' [0-9a-zA-Z]+)*;