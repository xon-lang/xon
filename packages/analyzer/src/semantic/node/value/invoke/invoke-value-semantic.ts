import {$ValueSemantic, analyzerPackageType, Node, TypeSemantic, ValueSemantic} from '#analyzer';
import {Brand} from '#typing';

export type InvokeValueSemantic = ValueSemantic & Brand<'Analyzer.InvokeValueSemantic'>;

export const $InvokeValueSemantic = analyzerPackageType<InvokeValueSemantic>(
  'InvokeValueSemantic',
  $ValueSemantic,
);

export function invokeValueSemantic(nodeLink: Node, type: TypeSemantic): InvokeValueSemantic {
  return {
    $: $InvokeValueSemantic,
    nodeLink,
    type,
  };
}
