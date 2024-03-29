import {Array2, Nothing} from '../../../../lib/core';
import {$Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {AssignNode} from '../assign/assign-node';
import {GenericsNode} from '../generics/generics-node';
import {ParametersNode} from '../parameters/parameters-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';
import {TypeNode} from '../type/type-node';

export interface DeclarationNode extends SyntaxNode {
  $: $Node.DECLARATION;
  modifier: OperatorNode | Nothing;
  id: IdNode | Nothing;
  generics: GenericsNode | Nothing;
  parameters: ParametersNode | Nothing;
  type: TypeNode | Nothing;
  assign: AssignNode | Nothing;
  attributes: Array2<DeclarationNode>;
}

export function declarationNode(
  modifier: OperatorNode | Nothing,
  id: IdNode | Nothing,
  generics: GenericsNode | Nothing,
  parameters: ParametersNode | Nothing,
  type: TypeNode | Nothing,
  assign: AssignNode | Nothing,
): DeclarationNode {
  const node = syntaxNode($Node.DECLARATION, {modifier, id, generics, parameters, type, assign, attributes: []});

  return node;
}
