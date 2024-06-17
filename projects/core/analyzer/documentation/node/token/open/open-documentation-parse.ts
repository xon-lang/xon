import {Integer, Nothing, nothing} from '../../../../../../lib/types';
import {DOCUMENTATION_OPEN, GROUP_CLOSE, GROUP_OPEN} from '../../../../lexical/lexical-config';
import {SyntaxContext} from '../../../../syntax-context';
import {groupNodeParse} from '../../../../syntax/group/group-node-parse';
import {$Node} from '../../../../syntax/node';
import {DocumentationNode} from '../../documentation/documentation-node';
import { documentationNodeParse } from '../../documentation/documentation-parse';

export function openDocumentationNodeParse(
  context: SyntaxContext,
  index: Integer,
): DocumentationNode | Nothing {
  if (context.resource.data.take(DOCUMENTATION_OPEN.length, index) !== DOCUMENTATION_OPEN) {
    return nothing;
  }

  return documentationNodeParse(context);
}
