import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {SPACE} from '../../lexical-analyzer-config';
import {WhitespaceNode, whitespaceNode} from './whitespace-node';

export function whitespaceNodeParse(analyzer: LexicalAnalyzer): WhitespaceNode | Nothing {
  if (!analyzer.checkTextAtIndex(SPACE)) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile((x) => x === SPACE, analyzer.position.index);
  const reference = analyzer.getResourceRange(text);

  return whitespaceNode(reference, text);
}
