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
AS:     'as';
IF:     'if';
IN:     'in';
OR:     'or';
NOT:    'not';
AND:    'and';
ELSE:   'else';
LOOP:   'loop';
INIT:   'init';
VOID:   'void';
BREAK:  'break';
RETURN: 'return';

OPEN_BRACKET:  '[' {this.opened++;};
CLOSE_BRACKET: ']' {this.opened--;};
OPEN_PAREN:    '(' {this.opened++;};
CLOSE_PAREN:   ')' {this.opened--;};
OPEN_BRACE:    '{' {this.opened++;};
CLOSE_BRACE:   '}' {this.opened--;};

AD:    '@';
PLUS:  '+';
HASH:  '#';
PIPE:  '|';
COMMA: ',';
COLON: ':';
MINUS: '-';
SLASH: '/';
CARET: '^';
TILDE: '~';

SPREAD: '...';
RANGE:  '..';
DOT:    '.';

LESS_THAN_EQUAL: '<=';
MORE_THAN_EQUAL: '>=';
LESS_THAN:       '<';
MORE_THAN:       '>';

ASSIGN:    '=';
EQUAL:     '==';
NOT_EQUAL: '!=';

BIT_AND: '&&';
BIT_OR:  '||';
BIT_XOR: '^^';

LAMBDA:      '\\';
MODULO:      '%';
QUESTION:    '?';
ASTERISK:    '*';
UNDERSCORE:  '_';
EXCLAMATION: '!';

FLOAT_LITERAL:
    [0-9][0-9]? 'x' AlphabetNumber '.' AlphabetNumber
    | DigitNumber '.' DigitNumber
    ;
INTEGER_LITERAL: [0-9][0-9]? 'x' AlphabetNumber | DigitNumber;
BOOLEAN_LITERAL: 'true' | 'false';
CHAR_LITERAL:    '\'' ~['] '\'';
STRING_LITERAL:  '"' (~["] | '\\' ["\\bfnrtv])* '"';
PREPROCESSOR:    '#{' .*? '}';

ID: [_a-zA-Z]+;

NL: ({this.atStartOfInput()}? WS | ( '\r'? '\n' | '\r') WS?) {this.handleLineBreak()}
    ;

WS:      [ \t]+        -> skip;
COMMENT: '--' ~[\r\n]* -> skip;

fragment DigitNumber:    [0-9]+ ('_' [0-9]+)*;
fragment AlphabetNumber: [0-9a-zA-Z]+ ('_' [0-9a-zA-Z]+)*;