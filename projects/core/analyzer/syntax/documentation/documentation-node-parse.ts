import {$, is} from '../../../$';
import {Nothing, nothing} from '../../../../lib/types';
import {rangeFromNodes} from '../../../util/resource/text/text-range';
import {textResourceRange} from '../../../util/resource/text/text-resource-range';
import {documentationLexicalParsers} from '../../lexical/documentation-lexical-analyzer';
import {DocumentationDescriptionNode} from '../../lexical/node/documentation-description/documentation-description-node';
import {DocumentationOpenNode} from '../../lexical/node/documentation-open/documentation-open-node';
import {SyntaxAnalyzer} from '../syntax-analyzer';
import {documentationItemNode, DocumentationItemNode} from './documentation-item-node';
import {documentationNode, DocumentationNode} from './documentation-node';

export function documentationNodeParse(
  analyzer: SyntaxAnalyzer,
  openNode: DocumentationOpenNode,
): DocumentationNode {
  const iterator = analyzer.lexicalAnalyzer.iterator(documentationLexicalParsers);
  let description: DocumentationDescriptionNode | Nothing = nothing;
  const items: DocumentationItemNode[] = [];

  for (const node of iterator) {
    if (is(node, $.DocumentationDescriptionNode)) {
      if (items.length === 0) {
        description = node;
      } else {
        const lastItem = items.last()!;
        lastItem.description = node;
        lastItem.children.push(node);
        const range = rangeFromNodes(lastItem.children);
        lastItem.reference = textResourceRange(analyzer.resource, range);
      }

      continue;
    }

    if (is(node, $.DocumentationLabelNode)) {
      items.push(documentationItemNode(analyzer, node));

      continue;
    }

    if (is(node, $.DocumentationCloseNode)) {
      return documentationNode(analyzer, openNode, description, items, node);
    }
  }

  return documentationNode(analyzer, openNode, description, items);
}
