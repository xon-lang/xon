import {$, is} from '../../../../../$';
import {Boolean2} from '../../../../../../lib/types';
import {IntegerTypeSemantic} from '../integer/integer-type-semantic';
import {TypeSemantic} from '../type-semantic';
import {ComplementTypeSemantic} from './complement/complement-type-semantic';
import {IntersectionTypeSemantic} from './intersection/intersection-type-semantic';
import {NotTypeSemantic} from './not/not-type-semantic';
import {RangeTypeSemantic} from './range/range-type-semantic';
import {UnionTypeSemantic} from './union/union-type-semantic';

export function isInSet(type: TypeSemantic, setType: TypeSemantic): Boolean2 {
  if (is<IntersectionTypeSemantic>(setType, $.IntersectionTypeSemantic)) {
    return type.is(setType.left) && type.is(setType.right);
  }

  if (is<UnionTypeSemantic>(setType, $.UnionTypeSemantic)) {
    return type.is(setType.left) || type.is(setType.right);
  }

  if (is<ComplementTypeSemantic>(setType, $.ComplementTypeSemantic)) {
    return type.is(setType.left) && !type.is(setType.right);
  }

  if (is<NotTypeSemantic>(setType, $.NotTypeSemantic)) {
    return !type.is(setType.value);
  }

  if (is<RangeTypeSemantic>(setType, $.RangeTypeSemantic)) {
    if (
      is<IntegerTypeSemantic>(type, $.IntegerTypeSemantic) &&
      is<IntegerTypeSemantic>(setType.from, $.IntegerTypeSemantic) &&
      is<IntegerTypeSemantic>(setType.to, $.IntegerTypeSemantic)
    ) {
      return type.value >= setType.from.value && type.value <= setType.to.value;
    }

    return false;
  }

  return type.is(setType);
}
