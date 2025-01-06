import {
  AT,
  DOCUMENTATION_CLOSE,
  DocumentationDescriptionNode,
  documentationDescriptionNode,
  LexicalAnalyzer,
} from '#analyzer';
import {Nothing, nothing} from '#common';

export function documentationDescriptionNodeParse(
  analyzer: LexicalAnalyzer,
): DocumentationDescriptionNode | Nothing {
  const text = analyzer.resource.data.takeWhile(
    (x, i) => !AT.equals(x) && !analyzer.hasTextAtIndex(DOCUMENTATION_CLOSE, i),
    analyzer.position.index,
  );

  if (text.isEmpty()) {
    return nothing;
  }

  const reference = analyzer.textReferenceWithNewLine(text);

  return documentationDescriptionNode(reference, text);
}
