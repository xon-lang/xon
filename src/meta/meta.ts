import { Boolean2, Something, String2 } from '../lib/core';
import { Source } from '../source/source';
import { SourcePosition } from '../source/source-position';

export interface Meta {
  $: $Meta;
}

export interface DeclarationMeta extends Meta {
  name: String2;
  source: Source;
  position: SourcePosition;
  usages: ValueMeta[];
  parameters: DeclarationMeta[];
  restriction: ValueMeta | null;
  attributes: Record<String2, DeclarationMeta[]>;
}

export interface ValueMeta extends Meta {
  declaration: DeclarationMeta;
  arguments: ValueMeta[];
  // attributes: Record<String2, DeclarationMeta[]>;

  is: (type: ValueMeta) => Boolean2;

  eq: (type: ValueMeta) => Boolean2;
}

export interface LiteralMeta extends ValueMeta {
  value: Something;
}

export enum $Meta {
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

export function metaIs<T extends Meta = Meta>(meta: { $: $Meta }, type: $Meta): meta is T {
  return meta.$ === type;
}

export function valueMeta(declaration: DeclarationMeta, args: ValueMeta[]): ValueMeta {
  if (declaration.parameters.length !== args.length) {
    throw new Error('Not implemented');
  }

  return {
    $: $Meta.VALUE,
    declaration,
    arguments: args,

    is(type: ValueMeta): Boolean2 {
      return (this.eq(type) || this.declaration.restriction?.is(type)) ?? false;
    },

    eq(type: ValueMeta): Boolean2 {
      return this.declaration.name === type.declaration.name;
    },
  };
}

export function literalMeta(declaration: DeclarationMeta, value: Something): LiteralMeta {
  return {
    $: $Meta.LITERAL,
    declaration,
    arguments: [],
    value,

    is(type: ValueMeta): Boolean2 {
      return this.eq(type);
    },

    eq(type: ValueMeta): Boolean2 {
      return this.value === (type as LiteralMeta)?.value;
    },
  };
}
