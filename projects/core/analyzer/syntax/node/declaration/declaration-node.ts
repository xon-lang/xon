import {$} from '../../../../$';
import {Nothing} from '../../../../../lib/types';
import {IdNode} from '../../../lexical/node/id/id-node';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {DocumentationNode} from '../../documentation/documentation-node';
import {GroupNode} from '../../group/group-node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';

import {AssignNode} from '../assign/assign-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';
import {TypeNode} from '../type/type-node';

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
    $: $.DeclarationNode,
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
