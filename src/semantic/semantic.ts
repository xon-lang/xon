import { Nothing, String2 } from '../lib/core';
import { SourceReference } from '../source/source-reference';
import { StatementNode } from '../syntax/node/statement/statement-node';
import { SyntaxResult } from '../syntax/syntax-result';
import { parseModelDeclaration } from './model/model-semantic-parser';
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
    statements: syntax.statements,
  };

  for (const statement of context.statements) {
    parseStatement(context, statement);
  }
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
