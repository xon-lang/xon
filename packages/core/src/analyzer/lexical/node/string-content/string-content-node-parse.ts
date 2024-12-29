import {Nothing, nothing} from '#common';
import {LexicalAnalyzer, STRING_CLOSE, STRING_OPEN, StringContentNode, stringContentNode} from '#core';

export function stringContentNodeParse(analyzer: LexicalAnalyzer): StringContentNode | Nothing {
  if (analyzer.hasTextAtIndex(STRING_OPEN)) {
    return nothing;
  }

  const endIndex = analyzer.resource.data.firstItemsIndex(STRING_CLOSE, analyzer.position.index);

  const text = analyzer.resource.data.slice(
    analyzer.position.index,
    endIndex > 0 ? endIndex : analyzer.resource.data.length(),
  );

  const reference = analyzer.textReference(text);

  return stringContentNode(reference, text);
}
