import {
  $AnalyzerType,
  $SetTypeSemantic,
  $TypeSemantic,
  isInSet,
  newSemanticScope,
  Semantic,
  SemanticScope,
} from '#analyzer';
import {ArrayData, Boolean2} from '#common';
import {is} from '#typing';

export type InvokeTypeSemantic = Semantic & {
  instance: Semantic;
  args: ArrayData<Semantic>;
};

export const $InvokeTypeSemantic = () =>
  $AnalyzerType<InvokeTypeSemantic>('InvokeTypeSemantic', $TypeSemantic());

export function newInvokeTypeSemantic(instance: Semantic, args: ArrayData<Semantic>): InvokeTypeSemantic {
  return {
    $: $InvokeTypeSemantic(),
    instance,
    args,

    is(other: Semantic): Boolean2 {
      if (is(other, $SetTypeSemantic())) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      return false;
    },

    equals(other: Semantic): Boolean2 {
      return false;
    },

    scope(): SemanticScope {
      return newSemanticScope();
      // throw new Error('Not implemented');
    },
  };
}
