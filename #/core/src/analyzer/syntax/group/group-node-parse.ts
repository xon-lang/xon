import {Nothing, nothing, TextData} from '#common';
import {
  $BraceOpenNode,
  $BracketOpenNode,
  $CloseNode,
  $CommaNode,
  $ParenOpenNode,
  ANGLE_CLOSE,
  BRACE_CLOSE,
  BRACKET_CLOSE,
  CommaNode,
  GroupNode,
  groupNode,
  ItemNode,
  itemNode,
  OpenNode,
  PAREN_CLOSE,
  SyntaxAnalyzer,
} from '#core';
import {is} from '#typing';

export function groupNodeParse(analyzer: SyntaxAnalyzer, openNode: OpenNode): GroupNode {
  if (is(openNode, $ParenOpenNode)) {
    return groupNodeParseInner(analyzer, openNode, PAREN_CLOSE);
  }

  if (is(openNode, $BracketOpenNode)) {
    return groupNodeParseInner(analyzer, openNode, BRACKET_CLOSE);
  }

  if (is(openNode, $BraceOpenNode)) {
    return groupNodeParseInner(analyzer, openNode, BRACE_CLOSE);
  }

  return groupNodeParseInner(analyzer, openNode, ANGLE_CLOSE);
}

function groupNodeParseInner(analyzer: SyntaxAnalyzer, openNode: OpenNode, closeText: TextData): GroupNode {
  const items: ItemNode[] = [];

  let itemIndex = 0;
  let commaNode: CommaNode | Nothing = nothing;

  while (analyzer.lexicalAnalyzer.position.index < analyzer.lexicalAnalyzer.resource.data.length()) {
    const {breakNode, statements} = analyzer.parseStatements(
      (node) => is(node, $CommaNode) || (is(node, $CloseNode) && node.text.equals(closeText)),
    );

    if (is(breakNode, $CommaNode)) {
      const item = itemNode(analyzer, itemIndex, commaNode, statements);
      items.push(item);
      commaNode = breakNode;
    }

    if (is(breakNode, $CloseNode)) {
      if (items.length > 0 || statements.length > 0) {
        const item = itemNode(analyzer, itemIndex, commaNode, statements);
        items.push(item);
      }

      return groupNode(analyzer, openNode, items, breakNode);
    }

    itemIndex += 1;
  }

  return groupNode(analyzer, openNode, items, nothing);
}
