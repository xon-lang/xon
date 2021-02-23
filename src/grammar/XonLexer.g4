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
// @ts-nocheck
import { XonLexerBase } from "./xon-lexer-base";
}

Prefix:  'prefix';
Postfix: 'postfix';
Infix:   'infix';
Is:      'is';
As:      'as';
If:      'if';
Else:    'else';
ElseIf:  'elif';
Loop:    'loop';
In:      'in';
Break:   'break';
Return:  'return';

Preprocessor: '#{' .*? '}';
LineBreak: ({this.atStartOfInput()}? SPACES | ( '\r'? '\n' | '\r') SPACES?) {this.handleLineBreak()}
    ;

OpenBracket:  '[' {this.opened++;};
CloseBracket: ']' {this.opened--;};
OpenParen:    '(' {this.opened++;};
CloseParen:   ')' {this.opened--;};
OpenBrace:    '{' {this.opened++;};
CloseBrace:   '}' {this.opened--;};
Comma:        ',';
Assign:       '=';
Question:     '?';
Colon:        ':';
Dot:          '.';
Plus:         '+';
Minus:        '-';
Exclamation:  '!';
Asterisk:     '*';
Slash:        '/';
Modulo:       '%';
Caret:        '^';
Hash:         '#';
LessThan:     '<';
MoreThan:     '>';
Ampersand:    '&';
Pipe:         '|';
Tilde:        '~';
Ad:           '@';
LambdaStart:  '\\';

BooleanLiteral: 'true' | 'false';
FloatLiteral:
    [0-9][0-9]? [xX] ALPHABET_NUMBER '.' ALPHABET_NUMBER
    | DIGIT_NUMBER '.' DIGIT_NUMBER
    ;
IntegerLiteral: [0-9][0-9]? [xX] ALPHABET_NUMBER | DIGIT_NUMBER;
CharLiteral:    '\'' ~['] '\'';
StringLiteral:  '"' STRING_CHARACTER* '"';

StringFormatStart:  '"' STRING_CHARACTER* '{';
StringFormatMiddle: '}' STRING_CHARACTER* '{';
StringFormatEnd:    '}' STRING_CHARACTER* '"';

ID: [a-zA-Z_] [a-zA-Z0-9_]*;

Spaces:              SPACES                           -> skip;
Comment:             '//' ~[\r\n]*                    -> skip;
LineJoining:         '\\' SPACES ( '\r'? '\n' | '\r') -> skip;
UnexpectedCharacter: .                                -> channel(ERROR);

fragment SPACES:           [ \t]+;
fragment DIGIT_NUMBER:     [0-9]+ ('_' | [0-9]+)*;
fragment ALPHABET_NUMBER:  [0-9a-zA-Z]+ ('_' [0-9a-zA-Z]+)*;
fragment STRING_CHARACTER: ~["{] | '\\' ["{\\bfnrtv];