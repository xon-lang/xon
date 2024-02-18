import { Nothing, String2 } from '../lib/core';
import { SourceReference } from '../source/source-reference';
import { StatementNode } from '../syntax/node/statement/statement-node';
import { SyntaxResult } from '../syntax/syntax-result';
import { parseModelDeclaration } from './model/model-semantic-parser';
import { SemanticContext, semanticContext } from './semantic-context';

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

export function semanticIs<T extends Semantic = Semantic>(
  semantic: { $: $Semantic } | Nothing,
  type: $Semantic,
): semantic is T {
  return semantic?.$ === type;
}

export function parseSemantic(syntax: SyntaxResult): SemanticContext {
  const context = semanticContext(null, syntax.source);

  for (const statement of syntax.statements) {
    parseStatement(context, statement);
  }

  return context;
}

type StatementScanFn = (context: SemanticContext, statement: StatementNode) => Semantic | Nothing;

const scanFunctions: StatementScanFn[] = [parseModelDeclaration];

export function parseStatement(context: SemanticContext, statement: StatementNode): void {
  for (const scan of scanFunctions) {
    if (scan(context, statement)) {
      return;
    }
  }

  throw new Error('Not implemented');
}
