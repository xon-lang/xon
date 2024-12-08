import {$Package, $Type, Model, Nothing, packageType, String2} from '#common';

export const $SemanticsPackage: $Package = {
  name: 'semantics',
};

export function semanticsPackageType<T extends Model>(
  name: String2,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return packageType<T>($SemanticsPackage, name, parent, generics);
}
