import {
  $AnalyzerType,
  $TypeDeclarationSemantic,
  DeclarationSemantic,
  newUnknownTypeSemantic,
  TypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, newArrayData, newText, Nothing, Text} from '#common';

export type AttributeTypeDeclarationSemantic = TypeDeclarationSemantic & {
  // todo move it to new 'OperatorDeclarationSemantic'
  alternativeName: Text;

  // todo move 'getType' to Declaration semantic ???
  getType(): TypeSemantic;
};

export const $AttributeTypeDeclarationSemantic = () =>
  $AnalyzerType<AttributeTypeDeclarationSemantic>(
    'AttributeTypeDeclarationSemantic',
    $TypeDeclarationSemantic(),
  );

export function attributeTypeDeclarationSemantic(
  documentation: Text | Nothing,
  name: Text,
): AttributeTypeDeclarationSemantic {
  return {
    $: $AttributeTypeDeclarationSemantic(),
    usages: newArrayData(),
    documentation,
    name,
    alternativeName: alternativeName(name),

    getType(): TypeSemantic {
      return newUnknownTypeSemantic();
    },

    equals(other: DeclarationSemantic): Boolean2 {
      // // todo recheck 'eq' conditions
      // if (this.nodeLink && other.nodeLink) {
      //   return this.nodeLink.reference.equals(other.nodeLink.reference);
      // }

      return false;
    },
  };
}

// todo fix or remove it
function alternativeName(name: Text): Text {
  if (name.equals(newText('+'))) {
    return newText('__plus__');
  }

  return name;
}
