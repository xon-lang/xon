lexer grammar XonLexer;

channels {
    ERROR,
    COMMENT_CHANNEL,
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

ABSTRACT:  'abstract';
ACTUAL:    'actual';
AS:        'as';
BREAK:     'break';
CLASS:     'class';
DO:        'do';
ELSE:      'else';
ENUM:      'enum';
EXPECT:    'expect';
EXPORT:    'export';
EXTENSION: 'extension';
FOR:       'for';
IF:        'if';
IMPORT:    'import';
IN:        'in';
INFIX:     'infix';
IS:        'is';
MODEL:     'model';
NOT:       'not';
OBJECT:    'object';
POSTFIX:   'postfix';
PREFIX:    'prefix';
RETURN:    'return';
TYPE:      'type';
WHILE:     'while';

AMPERSAND:   '&';
AND:         '&&';
ASSIGN:      '=';
ASTERISK:    '*';
AT:          '@';
BACK_SLASH:  '\\';
CARET:       '^';
COALESCING:  '?.';
COLON:       ':';
COMMA:       ',';
DOT:         '.';
EQUAL:       '==';
EXCLAMATION: '!';
GREAT_EQUAL: '>=';
GREAT:       '>';
HASH:        '#';
LESS_EQUAL:  '<=';
LESS:        '<';
MINUS:       '-';
MODULO:      '%';
NOT_EQUAL:   '!=';
OR:          '||';
PIPE:        '|';
PLUS:        '+';
QUESTION:    '?';
RANGE:       '..';
SLASH:       '/';
SPREAD:      '...';
TILDE:       '~';
UNDERSCORE:  '_';

FLOAT_LITERAL:
    Radix AlphabetNumber '.' AlphabetNumber
    | DigitNumber '.' DigitNumber
    ;
INTEGER_LITERAL: Radix AlphabetNumber | DigitNumber;
CHAR_LITERAL:    '\'' ~['] '\'';
STRING_LITERAL:  '"' (~["] | '\\' ["\\bfnrtv])* '"';
REGEX_LITERAL:   '`' (~[`] | '\\' [`\\])* '`';
PREPROCESSOR:    '#{' .*? '}';

ID: [$_a-zA-Z] [_a-zA-Z0-9]*;
NL: ({this.atStartOfInput()}? WS | ( '\r'? '\n' | '\r') WS?) {this.handleLineBreak()}
    ;

WS:            [ \t]+                 -> skip;
BLOCK_COMMENT: '--' ('--' | .)*? '--' -> channel(COMMENT_CHANNEL);
LINE_COMMENT:  '--' ~[\r\n]*          -> channel(COMMENT_CHANNEL);
UNEXPECTED:    .                      -> channel(ERROR);

fragment Radix:          [0-9][0-9]? [xX];
fragment DigitNumber:    [0-9] ('_' | [0-9])*;
fragment AlphabetNumber: [0-9a-zA-Z] ('_' | [0-9a-zA-Z])*;
