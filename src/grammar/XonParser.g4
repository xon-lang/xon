parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

program: imports* statement* definition*;

imports:      StringLiteral ':' ('*' 'as' alias = ID | importMember (',' importMember)*) | LineBreak;
importMember: name = ID ('as' alias = ID)? | name = DefinitionID ('as' alias = DefinitionID)?;

definition: name = DefinitionID ':' LineBreak INDENT member+ DEDENT;
member:     name = ID type? ( '=' value = expression)? # propertyMember | function # methodMember | 'pass' # passMember | LineBreak # lineBreakMember;

statement:
    Preprocessor                                                         # preprocessorStatement
    | (assignmentsList '=')+ (expression | spreadItem (',' spreadItem)*) # assignmentStatement
    | function                                                           # functionStatement
    | 'pass'                                                             # passStatement
    | 'continue'                                                         # continueStatement
    | 'break'                                                            # breakStatement
    | 'return' expression?                                               # returnStatement
    | expression                                                         # expressionStatement
    | LineBreak                                                          # lineBreakStatement
    ;

assignmentsList:   leftAssignments | leftAssignments middleAssignments rightAssignments? | middleAssignments rightAssignments?;
leftAssignments:   ID (',' ID?)* | (',' ID?)+;
middleAssignments: '...' ID? (',' '...' ID?)*;
rightAssignments:  (',' ID?)+;

type: ID # simpleType | type '[' ']' # arrayType | '{' ID type ( ',' ID type)* '}' # dictionaryType | '(' (args += type (',' args += type)*)? ')' returnType = type # functionType;

function: name = ID '(' (argument (',' argument)*)? ')' type? body;

argument: name = ID type? ('=' expression)?;

body: ':' (statement | LineBreak INDENT statement+ DEDENT);

expression:
    'if' expression body ('elif' expression body)* ('else' body)?                                                                                 # ifExpression
    | 'loop' ((value = ID (',' key = ID?)? (',' index = ID)? 'in')? expression)? body                                                             # loopExpression
    | 'select' (value = expression)? ':' LineBreak INDENT ( cases += expression body LineBreak?)+ DEDENT                                          # selectExpression
    | object = expression '(' (args += expression (',' args += expression)*)? ')'                                                                 # functionExpression
    | value = expression '[' index = expression ']'                                                                                               # indexExpression
    | value = expression '[' startPos = expression ':' endPos = expression? (':' step = expression)? ']'                                          # sliceExpression
    | expression '?'? '.' ID                                                                                                                      # memberExpression
    | '@' expression                                                                                                                              # asyncExpression
    | base = expression '^' exponent = expression                                                                                                 # powExpression
    | '+' expression                                                                                                                              # unaryPlusExpression
    | '-' expression                                                                                                                              # unaryMinusExpression
    | 'not' expression                                                                                                                            # bitNotExpression
    | '!' expression                                                                                                                              # logicalNotExpression
    | left = expression operation = ('*' | '/' | '%') right = expression                                                                          # mulDivModExpression
    | left = expression operation = ('+' | '-') right = expression                                                                                # addSubExpression
    | left = expression operation = ('<<' | '>>') right = expression                                                                              # bitShiftExpression
    | left = expression operation = ('<' | '<=' | '>=' | '>') right = expression                                                                  # relationalExpression
    | left = expression operation = ('==' | '!=') right = expression                                                                              # equalityExpression
    | left = expression 'and' right = expression                                                                                                  # bitAndExpression
    | left = expression 'xor' right = expression                                                                                                  # bitXorExpression
    | left = expression 'or' right = expression                                                                                                   # bitOrExpression
    | left = expression '&&' right = expression                                                                                                   # logicalAndExpression
    | left = expression '||' right = expression                                                                                                   # logicalOrExpression
    | ID                                                                                                                                          # idExpression
    | literal                                                                                                                                     # literalExpression
    | StringFormatStart (expression StringFormatMiddle)* expression StringFormatEnd                                                               # stringFormatExpression
    | '[' (spreadItem (',' spreadItem)*)? ']'                                                                                                     # arrayExpression
    | '[' startPos = expression ':' endPos = expression (':' step = expression)? ']'                                                              # rangeExpression
    | '{' ( ('.' ID | '...'? key += expression) '=' value += expression ( ',' ('.' ID | '...'? key += expression) '=' value += expression)*)? '}' # objectExpression
    | '(' expression ')'                                                                                                                          # parenthesizedExpression
    | left = expression '|' (ID ':')? right = expression                                                                                          # pipeExpression
    | '\\' (ID (',' ID)* ':')? expression                                                                                                         # lambdaExpression
    ;

spreadItem: '...'? expression;

literal: NullLiteral # nullLiteral | BooleanLiteral # booleanLiteral | NumberLiteral # numberLiteral | StringLiteral # stringLiteral;