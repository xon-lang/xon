import {Nothing, nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {COMMA} from '../../lexical-analyzer-config';
import {CommaNode, commaNode} from './comma-node';

export function commaNodeParse(analyzer: LexicalAnalyzer): CommaNode | Nothing {
  if (!analyzer.checkTextAtIndex(COMMA)) {
    return nothing;
  }

  const text = COMMA;
  const range = analyzer.getRange(text.length);

  return commaNode(range, text);
}
