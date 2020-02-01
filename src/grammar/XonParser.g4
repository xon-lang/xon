parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

program: (scope)*;

// importDeclaration: path = StringLiteral '{' members += ID (',' members += ID)* '}';

scope:         ID (scopeArgument (',' scopeArgument)*)? '{' (statement | scope)* '}';
scopeArgument: name = ID ':' type = ID ('=' expression)?;

// statements
statement
    : 'if' expression '{' statement* '}'                                                                   # ifStatement
    | 'loop' ((value = ID (',' key = ID?)? (',' index = ID)? 'in')? expression)? '{' statement* '}' # loopStatement
    | ID ('=' | '+=' | '-=' | '*=' | '/=' | '%=' | '&=' | '|=' | '^=') expression ';'                      # assignmentStatement
    | expression ';'                                                                                       # expressionStatement
    ;

// expressions
expression
    : object = expression '(' (args += expression (',' args += expression)*)? ')'                     # functionExpression
    | value = expression '[' index = expression ']'                                                   # indexExpression
    | value = expression '[' startPos = expression ':' end = expression? (':' step = expression)? ']' # sliceExpression
    | expression '.' ID                                                                               # memberExpression
    | base = expression '^' exponent = expression                                                     # powExpression
    | '+' expression                                                                                  # unaryPlusExpression
    | '-' expression                                                                                  # unaryMinusExpression
    | '~' expression                                                                                  # bitNotExpression
    | '!' expression                                                                                  # logicalNotExpression
    | left = expression operation = ('*' | '/' | '%') right = expression                              # mulDivModExpression
    | left = expression operation = ('+' | '-') right = expression                                    # addSubExpression
    | left = expression ('<<' | '>>' | '>>>') right = expression                                      # bitShiftExpression
    | left = expression ('<' | '<=' | '>=' | '>') right = expression                                  # relationalExpression
    | left = expression ( '==' | '!=') right = expression                                             # equalityExpression
    | left = expression 'and' right = expression                                                      # bitAndExpression
    | left = expression 'xor' right = expression                                                      # bitXorExpression
    | left = expression 'or' right = expression                                                       # bitOrExpression
    | left = expression '&&' right = expression                                                       # logicalAndExpression
    | left = expression '||' right = expression                                                       # logicalOrExpression
    | ID                                                                                              # idExpression
    | DecimalLiteral                                                                                  # integerLiteralExpression
    | FloatLiteral                                                                                    # floatLiteralExpression
    | BooleanLiteral                                                                                  # booleanLiteralExpression
    | CharacterLiteral                                                                                # characterLiteralExpression
    | StringLiteral                                                                                   # stringLiteralExpression
    | '[' (items += expression (',' items += expression)*)? ']'                                       # arrayLiteralExpression
    | '[' startPos = expression ':' end = expression (':' step = expression)? ']'                     # rangeExpression
    | '{' (ID ':' expression (',' ID ':' expression)*)? '}'                                           # objectLiteralExpression
    | '(' expression ')'                                                                              # parenthesizedExpression
    | left = expression '|' (ID ':')? right = expression                                              # pipeExpression
    | '\\' (ID (',' ID)* ':')? expression                                                             # lambdaExpression
    ;