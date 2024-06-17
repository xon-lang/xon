import {Integer, Nothing, nothing} from '../../../../../../lib/types';
import {DOCUMENTATION_CLOSE} from '../../../../lexical/lexical-config';
import {SyntaxContext} from '../../../../syntax-context';
import {CloseDocumentationNode, closeDocumentationNode} from './close-documentation-node';

export function closeDocumentationNodeParse(
  context: SyntaxContext,
  index: Integer,
): CloseDocumentationNode | Nothing {
  if (!context.checkLexemeAtIndex(DOCUMENTATION_CLOSE, index)) {
    return nothing;
  }

  const text = context.resource.data[index];
  const range = context.getSymbolRange();

  return closeDocumentationNode(range, text);
}
