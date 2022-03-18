parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: ( definition | attribute | statement | NL)*;

definition:
    modifier = ID name = ID parameters? expr? (
        NL INDENT (attribute | NL)+ DEDENT
    )?
    ;
attribute:
    modifier = ID name = ID parameters expr? body?
    | name = ID parameters? expr? body?
    ;

statement:
    IMPORT path = expr (':' members += expr (',' members += expr)* ','?)? # importStatement
    | EXPORT path = expr                                                  # exportStatement
    | FOR (value = parameter (',' index = parameter)? ID)? expr body      # forStatement
    | WHILE expr body                                                     # whileStatement
    | DO body WHILE expr                                                  # doWhileStatement
    | IF expr thenBody = body (ELSE elseBody = body)?                     # ifStatement
    | BREAK                                                               # breakStatement
    | CONTINUE                                                            # continueStatement
    | RETURN expr?                                                        # returnStatement
    | ACTUAL actual = expr NL+ EXPECT expect = expr                       # assertStatement
    | expr body                                                           # assignmentStatement
    | expr                                                                # expressionStatement
    ;

expr:
    PREPROCESSOR                                                             # preprocessorExpression
    | '(' expr ')'                                                           # groupExpression
    | parameters                                                             # arrayExpression
    | literal                                                                # literalExpression
    | expr '?'                                                               # nullableExpression
    | expr '.' name = ID                                                     # memberExpression
    | expr parameters                                                        # invokeExpression
    | op = (NOT | OPERATOR) expr                                             # prefixExpression
    | left = expr op = (AS | IS | IS_NOT | AND | OR | OPERATOR) right = expr # infixExpression
    | name = ID                                                              # idExpression
    | parameters type = expr? '=>' value = expr                              # methodExpression
    ;

literal:
    INTEGER_LITERAL  # integerLiteral
    | FLOAT_LITERAL  # floatLiteral
    | STRING_LITERAL # stringLiteral
    ;

body:
    ('=' | ':') statement                # singleBody
    | NL INDENT (statement | NL)+ DEDENT # multipleBody
    ;

parameter:  name = expr type = expr? ( '=' value = expr)?;
parameters: '[' (parameter (',' parameter)* ','?)? ']';
