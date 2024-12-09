import {newTextData, Text} from '#common';
import {
  $ValueDeclarationSemantics,
  DeclarationSemantics,
  newUnknownTypeSemantics,
  semanticsPackageType,
  ValueDeclarationSemantics,
} from '#semantics';
import {Boolean2, Nothing} from '#typing';

export type AttributeValueDeclarationSemantics = ValueDeclarationSemantics & {
  // todo move it to new 'OperatorDeclarationSemantic'
  alternativeName: Text;
};

export const $AttributeValueDeclarationSemantics = semanticsPackageType<AttributeValueDeclarationSemantics>(
  'AttributeValueDeclarationSemantics',
  $ValueDeclarationSemantics,
);

export function newAttributeValueDeclarationSemantics(
  documentation: Text | Nothing,
  modifier: Text | Nothing,
  name: Text,
): AttributeValueDeclarationSemantics {
  return {
    $: $AttributeValueDeclarationSemantics,
    usages: [],
    documentation,
    modifier,
    name,
    alternativeName: alternativeName(name),
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

// todo fix or remove it
function alternativeName(name: Text): Text {
  if (name.equals(newTextData('+'))) {
    return newTextData('__plus__');
  }

  return name;
}
