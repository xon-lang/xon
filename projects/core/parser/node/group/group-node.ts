import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Array2, Nothing} from '../../../lib/core';
import '../../../util/extension';
import {SyntaxContext} from '../../syntax-context';
import {$Node} from '../node';
import {SyntaxNode, syntaxNode} from '../syntax/syntax-node';
import {CloseNode} from '../token/close/close-node';
import {OpenNode} from '../token/open/open-node';
import {OPEN_CLOSE_PAIR} from '../token/open/open-node-parse';

import {ItemNode} from './item-node';

export type Group = GroupNode | ArrayNode | ObjectNode;

export type ArrayNode = GroupNode;
export type ObjectNode = GroupNode;

export interface GroupNode extends SyntaxNode {
  $: $Node.GROUP | $Node.ARRAY | $Node.OBJECT;
  open: OpenNode;
  close: CloseNode | Nothing;
  items: Array2<ItemNode>;
}

export function groupNode(
  context: SyntaxContext,
  $: $Node.GROUP | $Node.ARRAY | $Node.OBJECT,
  open: OpenNode,
  items: Array2<ItemNode>,
  close: CloseNode | Nothing,
): GroupNode {
  const node = syntaxNode($, {open, items, close});
  validate(context, node);

  return node;
}
function validate(context: SyntaxContext, node: GroupNode): Nothing {
  if (!node.close) {
    context.issueManager.addError(
      node.open.range,
      ISSUE_MESSAGE.expectCloseToken(node.open.text, OPEN_CLOSE_PAIR[node.open.text].closeText),
    );
  }
}
