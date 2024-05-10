import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {Array2, Nothing} from '../../../../lib/core';
import '../../../../util/extension';
import {OPEN_CLOSE_PAIR} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {CloseNode} from '../../token/close/close-node';
import {OpenNode} from '../../token/open/open-node';
import {ArrayNode} from '../array/array-node';
import {ObjectNode} from '../object/object-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';
import {ItemNode} from './item-node';

export type Group = GroupNode | ArrayNode | ObjectNode;

export interface GroupNode extends SyntaxNode {
  $: $Node.GROUP;
  open: OpenNode;
  close: CloseNode | Nothing;
  items: Array2<ItemNode>;
}

export function groupNode(
  context: SyntaxContext,
  open: OpenNode,
  items: Array2<ItemNode>,
  close: CloseNode | Nothing,
): GroupNode {
  const node = syntaxNode($Node.GROUP, {open, items, close});

  validate(context, node);

  return node;
}

function validate(context: SyntaxContext, node: GroupNode): Nothing {
  if (!node.close) {
    context.issueManager.addError(
      node.open.range,
      ISSUE_MESSAGE.expectCloseToken(node.open.text, OPEN_CLOSE_PAIR[node.open.text]),
    );
  }
}
