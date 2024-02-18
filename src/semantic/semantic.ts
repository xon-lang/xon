import { String2, nothing } from '../lib/core';
import { SourceReference, sourceReference } from '../source/source-reference';
import { IdNode } from '../syntax/node/id/id-node';
import { $Node, StatementNode } from '../syntax/node/node';
import { PrefixNode } from '../syntax/node/prefix/prefix-node';
import { MODEL_MODIFIER } from '../syntax/syntax-config';
import { SyntaxResult } from '../syntax/syntax-result';
import { is } from '../syntax/util/is';
import { modelDeclarationSemantic } from './model/model-semantic';
import { SemanticContext } from './semantic-context';

export interface Semantic {
  $: $Semantic;
  reference: SourceReference;
}

export interface DeclarationSemantic extends Semantic {
  name: String2;
  usages: ValueSemantic[];
}

export interface ValueSemantic extends Semantic {
  declaration: DeclarationSemantic;
}

export enum $Semantic {
  MODEL_DECLARATION,
  MODEL_VALUE,

  GENERIC_DECLARATION,
  GENERIC_VALUE,

  PARAMETER_DECLARATION,
  PARAMETER_VALUE,

  METHOD_DECLARATION,
  METHOD_VALUE,

  PROPERTY_DECLARATION,
  PROPERTY_VALUE,

  PUNCTUATION_DECLARATION,
  PUNCTUATION_VALUE,

  DECLARATION,
  GENERIC,
  FUNCTION_PARAMETER,
  LAMBDA_PARAMETER,
  CONSTANT,
  VARIABLE,
  LITERAL,
  OPERATOR,
  KEYWORD,
}

export function semanticIs<T extends Semantic = Semantic>(semantic: { $: $Semantic }, type: $Semantic): semantic is T {
  return semantic.$ === type;
}

export function parse(syntax: SyntaxResult): void {
  const context: SemanticContext = {
    source: syntax.source,
    hidden: syntax.hidden,
    issues: syntax.issues,
    statements: syntax.root.body,
  };

  for (const statement of context.statements) {
    if (is<PrefixNode>(statement, $Node.PREFIX)) {
      parseStatement(context, statement);
    }
  }
}

export function parseStatement(context: SemanticContext, statement: StatementNode): void {
  
}

export function parsePrefix(syntax: SyntaxResult, node: PrefixNode): void {
  if (node.operator.text === MODEL_MODIFIER && is<IdNode>(node.value, $Node.ID)) {
    const reference = sourceReference(syntax.source, node.value.range.start);
    const name = node.value.text;
    const generics = [];
    const base = nothing;
    const attributes = {};

    node.semantic = modelDeclarationSemantic(reference, name, generics, base, attributes);
  }
}
