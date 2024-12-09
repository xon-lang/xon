import {Nothing, String2} from '#common';
import {$Type, Model, newPackage, newType} from '#typing';

export const $SemanticsPackage = newPackage('Semantics');

export function semanticsPackageType<T extends Model>(
  name: String2,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return newType<T>($SemanticsPackage, name, parent, generics);
}
