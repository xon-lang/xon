import {$NewType, $Type, Model, Nothing} from '#core';

export function $VscodeType<T extends Model>(
  name: string,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return $NewType<T>('Vscode', name, parent, generics);
}
