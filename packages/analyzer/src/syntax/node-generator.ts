import {
  AnalyzerContext,
  newEofNode,
  Node,
  parseCharacterNode,
  parseCommaNode,
  parseCommentNode,
  parseDocumentationNode,
  parseGroupCloseNode,
  parseGroupNode,
  parseIdKeywordOperatorNode,
  parseJoiningNode,
  parseNlNode,
  parseNumberNode,
  parseStringNode,
  parseSymbolOperatorNode,
  parseUnknownNode,
  parseWhitespaceNode,
} from '#analyzer';
import {ArrayData, newArrayData, newTextRange, Nothing} from '#common';

function nodeParsers(): ArrayData<(context: AnalyzerContext) => Node | Nothing> {
  return newArrayData([
    parseWhitespaceNode,
    parseNlNode,
    parseStringNode,
    parseCharacterNode,
    parseNumberNode,
    parseSymbolOperatorNode,
    parseIdKeywordOperatorNode,
    parseGroupNode,
    parseCommaNode,
    parseGroupCloseNode,
    parseDocumentationNode,
    parseCommentNode,
    parseJoiningNode,
    parseUnknownNode,
  ]);
}

export function* nodeGenerator(context: AnalyzerContext): Generator<Node> {
  let hiddenNodes = newArrayData<Node>();

  while (true) {
    const node = nodeParsers().firstMap((parse) => parse(context));

    if (!node) {
      break;
    }

    if (node.isHidden) {
      hiddenNodes.addLastItem(node);
    } else if (!hiddenNodes.isEmpty()) {
      node.hiddenNodes = hiddenNodes;
      hiddenNodes = newArrayData();
    }

    yield node;
  }

  const lastNodePosition = hiddenNodes.last()?.range.stop;

  if (lastNodePosition) {
    const eofRange = newTextRange(lastNodePosition);
    const eofNode = newEofNode(eofRange);
    eofNode.hiddenNodes = hiddenNodes;

    yield eofNode;
  }
}

export function* nonHiddenNodeGenerator(context: AnalyzerContext): Generator<Node> {
  for (const node of nodeGenerator(context)) {
    if (!node.isHidden) {
      yield node;
    }
  }
}
