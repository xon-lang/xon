parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

source: ( definition | attribute | statement | NL)*;

definition
    : modifier = ID name = ID parameters? expression? (
        NL INDENT (attribute | NL)+ DEDENT
    )?
    ;
attribute: name = ID parameters? expression? body?;

statement
    : IMPORT path = expression (
        COLON members += expression (',' members += expression)* ','?
    )?                                                                     # importStatement
    | EXPORT path = expression                                             # exportStatement
    | FOR (value = parameter (',' index = parameter)? ID)? expression body # forStatement
    | WHILE expression body                                                # whileStatement
    | DO body WHILE expression                                             # doWhileStatement
    | IF expression thenBody = body (ELSE elseBody = body)?                # ifStatement
    | BREAK                                                                # breakStatement
    | CONTINUE                                                             # continueStatement
    | RETURN expression?                                                   # returnStatement
    | ACTUAL actual = expression NL+ EXPECT expect = expression            # assertStatement
    | expression                                                           # expressionStatement
    | parameter                                                            # parameterStatement
    ;

expression
    : PREPROCESSOR                                                        # preprocessorExpression
    | '(' expression ')'                                                  # groupExpression
    | parameters                                                          # arrayExpression
    | literal                                                             # literalExpression
    | expression QUESTION                                                 # nullableExpression
    | expression DOT name = ID                                            # memberExpression
    | expression parameters                                               # invokeExpression
    | op = OP expression                                                  # prefixExpression
    | left = expression op = (AS | IS | AND | OR | OP) right = expression # infixExpression
    | name = ID                                                           # idExpression
    | parameters type = expression? LAMBDA value = expression             # methodExpression
    ;

literal
    : INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | STRING_LITERAL  # stringLiteral
    ;

body
    : (ASSIGN | COLON) statement         # singleBody
    | NL INDENT (statement | NL)+ DEDENT # multipleBody
    ;

parameter: variable = expression type = expression? body?;
parameters
    : openSymbol = '(' (parameter (',' parameter)* ','?)? closeSymbol = ')'
    | openSymbol = '[' (parameter (',' parameter)* ','?)? closeSymbol = ']'
    | openSymbol = '{' (parameter (',' parameter)* ','?)? closeSymbol = '}'
    ;
