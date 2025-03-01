import {$AnalyzerType, DeclarationSemantic} from '#analyzer';
import {ArrayData, newArrayData, Nothing, Text} from '#common';
import {Brand, Model} from '#typing';

export type AttributeList = Model &
  Brand<'Analyzer.AttributeList'> & {
    _items: ArrayData<DeclarationSemantic>;

    get(name: Text): DeclarationSemantic | Nothing;
  };

export const $AttributeList = () => $AnalyzerType<AttributeList>('AttributeList');

export function newAttributeList(): AttributeList {
  return {
    $: $AttributeList(),
    _items: newArrayData(),

    get(name: Text): DeclarationSemantic | Nothing {
      return;
    },
  };
}
