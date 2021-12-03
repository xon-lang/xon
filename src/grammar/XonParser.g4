parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: (library | export | NL)* ( definition | NL)*;

export:        EXPORT libraryPath;
library:       IMPORT libraryPath ':' libraryMember (',' libraryMember)*;
libraryPath:   id ('.' id)*;
libraryMember: name = UPPER_ID (AS alias = UPPER_ID)?;

definition:
    TYPE definitionHeader? ':' type               # aliasDefinition
    | CLASS definitionHeader? definitionBody?     # classDefinition
    | ENUM definitionHeader? definitionBody?      # enumDefinition
    | INTERFACE definitionHeader? definitionBody? # interfaceDefinition
    | OBJECT definitionHeader? definitionBody?    # objectDefinition
    | EXTENSION definitionHeader? definitionBody? # extensionDefinition
    ;
definitionHeader:
    UPPER_ID typeParameters? '(' (parameter (',' parameter)*)? ')' definitionAncestor?
    ;
definitionAncestor: IS type ('(' (expression (',' expression)*)? ')')?;
definitionBody:     NL+ INDENT (attribute | NL)+ DEDENT;

attribute:
    operator type (NL+ INDENT (statement | NL)+ DEDENT)                              # operatorAttribute
    | (id | STRING_LITERAL) typeParameters? type                                     # abstractAttribute
    | (id | STRING_LITERAL) typeParameters? type? ':' expression                     # valueAttribute
    | (id | STRING_LITERAL) typeParameters? type NL+ INDENT (statement | NL)+ DEDENT # methodAttribute
    | (id | STRING_LITERAL) typeParameters? NL+ INDENT (attribute | NL)+ DEDENT      # objectAttribute
    ;

statement:
    FOR (value = id (',' index = id)? IN)? expression body      # forStatement
    | WHILE expression body                                     # whileStatement
    | DO body WHILE expression                                  # doWhileStatement
    | IF expression thenBody = body (ELSE elseBody = body)?     # ifStatement
    | BREAK                                                     # breakStatement
    | RETURN expression?                                        # returnStatement
    | ACTUAL actual = expression NL+ EXPECT expect = expression # assertStatement
    | PREPROCESSOR                                              # preprocessorStatement
    | expression                                                # expressionStatement
    | assignment                                                # assignmentStatement
    ;

assignment:
    id (',' id)* '=' expression        # idAssignment
    | expression '.' id '=' expression # memberAssignment
    ;

expression:
    id typeArguments?                                                     # idExpression
    | literal                                                             # literalExpression
    | expression '(' (expression (',' expression)*)? ')'                  # methodExpression
    | expression ('?.' | '.') id typeArguments?                           # memberExpression
    | expression IS type                                                  # isExpression
    | expression AS type                                                  # asExpression
    | expression IN type                                                  # asExpression
    | op = ('-' | '+' | NOT) expression                                   # prefixExpression
    | left = expression id right = expression                             # infixExpression
    | left = expression op = '^' right = expression                       # powExpression
    | left = expression op = ('*' | '/' | '%') right = expression         # mulDivModExpression
    | left = expression op = ('+' | '-') right = expression               # addSubExpression
    | left = expression op = '..' right = expression                      # rangeExpression
    | left = expression op = '?' right = expression                       # elvisExpression
    | left = expression op = ('<' | '<=' | '>=' | '>') right = expression # relationalExpression
    | left = expression op = ('==' | '!=') right = expression             # equalityExpression
    | left = expression op = '&&' right = expression                      # conjunctionExpression
    | left = expression op = '||' right = expression                      # disjunctionExpression
    | expression '|' (id ':')? expression                                 # pipeExpression
    | '(' (id (',' id)*)? ')' ':' expression                              # lambdaExpression
    | '[' (expression (',' expression)*)? ']'                             # arrayExpression
    | '{' (attribute (',' attribute)*)? '}'                               # objectExpression
    | '(' expression ')'                                                  # parenthesizedExpression
    ;

type:
    UPPER_ID typeArguments?                       # idType
    | literal                                     # literalType
    | type '#' UPPER_ID                           # metaType
    | type '?'                                    # nullableType
    | type '||' type                              # unionType
    | type '&&' type                              # intersectionType
    | type '[' ']'                                # arrayType
    | '[' (type (',' type)*)? ']'                 # arrayFixedType
    | '(' (parameter (',' parameter)*)? ')' type? # methodType
    | '{' (parameter (',' parameter)*)? '}'       # objectType
    | '(' type ')'                                # parenthesizedType
    ;

literal:
    INTEGER_LITERAL  # integerLiteral
    | FLOAT_LITERAL  # floatLiteral
    | CHAR_LITERAL   # charLiteral
    | STRING_LITERAL # stringLiteral
    | REGEX_LITERAL  # regexLiteral
    ;

parameter: id type;

typeParameter:  UPPER_ID (IS type)?;
typeParameters: '<' typeParameter (',' typeParameter)* '>';
typeArguments:  '<' (type (',' type)*)? '>';

body: ':' (statement | NL+ INDENT (statement | NL)+ DEDENT)?;

id:
    LOWER_ID
    | INSTANCE
    | INSTANCE_MEMBER
    | CLASS
    | OBJECT
    | INTERFACE
    | TYPE
    | ENUM
    | IN
    | IS
    | AS
    | NOT
    ;

operator:
    '!'
    | '^'
    | '*'
    | '/'
    | '%'
    | '+'
    | '-'
    | '<'
    | '>'
    | '=='
    | '&&'
    | '||'
    | '..'
    ;
