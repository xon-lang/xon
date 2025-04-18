import {Nothing} from '#common';
import {$NewType, $Type, Model} from '#typing';

export function $LanguageAdapterType<T extends Model>(
  name: string,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return $NewType<T>('LanguageAdapter', name, parent, generics);
}
