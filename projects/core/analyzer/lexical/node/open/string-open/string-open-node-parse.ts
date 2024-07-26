import {Nothing, nothing} from '../../../../../../lib/types';
import {textData} from '../../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {STRING_OPEN} from '../../../lexical-analyzer-config';
import {StringOpenNode, stringOpenNode} from './string-open-node';

export function stringOpenNodeParse(analyzer: LexicalAnalyzer): StringOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(STRING_OPEN)) {
    return nothing;
  }

  const text = textData(STRING_OPEN);
  const range = analyzer.getRange(text);

  return stringOpenNode(range, text);
}
