import { String2 } from '../lib/core';
import { SourceReference } from '../source/source-reference';

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
