import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {STRING_OPEN} from '../../../lexical-analyzer-config';
import {StringOpenNode, stringOpenNode} from './string-open-node';

export function stringOpenNodeParse(analyzer: LexicalAnalyzer): StringOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(STRING_OPEN)) {
    return nothing;
  }

  const text = STRING_OPEN;
  const range = analyzer.getRange(text.length);

  return stringOpenNode(range, text);
}
