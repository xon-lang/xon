import {Boolean2, Nothing} from '../lib/types';
import {OperatorNode} from './analyzer/lexical/node/operator/operator-node';
import {ExpressionNode, Node} from './analyzer/node';
import {SemanticNode} from './analyzer/semantic/node/semantic-node';
import {Group} from './analyzer/syntax/group/group-node';
import {TextPosition} from './util/resource/text/text-position';
import {TextRange} from './util/resource/text/text-range';

export enum $Node {
  // node
  Node = ' Node ',
  LexicalNode = ' LexicalNode ' + $Node.Node,
  HiddenNode = ' HiddenNode ' + $Node.Node,
  SyntaxNode = ' SyntaxNode ' + $Node.Node,
  ExpressionNode = ' ExpressionNode ' + $Node.Node,

  DocumentationNode = ' DocumentationNode' + $Node.SyntaxNode + $Node.HiddenNode,
  DocumentationItemNode = ' DocumentationItemNode ' + $Node.SyntaxNode,
  DocumentationDescriptionNode = ' DocumentationDescriptionNode ' + $Node.LexicalNode,
  DocumentationLabelNode = ' DocumentationLabelNode ' + $Node.LexicalNode,
  DocumentationOpenNode = ' DocumentationOpenNode ' + $Node.LexicalNode,
  DocumentationCloseNode = ' DocumentationCloseNode ' + $Node.LexicalNode,

  CommentLineNode = ' CommentLineNode ' + $Node.LexicalNode + $Node.HiddenNode,
  CommentBlockNode = ' CommentBlockNode ' + $Node.LexicalNode + $Node.HiddenNode,
  WhitespaceNode = ' WhitespaceNode ' + $Node.LexicalNode + $Node.HiddenNode,
  JoiningNode = ' JoiningNode ' + $Node.LexicalNode + $Node.HiddenNode,
  NlNode = ' NlNode ' + $Node.LexicalNode + $Node.HiddenNode,
  IntegerNode = ' IntegerNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  FloatNode = ' FloatNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  CharNode = ' CharNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  StringNode = ' StringNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  IdNode = ' IdNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  OperatorNode = ' OperatorNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  OpenNode = ' OpenNode ' + $Node.LexicalNode,
  CloseNode = ' CloseNode ' + $Node.LexicalNode,
  CommaNode = ' CommaNode ' + $Node.LexicalNode,
  UnknownNode = ' UnknownNode ' + $Node.LexicalNode,

  ItemNode = ' ItemNode ' + $Node.LexicalNode,
  ObjectNode = ' ObjectNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  ArrayNode = ' ArrayNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  GroupNode = ' GroupNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  DeclarationNode = ' DeclarationNode ' + $Node.LexicalNode,
  LambdaNode = ' LambdaNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  GenericsNode = ' GenericsNode ' + $Node.LexicalNode,
  ParametersNode = ' ParametersNode ' + $Node.LexicalNode,
  ImportNode = ' ImportNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  AssignmentNode = ' AssignmentNode ' + $Node.LexicalNode,
  MemberNode = ' MemberNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  InvokeNode = ' InvokeNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  InfixNode = ' InfixNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  PrefixNode = ' PrefixNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  PostfixNode = ' PostfixNode ' + $Node.ExpressionNode + $Node.LexicalNode,
  AssignNode = ' AssignNode ' + $Node.LexicalNode,
  TypeNode = ' TypeNode ' + $Node.LexicalNode,
  StatementNode = ' StatementNode ' + $Node.LexicalNode,

  // semantic
  Semantic = ' Semantic ',
  DocumentationIdSemantic = ' DocumentationIdSemantic ' + $Node.Semantic,
  DeclarationSemantic = ' DeclarationSemantic ' + $Node.Semantic,

  TypeSemantic = ' TypeSemantic ' + $Node.Semantic,
  IdType = ' IdTypeSemantic ' + $Node.TypeSemantic,
  IntegerTypeSemantic = ' IntegerTypeSemantic ' + $Node.TypeSemantic,
  StringTypeSemantic = ' StringTypeSemantic ' + $Node.TypeSemantic,
  ArrayTypeSemantic = ' ArrayTypeSemantic ' + $Node.TypeSemantic,
  FunctionTypeSemantic = ' FunctionTypeSemantic ' + $Node.TypeSemantic,

  SetTypeSemantic = ' SetTypeSemantic ' + $Node.TypeSemantic,
  RangeTypeSemantic = ' RangeTypeSemantic ' + $Node.SetTypeSemantic,
  IntersectionTypeSemantic = ' IntersectionTypeSemantic ' + $Node.SetTypeSemantic,
  UnionTypeSemantic = ' UnionTypeSemantic ' + $Node.SetTypeSemantic,
  ComplementTypeSemantic = ' ComplementTypeSemantic ' + $Node.SetTypeSemantic,
  NotTypeSemantic = ' NotTypeSemantic ' + $Node.SetTypeSemantic,

  ValueSemantic = ' ValueSemantic ' + $Node.Semantic,
  IdValueSemantic = ' IdValueSemantic ' + $Node.ValueSemantic,
  InvokeValueSemantic = ' InvokeValueSemantic ' + $Node.ValueSemantic,
  IntegerValueSemantic = ' IntegerValueSemantic ' + $Node.ValueSemantic,
  StringValueSemantic = ' StringValueSemantic ' + $Node.ValueSemantic,
  MemberValueSemantic = ' MemberValueSemantic ' + $Node.ValueSemantic,
  ImportValueSemantic = ' ImportValueSemantic ' + $Node.ValueSemantic,
}

export function is<T extends {$?: $Node} = Node>(node: {$?: $Node} | Nothing, type: $Node): node is T {
  if (!node?.$) {
    return false;
  }

  return node.$.includes(type);
}

export enum $ {
  TextPosition = ' TextPosition ',
  TextRange = ' TextRange ',
}

type TypeMap = {
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
  return semantic.$.includes($Node.SetTypeSemantic);
}

export function isHiddenNode(node: Node | Nothing): Boolean2 {
  return is(node, $Node.HiddenNode);
}

export const groups = [$Node.GroupNode, $Node.ArrayNode, $Node.ObjectNode];

export function isGroupNode(node: Node | Nothing): node is Group {
  if (!node) {
    return false;
  }

  return groups.some((x) => node.$ === x);
}

export function isNonOperatorExpression(node: Node): node is ExpressionNode {
  return is<ExpressionNode>(node, $Node.ExpressionNode) && !is<OperatorNode>(node, $Node.OperatorNode);
}

export function hasSemantic<T extends Node>(node: T | Nothing): node is T & {semantic: SemanticNode} {
  if (!node) {
    return false;
  }

  // todo fix it with more logic
  return 'semantic' in node;
}
