import {$Model_V2, $Package, $Type, Model_V2, Nothing, String2} from '#common';

export const $CommonPackage: $Package = {
  name: 'common',
};

export function packageType<T extends Model_V2>(
  pkg: $Package,
  name: String2,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return {
    pkg,
    name,
    parent: parent ?? $Model_V2,
    generics,
  };
}

export function commonPackageType<T extends Model_V2>(
  name: String2,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return packageType<T>($CommonPackage, name, parent, generics);
}
