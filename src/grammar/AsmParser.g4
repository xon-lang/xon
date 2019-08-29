parser grammar AsmParser;

options {
    tokenVocab = AsmLexer;
}

module: importDeclaration* statement*; //(classDeclaration | functionDeclaration)

importDeclaration:
    path = StringLiteral '{' members += insensetiveName (',' members += insensetiveName)* '}';

// class
classDeclaration: name = insensetiveName '{' ( functionDeclaration | propertyDeclaration)* '}';

propertyDeclaration: nameType ('=' value = expression)?;

// function
functionDeclaration:
    name = insensetiveName args += nameType? (',' args += nameType)* '{' (statement ';')* '}';

varDeclaration: name = insensetiveName ':' value = expression;

nameType: name = insensetiveName ':' type = insensetiveName;

statement: varDeclaration | assignmentStatement | functionCall; // | asmStatement

assignmentStatement: name = insensetiveName '=' value = expression;

asmStatement: AsmCode;

// asmStatement:
expression:
    literal                                                   # literalExpression
    | insensetiveName                                         # variableExpression
    | left = expression Plus right = expression               # addExpression
    | functionCall                                            # functionCallExpression
    | '[' array += expression? (',' array += expression)* ']' # arrayExpression;

literal: DecimalLiteral | StringLiteral | BooleanLiteral;

functionCall: name = insensetiveName '(' args += expression? (',' args += expression)* ')';

insensetiveName: MemberName | TypeName;
