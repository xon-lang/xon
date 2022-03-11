parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: ( definition | statement | NL)*;

definition:
    modifier = ID name = ID generics? methodParameters? expr? (
        NL INDENT (attribute | NL)+ DEDENT
    )?
    ;
attribute:
    modifier = ID name = (OPERATOR | ID) generics? methodParameters expr? body?
    | name = ID generics? methodParameters? expr? body?
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
    | expr '=' expr                                                       # assignmentStatement
    | expr                                                                # expressionStatement
    ;

expr:
    PREPROCESSOR                                                       # preprocessorExpression
    | '[' (arrayItem (',' arrayItem)* ','?)? ']'                       # arrayExpression
    | '{' (attribute (',' attribute)* ','?)? '}'                       # objectExpression
    | instance = expr '(' (args += expr (',' args += expr)* ','?)? ')' # invokeExpression
    | instance = expr '[' (args += expr (',' args += expr)* ','?)? ']' # indexExpression
    | literal                                                          # literalExpression
    | expr '?'                                                         # nullableExpression
    | expr '.' name = ID                                               # memberExpression
    | expr generics                                                    # genericsExpression
    | op = OPERATOR expr                                               # prefixExpression
    | left = expr op = (ID | OPERATOR) right = expr                    # infixExpression
    | name = ID                                                        # idExpression
    | generics? methodParameters body                                  # methodExpression
    | generics? indexerParameters body                                 # indexerExpression
    | '(' expr ')'                                                     # parenthesizedExpression
    ;

literal:
    INTEGER_LITERAL  # integerLiteral
    | FLOAT_LITERAL  # floatLiteral
    | STRING_LITERAL # stringLiteral
    ;

body:
    '=' statement                        # singleBody
    | NL INDENT (statement | NL)+ DEDENT # multipleBody
    ;

arrayItem:         (expr ':')? expr;
parameter:         name = ID ( expr body | expr | body)?;
methodParameters:  '(' (parameter (',' parameter)* ','?)? ')';
indexerParameters: '[' (parameter (',' parameter)* ','?)? ']';
generics:          '<|' parameter (',' parameter)* ','? '|>';