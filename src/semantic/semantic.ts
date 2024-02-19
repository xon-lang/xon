import { Nothing, String2 } from '../lib/core';
import { SourceReference } from '../source/source-reference';
import { DeclarationNode } from '../syntax/node/declaration/declaration-node';
import { $Node } from '../syntax/node/node';
import { SyntaxResult } from '../syntax/syntax-result';
import { is } from '../syntax/util/is';
import { modelDeclarationsHandle } from './model/model-semantic-parser';
import { SemanticContext, semanticContext } from './semantic-context';
import { ValueSemantic } from './value/value-semantic';

export interface Semantic {
  $: $Semantic;
  reference: SourceReference;
}

export interface DeclarationSemantic extends Semantic {
  name: String2;
  usages: ValueSemantic[];
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

  modelDeclarationsHandle(context, declarations);

  return context;
}

// type StatementScanFn = (context: SemanticContext, node: Node) => Semantic | Nothing;

// const scanFunctions: StatementScanFn[] = [];

// export function parseStatement(context: SemanticContext, statement: StatementNode): void {
//   for (const scan of scanFunctions) {
//   }

//   throw new Error('Not implemented');
// }
