import {Nothing, nothing} from '../../../../../../../lib/src/types';
import {textData} from '../../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../../lexical-analyzer';
import {BRACE_CLOSE} from '../../../lexical-analyzer-config';
import {BraceCloseNode, braceCloseNode} from './brace-close-node';

export function braceCloseNodeParse(analyzer: LexicalAnalyzer): BraceCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(BRACE_CLOSE)) {
    return nothing;
  }

  const text = textData(BRACE_CLOSE);
  const reference = analyzer.getResourceRange(text);

  return braceCloseNode(reference, text);
}
