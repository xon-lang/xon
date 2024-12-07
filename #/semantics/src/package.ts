import {$Package, $Type, Model_V2, Nothing, packageType, String2} from '#common';

export const $SemanticsPackage: $Package = {
  name: 'semantics',
};

export function semanticsPackageType<T extends Model_V2>(
  name: String2,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return packageType<T>($SemanticsPackage, name, parent, generics);
}
