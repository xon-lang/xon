parser grammar XonParser
  ;

options {
  tokenVocab = XonLexer;
}

expression
  : ID                             # idExpression
  | FLOAT                          # floatExpression
  | INTEGER                        # integerExpression
  | STRING                         # stringExpression
  | parameters                     # arrayExpression
  | expression MEMBER_OPERATOR ID? # memberExpression
  | expression parameters          # invokeExpression
  | expression OPERATOR expression # infixExpression
  | OPERATOR expression            # prefixExpression
  | expression OPERATOR            # postfixExpression
  | KEYWORD expression?            # keywordExpression
  ;

parameters: OPEN (expression (COMMA+ expression)* COMMA*)? CLOSE;

body:   NL INDENT source DEDENT;
source: NL? (expression nl += NL)* expression? NL?;
