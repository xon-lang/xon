import {$, Node, StringTypeSemantic, ValueSemantic} from '#core';

export type StringValueSemantic = ValueSemantic<$.StringValueSemantic, StringTypeSemantic>;

// todo should we use 'value: Integer' or always can get from 'type' ???

export function stringValueSemantic(nodeLink: Node, type: StringTypeSemantic): StringValueSemantic {
  return {
    $: $.StringValueSemantic,
    nodeLink,
    type,
  };
}
