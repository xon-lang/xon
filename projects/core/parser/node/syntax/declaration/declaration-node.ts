import {Array2, Nothing} from '../../../../lib/core';
import {$Node, Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {GenericsNode} from '../generics/generics-node';
import {ParametersNode} from '../parameters/parameters-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface DeclarationNode extends SyntaxNode {
  $: $Node.DECLARATION;
  modifier: OperatorNode | Nothing;
  id: IdNode;
  generics: GenericsNode | Nothing;
  parameters: ParametersNode | Nothing;

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
