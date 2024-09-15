import {Nothing, nothing} from '#common';
import {LexicalAnalyzer, NL, NlNode, SPACE, nlNode} from '#core';

export function nlNodeParse(analyzer: LexicalAnalyzer): NlNode | Nothing {
  if (!analyzer.checkTextAtIndex(NL)) {
    return nothing;
  }

  const textWithIndents = analyzer.resource.data.takeWhile(
    (x) => x === NL || x === SPACE,
    analyzer.position.index,
  );

  const lastNlIndex = textWithIndents.lastIndex(NL);

  const text = textWithIndents.slice(0, lastNlIndex + 1);
  const reference = analyzer.getResourceRangeWithNL(text);

  return nlNode(reference, text);
}
