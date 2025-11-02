import {$NewType, $Type, Model} from '#core';

export function $CoreType<T extends Model>(name: string, parent?: $Type, generics?: $Type[]): $Type<T> {
  return $NewType<T>('Core', name, parent, generics);
}
