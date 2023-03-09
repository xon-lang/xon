parser grammar XonParser
  ;

options {
  tokenVocab = XonLexer;
}

source: NL? (expression nl += NL)* expression? NL?;

expression
  : ID                               # idExpression
  | OPERATOR                         # operatorExpression
  | INTEGER                          # integerExpression
  | FLOAT                            # floatExpression
  | STRING                           # stringExpression
  | NL INDENT source DEDENT          # bodyExpression
  | OPEN (expression | COMMA)* CLOSE # arrayExpression
  | UNEXPECTED+                      # unexpectedExpression
  | expression expression            # pairExpression
  ;
