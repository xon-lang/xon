import {newText, Nothing, nothing} from '#common';
import {DOCUMENTATION_CLOSE, DocumentationCloseNode, documentationCloseNode, LexicalAnalyzer} from '#core';

export function documentationCloseNodeParse(analyzer: LexicalAnalyzer): DocumentationCloseNode | Nothing {
  if (!analyzer.hasTextAtIndex(DOCUMENTATION_CLOSE)) {
    return nothing;
  }

  const text = newText(DOCUMENTATION_CLOSE);
  const reference = analyzer.textReference(text);

  return documentationCloseNode(reference, text);
}
