import {newTextData, Nothing, nothing} from '#common';
import {DOCUMENTATION_OPEN, DocumentationOpenNode, documentationOpenNode, LexicalAnalyzer} from '#core';

export function documentationOpenNodeParse(analyzer: LexicalAnalyzer): DocumentationOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(DOCUMENTATION_OPEN)) {
    return nothing;
  }

  const text = newTextData(DOCUMENTATION_OPEN);
  const reference = analyzer.textReference(text);

  return documentationOpenNode(reference, text);
}
