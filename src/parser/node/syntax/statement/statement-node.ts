import {Integer, Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {FormattingType, formatHiddenNodes} from '../../../util/formatter';
import {$Node, Node} from '../../node';
import {SyntaxNode, getRangeAndChildren} from '../syntax-node';

export interface StatementNode extends SyntaxNode {
  $: $Node.STATEMENT;
  indentLevel: Integer;
  parent: StatementNode | Nothing;
  children: Node[];
  item: Node;
  body: StatementNode[];
}

export function statementNode(
  context: SyntaxContext,
  children: Node[],
  parent: StatementNode | Nothing,
): StatementNode {
  const node: StatementNode = {
    $: $Node.STATEMENT,
    indentLevel: parent ? parent.indentLevel + 1 : 0,
    ...getRangeAndChildren(...children),
    parent,
    item: children[0],
    body: [],
  };

  if (parent) {
    parent.body.push(node);
  } else {
    context.statements.push(node);
  }

  checkFormatting(context, node);

  return node;
}

function checkFormatting(context: SyntaxContext, node: StatementNode): void {
  const betweenChildren = node.children.slice(0, -1);
  betweenChildren.forEach((x) => formatHiddenNodes(context, x, true, FormattingType.BETWEEN));

  formatHiddenNodes(context, node.children.last(), false, FormattingType.AFTER);
}
