import {
  $CharValueSemantic,
  $IdValueSemantic,
  $IntegerValueSemantic,
  $MemberValueSemantic,
  $StringValueSemantic,
  ValueSemantic,
} from '#analyzer';
import {newText, Text} from '#common';
import {TypescriptTranslator} from '#translator';
import {is} from '#typing';

export function valueTypescriptTranslate(translator: TypescriptTranslator, semantic: ValueSemantic): Text {
  if (is(semantic, $IntegerValueSemantic)) {
    // todo update to string format and use appropriate 'radix' argument
    return newText(semantic.type.value.toString(10));
  }

  if (is(semantic, $CharValueSemantic)) {
    return newText(`"${semantic.type.value}"`);
  }

  if (is(semantic, $StringValueSemantic)) {
    return newText(`"${semantic.type.value}"`);
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

    return newText(`${instance}.${name}`);
  }

  return translator.error(semantic.nodeLink);
}
