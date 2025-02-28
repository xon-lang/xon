import {
  $AnalyzerType,
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  isInSet,
  newDeclarationScope,
  Node,
  SemanticAnalyzer,
  TypeSemantic,
} from '#analyzer';
import {ArrayData, Boolean2} from '#common';
import {is} from '#typing';

export type InvokeTypeSemantic = TypeSemantic & {
  instance: TypeSemantic;
  // todo use a separate semantic than array
  args: ArrayData<TypeSemantic>;
};

export const $InvokeTypeSemantic = () =>
  $AnalyzerType<InvokeTypeSemantic>('InvokeTypeSemantic', $TypeSemantic());

export function invokeTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  instance: TypeSemantic,
  args: ArrayData<TypeSemantic>,
): InvokeTypeSemantic {
  return {
    $: $InvokeTypeSemantic(),
    nodeLink,
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

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return newDeclarationScope();
      // throw new Error('Not implemented');
    },
  };
}
