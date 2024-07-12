import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {PAREN_CLOSE} from '../../../lexical-analyzer-config';
import {ParenCloseNode, parenCloseNode} from './paren-close-node';

export function parenCloseNodeParse(analyzer: LexicalAnalyzer): ParenCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(PAREN_CLOSE)) {
    return nothing;
  }

  const text = PAREN_CLOSE;
  const range = analyzer.getRange(text.length);

  return parenCloseNode(range, text);
}
