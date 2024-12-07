import {Boolean2, newTextData, Nothing, TextData} from '#common';
import {
  DeclarationNode,
  DeclarationSemantics,
  SemanticAnalyzer,
  unknownTypeSemantic,
  ValueDeclarationSemantics,
} from '#semantics';
import {$} from '#typing';

export type AttributeValueDeclarationSemantic = ValueDeclarationSemantics & {
  $: $.AttributeValueDeclarationSemantic;
  // todo move it to new 'OperatorDeclarationSemantic'
  alternativeName: TextData;
};

export function attributeValueDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: DeclarationNode,
  documentation: TextData | Nothing,
  modifier: TextData | Nothing,
  name: TextData,
): AttributeValueDeclarationSemantic {
  return {
    $: $.AttributeValueDeclarationSemantic,
    nodeLink,
    usages: [],
    documentation,
    modifier,
    name,
    alternativeName: alternativeName(name),
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

// todo fix or remove it
function alternativeName(name: TextData): TextData {
  if (name.equals(newTextData('+'))) {
    return newTextData('__plus__');
  }

  return name;
}
