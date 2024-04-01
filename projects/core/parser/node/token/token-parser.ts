import { formatLastContextHiddenNodes } from "../../../formatter/formatter";
import { ISSUE_MESSAGE } from "../../../issue/issue-message";
import { Nothing, Array2, nothing, Boolean2 } from "../../../lib/core";
import { TextResource } from "../../../util/resource/text/text-resource";
import { zeroPosition, TextResourcePosition } from "../../../util/resource/text/text-resource-position";
import { SyntaxContext, SyntaxResult, syntaxContext } from "../../syntax-context";
import { putStatementNode } from "../../util/put-statement-node";
import { Node, is, $Node } from "../node";
import { scanGroupNode } from "../syntax/group/group-node";
import { charTokenParse } from "./char/char-node";
import { closeTokenParse } from "./close/close-node";
import { commentBlockTokenParse } from "./comment-block/comment-block-node";
import { commentLineTokenParse } from "./comment-line/comment-line-node";
import { idTokenParse } from "./id/id-node";
import { integerTokenParse } from "./integer/integer-node";
import { joiningTokenParse } from "./joining/joining-node";
import { nlTokenParse, NlNode } from "./nl/nl-node";
import { operatorTokenParse } from "./operator/operator-node";
import { stringTokenParse } from "./string/string-node";
import { isHiddenToken } from "./token-node";
import { unknownTokenParse, UnknownNode } from "./unknown/unknown-node";
import { whitespaceTokenParse } from "./whitespace/whitespace-node";

export type TokenParseResult = Node | Nothing;
export type TokenParseFn = (context: SyntaxContext) => TokenParseResult;

const parsers: Array2<TokenParseFn> = [
  commentBlockTokenParse,
  commentLineTokenParse,
  integerTokenParse,
  stringTokenParse,
  charTokenParse,
  nlTokenParse,
  closeTokenParse,
  joiningTokenParse,
  whitespaceTokenParse,
  operatorTokenParse,
  idTokenParse,
  unknownTokenParse,
];

export function tokenParse(resource: TextResource): Node[] {
  return syntaxParseUntil(resource, zeroPosition(), nothing);
}

export function syntaxParseUntil(
  resource: TextResource,
  startPosition: TextResourcePosition,
  breakOnNodeFn: ((node: Node) => Boolean2) | Nothing,
): SyntaxResult {
  const context = syntaxContext(resource, startPosition);

  while (context.position.index < context.resource.data.length) {
    const node = nextNode(context);

    if (!node) {
      continue;
    }

    if (breakOnNodeFn && breakOnNodeFn(node)) {
      context.breakNode = node;

      break;
    }

    const lastNode = context.nodes.last();

    if (is<UnknownNode>(node, $Node.UNKNOWN)) {
      if (is<UnknownNode>(lastNode, $Node.UNKNOWN) && lastNode.hiddenNodes.length === 0) {
        lastNode.range.stop = node.range.stop;
        lastNode.text += node.text;

        continue;
      }

      context.issueManager.addError(node.range, ISSUE_MESSAGE.unknownTokens());
    }

    if (is<NlNode>(node, $Node.NL) && context.nodes.length > 0) {
      putStatementNode(context);

      context.hiddenNodes.push(node);
      context.nodes = [];

      continue;
    }

    if (isHiddenToken(node)) {
      const hiddenNodes = lastNode?.hiddenNodes ?? context.hiddenNodes;
      hiddenNodes.push(node);

      continue;
    }

    context.nodes.push(node);
  }

  if (context.nodes.length > 0) {
    putStatementNode(context);
  }

  const formatter = formatLastContextHiddenNodes(context);

  if (formatter) {
    context.formatterManager.addFormatter(formatter);
  }

  return {
    ...context,
    syntaxContext: context,
  };
}

function nextNode(context: SyntaxContext): Node {
  const node = parsers.findMap((parse) => parse(context));

  if (node) {
    context.position.index = node.range.stop.index;
    context.position.line = node.range.stop.line;
    context.position.column = node.range.stop.column;

    return node;
  }

  throw new Error('Unexpected Node');
}
