import {Nothing} from '#common';
import {$Type, Model, newType} from '#typing';

export function corePackageType<T extends Model>(
  name: string,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return newType<T>('Core', name, parent, generics);
}
