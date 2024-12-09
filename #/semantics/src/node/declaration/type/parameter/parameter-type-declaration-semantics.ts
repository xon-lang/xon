import {Text} from '#common';
import {
  $TypeDeclarationSemantics,
  DeclarationSemantics,
  TypeDeclarationSemantics,
  TypeSemantics,
  newUnknownTypeSemantics,
  semanticsPackageType,
} from '#semantics';
import {Boolean2, Nothing} from '#typing';

export type ParameterTypeDeclarationSemantics = TypeDeclarationSemantics & {
  value?: TypeSemantics | Nothing;
};

export const $ParameterTypeDeclarationSemantics = semanticsPackageType<ParameterTypeDeclarationSemantics>(
  'ParameterTypeDeclarationSemantics',
  $TypeDeclarationSemantics,
);

export function newParameterTypeDeclarationSemantics(
  documentation: Text | Nothing,
  // todo we always know 'type' modifier
  modifier: Text | Nothing,
  name: Text,
): ParameterTypeDeclarationSemantics {
  return {
    $: $ParameterTypeDeclarationSemantics,
    usages: [],
    documentation,
    modifier,
    name,
    type: newUnknownTypeSemantics(),

    equals(other: DeclarationSemantics): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink.reference.equals(other.nodeLink.reference);
      }

      return false;
    },
  };
}
