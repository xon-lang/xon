import {Boolean2, Nothing, String2, nothing} from '../../lib/core';
import {MODEL_MODIFIER} from '../../parser/syntax-config';
import {SourceReference} from '../../source/source-reference';
import {$Semantic, Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';
import {ValueSemantic} from '../value/value-semantic';

const HAS_BASE_MODIFIERS = [MODEL_MODIFIER];

export interface DeclarationSemantic extends Semantic {
  $: $Semantic.DECLARATION;
  usages: SourceReference[];
  modifier: String2 | Nothing;
  name: String2;
  generics: (DeclarationSemantic | Nothing)[] | Nothing;
  parameters: (DeclarationSemantic | Nothing)[] | Nothing;
  type: TypeSemantic | Nothing;
  typeIsBase: Boolean2;
  initializer: (TypeSemantic | ValueSemantic) | Nothing;
  attributes: Record<String2, DeclarationSemantic[]>;

  eq(semantic: DeclarationSemantic): Boolean2;
}

export function declarationSemantic(
  reference: SourceReference,
  modifier: String2 | Nothing,
  name: String2,
): DeclarationSemantic {
  const typeIsBase = modifier ? HAS_BASE_MODIFIERS.includes(modifier) : false;

  return {
    $: $Semantic.DECLARATION,
    reference,
    modifier,
    name,
    usages: [reference],
    generics: nothing,
    parameters: nothing,
    type: nothing,
    typeIsBase,
    initializer: nothing,
    attributes: {},

    eq(semantic: DeclarationSemantic): Boolean2 {
      return this.reference.eq(semantic.reference);
    },
  };
}
