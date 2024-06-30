import {Nothing, nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {DOCUMENTATION_OPEN} from '../../lexical-analyzer-config';
import {documentationOpenNode, DocumentationOpenNode} from './documentation-open-node';

export function documentationOpenNodeParse(analyzer: LexicalAnalyzer): DocumentationOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(DOCUMENTATION_OPEN)) {
    return nothing;
  }

  const text = DOCUMENTATION_OPEN;
  const range = analyzer.getRange(DOCUMENTATION_OPEN.length);

  return documentationOpenNode(range, text);
}
