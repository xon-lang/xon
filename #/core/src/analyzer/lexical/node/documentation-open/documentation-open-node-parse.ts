import {newTextData, Nothing, nothing} from '#common';
import {DOCUMENTATION_OPEN, DocumentationOpenNode, documentationOpenNode, LexicalAnalyzer} from '#core';

export function documentationOpenNodeParse(analyzer: LexicalAnalyzer): DocumentationOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(DOCUMENTATION_OPEN)) {
    return nothing;
  }

  const text = newTextData(DOCUMENTATION_OPEN);
  const reference = analyzer.getResourceRange(text);

  return documentationOpenNode(reference, text);
}
