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
DO:        'do';
IF:        'if';
IN:        'in';
FOR:       'for';
ELSE:      'else';
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
EXTENSION: 'extension';
TYPE:      'type';
CLASS:     'class';
OBJECT:    'object';
ENUM:      'enum';
INTERFACE: 'interface';
NOT:       'not';

AT:          '@';
DOT:         '.';
RANGE:       '..';
SPREAD:      '...';
PLUS:        '+';
HASH:        '#';
PIPE:        '|';
LESS:        '<';
LESS_EQUAL:  '<=';
COMMA:       ',';
COLON:       ':';
GREAT:       '>';
GREAT_EQUAL: '>=';
MINUS:       '-';
SLASH:       '/';
CARET:       '^';
TILDE:       '~';
ASSIGN:      '=';
EQUAL:       '==';
NOT_EQUAL:   '!=';
MODULO:      '%';
QUESTION:    '?';
COALESCING:  '?.';
ASTERISK:    '*';
AMPERSAND:   '&';
AND:         '&&';
OR:          '||';
UNDERSCORE:  '_';
EXCLAMATION: '!';
BACK_SLASH:  '\\';

FLOAT_LITERAL:
    [0-9][0-9]? [xX] AlphabetNumber '.' AlphabetNumber
    | DigitNumber '.' DigitNumber [a-zA-Z]*
    ;
INTEGER_LITERAL: [0-9][0-9]? [xX] AlphabetNumber | DigitNumber [a-zA-Z]*;
CHAR_LITERAL:    '\'' ~['] '\'';
STRING_LITERAL:  '"' (~["] | '\\' ["\\bfnrtv])* '"';
REGEX_LITERAL:   '`' (~[`] | '\\' [`\\])* '`';
PREPROCESSOR:    '#{' .*? '}';

UPPER_ID: [A-Z] [_a-zA-Z0-9]*;
LOWER_ID: [_a-z] [_a-zA-Z0-9]*;

NL: ({this.atStartOfInput()}? WS | ( '\r'? '\n' | '\r') WS?) {this.handleLineBreak()}
    ;

WS:      [ \t]+        -> skip;
COMMENT: '--' ~[\r\n]* -> skip;

fragment DigitNumber:    [0-9]+ ('_' [0-9]+)*;
fragment AlphabetNumber: [0-9a-zA-Z]+ ('_' [0-9a-zA-Z]+)*;
