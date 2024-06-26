import {Array2, Nothing, nothing} from '../../../../../lib/types';
import {formatChildNode} from '../../../../formatter/formatter';
import {IdNode} from '../../../lexical/node/id/id-node';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {$Node, is} from '../../../node';
import {SyntaxContext} from '../../../syntax-context';
import {DocumentationNode} from '../../documentation/documentation-node';
import {Group} from '../../group/group-node';
import {AssignNode} from '../assign/assign-node';
import {LambdaNode} from '../lambda/lambda-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';
import {TypeNode} from '../type/type-node';

export type DeclarationNode = SyntaxNode<$Node.DECLARATION> & {
  documentation: DocumentationNode | Nothing;
  modifier: OperatorNode | Nothing;
  id: IdNode;
  generics: Group | Nothing;
  parameters: Group | Nothing;
  type: TypeNode | Nothing;
  assign: AssignNode | Nothing;
  attributes?: Array2<DeclarationNode> | Nothing;
};

export function declarationNode(
  context: SyntaxContext,
  documentation: DocumentationNode | Nothing,
  modifier: OperatorNode | Nothing,
  id: IdNode,
  generics: Group | Nothing,
  parameters: Group | Nothing,
  type: TypeNode | Nothing,
  assign: AssignNode | Nothing,
): DeclarationNode {
  const node = syntaxNode($Node.DECLARATION, {
    documentation,
    modifier,
    id,
    generics,
    parameters,
    type,
    assign,
  });

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: DeclarationNode): void {
  if (node.type) {
    formatChildNode(context, node.type, false);
  }

  if (node.assign) {
    formatChildNode(context, node.assign, true);
  }
}

export function partialToDeclaration(
  context: SyntaxContext,
  params: Partial<DeclarationNode> & {id: IdNode},
): DeclarationNode {
  return declarationNode(
    context,
    params.documentation,
    params.modifier,
    params.id,
    params.generics,
    params.parameters,
    params.type,
    params.assign,
  );
}

export function getDeclarationAttributes(node: DeclarationNode): Array2<DeclarationNode> {
  if (node.attributes) {
    return node.attributes;
  }

  return [];
}

export function getDeclarationGenerics(
  node: DeclarationNode | LambdaNode,
): Array2<DeclarationNode | Nothing> {
  if (!node.generics) {
    return [];
  }

  return node.generics.items.map<DeclarationNode | Nothing>((x) => {
    if (is<DeclarationNode>(x.value, $Node.DECLARATION)) {
      return x.value;
    }

    return nothing;
  });
}

// todo same as 'getDeclarationGenerics' above
export function getDeclarationParameters(
  node: DeclarationNode | LambdaNode,
): Array2<DeclarationNode | Nothing> {
  if (!node.parameters) {
    return [];
  }

  return node.parameters.items.map<DeclarationNode | Nothing>((x) => {
    if (is<DeclarationNode>(x.value, $Node.DECLARATION)) {
      return x.value;
    }

    return nothing;
  });
}
