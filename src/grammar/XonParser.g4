parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

source: NL | NL? (statement nl += NL)* statement NL?;

statement
    : value = LINE_COMMENT                                      # commentStatement
    | EXPORT path = expression                                  # exportStatement
    | FOR (declaration? ID)? expression body                    # forStatement
    | WHILE expression body                                     # whileStatement
    | DO body WHILE expression                                  # doWhileStatement
    | IF expression thenBody = body NL* (ELSE elseBody = body)? # ifStatement
    | BREAK                                                     # breakStatement
    | CONTINUE                                                  # continueStatement
    | RETURN expression?                                        # returnStatement
    | ACTUAL actual = expression NL* EXPECT expect = expression # assertStatement
    | expression                                                # expressionStatement
    | declaration                                               # declarationStatement
    ;

expression
    : PREPROCESSOR                                  # preprocessorExpression
    | '(' expression ')'                            # groupExpression
    | arguments                                     # arrayExpression
    | expression QUESTION                           # nullableExpression
    | expression DOT name = ID?                     # memberExpression
    | expression META name = ID?                    # metaExpression
    | expression arguments                          # invokeExpression
    | literal                                       # literalExpression
    | name = ID                                     # idExpression
    | left = expression operator right = expression # infixExpression
    | op = (OP | IMPORT) expression                 # prefixExpression
    | declarations* valueType? LAMBDA expression    # methodExpression
    ;

literal
    : INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | STRING_LITERAL  # stringLiteral
    ;

declarations: open (declaration (',' declaration)* ','?)? close;
declaration
    : destructure = declarations valueType? valueBody?
    | modifier = ID? name = (ID | OP | LESS | GREAT) params += declarations* valueType? valueBody?
    ;
valueBody: ASSIGN value = expression? | body;
valueType: COLON type = expression?;

arguments: open (argument (',' argument)* ','?)? close;
argument:  (name = ID ASSIGN)? expression;

open:     name = ('<' | '(' | '[' | '{');
close:    name = ('>' | ')' | ']' | '}');
operator: name = (OP | LESS | GREAT | IS | AS);

body: NL INDENT source DEDENT;
