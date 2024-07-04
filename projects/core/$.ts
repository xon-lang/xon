import {Boolean2, Nothing} from '../lib/types';
import {OperatorNode} from './analyzer/lexical/node/operator/operator-node';
import {ExpressionNode, Node} from './analyzer/node';
import {SemanticNode} from './analyzer/semantic/node/semantic-node';
import {Group} from './analyzer/syntax/group/group-node';
import {TextPosition} from './util/resource/text/text-position';
import {TextRange} from './util/resource/text/text-range';

export enum $ {
  // node
  Node = ' Node ',
  LexicalNode = ' LexicalNode ' + $.Node,
  HiddenNode = ' HiddenNode ' + $.Node,
  SyntaxNode = ' SyntaxNode ' + $.Node,
  ExpressionNode = ' ExpressionNode ' + $.Node,

  DocumentationNode = ' DocumentationNode' + $.SyntaxNode + $.HiddenNode,
  DocumentationItemNode = ' DocumentationItemNode ' + $.SyntaxNode,
  DocumentationDescriptionNode = ' DocumentationDescriptionNode ' + $.LexicalNode,
  DocumentationLabelNode = ' DocumentationLabelNode ' + $.LexicalNode,
  DocumentationOpenNode = ' DocumentationOpenNode ' + $.LexicalNode,
  DocumentationCloseNode = ' DocumentationCloseNode ' + $.LexicalNode,

  CommentLineNode = ' CommentLineNode ' + $.LexicalNode + $.HiddenNode,
  CommentBlockNode = ' CommentBlockNode ' + $.LexicalNode + $.HiddenNode,
  WhitespaceNode = ' WhitespaceNode ' + $.LexicalNode + $.HiddenNode,
  JoiningNode = ' JoiningNode ' + $.LexicalNode + $.HiddenNode,
  NlNode = ' NlNode ' + $.LexicalNode + $.HiddenNode,
  IntegerNode = ' IntegerNode ' + $.ExpressionNode + $.LexicalNode,
  FloatNode = ' FloatNode ' + $.ExpressionNode + $.LexicalNode,
  CharNode = ' CharNode ' + $.ExpressionNode + $.LexicalNode,
  StringNode = ' StringNode ' + $.ExpressionNode + $.LexicalNode,
  IdNode = ' IdNode ' + $.ExpressionNode + $.LexicalNode,
  OperatorNode = ' OperatorNode ' + $.ExpressionNode + $.LexicalNode,
  OpenNode = ' OpenNode ' + $.LexicalNode,
  CloseNode = ' CloseNode ' + $.LexicalNode,
  CommaNode = ' CommaNode ' + $.LexicalNode,
  UnknownNode = ' UnknownNode ' + $.LexicalNode,

  ItemNode = ' ItemNode ' + $.LexicalNode,
  ObjectNode = ' ObjectNode ' + $.ExpressionNode + $.LexicalNode,
  ArrayNode = ' ArrayNode ' + $.ExpressionNode + $.LexicalNode,
  GroupNode = ' GroupNode ' + $.ExpressionNode + $.LexicalNode,
  DeclarationNode = ' DeclarationNode ' + $.LexicalNode,
  LambdaNode = ' LambdaNode ' + $.ExpressionNode + $.LexicalNode,
  GenericsNode = ' GenericsNode ' + $.LexicalNode,
  ParametersNode = ' ParametersNode ' + $.LexicalNode,
  ImportNode = ' ImportNode ' + $.ExpressionNode + $.LexicalNode,
  AssignmentNode = ' AssignmentNode ' + $.LexicalNode,
  MemberNode = ' MemberNode ' + $.ExpressionNode + $.LexicalNode,
  InvokeNode = ' InvokeNode ' + $.ExpressionNode + $.LexicalNode,
  InfixNode = ' InfixNode ' + $.ExpressionNode + $.LexicalNode,
  PrefixNode = ' PrefixNode ' + $.ExpressionNode + $.LexicalNode,
  PostfixNode = ' PostfixNode ' + $.ExpressionNode + $.LexicalNode,
  AssignNode = ' AssignNode ' + $.LexicalNode,
  TypeNode = ' TypeNode ' + $.LexicalNode,
  StatementNode = ' StatementNode ' + $.LexicalNode,

  // semantic
  Semantic = ' Semantic ',
  DocumentationIdSemantic = ' DocumentationIdSemantic ' + $.Semantic,
  DeclarationSemantic = ' DeclarationSemantic ' + $.Semantic,

  TypeSemantic = ' TypeSemantic ' + $.Semantic,
  IdType = ' IdTypeSemantic ' + $.TypeSemantic,
  IntegerTypeSemantic = ' IntegerTypeSemantic ' + $.TypeSemantic,
  StringTypeSemantic = ' StringTypeSemantic ' + $.TypeSemantic,
  ArrayTypeSemantic = ' ArrayTypeSemantic ' + $.TypeSemantic,
  FunctionTypeSemantic = ' FunctionTypeSemantic ' + $.TypeSemantic,

  SetTypeSemantic = ' SetTypeSemantic ' + $.TypeSemantic,
  RangeTypeSemantic = ' RangeTypeSemantic ' + $.SetTypeSemantic,
  IntersectionTypeSemantic = ' IntersectionTypeSemantic ' + $.SetTypeSemantic,
  UnionTypeSemantic = ' UnionTypeSemantic ' + $.SetTypeSemantic,
  ComplementTypeSemantic = ' ComplementTypeSemantic ' + $.SetTypeSemantic,
  NotTypeSemantic = ' NotTypeSemantic ' + $.SetTypeSemantic,

  ValueSemantic = ' ValueSemantic ' + $.Semantic,
  IdValueSemantic = ' IdValueSemantic ' + $.ValueSemantic,
  InvokeValueSemantic = ' InvokeValueSemantic ' + $.ValueSemantic,
  IntegerValueSemantic = ' IntegerValueSemantic ' + $.ValueSemantic,
  StringValueSemantic = ' StringValueSemantic ' + $.ValueSemantic,
  MemberValueSemantic = ' MemberValueSemantic ' + $.ValueSemantic,
  ImportValueSemantic = ' ImportValueSemantic ' + $.ValueSemantic,

  TextPosition = ' TextPosition ',
  TextRange = ' TextRange ',
}

export function is<T extends {$?: $} = Node>(node: {$?: $} | Nothing, type: $): node is T {
  if (!node?.$) {
    return false;
  }

  return node.$.includes(type);
}

type TypeMap = {
  [$.Node]: TextPosition;
  [$.LexicalNode]: TextPosition;
  [$.HiddenNode]: TextPosition;
  [$.SyntaxNode]: TextPosition;
  [$.ExpressionNode]: TextPosition;
  [$.DocumentationNode]: TextPosition;
  [$.DocumentationItemNode]: TextPosition;
  [$.DocumentationDescriptionNode]: TextPosition;
  [$.DocumentationLabelNode]: TextPosition;
  [$.DocumentationOpenNode]: TextPosition;
  [$.DocumentationCloseNode]: TextPosition;
  [$.CommentLineNode]: TextPosition;
  [$.CommentBlockNode]: TextPosition;
  [$.WhitespaceNode]: TextPosition;
  [$.JoiningNode]: TextPosition;
  [$.NlNode]: TextPosition;
  [$.IntegerNode]: TextPosition;
  [$.FloatNode]: TextPosition;
  [$.CharNode]: TextPosition;
  [$.StringNode]: TextPosition;
  [$.IdNode]: TextPosition;
  [$.OperatorNode]: TextPosition;
  [$.OpenNode]: TextPosition;
  [$.CloseNode]: TextPosition;
  [$.CommaNode]: TextPosition;
  [$.UnknownNode]: TextPosition;
  [$.ItemNode]: TextPosition;
  [$.ObjectNode]: TextPosition;
  [$.ArrayNode]: TextPosition;
  [$.GroupNode]: TextPosition;
  [$.DeclarationNode]: TextPosition;
  [$.LambdaNode]: TextPosition;
  [$.GenericsNode]: TextPosition;
  [$.ParametersNode]: TextPosition;
  [$.ImportNode]: TextPosition;
  [$.AssignmentNode]: TextPosition;
  [$.MemberNode]: TextPosition;
  [$.InvokeNode]: TextPosition;
  [$.InfixNode]: TextPosition;
  [$.PrefixNode]: TextPosition;
  [$.PostfixNode]: TextPosition;
  [$.AssignNode]: TextPosition;
  [$.TypeNode]: TextPosition;
  [$.StatementNode]: TextPosition;

  [$.Semantic]: TextPosition;
  [$.DocumentationIdSemantic]: TextPosition;
  [$.DeclarationSemantic]: TextPosition;
  [$.TypeSemantic]: TextPosition;
  [$.IdType]: TextPosition;
  [$.IntegerTypeSemantic]: TextPosition;
  [$.StringTypeSemantic]: TextPosition;
  [$.ArrayTypeSemantic]: TextPosition;
  [$.FunctionTypeSemantic]: TextPosition;
  [$.SetTypeSemantic]: TextPosition;
  [$.RangeTypeSemantic]: TextPosition;
  [$.IntersectionTypeSemantic]: TextPosition;
  [$.UnionTypeSemantic]: TextPosition;
  [$.ComplementTypeSemantic]: TextPosition;
  [$.NotTypeSemantic]: TextPosition;
  [$.ValueSemantic]: TextPosition;
  [$.IdValueSemantic]: TextPosition;
  [$.InvokeValueSemantic]: TextPosition;
  [$.IntegerValueSemantic]: TextPosition;
  [$.StringValueSemantic]: TextPosition;
  [$.MemberValueSemantic]: TextPosition;
  [$.ImportValueSemantic]: TextPosition;

  [$.TextPosition]: TextPosition;
  [$.TextRange]: TextRange;
};

type KeyMatching<T, V> = {[K in keyof T]: T[K] extends V ? K : never}[keyof T];
// export type EnumKey<TValue extends `${$}`> = {-readonly [K in keyof typeof $ as (typeof $)[K]]: K};
export type TypeKey<T> = KeyMatching<TypeMap, T>;

export function is2<T extends $>(value: {$: $}, $: T): value is TypeMap[T] {
  if (!value?.$) {
    return false;
  }

  return value.$ === $ || value.$.split(' ').includes($);
}

export function isSetOperatorTypeSemantic(semantic: SemanticNode): Boolean2 {
  return semantic.$.includes($.SetTypeSemantic);
}

export function isHiddenNode(node: Node | Nothing): Boolean2 {
  return is(node, $.HiddenNode);
}

export const groups = [$.GroupNode, $.ArrayNode, $.ObjectNode];

export function isGroupNode(node: Node | Nothing): node is Group {
  if (!node) {
    return false;
  }

  return groups.some((x) => node.$ === x);
}

export function isNonOperatorExpression(node: Node): node is ExpressionNode {
  return is<ExpressionNode>(node, $.ExpressionNode) && !is<OperatorNode>(node, $.OperatorNode);
}

export function hasSemantic<T extends Node>(node: T | Nothing): node is T & {semantic: SemanticNode} {
  if (!node) {
    return false;
  }

  // todo fix it with more logic
  return 'semantic' in node;
}
