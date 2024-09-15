import {Nothing, nothing} from '../../../../../../lib/types';
import {textData} from '../../../../util/data/text-data';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {DOCUMENTATION_OPEN} from '../../lexical-analyzer-config';
import {documentationOpenNode, DocumentationOpenNode} from './documentation-open-node';

export function documentationOpenNodeParse(analyzer: LexicalAnalyzer): DocumentationOpenNode | Nothing {
  if (!analyzer.checkTextAtIndex(DOCUMENTATION_OPEN)) {
    return nothing;
  }

  const text = textData(DOCUMENTATION_OPEN);
  const reference = analyzer.getResourceRange(text);

  return documentationOpenNode(reference, text);
}
