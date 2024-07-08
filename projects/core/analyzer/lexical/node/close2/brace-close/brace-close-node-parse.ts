import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {BRACE_CLOSE} from '../../../lexical-analyzer-config';
import {BraceCloseNode, braceCloseNode} from './brace-close-node';

export function braceCloseNodeParse(analyzer: LexicalAnalyzer): BraceCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(BRACE_CLOSE)) {
    return nothing;
  }

  const text = analyzer.resource.data[analyzer.position.index];
  const range = analyzer.getRange(text.length);

  return braceCloseNode(range, text);
}
