import {Nothing, nothing} from '../../../../../../lib/src/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {NL, SPACE} from '../../lexical-analyzer-config';
import {NlNode, nlNode} from './nl-node';

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
