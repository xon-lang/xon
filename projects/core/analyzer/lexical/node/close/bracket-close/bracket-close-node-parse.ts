import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {BRACKET_CLOSE} from '../../../lexical-analyzer-config';
import {bracketCloseNode, BracketCloseNode} from './bracket-close-node';

export function bracketCloseNodeParse(analyzer: LexicalAnalyzer): BracketCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(BRACKET_CLOSE)) {
    return nothing;
  }

  const text = BRACKET_CLOSE;
  const range = analyzer.getRange(text.length);

  return bracketCloseNode(range, text);
}
