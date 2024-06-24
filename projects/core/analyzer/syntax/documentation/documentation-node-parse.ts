import {Array2, Nothing, nothing} from '../../../../lib/types';
import {rangeFromNodes} from '../../../util/resource/text/text-range';
import {documentationLexicalAnalyzer} from '../../lexical/documentation-lexical-analyzer.1';
import {DocumentationCloseNode} from '../../lexical/node/documentation-close/documentation-close-node';
import {DocumentationDescriptionNode} from '../../lexical/node/documentation-description/documentation-description-node';
import {DocumentationLabelNode} from '../../lexical/node/documentation-label/documentation-label-node';
import {DocumentationOpenNode} from '../../lexical/node/documentation-open/documentation-open-node';
import {SyntaxContext} from '../../syntax-context';
import {$Node, is} from '../node';
import {documentationItemNode, DocumentationItemNode} from './documentation-item-node';
import {documentationNode, DocumentationNode} from './documentation-node';

export function documentationNodeParse(
  context: SyntaxContext,
  openNode: DocumentationOpenNode,
): DocumentationNode {
  const lexer = documentationLexicalAnalyzer(context.resource, context.lexer.cursor.position);

  let description: DocumentationDescriptionNode | Nothing = nothing;
  const items: Array2<DocumentationItemNode> = [];

  for (const node of lexer) {
    if (is<DocumentationDescriptionNode>(node, $Node.DOCUMENTATION_DESCRIPTION)) {
      if (items.length === 0) {
        description = node;
      } else {
        const lastItem = items.last()!;
        lastItem.description = node;
        lastItem.children.push(node);
        lastItem.range = rangeFromNodes(lastItem.children);
      }

      continue;
    }

    if (is<DocumentationLabelNode>(node, $Node.DOCUMENTATION_LABEL)) {
      items.push(documentationItemNode(node));

      continue;
    }

    if (is<DocumentationCloseNode>(node, $Node.DOCUMENTATION_CLOSE)) {
      return documentationNode(context, openNode, description, items, node);
    }
  }

  return documentationNode(context, openNode, description, items);
}
