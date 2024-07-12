import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {CHAR_OPEN} from '../../../lexical-analyzer-config';
import {CharOpenNode, charOpenNode} from './char-open-node';

export function charOpenNodeParse(analyzer: LexicalAnalyzer): CharOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(CHAR_OPEN)) {
    return nothing;
  }

  const text = CHAR_OPEN;
  const range = analyzer.getRange(text.length);

  return charOpenNode(range, text);
}
