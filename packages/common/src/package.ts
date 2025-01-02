import {$Type, Model, newType} from '#typing';

export function commonPackageType<T extends Model>(
  name: string,
  parent?: $Type,
  generics?: $Type[],
): $Type<T> {
  return newType<T>('Common', name, parent, generics);
}
