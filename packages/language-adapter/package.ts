import {$NewType, $Type, Model, Nothing} from '#core';

export function $LanguageAdapterType<T extends Model>(
  name: string,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return $NewType<T>('LanguageAdapter', name, parent, generics);
}
