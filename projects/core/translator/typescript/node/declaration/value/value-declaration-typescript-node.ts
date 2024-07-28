import {$, is} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {ValueDeclarationSemantic} from '../../../../../analyzer/semantic/node/declaration/value/value-declaration-semantic';
import {TypescriptTranslator} from '../../../typescript-translator';

export function valueDeclarationTypescriptTranslate(
  translator: TypescriptTranslator,
  semantic: ValueDeclarationSemantic,
): String2 {
  const exportText = true ? 'export ' : '';

  if (is(semantic, $.MethodValueDeclarationSemantic)) {
    const name = semantic.name;
    const parameters = semantic.parameters.map((x) => translator.typeDeclaration(x)).join(', ');
    const type = translator.type(semantic.type);

    return `${exportText}function ${name}(${parameters}): ${type} {}`;
  }

  // if (is(semantic, $.PropertyValueDeclarationSemantic)) {
  // const type = translator.type(semantic.type);

  //   return `${exportText}type ${semantic.name} = ${typeValue}`;
  // }

  return translator.error(semantic.reference.range, 'valueDeclaration');
}
