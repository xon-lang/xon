import {$Model, $Package, $Type, Model, Nothing, String2} from '#common';

export const $CommonPackage: $Package = {
  name: 'common',
};

export function packageType<T extends Model>(
  pkg: $Package,
  name: String2,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return {
    pkg,
    name,
    parent: parent ?? $Model,
    generics,
  };
}

export function commonPackageType<T extends Model>(
  name: String2,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return packageType<T>($CommonPackage, name, parent, generics);
}
