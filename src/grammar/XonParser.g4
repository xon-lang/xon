parser grammar XonParser
  ;

options {
  tokenVocab = XonLexer;
}

statement
  : LINE_COMMENT                           # commentStatement
  | IMPORT expression? declarations?       # importStatement
  | EXPORT expression?                     # exportStatement
  | FOR (declaration? IN)? expression body # forStatement
  | WHILE expression body                  # whileStatement
  | DO body WHILE expression               # doWhileStatement
  | IF expression body NL* (ELSE body)?    # ifStatement
  | BREAK                                  # breakStatement
  | CONTINUE                               # continueStatement
  | RETURN expression?                     # returnStatement
  | declaration                            # declarationStatement
  | expression                             # expressionStatement
  ;

expression
  : PREPROCESSOR                   # preprocessorExpression
  | INTEGER                        # integerExpression
  | FLOAT                          # floatExpression
  | STRING                         # stringExpression
  | arguments                      # arrayExpression
  | expression QUESTION            # nullableExpression
  | expression DOT ID?             # memberExpression
  | expression META ID?            # metaExpression
  | expression arguments+          # invokeExpression
  | ID                             # idExpression
  | expression OP expression       # infixExpression
  | OP expression                  # prefixExpression
  | declarations* LAMBDA statement # lambdaExpression
  ;

declarations: OPEN (declaration (COMMA declaration)* COMMA?)? CLOSE;
declaration
  : ID ID declarations* type? value?      # definitionDeclaration
  | ID? ID type? value?                   # parameterDeclaration
  | ID? OP type? value?                   # operatorDeclaration
  | ID? declarations (type? value | type) # destructureDeclaration
  ;
arguments: OPEN (argument (COMMA argument)* COMMA?)? CLOSE;
argument:  (ID ASSIGN)? expression;

type:  COLON expression?;
value: ASSIGN expression? | body;

body:   NL INDENT source DEDENT;
source: NL? (statement nl += NL)* statement? NL?;
