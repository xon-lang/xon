import {$} from '../../../../../$';
import {Nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {StringTypeSemantic} from '../../type/string/string-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type StringValueSemantic = ValueSemantic<$.StringValueSemantic, StringTypeSemantic>;

// todo should we use 'value: Integer' or always can get from 'type' ???

export function stringValueSemantic(nodeLink: Node | Nothing, type: StringTypeSemantic): StringValueSemantic {
  return {
    $: $.StringValueSemantic,
    nodeLink,
    type,
  };
}
