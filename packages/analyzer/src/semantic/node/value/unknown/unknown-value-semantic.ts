import {
  $AnalyzerType,
  $ValueSemantic,
  Node,
  SemanticAnalyzer,
  UnknownTypeSemantic,
  unknownTypeSemantic,
  ValueSemantic,
} from '#analyzer';
import {Brand} from '#typing';

export type UnknownValueSemantic = ValueSemantic & Brand<'Analyzer.UnknownValueSemantic'>;

export const $UnknownValueSemantic = () =>
  $AnalyzerType<UnknownValueSemantic>('UnknownValueSemantic', $ValueSemantic());

export function unknownValueSemantic(nodeLink: Node, type: UnknownTypeSemantic): UnknownValueSemantic {
  return {
    $: $UnknownValueSemantic(),
    nodeLink,
    type,

    equals(other) {
      return this === other;
    },
  };
}

export function unknownValueFromNode(analyzer: SemanticAnalyzer, node: Node): UnknownValueSemantic {
  const type = unknownTypeSemantic(analyzer, node);

  return unknownValueSemantic(node, type);
}
