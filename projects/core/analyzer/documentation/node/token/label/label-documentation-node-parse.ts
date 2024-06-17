import {Integer, Nothing, nothing} from '../../../../../../lib/types';
import {AT, UNDERSCORE} from '../../../../lexical/lexical-config';
import {SyntaxContext} from '../../../../syntax-context';
import {idNode} from '../../../../syntax/token/id/id-node';
import {LabelDocumentationNode} from './label-documentation-node';

export function labelDocumentationNodeParse(
  context: SyntaxContext,
  index: Integer,
): LabelDocumentationNode | Nothing {
  if (context.resource.data.take(AT.length, index) !== AT) {
    return nothing;
  }

  const text = context.resource.data.takeWhile(
    (x, i) => x === UNDERSCORE || context.resource.data.isLetterOrDigit(i),
    index,
  );

  const range = context.getRange(text.length);

  return idNode(range, text);
}
