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
    return `${exportText}type ${semantic.name} = {}`;
  }

  if (is(semantic, $.StructuralTypeDeclarationSemantic)) {
    const typeValue = semantic.typeValue ? translator.type(semantic.typeValue) : 'null';

    return `${exportText}type ${semantic.name} = ${typeValue}`;
  }

  return translator.error(semantic.reference.range, 'typeDeclaration');
}
