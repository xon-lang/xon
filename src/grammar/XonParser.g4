parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

module: (
        library
        | statement
        | function
        | extensionMethod
        | extensionProperty
        | definition
        | NL
    )*
    ;

library:           scope = id '.' name = id ':' libraryMember (',' libraryMember)*;
libraryMember:     name = librartMemberName (AS alias = librartMemberName)?;
librartMemberName: id | DEFINITION_ID;

definition:
    DEFINITION_ID declaredGenerics? parameters? (IS type)? ':' NL INDENT (
        member
        | NL
    )+ DEDENT
    ;

member:
    id type ('=' expression)?                     # propertyMember
    | 'init' body                                 # initMember
    | operator parameters type body?              # operatorMember
    | id declaredGenerics? parameters type? body? # methodMember
    ;

test:              TEST expression body;
function:          id declaredGenerics? parameters type? body?;
extensionMethod:   type '.' id declaredGenerics? parameters type? body?;
extensionProperty: type '.' id type body?;

statement:
    FOR (value = id (',' index = id)? IN)? expression body # forStatement
    | WHILE expression body                                # whileStatement
    | LOOP body                                            # loopStatement
    | IF expression body (ELSE body)?                      # ifStatement
    | BREAK                                                # breakStatement
    | RETURN expression?                                   # returnStatement
    | id type? '=' expression                              # idAssignmentStatement
    // | expression '.' id '=' expression                     # memberAssignmentStatement
    // | expression '[' expression ']' '=' expression         # indexAssignmentStatement
    | ACTUAL ':' actual = expression NL+ EXPECT ':' expect = expression # assertStatement
    | PREPROCESSOR                                                      # preprocessorStatement
    | expression                                                        # expressionStatement
    ;

expression:
    THIS                                                                  # instanceExpression
    | DEFINITION_ID generics? arguments                                   # instantiationExpression
    | id                                                                  # idExpression
    | literal                                                             # literalExpression
    | expression '.' id                                                   # memberExpression
    | expression generics? arguments                                      # methodExpression
    | expression '[' expression ']'                                       # indexExpression
    | left = expression op = '^' right = expression                       # powExpression
    | '-' expression                                                      # negativeExpression
    | NOT expression                                                      # logicalNotExpression
    | left = expression op = ('*' | '/' | '%') right = expression         # mulDivModExpression
    | left = expression op = ('+' | '-') right = expression               # addSubExpression
    | left = expression op = '..' right = expression                      # rangeExpression
    | left = expression op = ('<' | '<=' | '>=' | '>') right = expression # relationalExpression
    | left = expression op = ('==' | '!=') right = expression             # equalityExpression
    | left = expression AND right = expression                            # logicalAndExpression
    | left = expression OR right = expression                             # logicalOrExpression
    | left = expression '|' (id ':')? right = expression                  # pipeExpression
    | '[' (expression (',' expression)*)? ']'                             # arrayExpression
    | '(' expression ')'                                                  # parenthesizedExpression
    | '\\' (id (',' id)* ':')? expression                                 # lambdaExpression
    ;

literal:
    NULL_LITERAL      # nullLiteral
    | BOOLEAN_LITERAL # booleanLiteral
    | INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | CHAR_LITERAL    # charLiteral
    | STRING_LITERAL  # stringLiteral
    ;

type:
    DEFINITION_ID generics?                 # plainType
    | literal                               # literalType
    | type '?'                              # nullableType
    | type '[' ']'                          # arrayType
    | type '|' type                         # unionType
    | declaredGenerics? typeParameters type # functionType
    | '(' type ')'                          # parenthesizedType
    ;

operator:
    '^'
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
    | '^^'
    | '..'
    ;

id:
    ID
    | IS
    | AS
    | IF
    | IN
    | OR
    | FOR
    | NOT
    | AND
    | ELSE
    | INIT
    | LOOP
    | TEST
    | THIS
    | BREAK
    | WHILE
    | ACTUAL
    | EXPECT
    | RETURN
    ;

parameter:        name = id type ('#' meta = DEFINITION_ID)?;
parameters:       '(' (parameter (',' parameter)*)? ')';
argument:         (id '=')? expression;
arguments:        '(' (argument (',' argument)*)? ')';
typeParameters:   '(' (type (',' type)*)? ')';
generics:         '<' type (',' type)* '>';
declaredGenerics: '<' DEFINITION_ID (',' DEFINITION_ID)* '>';
body:             ':' statement | ':' NL INDENT (statement | NL)+ DEDENT;
