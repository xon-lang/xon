parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

source: statement+;

statement
    : NL                                                                   # nlStatement
    | LINE_COMMENT                                                         # commentStatement
    | OPERATOR name = OP type = expression body?                           # operatorStatement
    | EXPORT path = expression                                             # exportStatement
    | FOR (value = parameter (',' index = parameter)? ID)? expression body # forStatement
    | WHILE expression body                                                # whileStatement
    | DO body WHILE expression                                             # doWhileStatement
    | IF expression thenBody = body (ELSE elseBody = body)?                # ifStatement
    | BREAK                                                                # breakStatement
    | CONTINUE                                                             # continueStatement
    | RETURN expression?                                                   # returnStatement
    | ACTUAL actual = expression NL* EXPECT expect = expression            # assertStatement
    | definition                                                           # definitionStatement
    | expression                                                           # expressionStatement
    | parameter                                                            # parameterStatement
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

definition: modifier = ID name = ID parameters? (IS expression)? body?;

parameter
    : name = ID (COLON type = expression? body? | body)
    | parameters (COLON type = expression?)? body
    | name = ID
    ;
parameters: open = ('(' | '[' | '{') (parameter (',' parameter)* ','?)? close = ('}' | ']' | ')');

argument:  (name = ID ASSIGN)? expression;
arguments: open = ('(' | '[' | '{') (argument (',' argument)* ','?)? close = ('}' | ']' | ')');

body: ASSIGN statement # singleBody | NL INDENT statement+ DEDENT # multipleBody;
