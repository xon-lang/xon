import {$, is, isSetOperatorTypeSemantic} from '../../../../../../$';
import {Boolean2, Nothing} from '../../../../../../../../lib/types';
import {Node} from '../../../../../node';
import {DeclarationScope} from '../../../../declaration-scope';
import {NominalTypeDeclarationSemantic} from '../../../declaration/type/nominal/nominal-type-declaration-semantic';
import {AttributeValueDeclarationSemantic} from '../../../declaration/value/attribute/attribute-value-declaration-semantic';
import {TypeSemantic} from '../../type-semantic';
import {isInSet, SetTypeSemantic} from '../set';

export interface RangeTypeSemantic extends SetTypeSemantic {
  $: $.RangeTypeSemantic;
  declaration: NominalTypeDeclarationSemantic;
  from: TypeSemantic;
  to: TypeSemantic;
  step: TypeSemantic | Nothing;
}

export function rangeTypeSemantic(
  nodeLink: Node,
  declaration: NominalTypeDeclarationSemantic,
  from: RangeTypeSemantic['from'],
  to: RangeTypeSemantic['to'],
  step: RangeTypeSemantic['step'],
): RangeTypeSemantic {
  const semantic: RangeTypeSemantic = {
    $: $.RangeTypeSemantic,
    nodeLink,
    declaration,
    from,
    to,
    step,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (is(other, $.RangeTypeSemantic)) {
        if (
          is(this.from, $.IntegerTypeSemantic) &&
          is(other.from, $.IntegerTypeSemantic) &&
          is(this.to, $.IntegerTypeSemantic) &&
          is(other.to, $.IntegerTypeSemantic)
        )
          return this.from.value >= other.from.value && this.to.value <= other.to.value;
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is(other, $.RangeTypeSemantic)) {
        return this.from === other.from && this.to === other.to && this.step === other.step;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      throw new Error('Not implemented');
    },
  };

  return semantic;
}
