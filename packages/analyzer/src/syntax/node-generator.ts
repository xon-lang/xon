import {
  AnalyzerContext,
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
  parseStringInterpolationNode,
  parseStringNode,
  parseSymbolOperatorNode,
  parseUnknownNode,
  parseWhitespaceNode,
} from '#analyzer';
import {ArrayData, newArrayData, Nothing} from '#common';
import {$Model} from '#typing';

function nodeParsers(): ArrayData<(context: AnalyzerContext) => Node | Nothing> {
  return newArrayData($Model(), [
    parseWhitespaceNode,
    parseNlNode,
    parseStringNode,
    parseStringInterpolationNode,
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
  while (true) {
    const node = nodeParsers().firstMap((parse) => parse(context));

    if (!node) {
      break;
    }

    if (node.isHidden) {
      context.hiddenNodes.addLastItem(node);
    }

    yield node;
  }
}

export function* nonHiddenNodeGenerator(context: AnalyzerContext): Generator<Node> {
  for (const node of nodeGenerator(context)) {
    if (!node.isHidden) {
      yield node;
    }
  }
}
