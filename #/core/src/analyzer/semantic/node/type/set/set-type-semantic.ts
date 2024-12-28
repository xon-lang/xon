import {Boolean2} from '#common';
import {
  $ComplementTypeSemantic,
  $IntegerTypeSemantic,
  $IntersectionTypeSemantic,
  $NotTypeSemantic,
  $RangeTypeSemantic,
  $TypeSemantic,
  $UnionTypeSemantic,
  corePackageType,
  TypeSemantic,
} from '#core';
import {is} from '#typing';

export type SetTypeSemantic = TypeSemantic & {__branding?: null};

export const $SetTypeSemantic = corePackageType<SetTypeSemantic>('SetTypeSemantic', $TypeSemantic);

export function isInSet(type: TypeSemantic, setType: SetTypeSemantic): Boolean2 {
  if (is(setType, $IntersectionTypeSemantic)) {
    return type.is(setType.left) && type.is(setType.right);
  }

  if (is(setType, $UnionTypeSemantic)) {
    return type.is(setType.left) || type.is(setType.right);
  }

  if (is(setType, $ComplementTypeSemantic)) {
    return type.is(setType.left) && !type.is(setType.right);
  }

  if (is(setType, $NotTypeSemantic)) {
    return !type.is(setType.value);
  }

  if (is(setType, $RangeTypeSemantic)) {
    if (
      is(type, $IntegerTypeSemantic) &&
      is(setType.from, $IntegerTypeSemantic) &&
      is(setType.to, $IntegerTypeSemantic)
    ) {
      return type.value >= setType.from.value && type.value <= setType.to.value;
    }

    return false;
  }

  return type.is(setType);
}
