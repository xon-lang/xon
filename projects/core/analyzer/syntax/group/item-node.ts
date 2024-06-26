import {Integer, Nothing} from '../../../../lib/types';
import {formatChildNode} from '../../../formatter/formatter';
import {rangeFromNodes} from '../../../util/resource/text/text-range';
import {CommaNode} from '../../lexical/node/comma/comma-node';
import {$Node, Node} from '../../node';
import {SyntaxContext} from '../../syntax-context';
import {SyntaxNode} from '../node/syntax-node';
import {StatementNode} from '../statement/statement-node';

export type ItemNode = SyntaxNode<$Node.ITEM> & {
  index: Integer;
  value: Node | Nothing;
  comma: CommaNode | Nothing;
  statements: StatementNode[];
};

export function itemNode(
  context: SyntaxContext,
  index: Integer,
  comma: CommaNode | Nothing,
  statements: StatementNode[],
): ItemNode {
  const children = comma ? [comma, ...statements] : [...statements];

  const node: ItemNode = {
    $: $Node.ITEM,
    range: rangeFromNodes(children),
    children,
    index,
    value: statements.first()?.value,
    comma,
    statements,
  };

  children.forEach((x) => (x.parent = node));

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: ItemNode): void {
  if (node.comma) {
    formatChildNode(context, node.comma, false);
  }
}
