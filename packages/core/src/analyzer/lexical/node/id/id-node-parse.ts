import {Nothing, nothing} from '#common';
import {IdNode, LexicalAnalyzer, UNDERSCORE, idNode} from '#core';

export function idNodeParse(analyzer: LexicalAnalyzer): IdNode | Nothing {
  if (
    !analyzer.hasTextAtIndex(UNDERSCORE) &&
    // todo simplify it
    !analyzer.resource.data.at2(analyzer.position.index).isLetter()
  ) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile(
    // todo simplify it
    (x, i) => UNDERSCORE.equals(x) || analyzer.resource.data.at2(i).isLetterOrDigit(),
    analyzer.position.index,
  );

  const reference = analyzer.textReference(text);

  return idNode(reference, text);
}
