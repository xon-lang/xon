parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: (library | export | NL)* ( definition | NL)*;

export:        EXPORT libraryPath;
library:       IMPORT libraryPath ':' libraryMember (',' libraryMember)*;
libraryPath:   id ('.' id)*;
libraryMember: name = id (AS alias = id)?;

definition:
    TYPE id typeParameters? ':' type                       # aliasDefinition
    | definitionModifier definitionHeader? definitionBody? # typeDefinition
    ;
definitionHeader:   id typeParameters? lambdaParameters? definitionAncestor?;
definitionAncestor: IS id typeArguments? lambdaArguments?;
definitionBody:     NL+ INDENT (attribute | NL)+ DEDENT;

attribute:
    attributeId type? ':' expression                       # valueAttribute
    | attributeId type NL+ INDENT (statement | NL)+ DEDENT # methodAttribute
    | attributeId NL+ INDENT (attribute | NL)+ DEDENT      # objectAttribute
    | attributeId type                                     # abstractAttribute
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
    | id '=' expression                                         # assignmentStatement
    | expression                                                # expressionStatement
    ;

expression:
    id                                                                    # idExpression
    | literal                                                             # literalExpression
    | expression ('?.' | '.') attributeId                                 # memberExpression
    | expression typeArguments? lambdaArguments                           # callExpression
    | expression IS type                                                  # isExpression
    | expression AS type                                                  # asExpression
    | expression IN type                                                  # asExpression
    | op = ('-' | '+' | NOT) expression                                   # prefixExpression
    | left = expression op = id right = expression                        # infixExpression
    | left = expression op = '^' right = expression                       # powExpression
    | left = expression op = ('*' | '/' | '%') right = expression         # mulDivModExpression
    | left = expression op = ('+' | '-') right = expression               # addSubExpression
    | left = expression op = '..' right = expression                      # rangeExpression
    | left = expression op = '?' right = expression                       # elvisExpression
    | left = expression op = ('<' | '<=' | '>=' | '>') right = expression # relationalExpression
    | left = expression op = ('==' | '!=') right = expression             # equalityExpression
    | left = expression op = '&&' right = expression                      # conjunctionExpression
    | left = expression op = '||' right = expression                      # disjunctionExpression
    | left = expression '|' (parameter ':')? right = expression           # pipeExpression
    | lambdaParameters ':' expression                                     # lambdaExpression
    | arrayArguments                                                      # arrayExpression
    | objectArguments                                                     # objectExpression
    | '(' expression ')'                                                  # parenthesizedExpression
    ;

type:
    id typeArguments?                        # idType
    | literal                                # literalType
    | type '#' id                            # metaType
    | type '?'                               # nullableType
    | type '||' type                         # unionType
    | type '&&' type                         # intersectionType
    | type '[' ']'                           # arrayType
    | typeParameters? lambdaParameters type? # lambdaType
    | arrayParameters                        # tupleType
    | objectParameters                       # objectType
    | '(' type ')'                           # parenthesizedType
    ;

literal:
    INTEGER_LITERAL  # integerLiteral
    | FLOAT_LITERAL  # floatLiteral
    | CHAR_LITERAL   # charLiteral
    | STRING_LITERAL # stringLiteral
    | REGEX_LITERAL  # regexLiteral
    ;

parameter:        id type? | id? type;
lambdaParameters: '(' (parameter (',' parameter)*)? ','? ')';
arrayParameters:  '[' (parameter (',' parameter)*)? ','? ']';
objectParameters: '{' (parameter (',' parameter)*)? ','? '}';

lambdaArguments: '(' (expression (',' expression)*)? ','? ')';
arrayArguments:  '[' (expression (',' expression)*)? ','? ']';
objectArguments: '{' ( objectArgument (',' objectArgument)*)? ','? '}';
objectArgument:  attribute | expression;

typeParameter:  id (IS type)?;
typeParameters: '<' typeParameter (',' typeParameter)* ','? '>';
typeArguments:  '<' (type (',' type)*)? ','? '>';

body:               ':' (statement | NL+ INDENT (statement | NL)+ DEDENT)?;
attributeId:        id | operator | STRING_LITERAL;
id:                 ID | definitionModifier;
definitionModifier: CLASS | ENUM | INTERFACE | OBJECT | EXTENSION;
operator:           '^' | '*' | '/' | '%' | '+' | '-' | '<' | '>' | '=';
