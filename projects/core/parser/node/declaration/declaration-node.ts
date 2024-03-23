import {Array2, Nothing} from '../../../lib/core';
import {Node} from '../node';
import {IdNode} from '../token/id/id-node';
import {OperatorNode} from '../token/operator/operator-node';

export interface DeclarationNode {
  modifier: OperatorNode | Nothing;
  id: IdNode;
  generics: Array2<DeclarationNode | Nothing> | Nothing;
  parameters: Array2<DeclarationNode | Nothing> | Nothing;
  type: Node | Nothing;
  value: Node | Nothing;
  attributes: Array2<DeclarationNode>;
}

export function declarationNode(params: Partial<DeclarationNode> & {id: IdNode}): DeclarationNode {
  const node: DeclarationNode = {
    attributes: [],
    modifier: params.modifier,
    id: params.id,
    generics: params.generics,
    parameters: params.parameters,
    type: params.type,
    value: params.value,
  };

  return node;
}
