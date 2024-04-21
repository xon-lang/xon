import {Array2, Integer, Nothing, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxParseFn} from '../../../syntax-parser';
import {$Node, Node, findNode, is} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {Group} from '../group/group-node';
import {infixNode} from '../infix/infix-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface DeclarationNode extends SyntaxNode {
  $: $Node.DECLARATION;
  modifier: OperatorNode | Nothing;
  id: IdNode;
  generics: Group | Nothing;
  parameters: Group | Nothing;

  typeOperator: OperatorNode | Nothing;
  type: Node | Nothing;

  assignOperator: OperatorNode | Nothing;
  assign: Node | Nothing;

  attributes: Array2<DeclarationNode>;
}

export function declarationNode(params: Omit<DeclarationNode, keyof SyntaxNode | '$' | 'attributes'>): DeclarationNode {
  const node = syntaxNode($Node.DECLARATION, {...params, attributes: []});

  return node;
}

export function idToDeclaration(id: IdNode): DeclarationNode {
  return partialToDeclaration({id});
}

export function partialToDeclaration(params: Partial<DeclarationNode> & {id: IdNode}) {
  return declarationNode({
    modifier: params.modifier,
    id: params.id,
    generics: params.generics,
    parameters: params.parameters,
    typeOperator: params.typeOperator,
    type: params.type,
    assignOperator: params.assignOperator,
    assign: params.assign,
  });
}

export function declarationSyntaxParse(operators: String[]): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer = 0) => {
    const found = findNode(
      context.nodes,
      startIndex,
      true,
      (x): x is OperatorNode => is<OperatorNode>(x, $Node.OPERATOR) && operators.includes(x.text),
    );

    if (!found) {
      return;
    }

    const left = context.nodes[found.index - 1];
    const right = context.nodes[found.index + 1];

    if (!left || !right || is<OperatorNode>(left, $Node.OPERATOR) || is<OperatorNode>(right, $Node.OPERATOR)) {
      return nothing;
    }

    const node = infixNode(context, left, found.node, right);

    return {node, spliceIndex: found.index - 1};
  };
}
