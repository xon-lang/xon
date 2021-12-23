parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: (statement | NL)*;

statement:
    IMPORT path = expr ':' members += expr (',' members += expr)* ','? # importStatement
    | EXPORT path = expr                                               # exportStatement
    | FOR (value = id (',' index = id)? IN)? expr body                 # forStatement
    | WHILE expr body                                                  # whileStatement
    | DO body WHILE expr                                               # doWhileStatement
    | IF expr thenBody = body (ELSE elseBody = body)?                  # ifStatement
    | BREAK                                                            # breakStatement
    | RETURN expr?                                                     # returnStatement
    | ACTUAL actual = expr NL+ EXPECT expect = expr                    # assertStatement
    | PREPROCESSOR                                                     # preprocessorStatement
    | attr                                                             # attributeStatement
    | id '=' expr                                                      # assignmentStatement
    | expr                                                             # expressionStatement
    ;

attr:
    id (type body? | body)                            # valueAttribute
    | id '(' (attr (',' attr)* ','?)? ')' type? body? # methodAttribute
    | id '[' (attr (',' attr)* ','?)? ']' type? body? # indexerAttribute
    ;
type: expr ('#' meta = ID)?;

expr:
    id                                                                 # idExpression
    | '(' expr ')'                                                     # parenthesizedExpression
    | '[' (expr (',' expr)* ','?)? ']'                                 # arrayExpression
    | '{' (expr (',' expr)* ','?)? '}'                                 # objectExpression
    | '(' (expr (',' expr)* ','?)? ')' ':' expr                        # methodExpression
    | instance = expr '(' (args += expr (',' args += expr)* ','?)? ')' # invokeExpression
    | expr '?'                                                         # nullableExpression
    | expr '.' id                                                      # memberExpression
    | '...' expr                                                       # spreadExpression
    | op = ('-' | '+' | NOT) expr                                      # prefixExpression
    | left = expr op = '^' right = expr                                # powExpression
    | left = expr op = ('*' | '/' | '%') right = expr                  # mulDivModExpression
    | left = expr op = ('+' | '-') right = expr                        # addSubExpression
    | left = expr op = '..' right = expr                               # rangeExpression
    | left = expr op = ('<' | '<=' | '>=' | '>') right = expr          # relationalExpression
    | left = expr op = ('==' | '!=') right = expr                      # equalityExpression
    | left = expr op = '&&' right = expr                               # conjunctionExpression
    | left = expr op = '||' right = expr                               # disjunctionExpression
    | left = expr op = (IS | AS | IN) right = expr                     # infixExpression
    | left = expr op = ':' right = expr                                # pairExpression
    | literal                                                          # literalExpression
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

id:
    name = (
        ID
        | IS
        | AS
        | IN
        | '^'
        | '*'
        | '/'
        | '%'
        | '+'
        | '-'
        | '<'
        | '>'
        | '='
    ) ('<' '|' expr (',' expr)* ','? '|' '>')?
    ;
