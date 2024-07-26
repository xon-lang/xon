import {Nothing, nothing} from '../../../../../lib/types';
import {textData} from '../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {DOCUMENTATION_CLOSE} from '../../lexical-analyzer-config';
import {DocumentationCloseNode, documentationCloseNode} from './documentation-close-node';

export function documentationCloseNodeParse(analyzer: LexicalAnalyzer): DocumentationCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(DOCUMENTATION_CLOSE)) {
    return nothing;
  }

  const text = textData(DOCUMENTATION_CLOSE);
  const range = analyzer.getRange(text);

  return documentationCloseNode(range, text);
}
