import {Nothing, nothing} from '#common';
import {JOINING, JoiningNode, LexicalAnalyzer, NL, SPACE, joiningNode} from '#core';

export function joiningNodeParse(analyzer: LexicalAnalyzer): JoiningNode | Nothing {
  if (!analyzer.checkTextAtIndex(JOINING)) {
    return nothing;
  }

  const text = analyzer.resource.data
    .takeWhile((x) => x === SPACE, analyzer.position.index + JOINING.length)
    .prepend(JOINING);

  if (analyzer.resource.data.characters[analyzer.position.index + text.length()] === NL) {
    text.append(NL);
  }

  const reference = analyzer.getResourceRangeWithNL(text);

  return joiningNode(reference, text);
}
