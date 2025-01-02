import {Nothing} from '#common';
import {$Type, Model, newType} from '#typing';

export function translatorPackageType<T extends Model>(
  name: string,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return newType<T>('Translator', name, parent, generics);
}
