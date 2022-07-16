parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

source: NL | NL? (statement nl += NL)* statement NL?;

statement
    : value = LINE_COMMENT                                                 # commentStatement
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
    | parameter                                                            # declarationStatement
    ;

expression
    : PREPROCESSOR                                                                       # preprocessorExpression
    | '(' expression ')'                                                                 # groupExpression
    | arguments                                                                          # arrayExpression
    | expression QUESTION                                                                # nullableExpression
    | expression DOT name = ID?                                                          # memberExpression
    | expression arguments                                                               # invokeExpression
    | left = expression op = (AS | IS | AND | OR | OP | LESS | GREAT) right = expression # infixExpression
    | parameters* valueType? LAMBDA expression                                           # methodExpression
    | op = (OP | IMPORT) expression                                                      # prefixExpression
    | name = ID                                                                          # idExpression
    | literal                                                                            # literalExpression
    ;

literal
    : INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | STRING_LITERAL  # stringLiteral
    ;

parameters: open (parameter (',' parameter)* ','?)? close;
parameter
    : destructure = parameters valueType? valueBody?
    | modifier = ID? name = (ID | OP | LESS | GREAT) params += parameters* valueType? valueBody?
    ;
valueBody: ASSIGN value = expression? | body;
valueType: COLON type = expression?;

arguments: open (argument (',' argument)* ','?)? close;
argument:  (name = ID ASSIGN)? expression;

open:  name = ('<' | '(' | '[' | '{');
close: name = ('}' | ']' | ')' | '>');

body: NL INDENT source DEDENT;
