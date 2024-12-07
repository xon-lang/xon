import {Boolean2, Nothing, TextData} from '#common';
import {
  $ValueDeclarationSemantics,
  DeclarationSemantics,
  semanticsPackageType,
  unknownTypeSemantic,
  ValueDeclarationSemantics,
} from '#semantics';

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
    type: unknownTypeSemantic(analyzer, nodeLink),

    eq(other: DeclarationSemantics): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink.reference.equals(other.nodeLink.reference);
      }

      return false;
    },
  };
}
