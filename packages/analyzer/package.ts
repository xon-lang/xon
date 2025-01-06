import {Nothing} from '#common';
import {$Type, Model, newType} from '#typing';

export function analyzerPackageType<T extends Model>(
  name: string,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return newType<T>('Analyzer', name, parent, generics);
}
