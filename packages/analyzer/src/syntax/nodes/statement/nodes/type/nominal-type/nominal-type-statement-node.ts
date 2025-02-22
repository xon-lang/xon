import {
  $AnalyzerType,
  $TypeStatementNode,
  AngleGroupNode,
  diagnoseNominalTypeStatementNode,
  IdNode,
  newSyntaxNode,
  Node,
  TypeKeywordNode,
  TypeStatementNode,
  TypeValueNode,
} from '#analyzer';
import {ArrayData, Integer, Nothing} from '#common';
import {Brand} from '#typing';

export type NominalTypeStatementNode = TypeStatementNode &
  Brand<'Analyzer.NominalTypeStatementNode'> & {
    id: IdNode;
    type?: TypeValueNode | Nothing;
  };

export const $NominalTypeStatementNode = () =>
  $AnalyzerType<NominalTypeStatementNode>('NominalTypeStatementNode', $TypeStatementNode());

export function newNominalTypeStatementNode(
  indent: Integer,
  keyword: TypeKeywordNode,
  id: IdNode,
  parameters: AngleGroupNode | Nothing,
  type?: TypeValueNode | Nothing,
  errorNodes?: ArrayData<Node> | Nothing,
): NominalTypeStatementNode {
  return newSyntaxNode({
    $: $NominalTypeStatementNode(),
    indent,
    keyword,
    id,
    parameters,
    type,
    errorNodes,

    diagnose: diagnoseNominalTypeStatementNode,
  });
}
