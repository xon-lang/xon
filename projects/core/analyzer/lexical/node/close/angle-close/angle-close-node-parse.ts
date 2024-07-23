import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {ANGLE_CLOSE} from '../../../lexical-analyzer-config';
import {AngleCloseNode, angleCloseNode} from './angle-close-node';

export function angleCloseNodeParse(analyzer: LexicalAnalyzer): AngleCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(ANGLE_CLOSE)) {
    return nothing;
  }

  const text = ANGLE_CLOSE;
  const range = analyzer.getRange(text.length);

  return angleCloseNode(range, text);
}
