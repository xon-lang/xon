import {$NewType, $Type, Model} from '#typing';

export function $CommonType<T extends Model>(name: string, parent?: $Type, generics?: $Type[]): $Type<T> {
  return $NewType<T>('Common', name, parent, generics);
}
