import {Nothing, nothing} from '#common';
import {
  AT,
  DOCUMENTATION_CLOSE,
  DocumentationDescriptionNode,
  documentationDescriptionNode,
  LexicalAnalyzer,
} from '#core';

export function documentationDescriptionNodeParse(
  analyzer: LexicalAnalyzer,
): DocumentationDescriptionNode | Nothing {
  const text = analyzer.resource.data.takeWhile(
    (x, i) => !x.equals(AT) && !analyzer.checkTextAtIndex(DOCUMENTATION_CLOSE, i),
    analyzer.position.index,
  );

  if (text.length() === 0) {
    return nothing;
  }

  const reference = analyzer.getResourceRangeWithNL(text);

  return documentationDescriptionNode(reference, text);
}
