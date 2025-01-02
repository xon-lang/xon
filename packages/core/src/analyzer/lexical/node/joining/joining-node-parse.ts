import {Nothing, nothing} from '#common';
import {JOINING, JoiningNode, LexicalAnalyzer, NL, SPACE, joiningNode} from '#core';

export function joiningNodeParse(analyzer: LexicalAnalyzer): JoiningNode | Nothing {
  if (!analyzer.hasTextAtIndex(JOINING)) {
    return nothing;
  }

  const text = analyzer.resource.data
    .takeWhile((x) => SPACE.equals(x), analyzer.position.index + JOINING.count())
    .addFirstItems(JOINING);

  if (NL.equals(analyzer.resource.data.at2(analyzer.position.index + text.count()))) {
    text.addLastItems(NL);
  }

  const reference = analyzer.textReferenceWithNewLine(text);

  return joiningNode(reference, text);
}
