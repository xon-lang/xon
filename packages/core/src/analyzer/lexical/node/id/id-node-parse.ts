import {Nothing, nothing} from '#common';
import {IdNode, LexicalAnalyzer, UNDERSCORE, idNode} from '#core';

export function idNodeParse(analyzer: LexicalAnalyzer): IdNode | Nothing {
  if (
    !analyzer.checkTextAtIndex(UNDERSCORE) &&
    // todo simplify it
    !analyzer.resource.data.characters[analyzer.position.index].isLetter(0)
  ) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile(
    // todo simplify it
    (x, i) => x === UNDERSCORE || analyzer.resource.data.characters[i].isLetterOrDigit(0),
    analyzer.position.index,
  );

  const reference = analyzer.getResourceRange(text);

  return idNode(reference, text);
}
