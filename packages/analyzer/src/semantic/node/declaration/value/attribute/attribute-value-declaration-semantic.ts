import {
  $ValueDeclarationSemantic,
  analyzerPackageType,
  DeclarationNode,
  DeclarationSemantic,
  SemanticAnalyzer,
  unknownTypeSemantic,
  ValueDeclarationSemantic,
} from '#analyzer';
import {Boolean2, newArrayData, newText, Nothing, Text} from '#common';

export type AttributeValueDeclarationSemantic = ValueDeclarationSemantic & {
  // todo move it to new 'OperatorDeclarationSemantic'
  alternativeName: Text;
};

export const $AttributeValueDeclarationSemantic = analyzerPackageType<AttributeValueDeclarationSemantic>(
  'AttributeValueDeclarationSemantic',
  $ValueDeclarationSemantic,
);

export function attributeValueDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: DeclarationNode,
  documentation: Text | Nothing,
  modifier: Text | Nothing,
  name: Text,
): AttributeValueDeclarationSemantic {
  return {
    $: $AttributeValueDeclarationSemantic,
    nodeLink,
    usages: newArrayData(),
    documentation,
    modifier,
    name,
    alternativeName: alternativeName(name),
    type: unknownTypeSemantic(analyzer, nodeLink),

    eq(other: DeclarationSemantic): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink.reference.equals(other.nodeLink.reference);
      }

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
