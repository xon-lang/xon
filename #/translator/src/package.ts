import {$Package, $Type, Model_V2, Nothing, packageType, String2} from '#common';

export const $TranslatorPackage: $Package = {
  name: 'translator',
};

export function translatorPackageType<T extends Model_V2>(
  name: String2,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return packageType<T>($TranslatorPackage, name, parent, generics);
}
