parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: (library | export | NL)* ( definition | attribute | NL)*;

export: EXPORT libraryPath;
library:
    IMPORT libraryPath (
        AS alias = LOWER_ID
        | ':' libraryMember (',' libraryMember)*
    )?
    ;
libraryPath:     points += '.'* libraryPathPart ('.' libraryPathPart)*;
libraryPathPart: '@'? LOWER_ID;
libraryMember:   name = UPPER_ID (AS alias = UPPER_ID)?;

definition:
    name = UPPER_ID typeParameters? functionParameters? definitionBaseType? (
        NL+ INDENT ( attribute | NL)+ DEDENT
    )? # classDefinition
    | name = LOWER_ID typeParameters? definitionBaseType? (
        NL+ INDENT ( attribute | NL)+ DEDENT
    )?                                         # attributeDefinition
    | name = UPPER_ID typeParameters? '=' type # aliasDefinition
    ;
definitionBaseType: IS type functionArguments?;

attribute:
    attributeHeader type                                       # abstractAttribute
    | attributeHeader type? '=' expression                     # valueAttribute
    | attributeHeader type NL+ INDENT (statement | NL)+ DEDENT # methodAttribute
    ;
attributeHeader:   attributeModifier* attributeName typeParameters?;
attributeName:     (LOWER_ID | operator | INSTANCE);
attributeModifier: INFIX | PREFIX | POSTFIX;

statement:
    FOR (value = LOWER_ID (',' index = LOWER_ID)? IN)? expression body # forStatement
    | WHILE expression body                                            # whileStatement
    | DO body WHILE expression                                         # doWhileStatement
    | IF expression thenBody = body (ELSE elseBody = body)?            # ifStatement
    | BREAK                                                            # breakStatement
    | RETURN expression?                                               # returnStatement
    | ACTUAL actual = expression NL+ EXPECT expect = expression        # assertStatement
    | PREPROCESSOR                                                     # preprocessorStatement
    | expression                                                       # expressionStatement
    | attribute                                                        # attributeStatement
    | assignment                                                       # assignmentStatement
    ;

assignment:
    name = LOWER_ID '=' expression                                      # idAssignment
    | '[' names += LOWER_ID (',' names += LOWER_ID)* ']' '=' expression # arrayAssignment
    | '{' names += LOWER_ID (',' names += LOWER_ID)* '}' '=' expression # objectAssignment
    | '$' name = LOWER_ID '=' expression                                # thisMemberAssignment
    | expression '.' name = LOWER_ID '=' expression                     # memberAssignment
    | expression '[' expression ']' '=' expression                      # indexerAssignment
    ;

expression:
    name = (LOWER_ID | UPPER_ID | INSTANCE | INSTANCE_MEMBER) typeArguments? # idExpression
    | literal                                                                # literalExpression
    | expression (functionArguments | indexerArguments)                      # callExpression
    | expression ('?.' | '.') name = LOWER_ID typeArguments?                 # memberExpression
    | expression IS type                                                     # isExpression
    | expression AS type                                                     # asExpression
    | op = ('!' | '-' | '+' | LOWER_ID | IN) expression                      # prefixExpression
    | left = expression op = (LOWER_ID | IN) right = expression              # infixExpression
    | left = expression op = '^' right = expression                          # powExpression
    | left = expression op = ('*' | '/' | '%') right = expression            # mulDivModExpression
    | left = expression op = ('+' | '-') right = expression                  # addSubExpression
    | left = expression op = '..' right = expression                         # rangeExpression
    | left = expression op = '?' right = expression                          # elvisExpression
    | left = expression op = ('<' | '<=' | '>=' | '>') right = expression    # relationalExpression
    | left = expression op = ('==' | '!=') right = expression                # equalityExpression
    | left = expression op = '&&' right = expression                         # conjunctionExpression
    | left = expression op = '||' right = expression                         # disjunctionExpression
    | expression '|' (name = LOWER_ID ':')? expression                       # pipeExpression
    | functionParameters ':' expression                                      # lambdaExpression
    | '{' (mapArgument (',' mapArgument)*)? '}'                              # mapExpression
    | '[' (expression (',' expression)*)? ']'                                # arrayExpression
    | '(' expression ')'                                                     # parenthesizedExpression
    ;

type:
    name = UPPER_ID typeArguments? # idType
    | literal                      # literalType
    | type '?'                     # nullableType
    | type '[' ']'                 # arrayType
    | type '||' type               # unionType
    | functionParameters type?     # functionType
    | '{' type ':' type '}'        # mapType
    | '[' (type (',' type)*)? ']'  # tupleType
    | '(' type ')'                 # parenthesizedType
    ;

literal:
    INTEGER_LITERAL  # integerLiteral
    | FLOAT_LITERAL  # floatLiteral
    | CHAR_LITERAL   # charLiteral
    | STRING_LITERAL # stringLiteral
    | REGEX_LITERAL  # regexLiteral
    // | literal '..' literal  # rangeLiteral
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

expressionParameter: name = LOWER_ID type? ('#' meta = UPPER_ID)?;
functionParameters:  '(' (expressionParameter (',' expressionParameter)*)? ')';

mapArgument:       name = LOWER_ID ':' expression;
functionArguments: '(' (expression (',' expression)*)? ')';
indexerArguments:  '[' (expression (',' expression)*)? ']';

typeParameter:  '...'? name = UPPER_ID (IS type? ('#' meta = UPPER_ID)?)?;
typeParameters: '<' typeParameter (',' typeParameter)* '>';
typeArguments:  '<' (type (',' type)*)? '>';

body: ':' (statement | NL+ INDENT (statement | NL)+ DEDENT)?;
