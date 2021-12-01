parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: (library | export | NL)* ( definition | NL)*;

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
    name = UPPER_ID typeParameters? methodParameters definitionAncestor? (
        NL+ INDENT (attribute | NL)+ DEDENT
    )? # classDefinition
    | name = UPPER_ID typeParameters? definitionAncestor? (
        NL+ INDENT (attribute | NL)+ DEDENT
    )?                                         # objectDefinition
    | name = UPPER_ID typeParameters? ':' type # aliasDefinition
    ;
definitionAncestor: IS type methodArguments?;

attribute:
    attributeHeader type                                       # abstractAttribute
    | attributeHeader type? ':' expression                     # valueAttribute
    | attributeHeader type NL+ INDENT (statement | NL)+ DEDENT # methodAttribute
    | attributeHeader NL+ INDENT (attribute | NL)+ DEDENT      # objectAttribute
    ;
attributeHeader:   attributeModifier* attributeName typeParameters?;
attributeModifier: PREFIX | INFIX | POSTFIX;
attributeName:     LOWER_ID | operator | INSTANCE;

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
    // | attribute                                                        # attributeStatement
    | assignment # assignmentStatement
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
    | expression methodArguments                                             # methodExpression
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
    | lambdaParameters ':' expression                                        # lambdaExpression
    | arrayArguments                                                         # arrayExpression
    | mapArguments                                                           # mapExpression
    | objectArguments                                                        # objectExpression
    | '(' expression ')'                                                     # parenthesizedExpression
    ;

type:
    name = UPPER_ID typeArguments? # idType
    | literal                      # literalType
    | type '#' name = UPPER_ID     # metaType
    | type '?'                     # nullableType
    | type '||' type               # unionType
    | type '&&' type               # intersectionType
    | methodParameters type?       # methodType
    | '[' (type (',' type)*)? ']'  # arrayFixedType
    | type '[' ']'                 # arrayType
    | mapParameters                # mapFixedType
    | type ':' type '{' '}'        # mapType
    | objectParameters             # objectType
    | '(' type ')'                 # parenthesizedType
    ;

literal:
    INTEGER_LITERAL  # integerLiteral
    | FLOAT_LITERAL  # floatLiteral
    | CHAR_LITERAL   # charLiteral
    | STRING_LITERAL # stringLiteral
    | REGEX_LITERAL  # regexLiteral
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

lambdaParameters: '(' (name += LOWER_ID (',' name += LOWER_ID)*)? ')';

methodParameter:  name = LOWER_ID type;
methodParameters: '(' (methodParameter (',' methodParameter)*)? ')';
methodArguments:  '(' (expression (',' expression)*)? ')';

mapParameter:  type ':' type;
mapParameters: '{' (mapParameter (',' mapParameter)*)? '}';
mapArgument:   expression ':' expression;
mapArguments:  '{' (mapArgument (',' mapArgument)*)? '}';

objectParameter:  name = LOWER_ID type;
objectParameters: '{' (objectParameter (',' objectParameter)*)? '}';
objectArgument:   (name = LOWER_ID ':')? expression;
objectArguments:  '{' (objectArgument (',' objectArgument)*)? '}';

arrayArguments: '[' (expression (',' expression)*)? ']';

typeParameter:  '...'? name = UPPER_ID (IS type)?;
typeParameters: '<' typeParameter (',' typeParameter)* '>';
typeArguments:  '<' (type (',' type)*)? '>';

body: ':' (statement | NL+ INDENT (statement | NL)+ DEDENT)?;
