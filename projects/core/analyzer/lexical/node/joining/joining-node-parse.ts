import {Nothing, nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {JOINING, NL, SPACE} from '../../lexical-analyzer-config';
import {JoiningNode, joiningNode} from './joining-node';

export function joiningNodeParse(analyzer: LexicalAnalyzer): JoiningNode | Nothing {
  if (!analyzer.checkTextAtIndex(JOINING)) {
    return nothing;
  }

  let text =
    JOINING + analyzer.resource.data.takeWhile((x) => x === SPACE, analyzer.position.index + JOINING.length);

  if (analyzer.resource.data[analyzer.position.index + text.length] === NL) {
    text += NL;
  }

  const range = analyzer.getRangeWithNL(text.length);

  return joiningNode(range, text);
}
