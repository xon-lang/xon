import {String2} from '#common';
import {
  $CharValueSemantic,
  $IdValueSemantic,
  $IntegerValueSemantic,
  $MemberValueSemantic,
  $StringValueSemantic,
  ValueSemantic,
} from '#core';
import {TypescriptTranslator} from '#translator';
import {is} from '#typing';

export function valueTypescriptTranslate(translator: TypescriptTranslator, semantic: ValueSemantic): String2 {
  if (is(semantic, $IntegerValueSemantic)) {
    // todo update to string format and use appropriate 'radix' argument
    return semantic.type.value.toString(10);
  }

  if (is(semantic, $CharValueSemantic)) {
    return `"${semantic.type.value}"`;
  }

  if (is(semantic, $StringValueSemantic)) {
    return `"${semantic.type.value}"`;
  }

  if (is(semantic, $IdValueSemantic)) {
    return semantic.name;
  }

  if (is(semantic, $IdValueSemantic)) {
    return semantic.name;
  }

  if (is(semantic, $MemberValueSemantic)) {
    const instance = translator.value(semantic.instance);
    const name = semantic.name ?? translator.error(semantic.nodeLink);

    return `${instance}.${name}`;
  }

  return translator.error(semantic.nodeLink);
}
