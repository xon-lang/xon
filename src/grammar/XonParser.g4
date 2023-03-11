parser grammar XonParser
  ;

options {
  tokenVocab = XonLexer;
}

source: NL? (expression nl += NL)* expression? NL?;

expression
  : OPEN (expression | COMMA)* CLOSE # arrayExpression
  | NL INDENT source DEDENT          # bodyExpression
  | expression expression            # pairExpression
  | TOKEN+                           # tokenExpression
  ;
