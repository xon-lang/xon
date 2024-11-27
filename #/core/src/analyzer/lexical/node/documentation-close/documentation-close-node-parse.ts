import {newTextData, Nothing, nothing} from '#/common';
import {DOCUMENTATION_CLOSE, DocumentationCloseNode, documentationCloseNode, LexicalAnalyzer} from '#/core';

export function documentationCloseNodeParse(analyzer: LexicalAnalyzer): DocumentationCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(DOCUMENTATION_CLOSE)) {
    return nothing;
  }

  const text = newTextData(DOCUMENTATION_CLOSE);
  const reference = analyzer.getResourceRange(text);

  return documentationCloseNode(reference, text);
}
