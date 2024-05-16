import {Array2, Nothing} from '../../../../lib/types';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import '../../../util/extension';
import {rangeFromNodes} from '../../../util/resource/text/text-range';
import {SyntaxContext} from '../../syntax-context';
import {$Node} from '../node';
import {SyntaxNode} from '../syntax/syntax-node';
import {CloseNode} from '../token/close/close-node';
import {OpenNode} from '../token/open/open-node';
import {ItemNode} from './item-node';

export type $Group = $Node.GROUP | $Node.ARRAY | $Node.OBJECT;
export type Group = GroupNode | ArrayNode | ObjectNode;
export type ArrayNode = GroupNode;
export type ObjectNode = GroupNode;

export interface GroupNode extends SyntaxNode {
  $: $Node.GROUP | $Node.ARRAY | $Node.OBJECT;
  open: OpenNode;
  items: Array2<ItemNode>;
  close: CloseNode | Nothing;
}

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

  validate(context, node);

  return node;
}

function validate(context: SyntaxContext, node: GroupNode): Nothing {
  if (!node.close) {
    context.issueManager.addError(node.open.range, ISSUE_MESSAGE.expectCloseToken(node.open.text));
  }
}
