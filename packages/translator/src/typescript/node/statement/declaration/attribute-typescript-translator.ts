import {Node} from '#analyzer';
import {ArrayData, newText, Text} from '#core';
import {translateTypescriptValueDeclaration, TypescriptDeclarationType} from '#translator';

export function translateTypescriptAttributes(attributes: ArrayData<Node>, useComma = false): Text {
  const separator = useComma ? ',\n' : ';\n';

  const translatedAttributes = newText(
    attributes.map((x) => translateTypescriptValueDeclaration(x, TypescriptDeclarationType.Attribute)),
    newText(separator),
  );

  const lastSeparator = translatedAttributes.count() > 0 ? separator : '\n';

  return newText(`{\n${translatedAttributes.margin(2)}${lastSeparator}}`);
}
