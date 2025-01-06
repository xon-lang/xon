import {
  $AttributeValueDeclarationSemantic,
  $ParameterValueDeclarationSemantic,
  ValueDeclarationSemantic,
} from '#analyzer';
import {newText, Text} from '#common';
import {TypescriptTranslator} from '#translator';
import {is} from '#typing';

export function valueDeclarationTypescriptTranslate(
  translator: TypescriptTranslator,
  semantic: ValueDeclarationSemantic,
): Text {
  if (is(semantic, $AttributeValueDeclarationSemantic)) {
    const name = semantic.alternativeName;
    const type = translator.type(semantic.type);

    return newText(`${name.toNativeString()}: ${type}`);
  }

  if (is(semantic, $ParameterValueDeclarationSemantic)) {
    const name = semantic.name;
    const type = translator.type(semantic.type);

    return newText(`${name.toNativeString()}: ${type}`);
  }

  return translator.error(semantic.nodeLink);
}
