import {Nothing} from '#common';
import {$NewType, $Type, Model} from '#typing';

export function $DiagnosticType<T extends Model>(
  name: string,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return $NewType<T>('Diagnostic', name, parent, generics);
}
