import {Array2, Nothing} from '../../../../lib/core';
import {$Node, Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {Group} from '../group/group-node';
import {PrefixNode} from '../prefix/prefix-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface DeclarationNode extends SyntaxNode {
  $: $Node.DECLARATION;
  modifier: OperatorNode | Nothing;
  id: IdNode;
  generics: Group | Nothing;
  parameters: Group | Nothing;
  type: PrefixNode | Nothing;
  assign: PrefixNode | Nothing;
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
    type: params.type,
    assign: params.assign,
  });
}
