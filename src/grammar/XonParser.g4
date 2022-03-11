parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: ( definition | statement | NL)*;

definition:
    modifier = ID id generics? methodParameters? expr? (
        NL INDENT (attribute | NL)+ DEDENT
    )?
    ;
attribute:
    modifier = ID name = (OPERATOR | ID | IN | IS) generics? methodParameters expr? body?
    | name = (ID | IN | IS) generics? methodParameters? expr? body?
    ;

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
    | expr '=' expr                                                       # assignmentStatement
    | expr                                                                # expressionStatement
    ;

expr:
    id                                                                 # idExpression
    | '[' (arrayItem (',' arrayItem)* ','?)? ']'                       # arrayExpression
    | '{' (attribute (',' attribute)* ','?)? '}'                       # objectExpression
    | instance = expr '(' (args += expr (',' args += expr)* ','?)? ')' # invokeExpression
    | instance = expr '[' (args += expr (',' args += expr)* ','?)? ']' # indexExpression
    | expr '?'                                                         # nullableExpression
    | expr '.' id                                                      # memberExpression
    | expr generics                                                    # genericsExpression
    | op = OPERATOR expr                                               # prefixExpression
    | left = expr op = (ID | OPERATOR) right = expr                    # infixExpression
    | literal                                                          # literalExpression
    | generics? methodParameters body                                  # methodExpression
    | generics? indexerParameters body                                 # indexerExpression
    | '(' expr ')'                                                     # parenthesizedExpression
    ;

literal:
    INTEGER_LITERAL  # integerLiteral
    | FLOAT_LITERAL  # floatLiteral
    | STRING_LITERAL # stringLiteral
    | REGEX_LITERAL  # regexLiteral
    ;

body:
    '=' statement                        # singleBody
    | NL INDENT (statement | NL)+ DEDENT # multipleBody
    ;

arrayItem:         (expr ':')? expr;
parameter:         id ( expr body | expr | body)?;
methodParameters:  '(' (parameter (',' parameter)* ','?)? ')';
indexerParameters: '[' (parameter (',' parameter)* ','?)? ']';
id:                name = (ID | IN | IS);
generics:          '<|' parameter (',' parameter)* ','? '|>';