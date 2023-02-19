parser grammar XonParser
  ;

options {
  tokenVocab = XonLexer;
}

statement
  : LINE_COMMENT                      # commentStatement
  | KEYWORD (expression body? | body) # keywordStatement
  | declaration                       # declarationStatement
  | expression                        # expressionStatement
  ;

expression
  : PREPROCESSOR                    # preprocessorExpression
  | INTEGER                         # integerExpression
  | FLOAT                           # floatExpression
  | STRING                          # stringExpression
  | arguments                       # arrayExpression
  | expression (DOT | META) ID?     # memberExpression
  | expression arguments+           # invokeExpression
  | expression OP expression        # infixExpression
  | OP expression                   # prefixExpression
  | ID                              # idExpression
  | declarations* LAMBDA expression # lambdaExpression
  ;

declarations: OPEN (declaration (COMMA declaration)* COMMA?)? CLOSE;
declaration
  : modifier = ID name = (ID | OP) declarations* type? value?
  | modifier = ID? name = (ID | OP) declarations* (type value? | value)
  | name = (ID | OP)
  ;
arguments: OPEN (argument (COMMA argument)* COMMA?)? CLOSE;
argument:  (ID ASSIGN)? expression;

type:  COLON expression?;
value: ASSIGN expression? | body;

body:   NL INDENT source DEDENT;
source: NL? (statement nl += NL)* statement? NL?;
