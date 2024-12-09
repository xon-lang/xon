import {Text} from '#common';
import {
  $TypeDeclarationSemantics,
  DeclarationSemantics,
  TypeDeclarationSemantics,
  newUnknownTypeSemantics,
  semanticsPackageType,
} from '#semantics';
import {Boolean2, Nothing} from '#typing';

export type StructuralTypeDeclarationSemantics = TypeDeclarationSemantics;

export const $StructuralTypeDeclarationSemantics = semanticsPackageType<StructuralTypeDeclarationSemantics>(
  'StructuralTypeDeclarationSemantics',
  $TypeDeclarationSemantics,
);

export function newStructuralTypeDeclarationSemantics(
  documentation: Text | Nothing,
  // todo we always know 'type' modifier
  modifier: Text | Nothing,
  name: Text,
): StructuralTypeDeclarationSemantics {
  return {
    $: $StructuralTypeDeclarationSemantics,
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
