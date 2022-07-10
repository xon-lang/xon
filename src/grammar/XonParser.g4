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
    | (definition | parameter)                                             # declarationStatement
    ;

expression
    : PREPROCESSOR                                                                       # preprocessorExpression
    | '(' expression ')'                                                                 # groupExpression
    | expression genericArguments                                                        # genericsExpression
    | arguments                                                                          # arrayExpression
    | expression QUESTION                                                                # nullableExpression
    | expression DOT name = ID?                                                          # memberExpression
    | expression arguments                                                               # invokeExpression
    | left = expression op = (AS | IS | AND | OR | OP | LESS | GREAT) right = expression # infixExpression
    | genericParameters? parameters valueType? LAMBDA expression                         # methodExpression
    | op = (OP | IMPORT) expression                                                      # prefixExpression
    | name = ID                                                                          # idExpression
    | literal                                                                            # literalExpression
    ;

literal
    : INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | STRING_LITERAL  # stringLiteral
    ;

definition: modifier = ID name = ID genericParameters? parameters? valueType? valueBody?;
parameter
    : destructure = parameters valueType? valueBody?
    | name = (ID | OP | LESS | GREAT) genericParameters? params = parameters? valueType? valueBody?
    ;
valueBody: ASSIGN value = expression? | body;
valueType: COLON type = expression?;

parameters:        open = ('(' | '[' | '{') (parameter (',' parameter)* ','?)? close = ('}' | ']' | ')');
genericParameters: LESS (parameter (',' parameter)* ','?)? GREAT;
genericArguments:  LESS (expression (',' expression)* ','?)? GREAT;

argument:  (name = ID ASSIGN)? expression;
arguments: open = ('(' | '[' | '{') (argument (',' argument)* ','?)? close = ('}' | ']' | ')');

body: NL INDENT source DEDENT;
