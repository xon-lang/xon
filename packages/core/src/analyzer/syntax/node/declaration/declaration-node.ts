// export enum DeclarationNodeKind {
//   // types
//   NominalType = 'NominalType',
//   StructuralType = 'StructuralType',
//   ParameterType = 'ParameterType',

import {Nothing} from '#common';
import {
  $SyntaxNode,
  AssignNode,
  corePackageType,
  DocumentationNode,
  GroupNode,
  IdNode,
  OperatorNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
  TypeNode,
} from '#core';

//   // values
//   AttributeValue = 'AttributeValue',
//   ParameterValue = 'ParameterValue',
// }

export type DeclarationNode = SyntaxNode & {
  documentation?: DocumentationNode | Nothing;
  modifier?: OperatorNode | Nothing;
  id: IdNode;
  generics?: GroupNode | Nothing;
  parameters?: GroupNode | Nothing;
  type?: TypeNode | Nothing;
  assign?: AssignNode | Nothing;
  attributes?: DeclarationNode[] | Nothing;
};

export const $DeclarationNode = corePackageType<DeclarationNode>('DeclarationNode', $SyntaxNode);

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
  const node = syntaxNode(analyzer, {
    $: $DeclarationNode,
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
