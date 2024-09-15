import {Nothing, nothing} from '../../../../../../../lib/src/types';
import {textData} from '../../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {PAREN_OPEN} from '../../../lexical-analyzer-config';
import {ParenOpenNode, parenOpenNode} from './paren-open-node';

export function parenOpenNodeParse(analyzer: LexicalAnalyzer): ParenOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(PAREN_OPEN)) {
    return nothing;
  }

  const text = textData(PAREN_OPEN);
  const reference = analyzer.getResourceRange(text);

  return parenOpenNode(reference, text);
}
