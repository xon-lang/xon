import {Integer, Nothing, nothing} from '../../../../../lib/types';
import {DOCUMENTATION} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {DocumentationNode, documentationNode} from './documentation-node';

export function documentationNodeParse(context: SyntaxContext, index: Integer): DocumentationNode | Nothing {
  if (context.resource.data.take(DOCUMENTATION.length, index) !== DOCUMENTATION) {
    return nothing;
  }

  const stopIndex = context.resource.data.indexOf(DOCUMENTATION, index + DOCUMENTATION.length);
  const endSlice = stopIndex < 0 ? context.resource.data.length : stopIndex + DOCUMENTATION.length;

  const text = context.resource.data.slice(index, endSlice);
  const range = context.getRangeWithNL(text.length);

  return documentationNode(range, text);
}
