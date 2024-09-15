import {Nothing, nothing} from '../../../../../../lib/src/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {JOINING, NL, SPACE} from '../../lexical-analyzer-config';
import {JoiningNode, joiningNode} from './joining-node';

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
