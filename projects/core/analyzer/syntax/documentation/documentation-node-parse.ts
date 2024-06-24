import {Nothing, nothing} from '../../../../lib/types';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
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
  const items: DocumentationItemNode[] = [];

  for (const node of lexer) {
    if (is<DocumentationDescriptionNode>(node, $Node.DOCUMENTATION_DESCRIPTION)) {
      if (items.length === 0) {
        description = node;
      } else {
        items.last()!.description = node;
      }

      continue;
    }

    if (is<DocumentationLabelNode>(node, $Node.DOCUMENTATION_LABEL)) {
      if (items.some((x) => x.id.text === node.name)) {
        context.issueManager.addError(node.range, ISSUE_MESSAGE.documentationLabelAlreadyExists(node.text));
      }

      items.push(documentationItemNode(node));

      continue;
    }

    if (is<DocumentationCloseNode>(node, $Node.DOCUMENTATION_CLOSE)) {
      return documentationNode(openNode, description, items, node);
    }
  }

  return documentationNode(openNode, description, items);
}
