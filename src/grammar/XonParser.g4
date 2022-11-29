parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

source: NL | NL? (statement nl += NL)* statement NL?;

statement
    : LINE_COMMENT                            # commentStatement
    | EXPORT expression                       # exportStatement
    | FOR (declaration? ID)? expression body  # forStatement
    | WHILE expression body                   # whileStatement
    | DO body WHILE expression                # doWhileStatement
    | IF expression body NL* (ELSE body)?     # ifStatement
    | BREAK                                   # breakStatement
    | CONTINUE                                # continueStatement
    | RETURN expression?                      # returnStatement
    | ACTUAL expression NL* EXPECT expression # assertStatement
    | expression                              # expressionStatement
    | declaration                             # declarationStatement
    ;

expression
    : PREPROCESSOR                    # preprocessorExpression
    | '(' expression ')'              # groupExpression
    | arguments                       # arrayExpression
    | expression QUESTION             # nullableExpression
    | expression DOT ID?              # memberExpression
    | expression META ID?             # metaExpression
    | expression arguments            # invokeExpression
    | literal                         # literalExpression
    | ID                              # idExpression
    | expression OP expression        # infixExpression
    | OP expression                   # prefixExpression
    | declarations* LAMBDA expression # methodExpression
    ;

literal
    : INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | STRING_LITERAL  # stringLiteral
    ;

declarations: open (declaration (',' declaration)* ','?)? close;
declaration
    : destructure = declarations valueType? valueBody?
    | (modifier = ID)? name = (ID | OP) params += declarations* valueType? valueBody?
    ;
valueBody: ASSIGN expression? | body;
valueType: COLON expression?;

arguments: open (argument (',' argument)* ','?)? close;
argument:  (ID ASSIGN)? expression;

body: NL INDENT source DEDENT;

open:  ('(' | '[' | '{');
close: (')' | ']' | '}');
