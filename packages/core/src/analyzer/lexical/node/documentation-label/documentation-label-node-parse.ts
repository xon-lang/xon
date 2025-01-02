import {Nothing, nothing} from '#common';
import {AT, DocumentationLabelNode, documentationLabelNode, LexicalAnalyzer} from '#core';

export function documentationLabelNodeParse(analyzer: LexicalAnalyzer): DocumentationLabelNode | Nothing {
  if (!analyzer.hasTextAtIndex(AT)) {
    return nothing;
  }

  const text = analyzer.resource.data
    // todo simplify it '.characters[i].isLetterOrDigit(0)'
    .takeWhile(
      (x, i) => AT.equals(x) || analyzer.resource.data.at2(i).isLetterOrDigit(),
      analyzer.position.index,
    );

  if (text.count() <= AT.count()) {
    return nothing;
  }

  const reference = analyzer.textReference(text);

  return documentationLabelNode(reference, text);
}
