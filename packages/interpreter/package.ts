import {Nothing} from '#common';
import {$Type, Model, newType} from '#typing';

export function interpreterPackageType<T extends Model>(
  name: string,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return newType<T>('Interpreter', name, parent, generics);
}
