parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: (library | export | NL)* ( definition | NL)*;

export:  EXPORT path = expr;
library: IMPORT path = expr ':' members += expr (',' members += expr)*;

definition:
    TYPE id generics? ':' type = expr                      # aliasDefinition
    | definitionModifier definitionHeader? definitionBody? # typeDefinition
    ;
definitionModifier:  CLASS | ENUM | INTERFACE | OBJECT | EXTENSION;
definitionHeader:    id methodHeader? definitionAncestors?;
definitionAncestors: IS expr (',' expr)*;
definitionBody:      NL+ INDENT (attribute | NL)+ DEDENT;

attribute:
    attrId type = expr? (':' value = expr)?      # valueAttribute
    | attrId methodHeader result = expr? body?   # methodAttribute
    | attrId indexerHeader result = expr? body?  # indexerAttribute
    | attrId NL+ INDENT (attribute | NL)+ DEDENT # objectAttribute
    ;

statement:
    FOR (value = id (',' index = id)? IN)? expr body  # forStatement
    | WHILE expr body                                 # whileStatement
    | DO body WHILE expr                              # doWhileStatement
    | IF expr thenBody = body (ELSE elseBody = body)? # ifStatement
    | BREAK                                           # breakStatement
    | RETURN expr?                                    # returnStatement
    | ACTUAL actual = expr NL+ EXPECT expect = expr   # assertStatement
    | PREPROCESSOR                                    # preprocessorStatement
    | id '=' expr                                     # assignmentStatement
    | expr                                            # expressionStatement
    ;

expr:
    '(' expr ')'                                              # parenthesizedExpression
    | id generics?                                            # idExpression
    | indexerHeader ':' expr                                  # indexerExpression
    | methodHeader ':' expr                                   # methodExpression
    | '[' arguments? ']'                                      # arrayExpression
    | '{' (objectArgument (',' objectArgument)*)? ','? '}'    # objectExpression
    | expr '[' arguments? ']'                                 # indexExpression
    | expr '(' arguments? ')'                                 # invokeExpression
    | expr '?'                                                # nullableExpression
    | expr '.' attrId                                         # memberExpression
    | '...' expr                                              # spreadExpression
    | op = ('-' | '+' | NOT) expr                             # prefixExpression
    | left = expr op = id right = expr                        # infixExpression
    | left = expr op = '^' right = expr                       # powExpression
    | left = expr op = ('*' | '/' | '%') right = expr         # mulDivModExpression
    | left = expr op = ('+' | '-') right = expr               # addSubExpression
    | left = expr op = '..' right = expr                      # rangeExpression
    | left = expr op = '?' right = expr                       # elvisExpression
    | left = expr op = ('<' | '<=' | '>=' | '>') right = expr # relationalExpression
    | left = expr op = ('==' | '!=') right = expr             # equalityExpression
    | left = expr op = '&&' right = expr                      # conjunctionExpression
    | left = expr op = '||' right = expr                      # disjunctionExpression
    | left = expr '|' (id ':')? right = expr                  # pipeExpression
    | literal                                                 # literalExpression
    ;

literal:
    INTEGER_LITERAL  # integerLiteral
    | FLOAT_LITERAL  # floatLiteral
    | CHAR_LITERAL   # charLiteral
    | STRING_LITERAL # stringLiteral
    | REGEX_LITERAL  # regexLiteral
    ;

arguments:      expr (',' expr)* ','?;
parameter:      '...'? name = id expr? ('#' meta = id)?;
methodHeader:   generics? '(' (parameter (',' parameter)*)? ','? ')';
indexerHeader:  generics? '[' (parameter (',' parameter)*)? ','? ']';
objectArgument: parameter (':' expr)?;
generics:       '<' '|' arguments '|' '>';

body:     ':' statement | NL+ INDENT (statement | NL)+ DEDENT;
attrId:   id | operator | STRING_LITERAL;
id:       ID | definitionModifier;
operator: '^' | '*' | '/' | '%' | '+' | '-' | '<' | '>' | '=';
