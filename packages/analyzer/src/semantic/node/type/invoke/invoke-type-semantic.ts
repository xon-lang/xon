import {
  $AnalyzerType,
  $SetTypeSemantic,
  $TypeSemantic,
  isInSet,
  newSemanticScope,
  SemanticScope,
  TypeSemantic,
} from '#analyzer';
import {ArrayData, Boolean2} from '#common';
import {is} from '#typing';

export type InvokeTypeSemantic = TypeSemantic & {
  instance: TypeSemantic;
  args: ArrayData<TypeSemantic>;
};

export const $InvokeTypeSemantic = () =>
  $AnalyzerType<InvokeTypeSemantic>('InvokeTypeSemantic', $TypeSemantic());

export function newInvokeTypeSemantic(
  instance: TypeSemantic,
  args: ArrayData<TypeSemantic>,
): InvokeTypeSemantic {
  return {
    $: $InvokeTypeSemantic(),
    instance,
    args,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic())) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      return false;
    },

    equals(other: TypeSemantic): Boolean2 {
      return false;
    },

    scope(): SemanticScope {
      return newSemanticScope();
      // throw new Error('Not implemented');
    },
  };
}
