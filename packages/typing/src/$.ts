import {Resource, TextData, TextPosition, TextRange, TextReference, TextResource} from '#common';
import {
  AngleCloseNode,
  AngleGroupNode,
  AngleOpenNode,
  ArrayTypeSemantic,
  AssignmentNode,
  AssignNode,
  AttributeValueDeclarationSemantic,
  BraceCloseNode,
  BraceGroupNode,
  BraceOpenNode,
  BracketCloseNode,
  BracketGroupNode,
  BracketOpenNode,
  CharCloseNode,
  CharContentNode,
  CharNode,
  CharOpenNode,
  CharTypeSemantic,
  CharValueSemantic,
  CloseNode,
  CommaNode,
  CommentBlockNode,
  CommentLineNode,
  ComplementTypeSemantic,
  DeclarationNode,
  DeclarationSemantic,
  DocumentationCloseNode,
  DocumentationDescriptionNode,
  DocumentationIdSemantic,
  DocumentationItemNode,
  DocumentationLabelNode,
  DocumentationNode,
  DocumentationOpenNode,
  ExpressionNode,
  FunctionTypeSemantic,
  GroupNode,
  IdNode,
  IdTypeSemantic,
  IdValueSemantic,
  ImportNode,
  ImportValueSemantic,
  InfixNode,
  IntegerContentNode,
  IntegerNode,
  IntegerTypeSemantic,
  IntegerValueSemantic,
  IntersectionTypeSemantic,
  InvokeNode,
  InvokeTypeSemantic,
  InvokeValueSemantic,
  ItemNode,
  JoiningNode,
  LambdaNode,
  LexicalNode,
  MemberNode,
  MemberValueSemantic,
  NlNode,
  Node,
  NominalTypeDeclarationSemantic,
  NotTypeSemantic,
  OpenNode,
  OperatorNode,
  ParameterTypeDeclarationSemantic,
  ParameterValueDeclarationSemantic,
  ParenCloseNode,
  ParenGroupNode,
  ParenOpenNode,
  PostfixNode,
  PrefixNode,
  RangeTypeSemantic,
  ReturnNode,
  Semantic,
  SetTypeSemantic,
  StatementNode,
  StringCloseNode,
  StringContentNode,
  StringNode,
  StringOpenNode,
  StringTypeSemantic,
  StringValueSemantic,
  StructuralTypeDeclarationSemantic,
  SyntaxNode,
  Translator,
  TypeDeclarationSemantic,
  TypeNode,
  TypescriptTranslator,
  TypeSemantic,
  UnionTypeSemantic,
  UnknownNode,
  UnknownTypeSemantic,
  UnknownValueSemantic,
  ValueDeclarationSemantic,
  ValueSemantic,
  WhitespaceNode,
} from '#core';

export enum $ {
  Node = ' Node ',
  ExpressionNode = ' ExpressionNode ' + $.Node,

  LexicalNode = ' LexicalNode ' + $.Node,
  UnknownNode = ' UnknownNode ' + $.LexicalNode,
  DocumentationDescriptionNode = ' DocumentationDescriptionNode ' + $.LexicalNode,
  DocumentationLabelNode = ' DocumentationLabelNode ' + $.LexicalNode,

  CommentLineNode = ' CommentLineNode ' + $.LexicalNode,
  CommentBlockNode = ' CommentBlockNode ' + $.LexicalNode,
  WhitespaceNode = ' WhitespaceNode ' + $.LexicalNode,
  JoiningNode = ' JoiningNode ' + $.LexicalNode,
  NlNode = ' NlNode ' + $.LexicalNode,
  IdNode = ' IdNode ' + $.ExpressionNode + $.LexicalNode,
  OperatorNode = ' OperatorNode ' + $.ExpressionNode + $.LexicalNode,

  OpenNode = ' OpenNode ' + $.LexicalNode,
  ParenOpenNode = ' ParenOpenNode ' + $.OpenNode,
  BracketOpenNode = ' BracketOpenNode ' + $.OpenNode,
  BraceOpenNode = ' BraceOpenNode ' + $.OpenNode,
  AngleOpenNode = ' AngleOpenNode ' + $.OpenNode,
  StringOpenNode = ' StringOpenNode ' + $.OpenNode,
  CharOpenNode = ' CharOpenNode ' + $.OpenNode,
  DocumentationOpenNode = ' DocumentationOpenNode ' + $.OpenNode,

  CloseNode = ' CloseNode ' + $.LexicalNode,
  ParenCloseNode = ' ParenCloseNode ' + $.CloseNode,
  BracketCloseNode = ' BracketCloseNode ' + $.CloseNode,
  BraceCloseNode = ' BraceCloseNode ' + $.CloseNode,
  AngleCloseNode = ' AngleCloseNode ' + $.CloseNode,
  StringCloseNode = ' StringCloseNode ' + $.CloseNode,
  CharCloseNode = ' CharCloseNode ' + $.CloseNode,
  DocumentationCloseNode = ' DocumentationCloseNode ' + $.CloseNode,

  IntegerContentNode = ' IntegerContentNode ' + $.LexicalNode,
  StringContentNode = ' StringContentNode ' + $.LexicalNode,
  CharContentNode = ' CharContentNode ' + $.LexicalNode,

  CommaNode = ' CommaNode ' + $.LexicalNode,

  SyntaxNode = ' SyntaxNode ' + $.Node,
  DocumentationNode = ' DocumentationNode' + $.SyntaxNode,
  DocumentationItemNode = ' DocumentationItemNode ' + $.SyntaxNode,
  ItemNode = ' ItemNode ' + $.SyntaxNode,

  GroupNode = ' GroupNode ' + $.ExpressionNode + $.SyntaxNode,
  ParenGroupNode = ' ParenGroupNode ' + $.GroupNode,
  BracketGroupNode = ' BracketGroupNode ' + $.GroupNode,
  BraceGroupNode = ' BraceGroupNode ' + $.GroupNode,
  AngleGroupNode = ' AngleGroupNode ' + $.GroupNode,

  DeclarationNode = ' DeclarationNode ' + $.SyntaxNode,

  IntegerNode = ' IntegerNode ' + $.ExpressionNode + $.SyntaxNode,
  CharNode = ' CharNode ' + $.ExpressionNode + $.SyntaxNode,
  StringNode = ' StringNode ' + $.ExpressionNode + $.SyntaxNode,
  LambdaNode = ' LambdaNode ' + $.ExpressionNode + $.SyntaxNode,
  ImportNode = ' ImportNode ' + $.ExpressionNode + $.SyntaxNode,
  MemberNode = ' MemberNode ' + $.ExpressionNode + $.SyntaxNode,
  InvokeNode = ' InvokeNode ' + $.ExpressionNode + $.SyntaxNode,
  InfixNode = ' InfixNode ' + $.ExpressionNode + $.SyntaxNode,
  PrefixNode = ' PrefixNode ' + $.ExpressionNode + $.SyntaxNode,
  PostfixNode = ' PostfixNode ' + $.ExpressionNode + $.SyntaxNode,
  AssignmentNode = ' AssignmentNode ' + $.SyntaxNode,
  AssignNode = ' AssignNode ' + $.SyntaxNode,
  TypeNode = ' TypeNode ' + $.SyntaxNode,
  ReturnNode = ' ReturnNode ' + $.SyntaxNode,
  StatementNode = ' StatementNode ' + $.SyntaxNode,

  Semantic = ' Semantic ',
  DeclarationSemantic = ' DeclarationSemantic ' + $.Semantic,

  TypeDeclarationSemantic = ' TypeDeclarationSemantic ' + $.DeclarationSemantic,
  NominalTypeDeclarationSemantic = ' NominalTypeDeclarationSemantic ' + $.TypeDeclarationSemantic,
  StructuralTypeDeclarationSemantic = ' StructuralTypeDeclarationSemantic ' + $.TypeDeclarationSemantic,
  ParameterTypeDeclarationSemantic = ' ParameterTypeDeclarationSemantic ' + $.TypeDeclarationSemantic,

  ValueDeclarationSemantic = ' ValueDeclarationSemantic ' + $.DeclarationSemantic,
  AttributeValueDeclarationSemantic = ' AttributeValueDeclarationSemantic ' + $.ValueDeclarationSemantic,
  ParameterValueDeclarationSemantic = ' ParameterValueDeclarationSemantic ' + $.ValueDeclarationSemantic,

  DocumentationIdSemantic = ' DocumentationIdSemantic ' + $.Semantic,

  TypeSemantic = ' TypeSemantic ' + $.Semantic,
  IntegerTypeSemantic = ' IntegerTypeSemantic ' + $.TypeSemantic,
  CharTypeSemantic = ' CharTypeSemantic ' + $.TypeSemantic,
  StringTypeSemantic = ' StringTypeSemantic ' + $.TypeSemantic,

  IdTypeSemantic = ' IdTypeSemantic ' + $.TypeSemantic,
  UnknownTypeSemantic = ' UnknownTypeSemantic ' + $.TypeSemantic,

  ArrayTypeSemantic = ' ArrayTypeSemantic ' + $.TypeSemantic,
  FunctionTypeSemantic = ' FunctionTypeSemantic ' + $.TypeSemantic,
  InvokeTypeSemantic = ' InvokeTypeSemantic ' + $.TypeSemantic,

  SetTypeSemantic = ' SetTypeSemantic ' + $.TypeSemantic,
  RangeTypeSemantic = ' RangeTypeSemantic ' + $.SetTypeSemantic,
  IntersectionTypeSemantic = ' IntersectionTypeSemantic ' + $.SetTypeSemantic,
  UnionTypeSemantic = ' UnionTypeSemantic ' + $.SetTypeSemantic,
  ComplementTypeSemantic = ' ComplementTypeSemantic ' + $.SetTypeSemantic,
  NotTypeSemantic = ' NotTypeSemantic ' + $.SetTypeSemantic,

  ValueSemantic = ' ValueSemantic ' + $.Semantic,
  IntegerValueSemantic = ' IntegerValueSemantic ' + $.ValueSemantic,
  CharValueSemantic = ' CharValueSemantic ' + $.ValueSemantic,
  StringValueSemantic = ' StringValueSemantic ' + $.ValueSemantic,
  IdValueSemantic = ' IdValueSemantic ' + $.ValueSemantic,
  UnknownValueSemantic = ' UnknownValueSemantic ' + $.ValueSemantic,
  InvokeValueSemantic = ' InvokeValueSemantic ' + $.ValueSemantic,
  MemberValueSemantic = ' MemberValueSemantic ' + $.ValueSemantic,
  ImportValueSemantic = ' ImportValueSemantic ' + $.ValueSemantic,

  TextPosition = ' TextPosition ',
  TextRange = ' TextRange ',
  TextData = ' TextData ',

  Resource = ' Resource ',
  TextResource = ' TextResource ' + $.Resource,
  TextResourceRange = ' TextResourceRange ' + $.Resource,

  Translator = ' Translator ',
  TypescriptTranslator = ' TypescriptTranslator ' + $.Translator,
}

export type TypeMap = {
  [$.Node]: Node;
  [$.LexicalNode]: LexicalNode;
  [$.SyntaxNode]: SyntaxNode;
  [$.ExpressionNode]: ExpressionNode;
  [$.DocumentationNode]: DocumentationNode;
  [$.DocumentationItemNode]: DocumentationItemNode;
  [$.DocumentationDescriptionNode]: DocumentationDescriptionNode;
  [$.DocumentationLabelNode]: DocumentationLabelNode;
  [$.DocumentationOpenNode]: DocumentationOpenNode;
  [$.DocumentationCloseNode]: DocumentationCloseNode;
  [$.CommentLineNode]: CommentLineNode;
  [$.CommentBlockNode]: CommentBlockNode;
  [$.WhitespaceNode]: WhitespaceNode;
  [$.JoiningNode]: JoiningNode;
  [$.NlNode]: NlNode;
  [$.IntegerNode]: IntegerNode;
  [$.CharNode]: CharNode;
  [$.StringNode]: StringNode;
  [$.IdNode]: IdNode;
  [$.OperatorNode]: OperatorNode;

  [$.OpenNode]: OpenNode;
  [$.ParenOpenNode]: ParenOpenNode;
  [$.BracketOpenNode]: BracketOpenNode;
  [$.BraceOpenNode]: BraceOpenNode;
  [$.AngleOpenNode]: AngleOpenNode;
  [$.StringOpenNode]: StringOpenNode;
  [$.CharOpenNode]: CharOpenNode;

  [$.CloseNode]: CloseNode;
  [$.ParenCloseNode]: ParenCloseNode;
  [$.BracketCloseNode]: BracketCloseNode;
  [$.BraceCloseNode]: BraceCloseNode;
  [$.AngleCloseNode]: AngleCloseNode;
  [$.StringCloseNode]: StringCloseNode;
  [$.CharCloseNode]: CharCloseNode;

  [$.IntegerContentNode]: IntegerContentNode;
  [$.StringContentNode]: StringContentNode;
  [$.CharContentNode]: CharContentNode;

  [$.CommaNode]: CommaNode;
  [$.ItemNode]: ItemNode;

  [$.GroupNode]: GroupNode;
  [$.ParenGroupNode]: ParenGroupNode;
  [$.BracketGroupNode]: BracketGroupNode;
  [$.BraceGroupNode]: BraceGroupNode;
  [$.AngleGroupNode]: AngleGroupNode;

  [$.UnknownNode]: UnknownNode;

  [$.DeclarationNode]: DeclarationNode;

  [$.LambdaNode]: LambdaNode;
  [$.ImportNode]: ImportNode;
  [$.AssignmentNode]: AssignmentNode;
  [$.MemberNode]: MemberNode;
  [$.InvokeNode]: InvokeNode;
  [$.InfixNode]: InfixNode;
  [$.PrefixNode]: PrefixNode;
  [$.PostfixNode]: PostfixNode;
  [$.AssignNode]: AssignNode;
  [$.TypeNode]: TypeNode;
  [$.ReturnNode]: ReturnNode;
  [$.StatementNode]: StatementNode;

  [$.Semantic]: Semantic;
  [$.DocumentationIdSemantic]: DocumentationIdSemantic;

  [$.DeclarationSemantic]: DeclarationSemantic;
  [$.TypeDeclarationSemantic]: TypeDeclarationSemantic;
  [$.NominalTypeDeclarationSemantic]: NominalTypeDeclarationSemantic;
  [$.StructuralTypeDeclarationSemantic]: StructuralTypeDeclarationSemantic;
  [$.ParameterTypeDeclarationSemantic]: ParameterTypeDeclarationSemantic;

  [$.ValueDeclarationSemantic]: ValueDeclarationSemantic;
  [$.AttributeValueDeclarationSemantic]: AttributeValueDeclarationSemantic;
  [$.ParameterValueDeclarationSemantic]: ParameterValueDeclarationSemantic;

  [$.TypeSemantic]: TypeSemantic;

  [$.IdTypeSemantic]: IdTypeSemantic;
  [$.UnknownTypeSemantic]: UnknownTypeSemantic;

  [$.IntegerTypeSemantic]: IntegerTypeSemantic;
  [$.CharTypeSemantic]: CharTypeSemantic;
  [$.StringTypeSemantic]: StringTypeSemantic;
  [$.ArrayTypeSemantic]: ArrayTypeSemantic;
  [$.FunctionTypeSemantic]: FunctionTypeSemantic;
  [$.InvokeTypeSemantic]: InvokeTypeSemantic;
  [$.SetTypeSemantic]: SetTypeSemantic;
  [$.RangeTypeSemantic]: RangeTypeSemantic;
  [$.IntersectionTypeSemantic]: IntersectionTypeSemantic;
  [$.UnionTypeSemantic]: UnionTypeSemantic;
  [$.ComplementTypeSemantic]: ComplementTypeSemantic;
  [$.NotTypeSemantic]: NotTypeSemantic;
  [$.ValueSemantic]: ValueSemantic;
  [$.IdValueSemantic]: IdValueSemantic;
  [$.UnknownValueSemantic]: UnknownValueSemantic;
  [$.InvokeValueSemantic]: InvokeValueSemantic;
  [$.IntegerValueSemantic]: IntegerValueSemantic;
  [$.CharValueSemantic]: CharValueSemantic;
  [$.StringValueSemantic]: StringValueSemantic;
  [$.MemberValueSemantic]: MemberValueSemantic;
  [$.ImportValueSemantic]: ImportValueSemantic;

  [$.TextPosition]: TextPosition;
  [$.TextRange]: TextRange;
  [$.TextData]: TextData;

  [$.Resource]: Resource;
  [$.TextResource]: TextResource;
  [$.TextResourceRange]: TextReference;

  [$.Translator]: Translator;
  [$.TypescriptTranslator]: TypescriptTranslator;
};
