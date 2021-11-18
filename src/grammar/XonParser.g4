parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source:       (library | export | NL)* ( sourceMember | NL)*;
sourceMember: definition # definitionSourceMember | test # testSourceMember;

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
    name = UPPER_ID genericParameters? functionParameters? (IS type)? (
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
    attributeModifier* attributeName genericParameters? (
        type body?
        | type? body
    )
    ;
attributeName:     LOWER_ID | operator | '$';
attributeModifier: INFIX | PREFIX | POSTFIX;

assignment:
    name = LOWER_ID '=' expression                                      # idAssignment
    | '[' names += LOWER_ID (',' names += LOWER_ID)* ']' '=' expression # arrayAssignment
    | '{' names += LOWER_ID (',' names += LOWER_ID)* '}' '=' expression # objectAssignment
    | '$' name = LOWER_ID '=' expression                                # thisMemberAssignment
    | expression '.' name = LOWER_ID '=' expression                     # memberAssignment
    | expression '[' expression ']' '=' expression                      # indexAssignment
    ;

expression:
    name = (LOWER_ID | UPPER_ID)                                          # idExpression
    | name = '$'                                                          # instanceExpression
    | '$' name = LOWER_ID                                                 # instanceMemberExpression
    | literal                                                             # literalExpression
    | expression genericArguments? functionArguments                      # callExpression
    | expression genericArguments? indexArguments                         # indexExpression
    | '(' expression ')'                                                  # parenthesizedExpression
    | '[' (expression (',' expression)*)? ']'                             # arrayExpression
    | expression ('?.' | '.') name = LOWER_ID                             # memberExpression
    | op = ('!' | '-' | '+') expression                                   # prefixExpression
    | left = expression op = '^' right = expression                       # powExpression
    | left = expression op = ('*' | '/' | '%') right = expression         # mulDivModExpression
    | left = expression op = ('+' | '-') right = expression               # addSubExpression
    | left = expression op = '..' right = expression                      # rangeExpression
    | left = expression op = '?' right = expression                       # elvisExpression
    | left = expression op = ('<' | '<=' | '>=' | '>') right = expression # relationalExpression
    | left = expression op = ('==' | '!=') right = expression             # equalityExpression
    | left = expression op = '&&' right = expression                      # conjunctionExpression
    | left = expression op = '||' right = expression                      # disjunctionExpression
    | expression '|' name = LOWER_ID ':' expression                       # pipeExpression
    | '\\' (lambdaParameters ':')? expression                             # lambdaExpression
    ;

type:
    name = UPPER_ID genericArguments?      # idType
    | literal                              # literalType
    | type '?'                             # nullableType
    | type '[' size = INTEGER_LITERAL? ']' # arrayType
    | type '&' type                        # intersectionType
    | '(' type '&' type ')'                # intersectionParenthesizedType
    | type '|' type                        # unionType
    | '(' type '|' type ')'                # unionParenthesizedType
    | functionParameters type?             # functionType
    | '(' functionParameters type? ')'     # functionParenthesizedType
    | indexParameters type?                # indexType
    | '(' indexParameters type? ')'        # indexParenthesizedType
    ;

literal:
    NULL_LITERAL      # nullLiteral
    | BOOLEAN_LITERAL # booleanLiteral
    | INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | CHAR_LITERAL    # charLiteral
    | STRING_LITERAL  # stringLiteral
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

parameter:          name = LOWER_ID type? ('#' meta = UPPER_ID)?;
functionParameters: '(' (parameter (',' parameter)*)? ')';
indexParameters:    '[' (parameter (',' parameter)*)? ']';
lambdaParameters:   parameter (',' parameter)*;

argument:          expression;
functionArguments: '(' (argument (',' argument)*)? ')';
indexArguments:    '[' (argument (',' argument)*)? ']';

genericArguments: '<' (type (',' type)*)? '>';
genericParameters:
    '<' '...'? names += UPPER_ID (',' '...'? names += UPPER_ID)* '>'
    ;

body: ':' (statement | NL+ INDENT (statement | NL)+ DEDENT)?;
