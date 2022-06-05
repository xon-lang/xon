parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

source: ( statement | NL)*;

statement
    : definition                                                           # definitionStatement
    | modifier = ID name = OP type = expression? body?                     # operatorStatement
    | EXPORT path = expression                                             # exportStatement
    | FOR (value = parameter (',' index = parameter)? ID)? expression body # forStatement
    | WHILE expression body                                                # whileStatement
    | DO body WHILE expression                                             # doWhileStatement
    | IF expression thenBody = body (ELSE elseBody = body)?                # ifStatement
    | BREAK                                                                # breakStatement
    | CONTINUE                                                             # continueStatement
    | RETURN expression?                                                   # returnStatement
    | ACTUAL actual = expression NL+ EXPECT expect = expression            # assertStatement
    | parameter                                                            # parameterStatement
    | expression                                                           # expressionStatement
    ;

expression
    : PREPROCESSOR                                                        # preprocessorExpression
    | '(' expression ')'                                                  # groupExpression
    | arguments                                                           # arrayExpression
    | expression QUESTION                                                 # nullableExpression
    | expression DOT name = ID                                            # memberExpression
    | expression arguments                                                # invokeExpression
    | op = (OP | IMPORT) expression                                       # prefixExpression
    | left = expression op = (AS | IS | AND | OR | OP) right = expression # infixExpression
    | name = ID                                                           # idExpression
    | parameters LAMBDA value = expression                                # methodExpression
    | literal                                                             # literalExpression
    ;

literal
    : INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | STRING_LITERAL  # stringLiteral
    ;

definition
    : modifier = (MODEL | OBJECT | FACTORY) name = ID parameters? (IS expression)? (
        NL INDENT (parameter | NL)+ DEDENT
    )?
    ;

parameter
    : name = ID (COLON type = expression? body? | body)
    | parameters (COLON type = expression?)? body
    | name = ID
    ;
parameters: open = ('(' | '[' | '{') (parameter (',' parameter)* ','?)? close = ('}' | ']' | ')');

argument:  (name = ID COLON)? expression;
arguments: open = ('(' | '[' | '{') (argument (',' argument)* ','?)? close = ('}' | ']' | ')');

body
    : ASSIGN expression                                   # singleBody
    | NL INDENT NL* statement (NL+ statement)* NL* DEDENT # multipleBody
    ;
