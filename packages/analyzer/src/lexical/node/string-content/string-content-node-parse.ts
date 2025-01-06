import {LexicalAnalyzer, STRING_CLOSE, STRING_OPEN, StringContentNode, stringContentNode} from '#analyzer';
import {Nothing, nothing} from '#common';

export function stringContentNodeParse(analyzer: LexicalAnalyzer): StringContentNode | Nothing {
  if (analyzer.hasTextAtIndex(STRING_OPEN)) {
    return nothing;
  }

  const endIndex = analyzer.resource.data.firstItemsIndex(STRING_CLOSE, analyzer.position.index) ?? -1;

  const text = analyzer.resource.data.slice(
    analyzer.position.index,
    endIndex > 0 ? endIndex : analyzer.resource.data.count(),
  );

  const reference = analyzer.textReference(text);

  return stringContentNode(reference, text);
}
