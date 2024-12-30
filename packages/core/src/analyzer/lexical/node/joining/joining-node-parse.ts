import {Nothing, nothing} from '#common';
import {JOINING, JoiningNode, LexicalAnalyzer, NL, SPACE, joiningNode} from '#core';

export function joiningNodeParse(analyzer: LexicalAnalyzer): JoiningNode | Nothing {
  if (!analyzer.hasTextAtIndex(JOINING)) {
    return nothing;
  }

  const text = analyzer.resource.data
    .takeWhile((x) => x.equals(SPACE), analyzer.position.index + JOINING.length())
    .addFirstItems(JOINING);

  if (analyzer.resource.data.at2(analyzer.position.index + text.length()).equals(NL)) {
    text.addLastItems(NL);
  }

  const reference = analyzer.textReferenceWithNewLine(text);

  return joiningNode(reference, text);
}
