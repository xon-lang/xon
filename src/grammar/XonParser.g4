parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source: (library | export | NL)* ( sourceMember | NL)*;
sourceMember:
    definition  # definitionSourceMember
    | attribute # attributeSourceMember
    | test      # testSourceMember
    ;

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

test: TEST expression? body?;

definition:
    name = UPPER_ID typeParameters? functionParameters? (IS type)? (
        ':' NL+ INDENT ( classMember | NL)+ DEDENT
    )? # classDefinition
    ;

classMember: attribute # attributeClassMember;

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

attribute:
    attributeModifier* attributeName typeParameters? (type body? | type? body)
    ;
attributeName:     LOWER_ID | operator | '$';
attributeModifier: INFIX | PREFIX | POSTFIX;

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
    | '(' expression ')'                                                     # parenthesizedExpression
    | '[' (expression (',' expression)*)? ']'                                # arrayExpression
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
    | expression '|' (name = LOWER_ID ':')? expression                        # pipeExpression
    | functionParameters ':' expression                                      # lambdaExpression
    ;

type:
    name = UPPER_ID typeArguments? # idType
    | type '?'                     # nullableType
    | type '[' ']'                 # arrayType
    | type '||' type               # unionType
    | functionParameters type?     # functionType
    | '[' type (',' type)* ']'     # tupleType
    | '(' type ')'                 # parenthesizedType
    ;

literal:
    INTEGER_LITERAL  # integerLiteral
    | FLOAT_LITERAL  # floatLiteral
    | CHAR_LITERAL   # charLiteral
    | STRING_LITERAL # stringLiteral
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
indexerParameters:   '[' (expressionParameter (',' expressionParameter)*)? ']';
lambdaParameters:    expressionParameter (',' expressionParameter)*;

functionArguments: '(' (expression (',' expression)*)? ')';
indexerArguments:  '[' (expression (',' expression)*)? ']';

typeParameter:  '...'? name = UPPER_ID (IS type? ('#' meta = UPPER_ID)?)?;
typeParameters: '<' typeParameter (',' typeParameter)* '>';
typeArguments:  '<' (type (',' type)*)? '>';

body: ':' (statement | NL+ INDENT (statement | NL)+ DEDENT)?;
