import {
  $NlNode,
  $SyntaxNode,
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
  SyntaxNode,
} from '#analyzer';
import {$Model, ArrayData, is, newArrayData, Nothing} from '#core';

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

export function* nodeGenerator(context: AnalyzerContext): Generator<SyntaxNode[]> {
  const nodes = newArrayData($SyntaxNode(), [])

  while (true) {
    const node = nodeParsers().firstMap((parse) => parse(context));

    if (!node) {
      break;
    }

    nodes

    if(is(node, $NlNode())){

    }

    // todo remove 'as'
    yield node as SyntaxNode;
  }
}

export function* nonHiddenNodeGenerator(context: AnalyzerContext): Generator<Node> {
  for (const node of nodeGenerator(context)) {
    if (!node.isHidden) {
      yield node;
    }
  }
}
