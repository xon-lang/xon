import { Anything, Boolean2, Nothing, Something, String2 } from '../../lib/core';
import { Source } from '../../source/source';
import { SourcePosition } from '../../source/source-position';

export interface Type {
  $: $Type;
  name: String2;
  base: Type | Nothing;
  data: Record<String2, Anything> | Nothing;
  parameters: Type[];
  attributes: Record<String2, Type[]>;

  is: (type: Type) => Boolean2;
  eq: (type: Type) => Boolean2;
}

export function eq<T extends Type>(left: T, right: Type): right is T {
  return left.name === right.name;
}

export enum $Type {
  MODEL,
  LITERAL,
  OPERATOR,
  VARIABLE,
}

export interface Meta {}

export interface DeclarationMeta extends Meta {
  $: $DeclarationMeta;
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

export enum $DeclarationMeta {
  GENERIC,
  MODEL,
  LITERAL,
  FUNCTION_PARAMETER,
  LAMBDA_PARAMETER,
  ATTRIBUTE,
  CONSTANT,
  VARIABLE,
}

export function valueMeta(declaration: DeclarationMeta, args: ValueMeta[]): ValueMeta {
  if (declaration.parameters.length !== args.length) {
    throw new Error('Not implemented');
  }

  return {
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
