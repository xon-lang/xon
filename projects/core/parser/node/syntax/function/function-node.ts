import {Array2, Nothing} from '../../../../lib/core';
import {$Node, Node} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {Group} from '../group/group-node';
import {StatementNode} from '../statement/statement-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface FunctionNode extends SyntaxNode {
  $: $Node.FUNCTION;
  generics: Group | Nothing;
  parameters: Group;

  typeOperator: OperatorNode | Nothing;
  type: Node | Nothing;

  body: Array2<StatementNode>;
}

export function functionNode(
  generics: Group | Nothing,
  parameters: Group,
  typeOperator: OperatorNode | Nothing,
  type: Node | Nothing,
  body: Array2<StatementNode>,
): FunctionNode {
  const node = syntaxNode($Node.FUNCTION, {
    generics,
    parameters,
    typeOperator,
    type,
    body,
  });

  return node;
}
