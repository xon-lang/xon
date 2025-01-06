import {IdNode, LexicalAnalyzer, UNDERSCORE, idNode} from '#analyzer';
import {Nothing, nothing} from '#common';

export function idNodeParse(analyzer: LexicalAnalyzer): IdNode | Nothing {
  if (
    !analyzer.hasTextAtIndex(UNDERSCORE) &&
    !analyzer.resource.data.at(analyzer.position.index)?.isLetter()
  ) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile(
    (x, i) => UNDERSCORE.equals(x) || !!analyzer.resource.data.at(i)?.isLetterOrDigit(),
    analyzer.position.index,
  );

  const reference = analyzer.textReference(text);

  return idNode(reference, text);
}
