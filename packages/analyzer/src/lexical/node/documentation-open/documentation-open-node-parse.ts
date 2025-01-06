import {DOCUMENTATION_OPEN, DocumentationOpenNode, documentationOpenNode, LexicalAnalyzer} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function documentationOpenNodeParse(analyzer: LexicalAnalyzer): DocumentationOpenNode | Nothing {
  if (!analyzer.hasTextAtIndex(DOCUMENTATION_OPEN)) {
    return nothing;
  }

  const text = newText(DOCUMENTATION_OPEN);
  const reference = analyzer.textReference(text);

  return documentationOpenNode(reference, text);
}
