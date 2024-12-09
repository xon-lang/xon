import {TextData} from '#common';
import {
  $ValueDeclarationSemantics,
  DeclarationSemantics,
  newUnknownTypeSemantics,
  semanticsPackageType,
  ValueDeclarationSemantics,
} from '#semantics';
import {Boolean2, Nothing} from '#typing';

export type ParameterValueDeclarationSemantics = ValueDeclarationSemantics;

export const $ParameterValueDeclarationSemantics = semanticsPackageType<ParameterValueDeclarationSemantics>(
  'ParameterValueDeclarationSemantics',
  $ValueDeclarationSemantics,
);

export function newParameterValueDeclarationSemantics(
  documentation: TextData | Nothing,
  modifier: TextData | Nothing,
  name: TextData,
): ParameterValueDeclarationSemantics {
  return {
    $: $ParameterValueDeclarationSemantics,
    usages: [],
    documentation,
    modifier,
    name,
    type: newUnknownTypeSemantics(analyzer, nodeLink),

    eq(other: DeclarationSemantics): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink.reference.equals(other.nodeLink.reference);
      }

      return false;
    },
  };
}
