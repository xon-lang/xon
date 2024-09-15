import {Nothing, nothing} from '#common';
import {AT, DocumentationLabelNode, documentationLabelNode, LexicalAnalyzer} from '#core';

export function documentationLabelNodeParse(analyzer: LexicalAnalyzer): DocumentationLabelNode | Nothing {
  if (!analyzer.checkTextAtIndex(AT)) {
    return nothing;
  }

  const text = analyzer.resource.data
    // todo simplify it '.characters[i].isLetterOrDigit(0)'
    .takeWhile(
      (x, i) => x === AT || analyzer.resource.data.characters[i].isLetterOrDigit(0),
      analyzer.position.index,
    );

  if (text.length() <= AT.length) {
    return nothing;
  }

  const reference = analyzer.getResourceRange(text);

  return documentationLabelNode(reference, text);
}
