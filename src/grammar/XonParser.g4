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
    TYPE name = UPPER_ID typeParameters? ':' type          # aliasDefinition
    | definitionModifier definitionHeader? definitionBody? # typeDefinition
    ;
definitionHeader:   name = UPPER_ID type? definitionAncestor?;
definitionAncestor: IS name = UPPER_ID typeArguments? lambdaArguments;
definitionBody:     NL+ INDENT (attribute | NL)+ DEDENT;

attribute:
    operator type (NL+ INDENT (statement | NL)+ DEDENT)    # operatorAttribute
    | attributeId type                                     # abstractAttribute
    | attributeId type? ':' expression                     # valueAttribute
    | attributeId type NL+ INDENT (statement | NL)+ DEDENT # methodAttribute
    | attributeId NL+ INDENT (attribute | NL)+ DEDENT      # objectAttribute
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
    | left = expression '|' (id ':')? right = expression                  # pipeExpression
    | lambdaParameters ':' expression                                     # lambdaExpression
    | arrayArguments                                                      # arrayExpression
    | objectArguments                                                     # objectExpression
    | '(' expression ')'                                                  # parenthesizedExpression
    ;

type:
    name = UPPER_ID typeArguments?           # idType
    | literal                                # literalType
    | type '#' name = UPPER_ID               # metaType
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

typeParameter:  name = UPPER_ID (IS type)?;
typeParameters: '<' typeParameter (',' typeParameter)* ','? '>';
typeArguments:  '<' (type (',' type)*)? ','? '>';

body:               ':' (statement | NL+ INDENT (statement | NL)+ DEDENT)?;
attributeId:        id | STRING_LITERAL;
id:                 LOWER_ID | definitionModifier;
definitionModifier: CLASS | ENUM | INTERFACE | OBJECT | EXTENSION;
operator:           '^' | '*' | '/' | '%' | '+' | '-' | '<' | '>' | '=';
