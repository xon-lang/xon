parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: (statement | NL)*;

statement:
    parameter                                                            # parameterStatement
    | id '=' expr                                                        # assignmentStatement
    | IMPORT path = expr ':' members += expr (',' members += expr)* ','? # importStatement
    | EXPORT path = expr                                                 # exportStatement
    | FOR (value = id (',' index = id)? IN)? expr body                   # forStatement
    | WHILE expr body                                                    # whileStatement
    | DO body WHILE expr                                                 # doWhileStatement
    | IF expr thenBody = body (ELSE elseBody = body)?                    # ifStatement
    | BREAK                                                              # breakStatement
    | RETURN expr?                                                       # returnStatement
    | ACTUAL actual = expr NL+ EXPECT expect = expr                      # assertStatement
    | PREPROCESSOR                                                       # preprocessorStatement
    | expr                                                               # expressionStatement
    ;

expr:
    id generics?                                              # idExpression
    | '(' expr ')'                                            # parenthesizedExpression
    | '[' (expr (',' expr)* ','?)? ']'                        # arrayExpression
    | '{' (parameter (',' parameter)* ','?)? '}'              # objectExpression
    | '(' (parameter (',' parameter)* ','?)? ')' expr? body?  # methodExpression
    | expr '(' (expr (',' expr)* ','?)? ')'                   # invokeExpression
    | expr '?'                                                # nullableExpression
    | expr '.' id generics?                                   # memberExpression
    | '...' expr                                              # spreadExpression
    | op = ('-' | '+' | NOT) expr                             # prefixExpression
    | left = expr op = (IS | AS | IN) right = expr            # infixExpression
    | left = expr op = '^' right = expr                       # powExpression
    | left = expr op = ('*' | '/' | '%') right = expr         # mulDivModExpression
    | left = expr op = ('+' | '-') right = expr               # addSubExpression
    | left = expr op = '..' right = expr                      # rangeExpression
    | left = expr op = ('<' | '<=' | '>=' | '>') right = expr # relationalExpression
    | left = expr op = ('==' | '!=') right = expr             # equalityExpression
    | left = expr op = '&&' right = expr                      # conjunctionExpression
    | left = expr op = '||' right = expr                      # disjunctionExpression
    | literal                                                 # literalExpression
    ;

literal:
    INTEGER_LITERAL  # integerLiteral
    | FLOAT_LITERAL  # floatLiteral
    | CHAR_LITERAL   # charLiteral
    | STRING_LITERAL # stringLiteral
    | REGEX_LITERAL  # regexLiteral
    ;

body:
    ':' statement                              # singleBody
    | ':'? NL+ INDENT (statement | NL)+ DEDENT # multipleBody
    ;

parameter:
    '...'? modifier? parameterId generics? type = expr? ('#' meta = ID)? body?
    ;
generics: '<' '|' expr (',' expr)* ','? '|' '>';

parameterId: id | operator | STRING_LITERAL;
id:          modifier | ID | IS | AS | IN;
modifier:    TYPE | CLASS | INTERFACE | OBJECT | ENUM;
operator:    '^' | '*' | '/' | '%' | '+' | '-' | '<' | '>' | '=';
