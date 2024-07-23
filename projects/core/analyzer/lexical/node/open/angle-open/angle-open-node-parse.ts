import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {ANGLE_OPEN} from '../../../lexical-analyzer-config';
import {AngleOpenNode, angleOpenNode} from './angle-open-node';

export function angleOpenNodeParse(analyzer: LexicalAnalyzer): AngleOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(ANGLE_OPEN)) {
    return nothing;
  }

  const text = ANGLE_OPEN;
  const range = analyzer.getRange(text.length);

  return angleOpenNode(range, text);
}
