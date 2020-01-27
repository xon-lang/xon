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
    | ID ('=' | '+=' | '-=' | '*=' | '/=' | '%=' | '&=' | '|=' | '^=' | '**=' | '//=') expression ';'      # assignmentStatement
    | expression ';'                                                                                       # expressionStatement
    ;

expression
    : ID                                                                                              # idExpression
    | '(' expression ')'                                                                              # parenthesizedExpression
    | DecimalLiteral                                                                                  # integerLiteralExpression
    | FloatLiteral                                                                                    # floatLiteralExpression
    | BooleanLiteral                                                                                  # booleanLiteralExpression
    | CharacterLiteral                                                                                # characterLiteralExpression
    | StringLiteral                                                                                   # stringLiteralExpression
    | expression '.' ID                                                                               # propertyExpression
    | '[' items += expression? (',' items += expression)* ']'                                         # arrayLiteralExpression
    | '[' startPos = expression ':' end = expression (':' step = expression)? ']'                     # rangeExpression
    | value = expression '[' index = expression ']'                                                   # indexExpression
    | value = expression '[' startPos = expression ':' end = expression? (':' step = expression)? ']' # sliceExpression
    | ('+' | '-' | '!' | '~') expression                                                              # unaryExpression
    | left = expression '**' right = expression                                                       # powExpression
    | left = expression operation = ('*' | '/' | '//' | '%') right = expression                       # mulDivExpression
    | left = expression operation = ('+' | '-') right = expression                                    # addSubExpression
    | object = expression '(' args += expression? (',' args += expression)* ')'                       # functionCallExpression
    | '\\' expression                                                                                 # lambdaExpression
    | expression ('>' | '>=' | '==' | '!=' | '<=' | '<') expression                                   # comparisonExpression
    | expression ('&' | '|' | '^' | '>>' | '>>>' | '<<') expression                                   # bitwiseExpression
    | expression ('&&' | '||') expression                                                             # logicalExpression
    ;