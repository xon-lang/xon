import {$, is} from '../../../../../$';
import {String2} from '../../../../../../lib/types';
import {ValueDeclarationSemantic} from '../../../../../analyzer/semantic/node/declaration/value/value-declaration-semantic';
import {TypescriptTranslator} from '../../../typescript-translator';

export function valueDeclarationTypescriptTranslate(
  translator: TypescriptTranslator,
  semantic: ValueDeclarationSemantic,
): String2 {
  const exportText = true ? 'export ' : '';

  if (is(semantic, $.FunctionValueDeclarationSemantic)) {
    const name = semantic.alternativeName;
    const parameters = semantic.parameters
      .map((x) =>
        is(x, $.ParameterValueDeclarationSemantic) ? translator.valueDeclaration(x) : translator.error(),
      )
      .join(', ');
    const type = translator.type(semantic.type);

    return `${exportText}function ${name}(${parameters}): ${type} {}`;
  }

  if (is(semantic, $.ParameterValueDeclarationSemantic)) {
    const name = semantic.name;
    const type = translator.type(semantic.type);

    return `${name}: ${type}`;
  }

  return translator.error(semantic.reference.range, 'valueDeclaration');
}
