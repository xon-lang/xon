import {Integer, Nothing, nothing} from '../../../../../../lib/types';
import {AT} from '../../../../lexical/lexical-config';
import {SyntaxContext} from '../../../../syntax-context';
import {LabelDocumentationNode, labelDocumentationNode} from './label-documentation-node';

export function labelDocumentationNodeParse(
  context: SyntaxContext,
  index: Integer,
): LabelDocumentationNode | Nothing {
  if (!context.checkLexemeAtIndex(AT, index)) {
    return nothing;
  }

  const text = context.resource.data.takeWhile(
    (x, i) => x === AT || context.resource.data.isLetterOrDigit(i),
    index,
  );

  const range = context.getRange(text.length);

  return labelDocumentationNode(range, text);
}
