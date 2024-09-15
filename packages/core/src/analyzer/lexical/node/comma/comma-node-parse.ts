import {Nothing, nothing} from '../../../../../../lib/src/types';
import {textData} from '../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {COMMA} from '../../lexical-analyzer-config';
import {CommaNode, commaNode} from './comma-node';

export function commaNodeParse(analyzer: LexicalAnalyzer): CommaNode | Nothing {
  if (!analyzer.checkTextAtIndex(COMMA)) {
    return nothing;
  }

  const text = textData(COMMA);
  const reference = analyzer.getResourceRange(text);

  return commaNode(reference, text);
}
