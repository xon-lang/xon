import {String2} from '#common';
import {
  $AttributeValueDeclarationSemantic,
  $ParameterValueDeclarationSemantic,
  TypescriptTranslator,
  ValueDeclarationSemantic,
} from '#core';
import {is} from '#typing';

export function valueDeclarationTypescriptTranslate(
  translator: TypescriptTranslator,
  semantic: ValueDeclarationSemantic,
): String2 {
  if (is(semantic, $AttributeValueDeclarationSemantic)) {
    const name = semantic.alternativeName;
    const type = translator.type(semantic.type);

    return `${name}: ${type}`;
  }

  if (is(semantic, $ParameterValueDeclarationSemantic)) {
    const name = semantic.name;
    const type = translator.type(semantic.type);

    return `${name}: ${type}`;
  }

  return translator.error(semantic.nodeLink);
}
