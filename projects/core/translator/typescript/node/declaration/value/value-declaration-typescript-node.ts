import {$, is} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {ValueDeclarationSemantic} from '../../../../../analyzer/semantic/node/declaration/value/value-declaration-semantic';
import {TypescriptTranslator} from '../../../typescript-translator';

export function valueDeclarationTypescriptTranslate(
  translator: TypescriptTranslator,
  semantic: ValueDeclarationSemantic,
): String2 {
  if (is(semantic, $.AttributeValueDeclarationSemantic)) {
    const modifier = semantic.modifier === 'infix' ? 'const ' : '';
    const name = semantic.alternativeName;
    const type = translator.type(semantic.type);

    return `${modifier}${name}: ${type}`;
  }

  return translator.error(semantic.reference.range, 'valueDeclaration');
}
