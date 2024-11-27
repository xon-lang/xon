import {Nothing, nothing} from '#/common';
import {LexicalAnalyzer, STRING_CLOSE, StringContentNode, stringContentNode} from '#/core';

export function stringContentNodeParse(analyzer: LexicalAnalyzer): StringContentNode | Nothing {
  if (analyzer.checkTextAtIndex(STRING_CLOSE)) {
    return nothing;
  }

  const endIndex = analyzer.resource.data.firstItemsIndex(STRING_CLOSE, analyzer.position.index);

  const text = analyzer.resource.data.slice(
    analyzer.position.index,
    endIndex > 0 ? endIndex : analyzer.resource.data.length(),
  );

  const reference = analyzer.getResourceRange(text);

  return stringContentNode(reference, text);
}
