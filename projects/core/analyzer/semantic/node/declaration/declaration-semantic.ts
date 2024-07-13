import {$, is} from '../../../../$';
import {Array2, Boolean2, Nothing, String2} from '../../../../../lib/types';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {TYPE_MODIFIERS, VALUE_MODIFIERS} from '../../../lexical/lexical-analyzer-config';
import {DeclarationManager} from '../../declaration-manager';
import {Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';
import {ValueSemantic} from '../value/value-semantic';

export interface DeclarationSemantic extends Semantic<$.DeclarationSemantic> {
  documentation?: String2 | Nothing;
  usages: Array2<TextResourceRange>;
  modifier?: String2 | Nothing;
  name: String2;
  generics?: Array2<DeclarationSemantic | Nothing> | Nothing;
  parameters?: Array2<DeclarationSemantic | Nothing> | Nothing;
  type?: TypeSemantic | Nothing;
  value?: (TypeSemantic | ValueSemantic) | Nothing;
  attributes?: DeclarationManager | Nothing;

  eq(other: DeclarationSemantic): Boolean2;
}

export function declarationSemantic(
  reference: TextResourceRange,
  documentation: String2 | Nothing,
  modifier: String2 | Nothing,
  name: String2,
): DeclarationSemantic {
  return {
    $: $.DeclarationSemantic,
    reference,
    documentation,
    modifier,
    name,
    usages: [],

    eq(other: DeclarationSemantic): Boolean2 {
      return this.reference.positionEquals(other.reference);
    },
  };
}

export function isTypeDeclarationSemantic(semantic: Semantic): semantic is DeclarationSemantic {
  return (
    is(semantic, $.DeclarationSemantic) && !!semantic.modifier && TYPE_MODIFIERS.includes(semantic.modifier)
  );
}

export function isValueDeclarationSemantic(semantic: Semantic): semantic is DeclarationSemantic {
  return (
    is(semantic, $.DeclarationSemantic) && (!semantic.modifier || VALUE_MODIFIERS.includes(semantic.modifier))
  );
}
