import {Boolean2, Nothing} from '../lib/types';
import {CharNode} from './analyzer/lexical/node/char/char-node';
import {CloseNode} from './analyzer/lexical/node/close/close-node';
import {CommaNode} from './analyzer/lexical/node/comma/comma-node';
import {CommentBlockNode} from './analyzer/lexical/node/comment-block/comment-block-node';
import {CommentLineNode} from './analyzer/lexical/node/comment-line/comment-line-node';
import {DocumentationCloseNode} from './analyzer/lexical/node/documentation-close/documentation-close-node';
import {DocumentationDescriptionNode} from './analyzer/lexical/node/documentation-description/documentation-description-node';
import {DocumentationLabelNode} from './analyzer/lexical/node/documentation-label/documentation-label-node';
import {DocumentationOpenNode} from './analyzer/lexical/node/documentation-open/documentation-open-node';
import {IdNode} from './analyzer/lexical/node/id/id-node';
import {IntegerNode} from './analyzer/lexical/node/integer/integer-node';
import {JoiningNode} from './analyzer/lexical/node/joining/joining-node';
import {HiddenNode, LexicalNode} from './analyzer/lexical/node/lexical-node';
import {NlNode} from './analyzer/lexical/node/nl/nl-node';
import {OpenNode} from './analyzer/lexical/node/open/open-node';
import {OperatorNode} from './analyzer/lexical/node/operator/operator-node';
import {StringNode} from './analyzer/lexical/node/string/string-node';
import {UnknownNode} from './analyzer/lexical/node/unknown/unknown-node';
import {WhitespaceNode} from './analyzer/lexical/node/whitespace/whitespace-node';
import {ExpressionNode, Node} from './analyzer/node';
import {DeclarationSemantic} from './analyzer/semantic/node/declaration/declaration-semantic';
import {DocumentationIdSemantic} from './analyzer/semantic/node/documentation/documentation-id-semantic';
import {Semantic} from './analyzer/semantic/node/semantic-node';
import {ArrayTypeSemantic} from './analyzer/semantic/node/type/array/array-type-semantic';
import {FunctionTypeSemantic} from './analyzer/semantic/node/type/function/function-type-semantic';
import {IdTypeSemantic} from './analyzer/semantic/node/type/id/id-type-semantic';
import {IntegerTypeSemantic} from './analyzer/semantic/node/type/integer/integer-type-semantic';
import {ComplementTypeSemantic} from './analyzer/semantic/node/type/set/complement/complement-type-semantic';
import {IntersectionTypeSemantic} from './analyzer/semantic/node/type/set/intersection/intersection-type-semantic';
import {NotTypeSemantic} from './analyzer/semantic/node/type/set/not/not-type-semantic';
import {RangeTypeSemantic} from './analyzer/semantic/node/type/set/range/range-type-semantic';
import {SetTypeSemantic} from './analyzer/semantic/node/type/set/set';
import {UnionTypeSemantic} from './analyzer/semantic/node/type/set/union/union-type-semantic';
import {StringTypeSemantic} from './analyzer/semantic/node/type/string/string-type-semantic';
import {TypeSemantic} from './analyzer/semantic/node/type/type-semantic';
import {IdValueSemantic} from './analyzer/semantic/node/value/id/id-value-semantic';
import {ImportValueSemantic} from './analyzer/semantic/node/value/import/import-value-semantic';
import {IntegerValueSemantic} from './analyzer/semantic/node/value/integer/integer-value-semantic';
import {InvokeValueSemantic} from './analyzer/semantic/node/value/invoke/invoke-value-semantic';
import {MemberValueSemantic} from './analyzer/semantic/node/value/member/member-value-semantic';
import {StringValueSemantic} from './analyzer/semantic/node/value/string/string-value-semantic';
import {ValueSemantic} from './analyzer/semantic/node/value/value-semantic';
import {DocumentationItemNode} from './analyzer/syntax/documentation/documentation-item-node';
import {DocumentationNode} from './analyzer/syntax/documentation/documentation-node';
import {ArrayNode, Group, GroupNode, ObjectNode} from './analyzer/syntax/group/group-node';
import {ItemNode} from './analyzer/syntax/group/item-node';
import {AssignNode} from './analyzer/syntax/node/assign/assign-node';
import {AssignmentNode} from './analyzer/syntax/node/assignment/assignment-node';
import {DeclarationNode} from './analyzer/syntax/node/declaration/declaration-node';
import {ImportNode} from './analyzer/syntax/node/import/import-node';
import {InfixNode} from './analyzer/syntax/node/infix/infix-node';
import {InvokeNode} from './analyzer/syntax/node/invoke/invoke-node';
import {LambdaNode} from './analyzer/syntax/node/lambda/lambda-node';
import {MemberNode} from './analyzer/syntax/node/member/member-node';
import {PostfixNode} from './analyzer/syntax/node/postfix/postfix-node';
import {PrefixNode} from './analyzer/syntax/node/prefix/prefix-node';
import {SyntaxNode} from './analyzer/syntax/node/syntax-node';
import {TypeNode} from './analyzer/syntax/node/type/type-node';
import {StatementNode} from './analyzer/syntax/statement/statement-node';
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
  // FloatNode = ' FloatNode ' + $.ExpressionNode + $.LexicalNode,
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
  // GenericsNode = ' GenericsNode ' + $.LexicalNode,
  // ParametersNode = ' ParametersNode ' + $.LexicalNode,
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
  IdTypeSemantic = ' IdTypeSemantic ' + $.TypeSemantic,
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

type TypeMap = {
  [$.Node]: Node;
  [$.LexicalNode]: LexicalNode;
  [$.HiddenNode]: HiddenNode;
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
  // [$.FloatNode]:FloatNode;
  [$.CharNode]: CharNode;
  [$.StringNode]: StringNode;
  [$.IdNode]: IdNode;
  [$.OperatorNode]: OperatorNode;
  [$.OpenNode]: OpenNode;
  [$.CloseNode]: CloseNode;
  [$.CommaNode]: CommaNode;
  [$.UnknownNode]: UnknownNode;
  [$.ItemNode]: ItemNode;
  [$.ObjectNode]: ObjectNode;
  [$.ArrayNode]: ArrayNode;
  [$.GroupNode]: GroupNode;
  [$.DeclarationNode]: DeclarationNode;
  [$.LambdaNode]: LambdaNode;
  // [$.GenericsNode]:GenericsNode;
  // [$.ParametersNode]:ParametersNode;
  [$.ImportNode]: ImportNode;
  [$.AssignmentNode]: AssignmentNode;
  [$.MemberNode]: MemberNode;
  [$.InvokeNode]: InvokeNode;
  [$.InfixNode]: InfixNode;
  [$.PrefixNode]: PrefixNode;
  [$.PostfixNode]: PostfixNode;
  [$.AssignNode]: AssignNode;
  [$.TypeNode]: TypeNode;
  [$.StatementNode]: StatementNode;

  [$.Semantic]: Semantic;
  [$.DocumentationIdSemantic]: DocumentationIdSemantic;
  [$.DeclarationSemantic]: DeclarationSemantic;
  [$.TypeSemantic]: TypeSemantic;
  [$.IdTypeSemantic]: IdTypeSemantic;
  [$.IntegerTypeSemantic]: IntegerTypeSemantic;
  [$.StringTypeSemantic]: StringTypeSemantic;
  [$.ArrayTypeSemantic]: ArrayTypeSemantic;
  [$.FunctionTypeSemantic]: FunctionTypeSemantic;
  [$.SetTypeSemantic]: SetTypeSemantic;
  [$.RangeTypeSemantic]: RangeTypeSemantic;
  [$.IntersectionTypeSemantic]: IntersectionTypeSemantic;
  [$.UnionTypeSemantic]: UnionTypeSemantic;
  [$.ComplementTypeSemantic]: ComplementTypeSemantic;
  [$.NotTypeSemantic]: NotTypeSemantic;
  [$.ValueSemantic]: ValueSemantic;
  [$.IdValueSemantic]: IdValueSemantic;
  [$.InvokeValueSemantic]: InvokeValueSemantic;
  [$.IntegerValueSemantic]: IntegerValueSemantic;
  [$.StringValueSemantic]: StringValueSemantic;
  [$.MemberValueSemantic]: MemberValueSemantic;
  [$.ImportValueSemantic]: ImportValueSemantic;

  [$.TextPosition]: TextPosition;
  [$.TextRange]: TextRange;
};

export type $Model<T extends $ = $> = {
  $: T;
};

export function is<T extends $Model = Node>(model: $Model | Nothing, $: $): model is T {
  if (!model?.$) {
    return false;
  }

  return model.$.includes($);
}

type KeyMatching<T, V> = {[K in keyof T]: T[K] extends V ? K : never}[keyof T];
// export type EnumKey<TValue extends `${$}`> = {-readonly [K in keyof typeof $ as (typeof $)[K]]: K};
export type TypeKey<T> = KeyMatching<TypeMap, T>;

export function is2<T extends $>(model: $Model | Nothing, $: T): model is TypeMap[T] {
  if (!model?.$) {
    return false;
  }

  return model.$.includes($);
}

export function isSetOperatorTypeSemantic(semantic: Semantic): Boolean2 {
  return semantic.$.includes($.SetTypeSemantic);
}

// todo inherit hidden node from node
export function isHiddenNode(node: Node | Nothing): Boolean2 {
  return is2(node, $.HiddenNode);
}

export const groups = [$.GroupNode, $.ArrayNode, $.ObjectNode];

export function isGroupNode(node: Node | Nothing): node is Group {
  if (!node) {
    return false;
  }

  return groups.some((x) => node.$ === x);
}

export function isNonOperatorExpression(node: Node): node is ExpressionNode {
  return is2(node, $.ExpressionNode) && !is2(node, $.OperatorNode);
}

export function hasSemantic<T extends Node>(node: T | Nothing): node is T & {semantic: Semantic} {
  if (!node) {
    return false;
  }

  // todo fix it with more logic
  return 'semantic' in node;
}
