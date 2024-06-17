import {Integer, Nothing, nothing} from '../../../../../../lib/types';
import {AT, DOCUMENTATION_CLOSE} from '../../../../lexical/lexical-config';
import {SyntaxContext} from '../../../../syntax-context';
import {DescriptionDocumentationNode, descriptionDocumentationNode} from './description-documentation-node';

export function descriptionDocumentationNodeParse(
  context: SyntaxContext,
  index: Integer,
): DescriptionDocumentationNode | Nothing {
  const text = context.resource.data.takeWhile(
    (x, i) => x !== AT && !context.checkLexemeAtIndex(DOCUMENTATION_CLOSE, i),
    index,
  );

  if (text.length === 0) {
    return nothing;
  }

  const range = context.getRange(text.length);

  return descriptionDocumentationNode(range, text);
}
