parser grammar XonParser
  ;

options {
  tokenVocab = XonLexer;
}

statement
  : LINE_COMMENT                            # commentStatement
  | IMPORT expression? declarations?        # importStatement
  | EXPORT expression?                      # exportStatement
  | FOR (declaration? IN)? expression body  # forStatement
  | WHILE expression body                   # whileStatement
  | DO body WHILE expression                # doWhileStatement
  | IF expression body NL* (ELSE body)?     # ifStatement
  | BREAK                                   # breakStatement
  | CONTINUE                                # continueStatement
  | RETURN expression?                      # returnStatement
  | ACTUAL expression NL* EXPECT expression # assertStatement
  | declaration                             # declarationStatement
  | expression                              # expressionStatement
  ;

expression
  : PREPROCESSOR                    # preprocessorExpression
  | INTEGER                         # integerExpression
  | FLOAT                           # floatExpression
  | STRING                          # stringExpression
  | arguments                       # arrayExpression
  | expression QUESTION             # nullableExpression
  | expression DOT id?              # memberExpression
  | expression META id?             # metaExpression
  | expression arguments            # invokeExpression
  | id                              # idExpression
  | expression OP expression        # infixExpression
  | OP expression                   # prefixExpression
  | declarations* LAMBDA expression # methodExpression
  ;

declaration
  : id id declarations* type? value? # definitionDeclaration
  | declarations type? value?        # destructureDeclaration
  | id type? value?                  # parameterDeclaration
  | OP type? value?                  # operatorDeclaration
  ;

type:  COLON expression?;
value: ASSIGN expression? | body;

declarations: OPEN (declaration (COMMA declaration)* COMMA?)? CLOSE;
arguments:    OPEN (argument (COMMA argument)* COMMA?)? CLOSE;
argument:     (id ASSIGN)? expression;

body:   NL INDENT source DEDENT;
source: NL? (statement nl += NL)* statement? NL?;
id:     ID | ACTUAL | BREAK | CONTINUE | DO | ELSE | EXPECT | EXPORT | FOR | IF | IN | RETURN | WHILE;
