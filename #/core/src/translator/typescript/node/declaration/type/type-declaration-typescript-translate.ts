import {String2} from '#/common';
import {TypeDeclarationSemantic, TypescriptTranslator} from '#/core';
import {$, is} from '#/typing';

export function typeDeclarationTypescriptTranslate(
  translator: TypescriptTranslator,
  semantic: TypeDeclarationSemantic,
): String2 {
  const exportText = true ? 'export ' : '';

  if (is(semantic, $.NominalTypeDeclarationSemantic)) {
    const parameters = is(semantic.type, $.FunctionTypeSemantic)
      ? `<${semantic.type.parameters.map((x) => translator.typeDeclaration(x)).join(', ')}>`
      : '';

    // todo fix it
    const baseType =
      (semantic.baseType.declaration?.name ?? 'Something') === 'Something'
        ? ''
        : translator.type(semantic.baseType) + ' & ';

    return `${exportText}type ${semantic.name}${parameters} = ${baseType}{}`;
  }

  if (is(semantic, $.StructuralTypeDeclarationSemantic)) {
    const type = translator.type(semantic.type);

    return `${exportText}type ${semantic.name} = ${type}`;
  }

  if (is(semantic, $.ParameterTypeDeclarationSemantic)) {
    const type = semantic.nodeLink.type ? ' extends ' + translator.type(semantic.type) : '';
    const value = semantic.value ? ' = ' + translator.type(semantic.value) : '';

    return `${semantic.name}${type}${value}`;
  }

  return translator.error(semantic.nodeLink);
}
