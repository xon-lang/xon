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
    : 'if' expression '{' statement* '}' # ifStatement
    | ID '=' expression ';'              # assignmentStatement
    | expression ';'                     # expressionStatement
    ;

expression
    : ID                                                                                   # idExpression
    | '(' expression ')'                                                                   # parenthesizedExpression
    | DecimalLiteral                                                                       # integerLiteralExpression
    | FloatLiteral                                                                         # floatLiteralExpression
    | BooleanLiteral                                                                       # booleanLiteralExpression
    | CharacterLiteral                                                                     # characterLiteralExpression
    | StringLiteral                                                                        # stringLiteralExpression
    | '[' items += expression? (',' items += expression)* ']'                              # arrayLiteralExpression
    | object = expression '[' index = expression (':' expression?)? (':' expression?)? ']' # indexExpression
    | left = expression operation = ('*' | '/') right = expression                         # mulDivExpression
    | left = expression operation = ('+' | '-') right = expression                         # addSubExpression
    | ('+' | '-' | '!') expression                                                         # unaryExpression
    | expression '.' ID                                                                    # propertyExpression
    | object = expression '(' args += expression? (',' args += expression)* ')'            # functionCallExpression
    | '\\' expression                                                                      # lambdaExpression
    ;