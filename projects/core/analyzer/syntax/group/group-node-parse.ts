import {Array2, Nothing, String2, nothing} from '../../../../lib/types';
import {
  ARRAY_CLOSE,
  ARRAY_OPEN,
  GROUP_CLOSE,
  OBJECT_CLOSE,
  OBJECT_OPEN,
} from '../../lexical/lexical-analyzer-config';
import {CloseNode} from '../../lexical/node/close/close-node';
import {CommaNode} from '../../lexical/node/comma/comma-node';
import {OpenNode} from '../../lexical/node/open/open-node';
import {$Node, is} from '../../node';
import {SyntaxAnalyzer} from '../syntax-analyzer';
import {SyntaxAnalyzerConfig} from '../syntax-analyzer-config';
import {$Group, Group, groupNode} from './group-node';
import {ItemNode, itemNode} from './item-node';

export function groupNodeParse(analyzer: SyntaxAnalyzer, openNode: OpenNode): Group {
  if (openNode.text === ARRAY_OPEN) {
    return groupNodeParseInner(analyzer, $Node.ARRAY, openNode, ARRAY_CLOSE);
  }

  if (openNode.text === OBJECT_OPEN) {
    return groupNodeParseInner(analyzer, $Node.OBJECT, openNode, OBJECT_CLOSE);
  }

  return groupNodeParseInner(analyzer, $Node.GROUP, openNode, GROUP_CLOSE);
}

function groupNodeParseInner(
  analyzer: SyntaxAnalyzer,
  $: $Group,
  openNode: OpenNode,
  closeText: String2,
): Group {
  const items: Array2<ItemNode> = [];

  const config: SyntaxAnalyzerConfig = {
    ...analyzer.config,
    formatting: {
      ...analyzer.config.formatting,
      insertFinalNewline: false,
    },
  };

  let itemIndex = 0;
  let commaNode: CommaNode | Nothing = nothing;

  while (analyzer.lexicalAnalyzer.position.index < analyzer.lexicalAnalyzer.resource.data.length) {
    const {breakNode, statements} = analyzer.parseStatements(
      (node) =>
        is<CommaNode>(node, $Node.COMMA) || (is<CloseNode>(node, $Node.CLOSE) && node.text === closeText),
    );

    if (is<CommaNode>(breakNode, $Node.COMMA)) {
      const item = itemNode(analyzer, itemIndex, commaNode, statements);
      items.push(item);
      commaNode = breakNode;
    }

    if (is<CloseNode>(breakNode, $Node.CLOSE)) {
      if (items.length > 0 || statements.length > 0) {
        const item = itemNode(analyzer, itemIndex, commaNode, statements);
        items.push(item);
      }

      return groupNode(analyzer, $, openNode, items, breakNode);
    }

    itemIndex += 1;
  }

  return groupNode(analyzer, $, openNode, items, nothing);
}
