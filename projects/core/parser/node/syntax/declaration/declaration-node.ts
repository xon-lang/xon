import {Nothing, nothing} from '../../../../lib/core';
import {Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';

export enum $DeclarationNodeType {
  MODIFIER,
  ATTRIBUTE,
  PARAMETER,
  GENERIC,
}

// todo it is not a node
export interface DeclarationNode {
  $: $DeclarationNodeType;
  modifier: OperatorNode | Nothing;
  id: IdNode;
  generics: (DeclarationNode | Nothing)[] | Nothing;
  parameters: (DeclarationNode | Nothing)[] | Nothing;
  type: Node | Nothing;
  assign: Node | Nothing;
  attributes: DeclarationNode[];
}

export function declarationNode(
  type: $DeclarationNodeType,
  params: Partial<DeclarationNode> & {id: IdNode},
): DeclarationNode {
  const node: DeclarationNode = {
    $: type,
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
