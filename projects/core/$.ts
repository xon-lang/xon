import {Nothing} from '../lib/types';

export enum $ {
  TextRange,
  TextPosition,
}

type IsObject = {$: $} | Nothing;

export function is2<T extends IsObject = IsObject>(o: IsObject, $: $): o is T {
  return o?.$ === $;
}
