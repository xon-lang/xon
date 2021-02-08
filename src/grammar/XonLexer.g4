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

Infix:  'infix';
Is:     'is';
As:     'as';
If:     'if';
Else:   'else';
ElseIf: 'elif';
Loop:   'loop';
In:     'in';
Break:  'break';
Return: 'return';

Preprocessor: '#{' .*? '}';
LineBreak: ({this.atStartOfInput()}? SPACES | ( '\r'? '\n' | '\r') SPACES?) {this.handleLineBreak()}
    ;

OpenBracket:    '[' {this.opened++;};
CloseBracket:   ']' {this.opened--;};
OpenParen:      '(' {this.opened++;};
CloseParen:     ')' {this.opened--;};
OpenBrace:      '{' {this.opened++;};
CloseBrace:     '}' {this.opened--;};
Comma:          ',';
Assign:         '=';
Question:       '?';
Colon:          ':';
Dot:            '.';
Plus:           '+';
Minus:          '-';
Exclamation:    '!';
Asterisk:       '*';
Slash:          '/';
Modulo:         '%';
Caret:          '^';
Hash:           '#';
LessThan:       '<';
MoreThan:       '>';
LessThanEquals: '<=';
MoreThanEquals: '>=';
Equals:         '==';
NotEquals:      '!=';
And:            '&&';
Or:             '||';
AsteriskAssign: '*=';
SlashAssign:    '/=';
PercentAssign:  '%=';
PlusAssign:     '+=';
MinusAssign:    '-=';
Pipe:           '|';
LambdaStart:    '\\';
Range:          '..';
Elipsis:        '...';

BooleanLiteral: 'true' | 'false';
FloatLiteral:
    [0-9][0-9]? 'x' ALPHABET_NUMBER '.' ALPHABET_NUMBER
    | DIGIT_NUMBER '.' DIGIT_NUMBER
    ;
IntegerLiteral: [0-9][0-9]? 'x' ALPHABET_NUMBER | DIGIT_NUMBER;
CharLiteral:    '\'' ~['] '\'';
StringLiteral:  '"' STRING_CHARACTER* '"';

StringFormatStart:  '"' STRING_CHARACTER* '{';
StringFormatMiddle: '}' STRING_CHARACTER* '{';
StringFormatEnd:    '}' STRING_CHARACTER* '"';

ID: [a-zA-Z_] [a-zA-Z0-9_]*;

Skip: (SPACES | SINGLE_LINE_COMMENT | MULTI_LINE_COMMENT | LINE_JOINING) -> skip
    ;
UnexpectedCharacter: . -> channel(ERROR);

fragment SPACES:              [ \t]+;
fragment MULTI_LINE_COMMENT:  '/*' .*? '*/';
fragment SINGLE_LINE_COMMENT: '//' ~[\r\n]*;
fragment LINE_JOINING:        '\\' SPACES? ( '\r'? '\n' | '\r');
fragment ALPHABET_NUMBER:     [0-9a-zA-Z]+ ('_' [0-9a-zA-Z]+)*;
fragment DIGIT_NUMBER:        [0-9]+ ('_' | [0-9]+)*;

fragment STRING_CHARACTER: ~["{] | '\\' ["{\\bfnrtv];