import {TextData} from '#common';
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
  documentation: TextData | Nothing,
  // todo we always know 'type' modifier
  modifier: TextData | Nothing,
  name: TextData,
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
