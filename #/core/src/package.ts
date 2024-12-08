import {$Package, $Type, Model, Nothing, packageType, String2} from '#common';

export const $CorePackage: $Package = {
  name: 'core',
};

export function corePackageType<T extends Model>(
  name: String2,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return packageType<T>($CorePackage, name, parent, generics);
}
