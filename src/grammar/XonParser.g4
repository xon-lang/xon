parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

program: (scope)*;

// importDeclaration: path = StringLiteral '{' members += ID (',' members += ID)* '}';

scope:         ID (scopeArgument (',' scopeArgument)*)? '{' (statement | scope)* '}';
scopeArgument: name = ID ':' type = ID ('=' expression)?;

statement
    : 'if' expression '{' statement* '}'                                                                   # ifStatement
    | 'loop' (('if' | value = ID (',' key = ID?)? (',' index = ID)? 'in')? expression)? '{' statement* '}' # loopStatement
    | ID ('=' | '+=' | '-=' | '*=' | '/=' | '%=' | '&=' | '|=' | '^=') expression ';'                      # assignmentStatement
    | expression ';'                                                                                       # expressionStatement
    ;

expression
    : expression '.' ID                                                                               # memberExpression
    | '[' startPos = expression ':' end = expression (':' step = expression)? ']'                     # rangeExpression
    | value = expression '[' index = expression ']'                                                   # indexExpression
    | value = expression '[' startPos = expression ':' end = expression? (':' step = expression)? ']' # sliceExpression
    | base = expression '^' exponent = expression                                                     # powExpression
    | ('+' | '-' | '!' | '~') expression                                                              # unaryExpression
    | left = expression operation = ('*' | '/' | '%') right = expression                              # mulDivModExpression
    | left = expression operation = ('+' | '-') right = expression                                    # addSubExpression
    | object = expression '(' args += expression? (',' args += expression)* ')'                       # functionCallExpression
    | '\\' expression                                                                                 # lambdaExpression
    | left = expression ('and' | 'or' | 'xor' | '>>' | '>>>' | '<<') right = expression               # bitwiseExpression
    | left = expression ('&' | '|') right = expression                                                # logicalExpression
    | left = expression ('>' | '>=' | '==' | '!=' | '<=' | '<') right = expression                    # comparisonExpression
    | ID                                                                                              # idExpression
    | DecimalLiteral                                                                                  # integerLiteralExpression
    | FloatLiteral                                                                                    # floatLiteralExpression
    | BooleanLiteral                                                                                  # booleanLiteralExpression
    | CharacterLiteral                                                                                # characterLiteralExpression
    | StringLiteral                                                                                   # stringLiteralExpression
    | '[' items += expression? (',' items += expression)* ']'                                         # arrayLiteralExpression
    | '{' (ID ':' expression)? (',' ID ':' expression)* '}'                                           # objectLiteralExpression
    | '(' expression ')'                                                                              # parenthesizedExpression
    ;