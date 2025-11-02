import {$NewType, $Type, Model, Nothing} from '#core';

export function $InterpreterType<T extends Model>(
  name: string,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return $NewType<T>('Interpreter', name, parent, generics);
}
