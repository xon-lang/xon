import {$, is} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {TypeDeclarationSemantic} from '../../../../../analyzer/semantic/node/declaration/type/type-declaration-semantic';
import {TypescriptTranslator} from '../../../typescript-translator';

export function typeDeclarationTypescriptTranslate(
  translator: TypescriptTranslator,
  semantic: TypeDeclarationSemantic,
): String2 {
  const exportText = true ? 'export ' : '';

  if (is(semantic, $.NominalTypeDeclarationSemantic)) {
    const parameters = is(semantic.type, $.FunctionTypeSemantic)
      ? `<${semantic.type.parameters.map(translator.typeDeclaration).join(', ')}>`
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
