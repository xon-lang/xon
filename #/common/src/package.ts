import {$Model_V2, $Package, $Type, Model_V2, Nothing, String2} from '#common';

export const $CommonPackage: $Package = {
  name: 'common',
};

export function commonPackageType<T extends Model_V2>(name: String2, parent?: $Type | Nothing): $Type<T> {
  return {
    name,
    parent: parent ? parent : $Model_V2,
    package: $CommonPackage,
  };
}
