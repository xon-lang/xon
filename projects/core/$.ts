import {Anything, Boolean2, Nothing} from '../lib/types';
import {CharContentNode} from './analyzer/lexical/node/char-content/char-content-node';
import {AngleCloseNode} from './analyzer/lexical/node/close/angle-close/angle-close-node';
import {BraceCloseNode} from './analyzer/lexical/node/close/brace-close/brace-close-node';
import {BracketCloseNode} from './analyzer/lexical/node/close/bracket-close/bracket-close-node';
import {CharCloseNode} from './analyzer/lexical/node/close/char-close/char-close-node';
import {CloseNode} from './analyzer/lexical/node/close/close-node';
import {ParenCloseNode} from './analyzer/lexical/node/close/paren-close/paren-close-node';
import {StringCloseNode} from './analyzer/lexical/node/close/string-close/string-close-node';
import {CommaNode} from './analyzer/lexical/node/comma/comma-node';
import {CommentBlockNode} from './analyzer/lexical/node/comment-block/comment-block-node';
import {CommentLineNode} from './analyzer/lexical/node/comment-line/comment-line-node';
import {DocumentationCloseNode} from './analyzer/lexical/node/documentation-close/documentation-close-node';
import {DocumentationDescriptionNode} from './analyzer/lexical/node/documentation-description/documentation-description-node';
import {DocumentationLabelNode} from './analyzer/lexical/node/documentation-label/documentation-label-node';
import {DocumentationOpenNode} from './analyzer/lexical/node/documentation-open/documentation-open-node';
import {IdNode} from './analyzer/lexical/node/id/id-node';
import {IntegerContentNode} from './analyzer/lexical/node/integer-content/integer-content-node';
import {JoiningNode} from './analyzer/lexical/node/joining/joining-node';
import {LexicalNode} from './analyzer/lexical/node/lexical-node';
import {NlNode} from './analyzer/lexical/node/nl/nl-node';
import {AngleOpenNode} from './analyzer/lexical/node/open/angle-open/angle-open-node';
import {BraceOpenNode} from './analyzer/lexical/node/open/brace-open/brace-open-node';
import {BracketOpenNode} from './analyzer/lexical/node/open/bracket-open/bracket-open-node';
import {CharOpenNode} from './analyzer/lexical/node/open/char-open/char-open-node';
import {OpenNode} from './analyzer/lexical/node/open/open-node';
import {ParenOpenNode} from './analyzer/lexical/node/open/paren-open/paren-open-node';
import {StringOpenNode} from './analyzer/lexical/node/open/string-open/string-open-node';
import {OperatorNode} from './analyzer/lexical/node/operator/operator-node';
import {StringContentNode} from './analyzer/lexical/node/string-content/string-content-node';
import {UnknownNode} from './analyzer/lexical/node/unknown/unknown-node';
import {WhitespaceNode} from './analyzer/lexical/node/whitespace/whitespace-node';
import {ExpressionNode, Node} from './analyzer/node';
import {DeclarationSemantic} from './analyzer/semantic/node/declaration/declaration-semantic';
import {NominalTypeDeclarationSemantic} from './analyzer/semantic/node/declaration/type/nominal/nominal-type-declaration-semantic';
import {StructuralTypeDeclarationSemantic} from './analyzer/semantic/node/declaration/type/structural/structural-type-declaration-semantic';
import {TypeDeclarationSemantic} from './analyzer/semantic/node/declaration/type/type-declaration-semantic';
import {MethodValueDeclarationSemantic} from './analyzer/semantic/node/declaration/value/method/method-value-declaration-semantic';
import {PropertyValueDeclarationSemantic} from './analyzer/semantic/node/declaration/value/property/property-value-declaration-semantic';
import {ValueDeclarationSemantic} from './analyzer/semantic/node/declaration/value/value-declaration-semantic';
import {DocumentationIdSemantic} from './analyzer/semantic/node/documentation/documentation-id-semantic';
import {Semantic} from './analyzer/semantic/node/semantic';
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
import {AngleGroupNode} from './analyzer/syntax/group/angle/angle-group-node';
import {BraceGroupNode} from './analyzer/syntax/group/brace/brace-group-node';
import {BracketGroupNode} from './analyzer/syntax/group/bracket/bracket-group-node';
import {GroupNode} from './analyzer/syntax/group/group-node';
import {ItemNode} from './analyzer/syntax/group/item-node';
import {ParenGroupNode} from './analyzer/syntax/group/paren/paren-group-node';
import {AssignNode} from './analyzer/syntax/node/assign/assign-node';
import {AssignmentNode} from './analyzer/syntax/node/assignment/assignment-node';
import {CharNode} from './analyzer/syntax/node/char/char-node';
import {DeclarationNode} from './analyzer/syntax/node/declaration/declaration-node';
import {ImportNode} from './analyzer/syntax/node/import/import-node';
import {InfixNode} from './analyzer/syntax/node/infix/infix-node';
import {IntegerNode} from './analyzer/syntax/node/integer/integer-node';
import {InvokeNode} from './analyzer/syntax/node/invoke/invoke-node';
import {LambdaNode} from './analyzer/syntax/node/lambda/lambda-node';
import {MemberNode} from './analyzer/syntax/node/member/member-node';
import {PostfixNode} from './analyzer/syntax/node/postfix/postfix-node';
import {PrefixNode} from './analyzer/syntax/node/prefix/prefix-node';
import {StringNode} from './analyzer/syntax/node/string/string-node';
import {SyntaxNode} from './analyzer/syntax/node/syntax-node';
import {TypeNode} from './analyzer/syntax/node/type/type-node';
import {StatementNode} from './analyzer/syntax/statement/statement-node';
import {Translator} from './translator/translator';
import {TranslatorNode} from './translator/translator-node';
import {TypeDeclarationTypescriptNode} from './translator/typescript/node/declaration/type/type-declaration-typescript-node';
import {TypeTypescriptNode} from './translator/typescript/node/type/type-typescript-node';
import {TypescriptTranslatorNode} from './translator/typescript/node/typescript-node';
import {TypescriptTranslator} from './translator/typescript/typescript-translator';
import {TextData} from './util/data/text-data';
import {Resource} from './util/resource/resource';
import {TextPosition} from './util/resource/text/text-position';
import {TextRange} from './util/resource/text/text-range';
import {TextResource} from './util/resource/text/text-resource';

export enum $ {
  Node = ' Node ',
  LexicalNode = ' LexicalNode ' + $.Node,
  ExpressionNode = ' ExpressionNode ' + $.Node,
  SyntaxNode = ' SyntaxNode ' + $.Node,
  Semantic = ' Semantic ',

  // lexical
  UnknownNode = ' UnknownNode ' + $.LexicalNode,
  DocumentationNode = ' DocumentationNode' + $.SyntaxNode,
  DocumentationItemNode = ' DocumentationItemNode ' + $.SyntaxNode,
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

  // syntax
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
  StatementNode = ' StatementNode ' + $.SyntaxNode,

  // semantic
  DeclarationSemantic = ' DeclarationSemantic ' + $.Semantic,

  TypeDeclarationSemantic = ' TypeDeclarationSemantic ' + $.DeclarationSemantic,
  NominalTypeDeclarationSemantic = ' NominalTypeDeclarationSemantic ' + $.TypeDeclarationSemantic,
  StructuralTypeDeclarationSemantic = ' StructuralTypeDeclarationSemantic ' + $.TypeDeclarationSemantic,

  ValueDeclarationSemantic = ' ValueDeclarationSemantic ' + $.DeclarationSemantic,
  MethodValueDeclarationSemantic = ' MethodValueDeclarationSemantic ' + $.ValueDeclarationSemantic,
  PropertyValueDeclarationSemantic = ' PropertyValueDeclarationSemantic ' + $.ValueDeclarationSemantic,

  DocumentationIdSemantic = ' DocumentationIdSemantic ' + $.Semantic,

  TypeSemantic = ' TypeSemantic ' + $.Semantic,
  IntegerTypeSemantic = ' IntegerTypeSemantic ' + $.TypeSemantic,
  StringTypeSemantic = ' StringTypeSemantic ' + $.TypeSemantic,
  // CharTypeSemantic = ' CharTypeSemantic ' + $.TypeSemantic,
  IdTypeSemantic = ' IdTypeSemantic ' + $.TypeSemantic,
  ArrayTypeSemantic = ' ArrayTypeSemantic ' + $.TypeSemantic,
  FunctionTypeSemantic = ' FunctionTypeSemantic ' + $.TypeSemantic,

  SetTypeSemantic = ' SetTypeSemantic ' + $.TypeSemantic,
  RangeTypeSemantic = ' RangeTypeSemantic ' + $.SetTypeSemantic,
  IntersectionTypeSemantic = ' IntersectionTypeSemantic ' + $.SetTypeSemantic,
  UnionTypeSemantic = ' UnionTypeSemantic ' + $.SetTypeSemantic,
  ComplementTypeSemantic = ' ComplementTypeSemantic ' + $.SetTypeSemantic,
  NotTypeSemantic = ' NotTypeSemantic ' + $.SetTypeSemantic,

  ValueSemantic = ' ValueSemantic ' + $.Semantic,
  IntegerValueSemantic = ' IntegerValueSemantic ' + $.ValueSemantic,
  StringValueSemantic = ' StringValueSemantic ' + $.ValueSemantic,
  // CharValueSemantic = ' CharValueSemantic ' + $.ValueSemantic,
  IdValueSemantic = ' IdValueSemantic ' + $.ValueSemantic,
  InvokeValueSemantic = ' InvokeValueSemantic ' + $.ValueSemantic,
  MemberValueSemantic = ' MemberValueSemantic ' + $.ValueSemantic,
  ImportValueSemantic = ' ImportValueSemantic ' + $.ValueSemantic,

  TextPosition = ' TextPosition ',
  TextRange = ' TextRange ',
  TextData = ' TextData ',

  Resource = ' Resource ',
  TextResource = ' TextResource ' + $.Resource,

  Translator = ' Translator ',
  TranslatorNode = ' TranslatorNode ',

  TypescriptTranslator = ' TypescriptTranslator ' + $.Translator,

  TypescriptTranslatorNode = ' TypescriptTranslatorNode ',
  TypeDeclarationTypescriptNode = ' TypeDeclarationTypescriptNode ' + $.TypescriptTranslatorNode,
  TypeTypescriptNode = ' TypeTypescriptNode ' + $.TypescriptTranslatorNode,
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
  [$.StatementNode]: StatementNode;

  [$.Semantic]: Semantic;
  [$.DocumentationIdSemantic]: DocumentationIdSemantic;

  [$.DeclarationSemantic]: DeclarationSemantic;

  [$.TypeDeclarationSemantic]: TypeDeclarationSemantic;
  [$.NominalTypeDeclarationSemantic]: NominalTypeDeclarationSemantic;
  [$.StructuralTypeDeclarationSemantic]: StructuralTypeDeclarationSemantic;

  [$.ValueDeclarationSemantic]: ValueDeclarationSemantic;
  [$.MethodValueDeclarationSemantic]: MethodValueDeclarationSemantic;
  [$.PropertyValueDeclarationSemantic]: PropertyValueDeclarationSemantic;

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
  [$.TextData]: TextData;

  [$.Resource]: Resource;
  [$.TextResource]: TextResource;

  [$.Translator]: Translator;
  [$.TranslatorNode]: TranslatorNode;

  [$.TypescriptTranslator]: TypescriptTranslator;
  [$.TypescriptTranslatorNode]: TypescriptTranslatorNode;
  [$.TypeTypescriptNode]: TypeTypescriptNode;
  [$.TypeDeclarationTypescriptNode]: TypeDeclarationTypescriptNode;
};

export type $Model = {
  $: $;
};

type KeyMatching<T, V> = {[K in keyof T]: T[K] extends V ? K : never}[keyof T];
// export type EnumKey<TValue extends `${$}`> = {-readonly [K in keyof typeof $ as (typeof $)[K]]: K};
export type TypeKey<T> = KeyMatching<TypeMap, T>;

export function is<T extends $>(model: Anything, $: T): model is TypeMap[T] {
  if (model && typeof model === 'object' && '$' in model && typeof model['$'] === 'string') {
    return model.$.includes($);
  }

  return false;
}

export function isSetOperatorTypeSemantic(semantic: Semantic): Boolean2 {
  return semantic.$.includes($.SetTypeSemantic);
}

export function isNonOperatorExpression(node: Node): node is ExpressionNode {
  return is(node, $.ExpressionNode) && !is(node, $.OperatorNode);
}

export function hasSemantic<T extends Node>(node: T | Nothing): node is T & {semantic: Semantic} {
  if (!node) {
    return false;
  }

  return 'semantic' in node && !!node.semantic;
}
