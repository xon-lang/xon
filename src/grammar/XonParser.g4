parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

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

declaration
    : declarations type? (ASSIGN expression)? # destructureDeclaration
    | ID type? (ASSIGN expression? | body)?   # parameterDeclaration
    | OP type? (ASSIGN expression? | body)?   # operatorDeclaration
    | ID ID declarations? type? body?         # definitionDeclaration
    ;

type:         COLON expression?;
declarations: OPEN (declaration (COMMA declaration)* COMMA?)? CLOSE;
arguments:    OPEN (argument (COMMA argument)* COMMA?)? CLOSE;
argument:     (ID ASSIGN)? expression;

body:   NL INDENT source DEDENT;
source: NL? (statement nl += NL)* statement? NL?;
