import {Nothing} from '../../../lib/core';
import {SyntaxContext} from '../../syntax-context';
import {$Node, Node} from '../node';
import {StatementNode} from '../statement/statement-node';
import {SyntaxNode, syntaxNode} from '../syntax/syntax-node';
import {OperatorNode} from '../token/operator/operator-node';

export interface ItemNode extends SyntaxNode {
  $: $Node.ITEM;
  value: Node | Nothing;
  statements: StatementNode[];
  operator: OperatorNode | Nothing;
}

export function itemNode(
  context: SyntaxContext,
  statements: StatementNode[],
  operator: OperatorNode | Nothing,
): ItemNode {
  const value = statements.first()?.item;
  const node = syntaxNode($Node.ITEM, {value, statements, operator});

  return node;
}
