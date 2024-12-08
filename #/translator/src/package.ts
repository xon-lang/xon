import {$Package, $Type, Model, Nothing, packageType, String2} from '#common';

export const $TranslatorPackage: $Package = {
  name: 'translator',
};

export function translatorPackageType<T extends Model>(
  name: String2,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return packageType<T>($TranslatorPackage, name, parent, generics);
}
