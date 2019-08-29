lexer grammar AsmLexer;

channels {
    ERROR
}

MultiLineComment: '/*' .*? '*/' -> channel(HIDDEN);

SingleLineComment: '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN);

AsmCode: '::{' .*? '}';

OpenBracket: '[';

CloseBracket: ']';

OpenParen: '(';

CloseParen: ')';

OpenBrace: '{';

CloseBrace: '}';

SemiColon: ';';

Comma: ',';

Assign: '=';

QuestionMark: '?';

Colon: ':';

Ellipsis: '...';

Dot: '.';

PlusPlus: '++';

MinusMinus: '--';

Plus: '+';

Minus: '-';

BitNot: '~';

Not: '!';

Multiply: '*';

Divide: '/';

Modulus: '%';

RightShiftArithmetic: '>>';

LeftShiftArithmetic: '<<';

RightShiftLogical: '>>>';

LessThan: '<';

MoreThan: '>';

LessThanEquals: '<=';

GreaterThanEquals: '>=';

Equals: '==';

NotEquals: '!=';

IdentityEquals: '===';

IdentityNotEquals: '!==';

BitAnd: '&';

BitXOr: '^';

BitOr: '|';

And: '&&';

Or: '||';

MultiplyAssign: '*=';

DivideAssign: '/=';

ModulusAssign: '%=';

PlusAssign: '+=';

MinusAssign: '-=';

LeftShiftArithmeticAssign: '<<=';

RightShiftArithmeticAssign: '>>=';

RightShiftLogicalAssign: '>>>=';

BitAndAssign: '&=';

BitXorAssign: '^=';

BitOrAssign: '|=';

/// Keywords
MOV: 'mov';

ADD: 'add';

GPR_REG: GPR_REG_64 | GPR_REG_32 | GPR_REG_16 | GPR_REG_8;

GPR_REG_64: 'rax' | 'rbx' | 'rcx' | 'rdx';

GPR_REG_32: 'eax' | 'ebx' | 'ecx' | 'edx';

GPR_REG_16: 'ax' | 'bx' | 'cx' | 'dx';

GPR_REG_8: 'ah' | 'al' | 'bh' | 'bl' | 'ch' | 'cl' | 'dh' | 'dl';

SEG_REG_CS: 'cs';

SEG_REG_DS: 'ds';

SEG_REG_SS: 'ss';

SEG_REG_ES: 'es';

INX_REG_SI: 'esi';

INX_REG_DI: 'edi';

CMD_REG_IP: 'ip';

PTR_REG_BP: 'bp';

PTR_REG_SP: 'sp';

NullLiteral: 'null';

BooleanLiteral: 'true' | 'false';

DecimalLiteral: [0-9]+ '.' [0-9]+ | [0-9]+;

StringLiteral: '\'' ~[\r\n']* '\'';

MemberName: [a-z_] [a-zA-Z0-9_]*;

TypeName: [A-Z] [a-zA-Z0-9_]*;

WhiteSpaces: [\r\n\t ]+ -> channel(HIDDEN);

UnexpectedCharacter: . -> channel(ERROR);

// fragment String: ~[\r\n'];