parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

source: ( statement | NL)*;

statement
    : modifier = ID name = ID parameters? expression? (NL INDENT (parameter | NL)+ DEDENT)?     # definitionStatement
    | IMPORT path = expression (COLON members += expression (',' members += expression)* ','?)? # importStatement
    | EXPORT path = expression                                                                  # exportStatement
    | FOR (value = parameter (',' index = parameter)? ID)? expression body                      # forStatement
    | WHILE expression body                                                                     # whileStatement
    | DO body WHILE expression                                                                  # doWhileStatement
    | IF expression thenBody = body (ELSE elseBody = body)?                                     # ifStatement
    | BREAK                                                                                     # breakStatement
    | CONTINUE                                                                                  # continueStatement
    | RETURN expression?                                                                        # returnStatement
    | ACTUAL actual = expression NL+ EXPECT expect = expression                                 # assertStatement
    | expression                                                                                # expressionStatement
    | parameter                                                                                 # parameterStatement
    ;

expression
    : PREPROCESSOR                                                        # preprocessorExpression
    | '(' expression ')'                                                  # groupExpression
    | arguments                                                           # arrayExpression
    | expression QUESTION                                                 # nullableExpression
    | expression DOT name = ID                                            # memberExpression
    | expression arguments                                                # invokeExpression
    | op = OP expression                                                  # prefixExpression
    | left = expression op = (AS | IS | AND | OR | OP) right = expression # infixExpression
    | name = ID                                                           # idExpression
    | parameters type = expression? LAMBDA value = expression             # methodExpression
    | literal                                                             # literalExpression
    ;

literal
    : INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | STRING_LITERAL  # stringLiteral
    ;

argument: (name = ID COLON)? expression;

arguments: ('(' | '[' | '{') (argument (',' argument)* ','?)? ('}' | ']' | ')');

parameter: name = ID type = expression? body?;

parameters: ('(' | '[' | '{') (parameter (',' parameter)* ','?)? ('}' | ']' | ')');

body: (ASSIGN | COLON) statement # singleBody | NL INDENT (statement | NL)+ DEDENT # multipleBody;
