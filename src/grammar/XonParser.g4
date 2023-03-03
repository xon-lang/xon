parser grammar XonParser
  ;

options {
  tokenVocab = XonLexer;
}

statement
  : LINE_COMMENT # commentStatement
  | declaration  # declarationStatement
  | expression   # expressionStatement
  ;

expression
  : ID                              # idExpression
  | FLOAT                           # floatExpression
  | INTEGER                         # integerExpression
  | STRING                          # stringExpression
  | arguments                       # arrayExpression
  | expression (DOT | META) ID?     # memberExpression
  | expression arguments            # invokeExpression
  | expression OPERATOR expression  # infixExpression
  | OPERATOR expression             # prefixExpression
  | expression OPERATOR             # postfixExpression
  | declarations* LAMBDA expression # lambdaExpression
  | KEYWORD expression?             # keywordExpression
  ;

declarations: OPEN (declaration (COMMA declaration)* COMMA?)? CLOSE;
declaration
  : modifier = ID name = (ID | OPERATOR) declarations* type? value?
  | modifier = ID? name = (ID | OPERATOR) declarations* (type value? | value)
  | name = (ID | OPERATOR)
  ;
arguments: OPEN (argument (COMMA argument)* COMMA?)? CLOSE;
argument:  (ID ASSIGN)? expression;

type:  COLON expression?;
value: ASSIGN expression? | body;

body:   NL INDENT source DEDENT;
source: NL? (statement nl += NL)* statement? NL?;
