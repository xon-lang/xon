import {
  $AnalyzerType,
  $ComplementTypeSemantic,
  $IntegerTypeSemantic,
  $IntersectionTypeSemantic,
  $NotTypeSemantic,
  $RangeTypeSemantic,
  $TypeSemantic,
  $UnionTypeSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2} from '#common';
import {Brand, is} from '#typing';

export type SetTypeSemantic = TypeSemantic & Brand<'Analyzer.SetTypeSemantic'>;

export const $SetTypeSemantic = () => $AnalyzerType<SetTypeSemantic>('SetTypeSemantic', $TypeSemantic());

// todo swap parameters
export function isInSet(type: TypeSemantic, setType: SetTypeSemantic): Boolean2 {
  if (is(setType, $IntersectionTypeSemantic())) {
    return type.is(setType.left) && type.is(setType.right);
  }

  if (is(setType, $UnionTypeSemantic())) {
    return type.is(setType.left) || type.is(setType.right);
  }

  if (is(setType, $ComplementTypeSemantic())) {
    return type.is(setType.left) && !type.is(setType.right);
  }

  if (is(setType, $NotTypeSemantic())) {
    return !type.is(setType.value);
  }

  if (is(setType, $RangeTypeSemantic())) {
    if (
      is(type, $IntegerTypeSemantic()) &&
      is(setType.from, $IntegerTypeSemantic()) &&
      is(setType.to, $IntegerTypeSemantic())
    ) {
      return type.value >= setType.from.value && type.value <= setType.to.value;
    }

    return false;
  }

  return type.is(setType);
}
