import {Nothing, String2} from '#common';
import {$Type, Model, newType} from '#typing';

export function corePackageType<T extends Model>(
  name: String2,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return newType<T>('Core', name, parent, generics);
}
