import {$, is} from '../../../$';
import {Array2, Nothing, String2, nothing} from '../../../../lib/types';
import {
  ARRAY_CLOSE,
  ARRAY_OPEN,
  GROUP_CLOSE,
  OBJECT_CLOSE,
  OBJECT_OPEN,
} from '../../lexical/lexical-analyzer-config';
import {CommaNode} from '../../lexical/node/comma/comma-node';
import {OpenNode} from '../../lexical/node/open/open-node';
import {SyntaxAnalyzer} from '../syntax-analyzer';
import {SyntaxAnalyzerConfig} from '../syntax-analyzer-config';
import {$Group, Group, groupNode} from './group-node';
import {ItemNode, itemNode} from './item-node';

export function groupNodeParse(analyzer: SyntaxAnalyzer, openNode: OpenNode): Group {
  if (openNode.text === ARRAY_OPEN) {
    return groupNodeParseInner(analyzer, $.ArrayNode, openNode, ARRAY_CLOSE);
  }

  if (openNode.text === OBJECT_OPEN) {
    return groupNodeParseInner(analyzer, $.ObjectNode, openNode, OBJECT_CLOSE);
  }

  return groupNodeParseInner(analyzer, $.GroupNode, openNode, GROUP_CLOSE);
}

function groupNodeParseInner(
  analyzer: SyntaxAnalyzer,
  groupType: $Group,
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
      (node) => is(node, $.CommaNode) || (is(node, $.CloseNode) && node.text === closeText),
    );

    if (is(breakNode, $.CommaNode)) {
      const item = itemNode(analyzer, itemIndex, commaNode, statements);
      items.push(item);
      commaNode = breakNode;
    }

    if (is(breakNode, $.CloseNode)) {
      if (items.length > 0 || statements.length > 0) {
        const item = itemNode(analyzer, itemIndex, commaNode, statements);
        items.push(item);
      }

      return groupNode(analyzer, groupType, openNode, items, breakNode);
    }

    itemIndex += 1;
  }

  return groupNode(analyzer, groupType, openNode, items, nothing);
}
