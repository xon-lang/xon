import {$Model, is} from '#typing';

export function modelEquals(a: any, b: any): boolean {
  if(a === b){
    return true
  }

  if (is(a, $Model()) && is(b, $Model()) && a.equals) {
    return a.equals(b);
  }

  return false;
}
