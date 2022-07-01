parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

source: NL | NL? (statement NL)* statement NL?;

statement
    : LINE_COMMENT                                                         # commentStatement
    | EXPORT path = expression                                             # exportStatement
    | FOR (value = parameter (',' index = parameter)? ID)? expression body # forStatement
    | WHILE expression body                                                # whileStatement
    | DO body WHILE expression                                             # doWhileStatement
    | IF expression thenBody = body NL* (ELSE elseBody = body)?            # ifStatement
    | BREAK                                                                # breakStatement
    | CONTINUE                                                             # continueStatement
    | RETURN expression?                                                   # returnStatement
    | ACTUAL actual = expression NL* EXPECT expect = expression            # assertStatement
    | expression                                                           # expressionStatement
    | ( definition | parameter)                                            # declarationStatement
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
    | parameters LAMBDA expression                                        # methodExpression
    | literal                                                             # literalExpression
    ;

literal
    : INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | STRING_LITERAL  # stringLiteral
    ;

definition: modifier = ID name = ID parameters? (IS expression)? body?;
parameter
    : destructure = parameters (COLON type = expression?)? valueBody?
    | name = (ID | OP) params = parameters? (COLON type = expression)? valueBody?
    ;
valueBody:  ASSIGN value = expression | body;
parameters: open = ('(' | '[' | '{') (parameter (',' parameter)* ','?)? close = ('}' | ']' | ')');

argument:  (name = ID ASSIGN)? expression;
arguments: open = ('(' | '[' | '{') (argument (',' argument)* ','?)? close = ('}' | ']' | ')');

body: NL INDENT source DEDENT;
