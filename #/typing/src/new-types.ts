import {Nothing, String2} from '#common';

interface $Model2 {
  $: $Type;
}

interface $Package {
  name: String2;
}

const $CommonPackage: $Package = {
  name: 'common',
};

interface $Type<T = $Model2> {
  name: String2;
  type?: T;
  parent?: $Type;
  package?: $Package;
}

export interface Text2 extends $Model2 {}

export const $Text2: $Type<Text2> = {
  name: 'Text2',
  package: $CommonPackage,
};

export function newText2(): Text2 {
  return {
    $: $Text2,
  };
}

export interface AnyText extends Text2 {}

export const $AnyText: $Type<AnyText> = {
  name: 'AnyText',
  parent: $Text2,
  package: $CommonPackage,
};

export function newAnyText(): AnyText {
  return {
    $: $AnyText,
  };
}

function isType<T extends $Type>($: $Type | Nothing, type: T): $ is T {
  if (!$) {
    return false;
  }

  if (isType($.parent, type)) {
    return true;
  }

  return $.package == type.package && $.name === type.name;
}
export function is2<T extends $Type>(
  object: $Model2 | Nothing,
  type: T,
): object is Exclude<T['type'], undefined> {
  return isType(object?.$, type);
}
