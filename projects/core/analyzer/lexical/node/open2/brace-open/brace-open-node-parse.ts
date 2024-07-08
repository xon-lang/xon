import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {BRACE_OPEN} from '../../../lexical-analyzer-config';
import {BraceOpenNode, braceOpenNode} from './brace-open-node';

export function braceOpenNodeParse(analyzer: LexicalAnalyzer): BraceOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(BRACE_OPEN)) {
    return nothing;
  }

  const text = analyzer.resource.data[analyzer.position.index];
  const range = analyzer.getRange(text.length);

  return braceOpenNode(range, text);
}
