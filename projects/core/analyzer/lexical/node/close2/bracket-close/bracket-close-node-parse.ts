import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {BRACKET_CLOSE} from '../../../lexical-analyzer-config';
import {bracketCloseNode, BracketCloseNode} from './bracket-close-node';

export function bracketCloseNodeParse(analyzer: LexicalAnalyzer): BracketCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(BRACKET_CLOSE)) {
    return nothing;
  }

  const text = analyzer.resource.data[analyzer.position.index];
  const range = analyzer.getRange(text.length);

  return bracketCloseNode(range, text);
}
