parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: (statement | definition | NL)*;

definition: modifier id expr NL INDENT (parameter | NL)* DEDENT;

statement:
    IMPORT path = expr (':' members += expr (',' members += expr)* ','?)? # importStatement
    | EXPORT path = expr                                                  # exportStatement
    | FOR (value = parameter (',' index = parameter)? IN)? expr body      # forStatement
    | WHILE expr body                                                     # whileStatement
    | DO body WHILE expr                                                  # doWhileStatement
    | IF expr thenBody = body (ELSE elseBody = body)?                     # ifStatement
    | BREAK                                                               # breakStatement
    | RETURN expr?                                                        # returnStatement
    | ACTUAL actual = expr NL+ EXPECT expect = expr                       # assertStatement
    | PREPROCESSOR                                                        # preprocessorStatement
    | id '=' expr                                                         # assignmentStatement
    | expr                                                                # expressionStatement
    ;

expr:
    id                                                                 # idExpression
    | '[' (arrayItem (',' arrayItem)* ','?)? ']'                       # arrayExpression
    | '{' (parameter (',' parameter)* ','?)? '}'                       # objectExpression
    | instance = expr '(' (args += expr (',' args += expr)* ','?)? ')' # invokeExpression
    | instance = expr '[' (args += expr (',' args += expr)* ','?)? ']' # indexExpression
    | expr '?'                                                         # nullableExpression
    | expr '.' id                                                      # memberExpression
    | op = (ID | OPERATOR) expr                                        # prefixExpression
    | left = expr op = (ID | OPERATOR) right = expr                    # infixExpression
    | literal                                                          # literalExpression
    | '(' (parameter (',' parameter)* ','?)? ')' expr                  # methodExpression
    | '[' (parameter (',' parameter)* ','?)? ']' expr                  # indexerExpression
    | '(' expr ')'                                                     # parenthesizedExpression
    ;

literal:
    INTEGER_LITERAL  # integerLiteral
    | FLOAT_LITERAL  # floatLiteral
    | STRING_LITERAL # stringLiteral
    | REGEX_LITERAL  # regexLiteral
    ;

body:
    ':' statement                             # singleBody
    | ':'? NL INDENT (statement | NL)+ DEDENT # multipleBody
    ;

arrayItem:  (expr ':')? expr;
parameters: parameter (',' parameter)* ','?;
parameter:  modifier? id ( expr body | expr | body)?;
id:         name = (ID | OPERATOR) ('<|' parameter (',' parameter)* ','? '|>')?;
modifier:   name = (INFIX | PREFIX | OBJECT | ENUM | MODEL);
