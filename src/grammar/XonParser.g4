parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

program:  /* imports*?  */ (statement | definition)*;

imports:      importPath ':' ('*' 'as' alias = ID | importMember (',' importMember)*);
importPath:   ('.'* (ID | StringLiteral))*;
importMember: name = ID ('as' alias = ID)?;

definition: name = ID ':' LineBreak INDENT member+ DEDENT;
member
    : name = ID (type = ID)? ('=' value = expression)? # propertyMember
    | ID '(' (argument (',' argument)*)? ')' body      # methodMember
    | definition                                       # definitionMember
    | 'pass'                                           # passMember
    | LineBreak                                        # lineBreakMember
    ;

// statements
statement
    : Preprocessor                                # preprocessorStatement
    | ID '=' expression                           # assignmentStatement
    | ID '(' (argument (',' argument)*)? ')' body # functionStatement
    | 'pass'                                      # passStatement
    | 'continue'                                  # continueStatement
    | 'break'                                     # breakStatement
    | 'return' expression?                        # returnStatement
    | expression                                  # expressionStatement
    | LineBreak                                   # lineBreakStatement
    ;

argument: name = ID type = ID ('=' value = expression)?;
body:     ':' (statement | LineBreak INDENT statement+ DEDENT);

// expressions
expression
    : 'if' expression body ('else' ('if' expression)? body)?                          # ifExpression
    | 'loop' ((value = ID (',' key = ID?)? (',' index = ID)? 'in')? expression)? body # loopExpression
    | 'select' (value = expression ('as' ID)?)? ':' LineBreak INDENT (
        cases += expression body LineBreak?
    )+ DEDENT                                                                                            # selectExpression
    | object = expression '(' (args += expression (',' args += expression)*)? ')'                        # functionExpression
    | value = expression '[' index = expression ']'                                                      # indexExpression
    | value = expression '[' startPos = expression ':' endPos = expression? (':' step = expression)? ']' # sliceExpression
    | expression '?'? '.' ID                                                                             # memberExpression
    | '.' ID                                                                                             # instanceMemberExpression
    | '...' expression                                                                                   # spreadExpression
    | base = expression '^' exponent = expression                                                        # powExpression
    | '+' expression                                                                                     # unaryPlusExpression
    | '-' expression                                                                                     # unaryMinusExpression
    | '~' expression                                                                                     # bitNotExpression
    | '!' expression                                                                                     # logicalNotExpression
    | left = expression operation = ('*' | '/' | '%') right = expression                                 # mulDivModExpression
    | left = expression operation = ('+' | '-') right = expression                                       # addSubExpression
    | left = expression operation = ('<<' | '>>' | '>>>') right = expression                             # bitShiftExpression
    | left = expression operation = ('<' | '<=' | '>=' | '>') right = expression                         # relationalExpression
    | left = expression operation = ('==' | '!=') right = expression                                     # equalityExpression
    | left = expression 'and' right = expression                                                         # bitAndExpression
    | left = expression 'xor' right = expression                                                         # bitXorExpression
    | left = expression 'or' right = expression                                                          # bitOrExpression
    | left = expression '&&' right = expression                                                          # logicalAndExpression
    | left = expression '||' right = expression                                                          # logicalOrExpression
    | ID                                                                                                 # idExpression
    | literal                                                                                            # literalExpression
    | StringFormatStart (expression StringFormatMiddle)* expression StringFormatEnd                      # stringFormatExpression
    | '[' (items += expression (',' items += expression)*)? ']'                                          # arrayExpression
    | '[' startPos = expression ':' end = expression (':' step = expression)? ']'                        # rangeExpression
    | '{' (ID ':' expression (',' ID ':' expression)*)? '}'                                              # objectExpression
    | '(' expression ')'                                                                                 # parenthesizedExpression
    | left = expression '|' (ID ':')? right = expression                                                 # pipeExpression
    | '\\' (ID (',' ID)* ':')? expression                                                                # lambdaExpression
    ;

literal
    : NullLiteral    # nullLiteral
    | BooleanLiteral # booleanLiteral
    | DecimalLiteral # decimalLiteral
    | FloatLiteral   # floatLiteral
    | StringLiteral  # stringLiteral
    ;