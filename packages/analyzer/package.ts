import {$NewType, $Type, Model, Nothing} from '#core';

export function $AnalyzerType<T extends Model>(
  name: string,
  parent?: $Type | Nothing,
  generics?: $Type[] | Nothing,
): $Type<T> {
  return $NewType<T>('Analyzer', name, parent, generics);
}
