import {formatChildNode} from '../../../formatter/formatter';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing} from '../../../lib/core';
import {rangeFromNodes} from '../../../util/resource/text/text-range';
import {SyntaxContext} from '../../syntax-context';
import {$Node, Node} from '../node';
import {StatementNode} from '../statement/statement-node';
import {SyntaxNode} from '../syntax/syntax-node';
import {CommaNode} from '../token/comma/comma-node';

export interface ItemNode extends SyntaxNode {
  $: $Node.ITEM;
  value: Node | Nothing;
  // todo fix it
  statements: StatementNode[];
  comma: CommaNode | Nothing;
}

export function itemNode(context: SyntaxContext, statements: StatementNode[], comma: CommaNode | Nothing): ItemNode {
  const children = comma ? [...statements, comma] : [...statements];

  const node: ItemNode = {
    $: $Node.ITEM,
    range: rangeFromNodes(children),
    children,
    value: statements.first()?.item,
    statements,
    comma,
  };

  validate(context, node);
  format(context, node);

  return node;
}

function validate(context: SyntaxContext, node: ItemNode): Nothing {
  if (!node.value) {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.unexpectedExpression());
  }
}

function format(context: SyntaxContext, node: ItemNode): Nothing {
  // todo move first statement hidden nodes to item and comma
  if (node.comma) {
    formatChildNode(context, node.comma, false);
  }
}
