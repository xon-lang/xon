import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {AT, DOCUMENTATION_CLOSE} from '../../lexical-analyzer-config';
import {DocumentationDescriptionNode, documentationDescriptionNode} from './documentation-description-node';

export function documentationDescriptionNodeParse(
  analyzer: LexicalAnalyzer,
): DocumentationDescriptionNode | Nothing {
  const text = analyzer.resource.data.takeWhile(
    (x, i) => x !== AT && !analyzer.checkTextAtIndex(DOCUMENTATION_CLOSE, i),
    analyzer.position.index,
  );

  if (text.length() === 0) {
    return nothing;
  }

  const reference = analyzer.getResourceRangeWithNL(text);

  return documentationDescriptionNode(reference, text);
}
