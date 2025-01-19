import {
  $LexicalNode2,
  AnalyzerContext,
  analyzerPackageType,
  diagnoseUnknownNode,
  LexicalNode2,
  newLexicalNode,
} from '#analyzer';
import {Text, TextRange} from '#common';
import {Brand} from '#typing';

export type UnknownNode = LexicalNode2 & Brand<'Analyzer.UnknownNode'>;

export const $UnknownNode = analyzerPackageType<UnknownNode>('UnknownNode', $LexicalNode2);

export function newUnknownNode(context: AnalyzerContext, text: Text, range: TextRange): UnknownNode {
  return newLexicalNode({
    $: $UnknownNode,
    text,
    range,

    diagnose: diagnoseUnknownNode,
  });
}
