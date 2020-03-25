parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

program:  /* imports*?  */ statement*;

imports:      importPath ':' ('*' 'as' alias = ID | importMember (',' importMember)*);
importPath:   '.'* (ID | StringLiteral) ('.' (ID | StringLiteral))*;
importMember: name = ID 'as' alias = ID | name = ID;

definition: TypeID ':' LineBreak INDENT (definitionMember LineBreak)+ DEDENT;
definitionMember
    : name = ID (':' valueType = ID | '=' value = expression) # propertyMember
    | name = ID '(' (argument (',' argument)*)? ')' body      # methodMember
    ;

// statements
statement
    : Preprocessor                                # preprocessorStatement
    | ID '::=' expression                         # constantStatement
    | ID ':=' expression                          # declarationStatement
    | ID '=' expression                           # assignmentStatement
    | ID '(' (argument (',' argument)*)? ')' body # functionStatement
    | 'continue'                                  # continueStatement
    | 'break'                                     # breakStatement
    | 'return' expression?                        # returnStatement
    | expression                                  # expressionStatement
    | LineBreak                                   # LineBreakStatement
    ;

argument: name = ID ':' valueType = ID ('=' value = expression)?;
body:     ':' (statement | LineBreak INDENT statement+ DEDENT);

// expressions
expression
    : 'if' expression body ('else' ('if' expression)? body)?                                          # ifExpression
    | 'loop' ((value = ID (',' key = ID?)? (',' index = ID)? 'in')? expression)? body                 # loopExpression
    | 'select' value = expression? ':' LineBreak (INDENT item = expression body)+                     # selectExpression
    | object = expression '(' (args += expression (',' args += expression)*)? ')'                     # functionExpression
    | value = expression '[' index = expression ']'                                                   # indexExpression
    | value = expression '[' startPos = expression ':' end = expression? (':' step = expression)? ']' # sliceExpression
    | expression '?'? '.' ID                                                                          # memberExpression
    | base = expression '^' exponent = expression                                                     # powExpression
    | '+' expression                                                                                  # unaryPlusExpression
    | '-' expression                                                                                  # unaryMinusExpression
    | '~' expression                                                                                  # bitNotExpression
    | '!' expression                                                                                  # logicalNotExpression
    | left = expression operation = ('*' | '/' | '%') right = expression                              # mulDivModExpression
    | left = expression operation = ('+' | '-') right = expression                                    # addSubExpression
    | left = expression operation = ('<<' | '>>' | '>>>') right = expression                          # bitShiftExpression
    | left = expression operation = ('<' | '<=' | '>=' | '>') right = expression                      # relationalExpression
    | left = expression operation = ('==' | '!=') right = expression                                  # equalityExpression
    | left = expression 'and' right = expression                                                      # bitAndExpression
    | left = expression 'xor' right = expression                                                      # bitXorExpression
    | left = expression 'or' right = expression                                                       # bitOrExpression
    | left = expression '&&' right = expression                                                       # logicalAndExpression
    | left = expression '||' right = expression                                                       # logicalOrExpression
    | ID                                                                                              # idExpression
    | literal                                                                                         # literalExpression
    | StringFormatStart (expression StringFormatMiddle)* expression StringFormatEnd                   # stringFormatExpression
    | '[' (items += expression (',' items += expression)*)? ']'                                       # arrayExpression
    | '[' startPos = expression ':' end = expression (':' step = expression)? ']'                     # rangeExpression
    | '{' (ID ':' expression (',' ID ':' expression)*)? '}'                                           # objectExpression
    | '(' expression ')'                                                                              # parenthesizedExpression
    | left = expression '|' (ID ':')? right = expression                                              # pipeExpression
    | '\\' (ID (',' ID)* ':')? expression                                                             # lambdaExpression
    ;

literal
    : NullLiteral    # nullLiteral
    | BooleanLiteral # booleanLiteral
    | DecimalLiteral # decimalLiteral
    | FloatLiteral   # floatLiteral
    | StringLiteral  # stringLiteral
    ;