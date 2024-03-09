import {Nothing, nothing} from '../../../../lib/core';
import {Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';

export interface DeclarationNode {
  modifier: OperatorNode | Nothing;
  id: IdNode;
  generics: (DeclarationNode | Nothing)[] | Nothing;
  parameters: (DeclarationNode | Nothing)[] | Nothing;
  type: Node | Nothing;
  assign: Node | Nothing;
  attributes: DeclarationNode[];
}

export function declarationNode(params: Partial<DeclarationNode> & {id: IdNode}): DeclarationNode {
  const node: DeclarationNode = {
    attributes: [],
    modifier: params.modifier ?? nothing,
    id: params.id,
    generics: params.generics ?? nothing,
    parameters: params.parameters ?? nothing,
    type: params.type ?? nothing,
    assign: params.assign ?? nothing,
  };

  return node;
}
