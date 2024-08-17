import {$, is} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {ValueSemantic} from '../../../../analyzer/semantic/node/value/value-semantic';
import {TypescriptTranslator} from '../../typescript-translator';

export function valueTypescriptTranslate(translator: TypescriptTranslator, semantic: ValueSemantic): String2 {
  if (is(semantic, $.IntegerValueSemantic)) {
    // todo update to string format and use appropriate 'radix' argument
    return semantic.type.value.toString(10);
  }

  if (is(semantic, $.CharValueSemantic)) {
    return `"${semantic.type.value}"`;
  }

  if (is(semantic, $.StringValueSemantic)) {
    return `"${semantic.type.value}"`;
  }

  if (is(semantic, $.IdValueSemantic)) {
    return semantic.name;
  }

  if (is(semantic, $.MemberValueSemantic)) {
    const instance = translator.value(semantic.instance);
    const name = semantic.name ?? translator.error(semantic);

    return `${instance}.${name}`;
  }

  return translator.error(semantic);
}
