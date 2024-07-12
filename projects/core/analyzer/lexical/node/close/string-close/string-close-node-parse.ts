import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {STRING_CLOSE} from '../../../lexical-analyzer-config';
import {StringCloseNode, stringCloseNode} from './string-close-node';

export function stringCloseNodeParse(analyzer: LexicalAnalyzer): StringCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(STRING_CLOSE)) {
    return nothing;
  }

  const text = STRING_CLOSE;
  const range = analyzer.getRange(text.length);

  return stringCloseNode(range, text);
}
