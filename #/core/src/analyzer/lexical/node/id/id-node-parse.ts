import {Nothing, nothing} from '#/common';
import {IdNode, LexicalAnalyzer, UNDERSCORE, idNode} from '#/core';

export function idNodeParse(analyzer: LexicalAnalyzer): IdNode | Nothing {
  if (
    !analyzer.checkTextAtIndex(UNDERSCORE) &&
    // todo simplify it
    !analyzer.resource.data.at2(analyzer.position.index).isLetter()
  ) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile(
    // todo simplify it
    (x, i) => x.equals(UNDERSCORE) || analyzer.resource.data.at2(i).isLetterOrDigit(),
    analyzer.position.index,
  );

  const reference = analyzer.getResourceRange(text);

  return idNode(reference, text);
}
