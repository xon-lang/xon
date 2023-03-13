parser grammar XonParser
  ;

options {
  tokenVocab = XonLexer;
}

source: NL? (expression nl += NL)* expression? NL?;

expression
  : NL INDENT source DEDENT # bodyExpression
  | expression expression   # pairExpression
  | TOKEN+                  # tokenExpression
  ;
