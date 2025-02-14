import {
  $LexicalNode,
  AnalyzerContext,
  analyzerPackageType,
  diagnoseUnknownNode,
  LexicalNode,
  newLexicalNode,
} from '#analyzer';
import {Text, TextRange} from '#common';
import {Brand} from '#typing';

export type UnknownNode = LexicalNode & Brand<'Analyzer.UnknownNode'>;

export const $UnknownNode = analyzerPackageType<UnknownNode>('UnknownNode', $LexicalNode);

export function newUnknownNode(context: AnalyzerContext, text: Text, range: TextRange): UnknownNode {
  return newLexicalNode({
    $: $UnknownNode,
    text,
    range,

    diagnose: diagnoseUnknownNode,
  });
}
