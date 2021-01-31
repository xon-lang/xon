parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

@parser::header { 
// @ts-nocheck
}

program: imports* statement* definition*;

imports:
    importPath ':' importMember (',' importMember)*
    | LineBreak
    ;
importPath:   ID ('-' ID)* '/' ID ('-' ID)*;
importMember: name = ID ('as' alias = ID)?;

definition: ID ':' LineBreak INDENT member+ DEDENT;
member:
    ID type                                            # propertyMember
    | ID '(' (argument (',' argument)*)? ')' type body # methodMember
    | LineBreak                                        # lineBreakMember
    ;
argument: ID type;
type:     ID ('[' ']')?;

statement:
    'if' expression body ('elif' expression body)* ('else' body)? # ifStatement
    | 'loop' (
        (value = ID (',' key = ID?)? (',' index = ID)? 'in')? expression
    )? body                # loopStatement
    | 'break'              # breakStatement
    | 'return' expression? # returnStatement
    | ID '=' expression    # assignmentStatement
    | expression           # expressionStatement
    | Preprocessor         # preprocessorStatement
    | LineBreak            # lineBreakStatement
    ;

body: ':' LineBreak INDENT statement+ DEDENT;

spreadItem: '...'? expression;
objectItem: (ID | '[' exprkey = expression ']') ':' exprVal = expression
    | spreadItem
    ;

expression:
    ID        # idExpression
    | literal # literalExpression
    | object = expression '(' (
        args += expression (',' args += expression)*
    )? ')'                                          # functionExpression
    | value = expression '[' index = expression ']' # indexExpression
    | value = expression '[' startPos = expression ':' endPos = expression? (
        ':' step = expression
    )? ']'                                                                       # sliceExpression
    | expression '?'? '.' ID                                                     # memberExpression
    | base = expression '^' exponent = expression                                # powExpression
    | '-' expression                                                             # unaryMinusExpression
    | '!' expression                                                             # logicalNotExpression
    | left = expression operation = ('*' | '/' | '%') right = expression         # mulDivModExpression
    | left = expression operation = ('+' | '-') right = expression               # addSubExpression
    | left = expression operation = ('<' | '<=' | '>=' | '>') right = expression #
        relationalExpression
    | left = expression operation = ('==' | '!=') right = expression                # equalityExpression
    | left = expression '&&' right = expression                                     # logicalAndExpression
    | left = expression '||' right = expression                                     # logicalOrExpression
    | StringFormatStart (expression StringFormatMiddle)* expression StringFormatEnd #
        stringFormatExpression
    | '[' startPos = expression ':' endPos = expression (
        ':' step = expression
    )? ']'                                               # rangeExpression
    | '[' (spreadItem (',' spreadItem)*)? ']'            # arrayExpression
    | '{' (objectItem (',' objectItem)*)? '}'            # objectExpression
    | '(' expression ')'                                 # parenthesizedExpression
    | left = expression '|' (ID ':')? right = expression # pipeExpression
    | '\\' (ID (',' ID)* ':')? expression                # lambdaExpression
    ;

literal:
    NullLiteral      # nullLiteral
    | BooleanLiteral # booleanLiteral
    | NumberLiteral  # numberLiteral
    | StringLiteral  # stringLiteral
    ;