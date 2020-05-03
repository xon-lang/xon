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
    : name = ID (type | type? '=' value = expression) # propertyMember
    | function                                        # methodMember
    // | 'init' '(' (argument (',' argument)*)? ')' body # constructordMember

    // | '+' '(' argument ')' body          # addOperatordMember

    // | '-' '(' argument ')' body          # subOperatordMember

    // | '*' '(' argument ')' body          # mulOperatordMember

    // | '/' '(' argument ')' body          # divOperatordMember

    // | '^' '(' argument ')' body          # powOperatordMember
    | 'pass' # passMember
    // | init (.pub_prop, ...._prv_prop, no_prop)
    | LineBreak # lineBreakMember
    ;

// statements
statement
    : Preprocessor                                        # preprocessorStatement
    | (assignmentsList '=')+ expression (',' expression)* # assignmentStatement
    | function                                            # functionStatement
    | 'pass'                                              # passStatement
    | 'continue'                                          # continueStatement
    | 'break'                                             # breakStatement
    | 'return' expression?                                # returnStatement
    | expression                                          # expressionStatement
    | LineBreak                                           # lineBreakStatement
    ;

assignmentsList
    : leftAssignments
    | leftAssignments middleAssignments rightAssignments?
    | middleAssignments rightAssignments?
    ;

leftAssignments:   ID (',' ID?)* | (',' ID?)+;
middleAssignments: '...' ID? (',' '...' ID?)*;
rightAssignments:  (',' ID?)+;

type
    : ID                              # simpleType
    | type '[' ']'                    # arrayType
    | '{' ID type ( ',' ID type)* '}' # dictionaryType
    ;
function: ID '(' (argument (',' argument)*)? ')' body;
argument: name = ID (type | type? '=' expression);
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
    | '@' expression                                                                                     # asyncExpression
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
    | '{' (
        ('.' ID | key += expression) '=' value += expression (
            ',' ('.' ID | key += expression) '=' value += expression
        )*
    )? '}'                                               # objectExpression
    | '(' expression ')'                                 # parenthesizedExpression
    | left = expression '|' (ID ':')? right = expression # pipeExpression
    | '\\' (ID (',' ID)* ':')? expression                # lambdaExpression
    ;

literal
    : NullLiteral    # nullLiteral
    | BooleanLiteral # booleanLiteral
    | DecimalLiteral # decimalLiteral
    | FloatLiteral   # floatLiteral
    | StringLiteral  # stringLiteral
    ;