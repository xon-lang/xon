import {Nothing, nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {DOCUMENTATION_CLOSE} from '../../lexical-analyzer-config';
import {DocumentationCloseNode, documentationCloseNode} from './documentation-close-node';

export function documentationCloseNodeParse(analyzer: LexicalAnalyzer): DocumentationCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(DOCUMENTATION_CLOSE)) {
    return nothing;
  }

  const text = DOCUMENTATION_CLOSE;
  const range = analyzer.getRange(DOCUMENTATION_CLOSE.length);

  return documentationCloseNode(range, text);
}
