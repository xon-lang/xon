import {Nothing, nothing, textData} from '#common';
import {DOCUMENTATION_OPEN, DocumentationOpenNode, documentationOpenNode, LexicalAnalyzer} from '#core';

export function documentationOpenNodeParse(analyzer: LexicalAnalyzer): DocumentationOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(DOCUMENTATION_OPEN)) {
    return nothing;
  }

  const text = textData(DOCUMENTATION_OPEN);
  const reference = analyzer.getResourceRange(text);

  return documentationOpenNode(reference, text);
}
