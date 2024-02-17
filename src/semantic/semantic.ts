import { Boolean2, Something, String2 } from '../lib/core';
import { Source } from '../source/source';
import { SourcePosition } from '../source/source-position';

export interface Semantic {
  $: $Semantic;
}

export interface DeclarationSemantic extends Semantic {
  name: String2;
  source: Source;
  position: SourcePosition;
  usages: ValueSemantic[];
  parameters: DeclarationSemantic[];
  restriction: ValueSemantic | null;
  attributes: Record<String2, DeclarationSemantic[]>;
}

export interface ValueSemantic extends Semantic {
  declaration: DeclarationSemantic;
  arguments: ValueSemantic[];
  // attributes: Record<String2, DeclarationSemantic[]>;

  is: (type: ValueSemantic) => Boolean2;

  eq: (type: ValueSemantic) => Boolean2;
}

export interface LiteralSemantic extends ValueSemantic {
  value: Something;
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

export function valueSemantic(declaration: DeclarationSemantic, args: ValueSemantic[]): ValueSemantic {
  if (declaration.parameters.length !== args.length) {
    throw new Error('Not implemented');
  }

  return {
    $: $Semantic.VALUE,
    declaration,
    arguments: args,

    is(type: ValueSemantic): Boolean2 {
      return (this.eq(type) || this.declaration.restriction?.is(type)) ?? false;
    },

    eq(type: ValueSemantic): Boolean2 {
      return this.declaration.name === type.declaration.name;
    },
  };
}

export function literalSemantic(declaration: DeclarationSemantic, value: Something): LiteralSemantic {
  return {
    $: $Semantic.LITERAL,
    declaration,
    arguments: [],
    value,

    is(type: ValueSemantic): Boolean2 {
      return this.eq(type);
    },

    eq(type: ValueSemantic): Boolean2 {
      return this.value === (type as LiteralSemantic)?.value;
    },
  };
}
