import {
  $FunctionTypeSemantic,
  $NominalTypeDeclarationSemantic,
  $ParameterTypeDeclarationSemantic,
  $StructuralTypeDeclarationSemantic,
  TypeDeclarationSemantic,
} from '#analyzer';
import {newText, Text} from '#common';
import {TypescriptTranslator} from '#translator';
import {is} from '#typing';

export function typeDeclarationTypescriptTranslate(
  translator: TypescriptTranslator,
  semantic: TypeDeclarationSemantic,
): Text {
  const exportText = true ? 'export ' : '';

  if (is(semantic, $NominalTypeDeclarationSemantic)) {
    const parameters = is(semantic.type, $FunctionTypeSemantic)
      ? `<${semantic.type.parameters
          .map((x) => translator.typeDeclaration(x))
          .toNativeArray()
          .join(', ')}>`
      : '';

    // todo fix it
    const baseType =
      (semantic.baseType.declaration?.name ?? 'Something') === 'Something'
        ? ''
        : translator.type(semantic.baseType) + ' & ';

    return newText(`${exportText}type ${semantic.name}${parameters} = ${baseType}{}`);
  }

  if (is(semantic, $StructuralTypeDeclarationSemantic)) {
    const type = translator.type(semantic.type);

    return newText(`${exportText}type ${semantic.name} = ${type}`);
  }

  if (is(semantic, $ParameterTypeDeclarationSemantic)) {
    const type = semantic.nodeLink.type ? ' extends ' + translator.type(semantic.type) : '';
    const value = semantic.value ? ' = ' + translator.type(semantic.value) : '';

    return newText(`${semantic.name}${type}${value}`);
  }

  return translator.error(semantic.nodeLink);
}
