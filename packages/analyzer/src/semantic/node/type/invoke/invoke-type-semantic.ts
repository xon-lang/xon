import {
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SemanticAnalyzer,
  TypeSemantic,
  corePackageType,
  isInSet,
  newDeclarationScope,
} from '#analyzer';
import {ArrayData, Boolean2} from '#common';
import {is} from '#typing';

export type InvokeTypeSemantic = TypeSemantic & {
  instance: TypeSemantic;
  // todo use a separate semantic than array
  args: ArrayData<TypeSemantic>;
};

export const $InvokeTypeSemantic = corePackageType<InvokeTypeSemantic>('InvokeTypeSemantic', $TypeSemantic);

export function invokeTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  instance: TypeSemantic,
  args: ArrayData<TypeSemantic>,
): InvokeTypeSemantic {
  return {
    $: $InvokeTypeSemantic,
    nodeLink,
    instance,
    args,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return newDeclarationScope();
      // throw new Error('Not implemented');
    },
  };
}
