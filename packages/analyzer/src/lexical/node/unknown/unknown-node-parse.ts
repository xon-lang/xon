import {$UnknownNode, LexicalAnalyzer, UnknownNode} from '#analyzer';

export function unknownNodeParse(analyzer: LexicalAnalyzer): UnknownNode {
  const text = analyzer.resource.data.slice(analyzer.position.index, analyzer.position.index + 1);
  const range = analyzer.textReference(text);

  return {$: $UnknownNode, text, range};
}
