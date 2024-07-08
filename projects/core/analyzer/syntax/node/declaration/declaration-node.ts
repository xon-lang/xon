import {$, is} from '../../../../$';
import {Array2, Nothing, nothing} from '../../../../../lib/types';
import {IdNode} from '../../../lexical/node/id/id-node';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {DocumentationNode} from '../../documentation/documentation-node';
import {GroupNode} from '../../group/group-node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';

import {AssignNode} from '../assign/assign-node';
import {LambdaNode} from '../lambda/lambda-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';
import {TypeNode} from '../type/type-node';

export type DeclarationNode = SyntaxNode<$.DeclarationNode> & {
  documentation: DocumentationNode | Nothing;
  modifier: OperatorNode | Nothing;
  id: IdNode;
  generics: GroupNode | Nothing;
  parameters: GroupNode | Nothing;
  type: TypeNode | Nothing;
  assign: AssignNode | Nothing;
  attributes?: Array2<DeclarationNode> | Nothing;
};

export function declarationNode(
  analyzer: SyntaxAnalyzer,
  documentation: DocumentationNode | Nothing,
  modifier: OperatorNode | Nothing,
  id: IdNode,
  generics: GroupNode | Nothing,
  parameters: GroupNode | Nothing,
  type: TypeNode | Nothing,
  assign: AssignNode | Nothing,
): DeclarationNode {
  const node = syntaxNode($.DeclarationNode, {
    documentation,
    modifier,
    id,
    generics,
    parameters,
    type,
    assign,
  });

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: DeclarationNode): void {
  if (node.type) {
    analyzer.formatterManager.formatChildNode(node.type, false);
  }

  if (node.assign) {
    analyzer.formatterManager.formatChildNode(node.assign, true);
  }
}

export function partialToDeclaration(
  analyzer: SyntaxAnalyzer,
  params: Partial<DeclarationNode> & {id: IdNode},
): DeclarationNode {
  return declarationNode(
    analyzer,
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
    if (is(x.value, $.DeclarationNode)) {
      return x.value;
    }

    return nothing;
  });
}

export function getDeclarationParameters(
  node: DeclarationNode | LambdaNode,
): Array2<DeclarationNode | Nothing> {
  if (!node.parameters) {
    return [];
  }

  return node.parameters.items.map<DeclarationNode | Nothing>((x) => {
    if (is(x.value, $.DeclarationNode)) {
      return x.value;
    }

    return nothing;
  });
}
