import { Nothing, String2 } from '../lib/core';
import { SourceReference } from '../source/source-reference';
import { DeclarationNode } from '../syntax/node/declaration/declaration-node';
import { $Node } from '../syntax/node/node';
import { SyntaxResult } from '../syntax/syntax-result';
import { is } from '../syntax/util/is';
import { modelsParse } from './model/model-semantic-parser';
import { SemanticContext, semanticContext } from './semantic-context';
import { UsageSemantic } from './usage/usage-semantic';

export interface Semantic {
  $: $Semantic;
  reference: SourceReference;
}

export interface DeclarationSemantic extends Semantic {
  name: String2;
  usages: UsageSemantic[];
}

export enum $Semantic {
  LITERAL,
  VALUE,
  MODEL,
  GENERIC,
  PARAMETER,
  METHOD,
  PROPERTY,
  CONSTANT,
  VARIABLE,
  OPERATOR,
}

export function semanticIs<T extends Semantic = Semantic>(
  semantic: { $: $Semantic } | Nothing,
  type: $Semantic,
): semantic is T {
  return semantic?.$ === type;
}

export function parseSemantic(syntax: SyntaxResult): SemanticContext {
  const context = semanticContext(null, syntax.source);

  const declarations = syntax.statements
    .map((x) => x.item)
    .filter((x): x is DeclarationNode => is<DeclarationNode>(x, $Node.DECLARATION));

  modelsParse(context, declarations);

  return context;
}
