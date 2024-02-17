export interface Semantic {
  $: $Semantic;
}

export enum $Semantic {
  DECLARATION,
  GENERIC,
  MODEL,
  FUNCTION_PARAMETER,
  LAMBDA_PARAMETER,
  ATTRIBUTE,
  CONSTANT,
  VARIABLE,
  LITERAL,
  VALUE,
  OPERATOR,
  // KEYWORD,
}

export function semanticIs<T extends Semantic = Semantic>(semantic: { $: $Semantic }, type: $Semantic): semantic is T {
  return semantic.$ === type;
}
