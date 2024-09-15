import {$, is} from '../../../$';
import {Nothing, nothing, String2} from '../../../../../lib/types';
import {ANGLE_CLOSE, BRACE_CLOSE, BRACKET_CLOSE, PAREN_CLOSE} from '../../lexical/lexical-analyzer-config';

import {CommaNode} from '../../lexical/node/comma/comma-node';
import {OpenNode} from '../../lexical/node/open/open-node';
import {SyntaxAnalyzer} from '../syntax-analyzer';
import {groupNode, GroupNode, GroupNodeType} from './group-node';
import {ItemNode, itemNode} from './item-node';

export function groupNodeParse(analyzer: SyntaxAnalyzer, openNode: OpenNode): GroupNode {
  if (is(openNode, $.ParenOpenNode)) {
    return groupNodeParseInner(analyzer, $.ParenGroupNode, openNode, PAREN_CLOSE);
  }

  if (is(openNode, $.BracketOpenNode)) {
    return groupNodeParseInner(analyzer, $.BracketGroupNode, openNode, BRACKET_CLOSE);
  }

  if (is(openNode, $.BraceOpenNode)) {
    return groupNodeParseInner(analyzer, $.BraceGroupNode, openNode, BRACE_CLOSE);
  }

  return groupNodeParseInner(analyzer, $.AngleGroupNode, openNode, ANGLE_CLOSE);
}

function groupNodeParseInner(
  analyzer: SyntaxAnalyzer,
  groupType: GroupNodeType,
  openNode: OpenNode,
  closeText: String2,
): GroupNode {
  const items: ItemNode[] = [];

  let itemIndex = 0;
  let commaNode: CommaNode | Nothing = nothing;

  while (analyzer.lexicalAnalyzer.position.index < analyzer.lexicalAnalyzer.resource.data.length()) {
    const {breakNode, statements} = analyzer.parseStatements(
      (node) => is(node, $.CommaNode) || (is(node, $.CloseNode) && node.text.equals(closeText)),
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
