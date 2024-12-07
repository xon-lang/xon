import {Boolean2, is_v2} from '#common';
import {
  $SetTypeSemantics,
  $TypeSemantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  ParameterTypeDeclarationSemantics,
  ParameterValueDeclarationSemantics,
  TypeSemantics,
  isInSet,
  semanticsPackageType,
} from '#semantics';
import {$} from '#typing';

export type FunctionTypeSemantics = TypeSemantics & {
  parameters: (ParameterTypeDeclarationSemantics | ParameterValueDeclarationSemantics)[];
  result: TypeSemantics;
};

export const $FunctionTypeSemantics = semanticsPackageType<FunctionTypeSemantics>(
  'FunctionTypeSemantics',
  $TypeSemantics,
);

export function newFunctionTypeSemantics(
  parameters: (ParameterTypeDeclarationSemantics | ParameterValueDeclarationSemantics)[],
  result: TypeSemantics,
): FunctionTypeSemantics {
  return {
    $: $FunctionTypeSemantics,
    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.functionTypeName,
    ),
    parameters,
    result,

    is(other: TypeSemantics): Boolean2 {
      if (is_v2(other, $SetTypeSemantics)) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      return false;
    },

    equals(_other: TypeSemantics): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantics> {
      throw new Error('Not implemented');
    },
  };
}
