import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {PAREN_OPEN} from '../../../lexical-analyzer-config';
import {ParenOpenNode, parenOpenNode} from './paren-open-node';

export function parenOpenNodeParse(analyzer: LexicalAnalyzer): ParenOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(PAREN_OPEN)) {
    return nothing;
  }

  const text = analyzer.resource.data[analyzer.position.index];
  const range = analyzer.getRange(text.length);

  return parenOpenNode(range, text);
}
