import {Array2, Nothing} from '../../../../lib/types';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import '../../../util/extension';
import {rangeFromNodes} from '../../../util/resource/text/text-range';
import {CloseNode} from '../../lexical/node/close/close-node';
import {OpenNode} from '../../lexical/node/open/open-node';
import {SyntaxContext} from '../../syntax-context';
import {$Node, ExpressionNode} from '../node';
import {SyntaxNode} from '../node/syntax-node';
import {ItemNode} from './item-node';

export type $Group = $Node.GROUP | $Node.ARRAY | $Node.OBJECT;
export type Group = GroupNode | ArrayNode | ObjectNode;
export type ArrayNode = GroupNode;
export type ObjectNode = GroupNode;

export type GroupNode = SyntaxNode<$Node.GROUP | $Node.ARRAY | $Node.OBJECT> &
  ExpressionNode & {
    open: OpenNode;
    items: Array2<ItemNode>;
    close: CloseNode | Nothing;
  };

export function groupNode(
  context: SyntaxContext,
  $: $Group,
  open: OpenNode,
  items: Array2<ItemNode>,
  close: CloseNode | Nothing,
): GroupNode {
  const children = close ? [open, ...items, close] : [open, ...items];

  const node: GroupNode = {
    $,
    range: rangeFromNodes(children),
    children,
    open,
    items,
    close,
  };

  children.forEach((x) => (x.parent = node));

  validate(context, node);

  return node;
}

function validate(context: SyntaxContext, node: GroupNode): void {
  if (!node.close) {
    context.issueManager.addError(node.open.range, ISSUE_MESSAGE.expectCloseToken(node.open.text));
  }
}
