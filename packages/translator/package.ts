import {$NewType, $Type, Model, Nothing} from '#core';

export function $TranslatorType<T extends Model>(
  name: string,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return $NewType<T>('Translator', name, parent, generics);
}
