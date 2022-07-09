parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

source:     NL | NL? sourceItem* statement NL?;
sourceItem: statement NL;

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
    | ( definition | parameter)                                            # declarationStatement
    ;

expression
    : PREPROCESSOR                                                        # preprocessorExpression
    | '(' expression ')'                                                  # groupExpression
    | expression genericArguments                                         # genericsExpression
    | genericParameters? parameters LAMBDA expression                     # methodExpression
    | arguments                                                           # arrayExpression
    | expression QUESTION                                                 # nullableExpression
    | expression DOT name = ID?                                           # memberExpression
    | expression arguments                                                # invokeExpression
    | op = (OP | IMPORT) expression                                       # prefixExpression
    | left = expression op = (AS | IS | AND | OR | OP) right = expression # infixExpression
    | name = ID                                                           # idExpression
    | literal                                                             # literalExpression
    ;

literal
    : INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | STRING_LITERAL  # stringLiteral
    ;

definition: modifier = ID name = ID genericParameters? parameters? (IS expression)? body?;
parameter
    : destructure = parameters (COLON type = expression?)? valueBody?
    | name = (ID | OP) genericParameters? params = parameters? (COLON type = expression?)? valueBody?
    ;
valueBody:         ASSIGN value = expression | body;
parameters:        open = ('(' | '[' | '{') (parameter (',' parameter)* ','?)? close = ('}' | ']' | ')');
genericParameters: LESS (parameter (',' parameter)* ','?)? GREAT;
genericArguments:  LESS (expression (',' expression)* ','?)? GREAT;

argument:  (name = ID ASSIGN)? expression;
arguments: open = ('(' | '[' | '{') (argument (',' argument)* ','?)? close = ('}' | ']' | ')');

body: NL INDENT source DEDENT;
