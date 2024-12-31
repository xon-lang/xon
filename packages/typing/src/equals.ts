import {$Model, is} from '#typing';

export function modelEquals(a: any, b: any): boolean {
  if (is(a, $Model) && is(b, $Model) && a.equals) {
    return a.equals(b);
  }

  return a === b;
}
