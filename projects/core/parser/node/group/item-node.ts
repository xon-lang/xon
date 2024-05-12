import {formatBetweenHiddenNodes} from '../../../formatter/formatter';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing} from '../../../lib/core';
import {SyntaxContext} from '../../syntax-context';
import {$Node, Node} from '../node';
import {StatementNode} from '../statement/statement-node';
import {SyntaxNode, syntaxNode} from '../syntax/syntax-node';
import {CommaNode} from '../token/comma/comma-node';

export interface ItemNode extends SyntaxNode {
  $: $Node.ITEM;
  value: Node | Nothing;
  statements: StatementNode[];
  comma: CommaNode | Nothing;
}

export function itemNode(context: SyntaxContext, statements: StatementNode[], comma: CommaNode | Nothing): ItemNode {
  const value = statements.first()?.item;
  const node = syntaxNode($Node.ITEM, {value, statements, comma});

if(statements)

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
  if (node.comma) {
    formatBetweenHiddenNodes(context, node.comma, false);
  }
}
