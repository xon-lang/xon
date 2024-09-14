import {Nothing, nothing} from '../../../../../../lib/types';
import {textData} from '../../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {BRACE_OPEN} from '../../../lexical-analyzer-config';
import {BraceOpenNode, braceOpenNode} from './brace-open-node';

export function braceOpenNodeParse(analyzer: LexicalAnalyzer): BraceOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(BRACE_OPEN)) {
    return nothing;
  }

  const text = textData(BRACE_OPEN);
  const reference = analyzer.getResourceRange(text);

  return braceOpenNode(reference, text);
}
